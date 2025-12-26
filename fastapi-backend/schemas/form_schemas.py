from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List
from datetime import datetime
from enum import Enum

class FormType(str, Enum):
    CONTACT = "contact"
    HACKATHON = "hackathon"
    INTERNSHIP = "internship"
    OTHER = "other"

class FormSubmissionBase(BaseModel):
    name: str = Field(..., max_length=100)
    email: EmailStr
    phone: Optional[str] = Field(None, max_length=20)
    message: Optional[str] = None
    form_type: FormType

class FormSubmissionCreate(FormSubmissionBase):
    pass

class FormSubmissionResponse(FormSubmissionBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

class FileBase(BaseModel):
    filename: str
    content_type: Optional[str] = None

class FileCreate(FileBase):
    pass

class FileResponse(FileBase):
    id: int
    submission_id: int
    created_at: datetime
    file_path: str

    class Config:
        from_attributes = True

class FormSubmissionWithFiles(FormSubmissionResponse):
    files: List[FileResponse] = []

    class Config:
        from_attributes = True
