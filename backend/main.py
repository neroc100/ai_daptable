from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import SQLModel, Field, Session, select, delete
from database import engine, Trial, SQLModel
from typing import List
import datetime

app = FastAPI(title="URL Analysis API")

# Add CORS middleware to allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173",         # Frontend dev server
                   "http://aidaptable.ethz.ch",     # Frontend production
                    "https://aidaptable.ethz.ch" ], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create database tables on startup
@app.on_event("startup")
async def create_tables():
    """Create database tables on application startup"""
    SQLModel.metadata.create_all(engine)


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
            reaction_time_ms=trial_data.reaction_time_ms,
            page_load_time=trial_data.page_load_time,
            button_click_time=trial_data.button_click_time,
            human_action=trial_data.human_action,
            human_action_result=trial_data.human_action_result,
            accuracy=trial_data.accuracy,
            view_information_clicked=trial_data.view_information_clicked,
            conditions_seen=trial_data.conditions_seen,
            condition_times=trial_data.condition_times,
            adaptable=trial_data.adaptable,
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
            "reaction_time_ms": new_trial.reaction_time_ms,
            "page_load_time": new_trial.page_load_time,
            "button_click_time": new_trial.button_click_time,
            "human_action": new_trial.human_action,
            "human_action_result": new_trial.human_action_result,
            "accuracy": new_trial.accuracy,
            "view_information_clicked": new_trial.view_information_clicked,
            "conditions_seen": new_trial.conditions_seen,
            "condition_times": new_trial.condition_times,
            "adaptable": new_trial.adaptable,
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

@app.post("/database/reset")
async def reset_database():
    """Reset the entire database by dropping and recreating all tables"""
    # Drop all tables
    SQLModel.metadata.drop_all(engine)
    
    # Recreate all tables
    SQLModel.metadata.create_all(engine)
    
    return {
        "message": "Database reset successfully - all tables dropped and recreated",
        "status": "reset_complete"
    }





