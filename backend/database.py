import datetime
import os
from dotenv import load_dotenv
from sqlmodel import create_engine, SQLModel, Field, Session

load_dotenv()


def get_database_url():
    # Use SQLite database file in the backend directory
    return "sqlite:///./automation.db"

engine = create_engine(get_database_url(), echo=False)

class Trial(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    participant_id: str
    condition: int
    mental_effort_rating: int
    url: str
    true_classification: str
    reaction_time_ms: int = Field(default=None, nullable=True)
    human_action: str = Field(default=None, nullable=True)
    created_at: datetime.datetime = Field(default_factory=datetime.datetime.now)




# %%
