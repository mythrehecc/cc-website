import os
import shutil
import uuid
from datetime import datetime
from fastapi import UploadFile, HTTPException
from sqlalchemy.orm import Session
from ..database import models
from ..schemas import form_schemas

# Ensure upload directory exists
UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

async def save_upload_file(upload_file: UploadFile, submission_id: int) -> str:
    """Save an uploaded file and return the file path"""
    try:
        # Create a unique filename to prevent overwrites
        file_ext = os.path.splitext(upload_file.filename)[1]
        filename = f"{uuid.uuid4()}{file_ext}"
        file_path = os.path.join(UPLOAD_DIR, filename)
        
        # Save the file
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(upload_file.file, buffer)
            
        return file_path
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error saving file: {str(e)}")

def create_form_submission(
    db: Session, 
    form_data: form_schemas.FormSubmissionCreate, 
    files: list[UploadFile] = None
) -> models.FormSubmission:
    """Create a new form submission with optional file uploads"""
    try:
        # Create the form submission
        db_submission = models.FormSubmission(
            name=form_data.name,
            email=form_data.email,
            phone=form_data.phone,
            message=form_data.message,
            form_type=form_data.form_type.value
        )
        
        db.add(db_submission)
        db.commit()
        db.refresh(db_submission)
        
        # Handle file uploads if any
        if files:
            for file in files:
                file_path = await save_upload_file(file, db_submission.id)
                db_file = models.UploadedFile(
                    filename=file.filename,
                    content_type=file.content_type,
                    file_path=file_path,
                    submission_id=db_submission.id
                )
                db.add(db_file)
            
            db.commit()
            db.refresh(db_submission)
        
        return db_submission
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=400, detail=str(e))

def get_form_submissions(
    db: Session, 
    skip: int = 0, 
    limit: int = 100,
    form_type: str = None
):
    """Retrieve form submissions with optional filtering"""
    query = db.query(models.FormSubmission)
    
    if form_type:
        query = query.filter(models.FormSubmission.form_type == form_type)
    
    return query.offset(skip).limit(limit).all()

def get_form_submission(db: Session, submission_id: int):
    """Retrieve a single form submission by ID"""
    return db.query(models.FormSubmission).filter(models.FormSubmission.id == submission_id).first()
