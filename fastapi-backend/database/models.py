from sqlalchemy import Column, Integer, String, DateTime, Text, ForeignKey, Boolean, LargeBinary
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from .database import Base

class FormSubmission(Base):
    __tablename__ = "form_submissions"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False, index=True)
    phone = Column(String(20))
    message = Column(Text)
    form_type = Column(String(50), nullable=False)  # e.g., 'contact', 'hackathon', 'internship'
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relationship with files
    files = relationship("UploadedFile", back_populates="submission", cascade="all, delete-orphan")

class UploadedFile(Base):
    __tablename__ = "uploaded_files"

    id = Column(Integer, primary_key=True, index=True)
    filename = Column(String(255), nullable=False)
    content_type = Column(String(100))
    file_path = Column(String(500))  # Path to the stored file
    submission_id = Column(Integer, ForeignKey("form_submissions.id"))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relationship with submission
    submission = relationship("FormSubmission", back_populates="files")
