from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import SQLModel, Field, Session, select, delete
from database import engine, Trial
from typing import List
import datetime

app = FastAPI(title="URL Analysis API")

# Add CORS middleware to allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Use SQLModel Trial class directly from database.py

class Potato(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    name: str
    email: str


@app.get("/")
async def root():
    return {"message": "Hello World"}



@app.get("/trials")
async def get_trials():
    """Get all trials from the database"""
    with Session(engine) as session:
        trials = session.exec(select(Trial)).all()
        return trials

@app.post("/trials")
async def create_trial(trial_data: Trial):
    """Create a new trial from frontend context data using SQLModel Trial"""
    with Session(engine) as session:
        # Create new trial from the SQLModel Trial class
        new_trial = Trial(
            participant_id=trial_data.participant_id,
            condition=trial_data.condition,
            mental_effort_rating=trial_data.mental_effort_rating,
            url=trial_data.url,
            true_classification=trial_data.true_classification,
            created_at=datetime.datetime.now()
        )
        
        session.add(new_trial)
        session.commit()
        session.refresh(new_trial)
        
        return {
            "message": "Trial created successfully",
            "trial_id": new_trial.id,
            "participant_id": new_trial.participant_id,
            "condition": new_trial.condition,
            "mental_effort_rating": new_trial.mental_effort_rating,
            "url": new_trial.url,
            "created_at": new_trial.created_at.isoformat()
        }


@app.delete("/trials/clear")
async def clear_all_trials():
    """Delete all trials from the database"""
    with Session(engine) as session:
        # Delete all trials from the Trial table
        statement = delete(Trial)
        result = session.exec(statement)
        session.commit()
        
        # Count how many rows were affected
        deleted_count = result.rowcount if hasattr(result, 'rowcount') else 0
    
    return {
        "message": f"Successfully cleared all trials from the database",
        "deleted_count": deleted_count
    }

@app.delete("/database/reset")
async def reset_database():
    """Reset the entire database by dropping and recreating all tables"""
    from database import SQLModel
    
    # Drop all tables
    SQLModel.metadata.drop_all(engine)
    
    # Recreate all tables
    SQLModel.metadata.create_all(engine)
    
    return {
        "message": "Database reset successfully - all tables dropped and recreated",
        "status": "reset_complete"
    }


