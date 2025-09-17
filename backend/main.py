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
    allow_origins=["http://localhost:5173"],  # Vite dev server
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
            human_action=trial_data.human_action,
            human_action_result=trial_data.human_action_result,
            accuracy=trial_data.accuracy,
            view_information_clicked=trial_data.view_information_clicked,
            conditions_seen=trial_data.conditions_seen,
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
            "human_action": new_trial.human_action,
            "human_action_result": new_trial.human_action_result,
            "accuracy": new_trial.accuracy,
            "view_information_clicked": new_trial.view_information_clicked,
            "conditions_seen": new_trial.conditions_seen,
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

@app.get("/trials/export/csv")
async def export_trials_csv():
    """Export all trials as CSV data"""
    import csv
    import io
    
    with Session(engine) as session:
        trials = session.exec(select(Trial)).all()
        
        output = io.StringIO()
        writer = csv.writer(output)
        
        writer.writerow([
            'id', 'participant_id', 'condition', 'mental_effort_rating', 
            'url', 'true_classification', 'reaction_time_ms', 'human_action', 
            'human_action_result', 'accuracy', 'view_information_clicked', 'conditions_seen', 'adaptable', 'created_at'
        ])
        
        for trial in trials:
            writer.writerow([
                trial.id, trial.participant_id, trial.condition, trial.mental_effort_rating,
                trial.url, trial.true_classification, trial.reaction_time_ms, trial.human_action,
                trial.human_action_result, trial.accuracy, trial.view_information_clicked, 
                trial.conditions_seen, trial.adaptable, trial.created_at.isoformat() if trial.created_at else None
            ])
    
    return {
        "csv_data": output.getvalue(),
        "total_trials": len(trials)
    }

@app.get("/trials/export/json")
async def export_trials_json():
    """Export all trials as JSON data"""
    with Session(engine) as session:
        trials = session.exec(select(Trial)).all()
        
        trials_data = []
        for trial in trials:
            trials_data.append({
                'id': trial.id,
                'participant_id': trial.participant_id,
                'condition': trial.condition,
                'mental_effort_rating': trial.mental_effort_rating,
                'url': trial.url,
                'true_classification': trial.true_classification,
                'reaction_time_ms': trial.reaction_time_ms,
                'human_action': trial.human_action,
                'human_action_result': trial.human_action_result,
                'accuracy': trial.accuracy,
                'view_information_clicked': trial.view_information_clicked,
                'conditions_seen': trial.conditions_seen,
                'adaptable': trial.adaptable,
                'created_at': trial.created_at.isoformat() if trial.created_at else None
            })
    
    return {
        "trials": trials_data,
        "total_trials": len(trials_data)
    }




