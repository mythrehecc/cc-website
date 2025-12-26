from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, status
from sqlalchemy.orm import Session
from typing import List, Optional
import os

from ..database.database import get_db
from ..database import models
from ..schemas import form_schemas
from ..services import form_service

router = APIRouter(
    prefix="/api/forms",
    tags=["forms"],
    responses={404: {"description": "Not found"}},
)

@router.post("/submit", response_model=form_schemas.FormSubmissionResponse)
async def submit_form(
    form_data: form_schemas.FormSubmissionCreate = Depends(),
    files: List[UploadFile] = File(None),
    db: Session = Depends(get_db)
):
    """
    Submit a new form with optional file attachments
    """
    try:
        submission = await form_service.create_form_submission(db, form_data, files)
        return submission
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e)
        )

@router.get("/", response_model=List[form_schemas.FormSubmissionWithFiles])
def list_submissions(
    form_type: Optional[str] = None,
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    """
    List all form submissions with optional filtering by form type
    """
    submissions = form_service.get_form_submissions(db, skip=skip, limit=limit, form_type=form_type)
    return submissions

@router.get("/{submission_id}", response_model=form_schemas.FormSubmissionWithFiles)
def get_submission(
    submission_id: int,
    db: Session = Depends(get_db)
):
    """
    Get a specific form submission by ID
    """
    submission = form_service.get_form_submission(db, submission_id=submission_id)
    if submission is None:
        raise HTTPException(status_code=404, detail="Submission not found")
    return submission

@router.get("/files/{file_id}", response_model=bytes)
async def download_file(
    file_id: int,
    db: Session = Depends(get_db)
):
    """
    Download a file by its ID
    """
    file_record = db.query(models.UploadedFile).filter(models.UploadedFile.id == file_id).first()
    if not file_record or not os.path.exists(file_record.file_path):
        raise HTTPException(status_code=404, detail="File not found")
    
    try:
        with open(file_record.file_path, "rb") as f:
            return f.read()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error reading file: {str(e)}")
