from fastapi import FastAPI, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from database import get_db, engine, Base
from models import URL, UserDecision, AIAnalysis, ExperimentSession
from pydantic import BaseModel
from typing import Optional
import asyncio

app = FastAPI(title="URL Analysis API", version="1.0.0")

# Pydantic models for API requests/responses
class DecisionCreate(BaseModel):
    url: str
    classification: str
    decision: str
    session_id: str
    user_id: Optional[str] = None
    timestamp: str
    button_type: Optional[str] = None
    actor: Optional[str] = None

class DecisionResponse(BaseModel):
    id: int
    url_id: int
    decision: str
    user_id: Optional[str]
    created_at: str

# Create database tables on startup
@app.on_event("startup")
async def startup_event():
    async with engine.begin() as conn:
        # Create all tables
        await conn.run_sync(Base.metadata.create_all)

@app.get("/")
async def root():
    return {"message": "URL Analysis API", "version": "1.0.0"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}


# Endpoint to log user decisions
@app.post("/decisions", response_model=DecisionResponse)
async def log_decision(decision_data: DecisionCreate, db: AsyncSession = Depends(get_db)):
    # First, find or create the URL
    result = await db.execute(select(URL).where(URL.url == decision_data.url))
    url = result.scalar_one_or_none()
    
    if not url:
        # Create new URL if it doesn't exist
        url = URL(url=decision_data.url, classification=decision_data.classification)
        db.add(url)
        await db.commit()
        await db.refresh(url)
    
    # Create the user decision record
    new_decision = UserDecision(
        url_id=url.id,
        decision=decision_data.decision,
        user_id=decision_data.user_id
    )
    db.add(new_decision)
    await db.commit()
    await db.refresh(new_decision)
    
    return DecisionResponse(
        id=new_decision.id,
        url_id=new_decision.url_id,
        decision=new_decision.decision,
        user_id=new_decision.user_id,
        created_at=new_decision.created_at.isoformat()
    )

