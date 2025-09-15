import os
from dotenv import load_dotenv
from sqlmodel import create_engine

load_dotenv()

def get_database_url():
    return f"postgresql://{os.environ['DB_USER']}:{os.environ['DB_PASSWORD']}@{os.environ['DB_HOST']}:{os.environ['DB_PORT']}/{os.environ['DB_NAME']}"

engine = create_engine(get_database_url(), echo=False)
