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
    created_at: datetime.datetime = Field(default_factory=datetime.datetime.now)


# Example trials with different URLs and ratings
example_trial = Trial(participant_id="123", condition=1, mental_effort_rating=75, url="https://www.google.com")
example_trial_2 = Trial(participant_id="123", condition=2, mental_effort_rating=85, url="https://www.github.com")
example_trial_3 = Trial(participant_id="123", condition=3, mental_effort_rating=95, url="https://www.stackoverflow.com")
example_trial_4 = Trial(participant_id="123", condition=4, mental_effort_rating=65, url="https://www.reddit.com")
example_trial_5 = Trial(participant_id="123", condition=5, mental_effort_rating=110, url="https://www.youtube.com")
example_trial_6 = Trial(participant_id="123", condition=6, mental_effort_rating=90, url="https://www.wikipedia.org")

SQLModel.metadata.create_all(engine)

with Session(engine) as session:
    session.add(example_trial)
    session.add(example_trial_2)
    session.add(example_trial_3)
    session.add(example_trial_4)
    session.add(example_trial_5)
    session.add(example_trial_6)
    session.commit()


# %%
