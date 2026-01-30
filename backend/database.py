import datetime
import os
from dotenv import load_dotenv
from sqlmodel import create_engine, SQLModel, Field, Session
from sqlalchemy import BigInteger

load_dotenv()


# def get_database_url():
#     # Use SQLite database file in the backend directory
#     return "sqlite:///./automation.db"

def get_database_url():  
      return f"postgresql://{os.environ['DB_USER']}:{os.environ['DB_PASSWORD']}@{os.environ['DB_HOST']}:{os.environ['DB_PORT']}/{os.environ['DB_NAME']}"

engine = create_engine(get_database_url(), echo=False)

class Trial(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)  # Unique identifier for each trial
    participant_id: str  # Unique identifier for the participant (e.g., "1143J")
    condition: int  # Experimental condition number (1-6) determining UI behavior (last condition for adaptable automation)
    mental_effort_rating: int  # Self-reported mental effort rating (0-150 scale)
    url: str  # The actual URL that was presented to the participant
    true_classification: str  # Ground truth classification ("Malicious" or "Non-Malicious")
    reaction_time_ms: int = Field(default=None, nullable=True, sa_type=BigInteger)  # Time taken to make decision (button_click_time - page_load_time)
    page_load_time: int = Field(default=None, nullable=True, sa_type=BigInteger)  # Timestamp when URL page was loaded (milliseconds unix timestamp)
    button_click_time: int = Field(default=None, nullable=True, sa_type=BigInteger)  # Timestamp when decision button was clicked (milliseconds unix timestamp)
    human_action: str = Field(default=None, nullable=True)  # Action taken by participant ("allow", "block", "confirm", "override", "none")
    human_action_result: str = Field(default=None, nullable=True)  # Result of human action ("URL allowed" or "URL blocked")
    accuracy: int = Field(default=None, nullable=True)  # Whether decision was correct (1) or incorrect (0)
    view_information_clicked: int = Field(default=None, nullable=True)  # Whether "View Information" button was clicked (1=clicked, 0=available but not clicked, null=not available)
    conditions_seen: str = Field(default=None, nullable=True)  # JSON string of conditions seen for this URL (e.g., "[3]")
    condition_times: str = Field(default=None, nullable=True)  # JSON string of time spent on each condition in ms (e.g., "[2141]")
    adaptable: bool = Field(default=None, nullable=True)  # Whether adaptable automation was enabled for this trial
    created_at: datetime.datetime = Field(default_factory=datetime.datetime.now)  # Timestamp when trial record was created
