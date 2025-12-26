from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv
from models import DemoResponse
from database import create_tables
from routes import router

load_dotenv()

app = FastAPI(title="CC Services API")

# Create database tables on startup
@app.on_event("startup")
async def startup_event():
    create_tables()

# Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routes
app.include_router(router)

@app.get("/api/ping")
async def ping():
    ping_message = os.getenv("PING_MESSAGE", "ping")
    return {"message": ping_message}

@app.get("/api/demo", response_model=DemoResponse)
async def demo():
    return DemoResponse(message="Hello from FastAPI server with SQL database")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
