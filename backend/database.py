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
    page_load_time: int = Field(default=None, nullable=True)  # Timestamp when URL page was loaded
    button_click_time: int = Field(default=None, nullable=True)  # Timestamp when decision button was clicked
    human_action: str = Field(default=None, nullable=True)
    human_action_result: str = Field(default=None, nullable=True)
    accuracy: int = Field(default=None, nullable=True)
    view_information_clicked: int = Field(default=None, nullable=True)
    conditions_seen: str = Field(default=None, nullable=True)  # JSON string of conditions seen for this URL
    condition_times: str = Field(default=None, nullable=True)  # JSON string of time spent on each condition in ms
    adaptable: bool = Field(default=None, nullable=True)  # Whether adaptable automation was enabled
    freeze_probe_answer: str = Field(default=None, nullable=True)  # Answer to freeze probe question
    created_at: datetime.datetime = Field(default_factory=datetime.datetime.now)




# %%
