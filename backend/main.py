from fastapi import FastAPI
from sqlmodel import SQLModel, Field

app = FastAPI(title="URL Analysis API")



class Potato(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    name: str
    email: str


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/potatoes")
async def get_potatoes():
    return db["potatoes"]


@app.post("/potatoes")
async def create_potato(potato: dict):
    db["potatoes"].append(potato)
    return potato
