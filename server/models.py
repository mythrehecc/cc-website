from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional
from sqlalchemy import Column, Integer, String, DateTime, Boolean, Text
from database import Base

# SQLAlchemy Models (for database)
class NewsletterSubscription(Base):
    __tablename__ = "newsletters"
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    subscribed_at = Column(DateTime, default=datetime.utcnow)
    is_active = Column(Boolean, default=True)

class ContactForm(Base):
    __tablename__ = "contacts"
    
    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    company = Column(String, nullable=True)
    phone = Column(String, nullable=True)
    project_type = Column(String, nullable=False)
    budget_range = Column(String, nullable=True)
    timeline = Column(String, nullable=True)
    description = Column(Text, nullable=False)
    submitted_at = Column(DateTime, default=datetime.utcnow)
    status = Column(String, default="new")  # new, contacted, in_progress, completed

class CareerApplication(Base):
    __tablename__ = "careers"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    resume_filename = Column(String, nullable=True)
    resume_path = Column(String, nullable=True)
    applied_at = Column(DateTime, default=datetime.utcnow)
    status = Column(String, default="new")  # new, reviewing, contacted, rejected

class InternshipApplication(Base):
    __tablename__ = "internships"
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, nullable=False)
    strengths = Column(Text, nullable=True)
    applied_at = Column(DateTime, default=datetime.utcnow)
    status = Column(String, default="new")  # new, reviewing, contacted, rejected

# Pydantic Models (for API validation)
class DemoResponse(BaseModel):
    message: str

class NewsletterCreate(BaseModel):
    email: EmailStr

class ContactFormCreate(BaseModel):
    full_name: str
    email: EmailStr
    company: Optional[str] = None
    phone: Optional[str] = None
    project_type: str
    budget_range: Optional[str] = None
    timeline: Optional[str] = None
    description: str

class NewsletterResponse(BaseModel):
    id: int
    email: str
    subscribed_at: datetime
    is_active: bool

    class Config:
        from_attributes = True

class ContactFormResponse(BaseModel):
    id: int
    full_name: str
    email: str
    company: Optional[str] = None
    phone: Optional[str] = None
    project_type: str
    budget_range: Optional[str] = None
    timeline: Optional[str] = None
    description: str
    submitted_at: datetime
    status: str

    class Config:
        from_attributes = True

class CareerApplicationCreate(BaseModel):
    name: str
    email: EmailStr

class InternshipApplicationCreate(BaseModel):
    email: EmailStr
    strengths: Optional[str] = None

class CareerApplicationResponse(BaseModel):
    id: int
    name: str
    email: str
    resume_filename: Optional[str] = None
    resume_path: Optional[str] = None
    applied_at: datetime
    status: str

    class Config:
        from_attributes = True

class InternshipApplicationResponse(BaseModel):
    id: int
    email: str
    strengths: Optional[str] = None
    applied_at: datetime
    status: str

    class Config:
        from_attributes = True
