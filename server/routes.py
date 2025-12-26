from fastapi import APIRouter, HTTPException, Depends, UploadFile, File, Form
from sqlalchemy.orm import Session
from datetime import datetime
import os
import uuid
from models import NewsletterCreate, ContactFormCreate, NewsletterSubscription, ContactForm, NewsletterResponse, ContactFormResponse, CareerApplicationCreate, CareerApplication, CareerApplicationResponse, InternshipApplicationCreate, InternshipApplication, InternshipApplicationResponse
from database import get_db

router = APIRouter()

# Create uploads directory if it doesn't exist
UPLOAD_DIR = "uploads"
if not os.path.exists(UPLOAD_DIR):
    os.makedirs(UPLOAD_DIR)

@router.post("/api/newsletter/subscribe", response_model=dict)
async def subscribe_newsletter(subscription: NewsletterCreate, db: Session = Depends(get_db)):
    """Subscribe to newsletter"""
    try:
        # Check if email already exists
        existing = db.query(NewsletterSubscription).filter(NewsletterSubscription.email == subscription.email).first()
        if existing:
            raise HTTPException(status_code=400, detail="Email already subscribed")
        
        # Create new subscription
        newsletter_sub = NewsletterSubscription(
            email=subscription.email,
            subscribed_at=datetime.utcnow()
        )
        
        db.add(newsletter_sub)
        db.commit()
        db.refresh(newsletter_sub)
        
        return {
            "message": "Successfully subscribed to newsletter",
            "id": newsletter_sub.id
        }
        
    except HTTPException:
        raise
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Failed to subscribe: {str(e)}")

@router.post("/api/contact/submit", response_model=dict)
async def submit_contact_form(contact: ContactFormCreate, db: Session = Depends(get_db)):
    """Submit contact form"""
    try:
        # Create new contact submission
        contact_submission = ContactForm(
            full_name=contact.full_name,
            email=contact.email,
            company=contact.company,
            phone=contact.phone,
            project_type=contact.project_type,
            budget_range=contact.budget_range,
            timeline=contact.timeline,
            description=contact.description,
            submitted_at=datetime.utcnow()
        )
        
        db.add(contact_submission)
        db.commit()
        db.refresh(contact_submission)
        
        return {
            "message": "Contact form submitted successfully",
            "id": contact_submission.id
        }
        
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Failed to submit form: {str(e)}")

@router.get("/api/newsletter/subscribers")
async def get_newsletter_subscribers(db: Session = Depends(get_db)):
    """Get all newsletter subscribers (admin endpoint)"""
    try:
        subscribers = db.query(NewsletterSubscription).filter(NewsletterSubscription.is_active == True).all()
        return {"subscribers": subscribers}
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to get subscribers: {str(e)}")

@router.get("/api/contact/submissions")
async def get_contact_submissions(db: Session = Depends(get_db)):
    """Get all contact form submissions (admin endpoint)"""
    try:
        submissions = db.query(ContactForm).order_by(ContactForm.submitted_at.desc()).all()
        return {"submissions": submissions}
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to get submissions: {str(e)}")

@router.post("/api/career/apply", response_model=dict)
async def submit_career_application(
    name: str = Form(...),
    email: str = Form(...),
    resume: UploadFile = File(None),
    db: Session = Depends(get_db)
):
    """Submit career application with optional resume"""
    try:
        # Handle file upload
        resume_filename = None
        resume_path = None
        
        if resume:
            # Generate unique filename
            file_extension = os.path.splitext(resume.filename)[1]
            unique_filename = f"{uuid.uuid4()}{file_extension}"
            resume_path = os.path.join(UPLOAD_DIR, unique_filename)
            
            # Save file
            with open(resume_path, "wb") as buffer:
                content = await resume.read()
                buffer.write(content)
            
            resume_filename = resume.filename

        # Create career application
        career_app = CareerApplication(
            name=name,
            email=email,
            resume_filename=resume_filename,
            resume_path=resume_path,
            applied_at=datetime.utcnow()
        )

        db.add(career_app)
        db.commit()
        db.refresh(career_app)

        return {
            "message": "Career application submitted successfully",
            "id": career_app.id
        }

    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Failed to submit application: {str(e)}")

@router.get("/api/career/applications")
async def get_career_applications(db: Session = Depends(get_db)):
    """Get all career applications (admin endpoint)"""
    try:
        applications = db.query(CareerApplication).order_by(CareerApplication.applied_at.desc()).all()
        return {"applications": applications}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to get applications: {str(e)}")

@router.post("/api/internship/apply", response_model=dict)
async def submit_internship_application(application: InternshipApplicationCreate, db: Session = Depends(get_db)):
    """Submit internship application"""
    try:
        # Create new internship application
        internship_app = InternshipApplication(
            email=application.email,
            strengths=application.strengths,
            applied_at=datetime.utcnow()
        )
        
        db.add(internship_app)
        db.commit()
        db.refresh(internship_app)
        
        return {
            "message": "Internship application submitted successfully",
            "id": internship_app.id
        }
        
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Failed to submit application: {str(e)}")

@router.get("/api/internship/applications")
async def get_internship_applications(db: Session = Depends(get_db)):
    """Get all internship applications (admin endpoint)"""
    try:
        applications = db.query(InternshipApplication).order_by(InternshipApplication.applied_at.desc()).all()
        return {"applications": applications}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to get applications: {str(e)}")
