import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

class Shopping(BaseModel):
    name: str
    quantity: int= 1

class Fruits(BaseModel):
    fruits: List[Shopping]

class Meats(BaseModel):
    meats: List[Shopping]

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

memory_db = {"fruits": [], "meats": []}

@app.get("/fruits", response_model=Fruits)
def get_fruits():
    return Fruits(fruits=memory_db["fruits"])

@app.get("/meats", response_model=Meats)
def get_meats():
    return Meats(meats=memory_db["meats"])

@app.post("/fruits")
def add_fruit(fruit: Shopping):
    memory_db["fruits"].append(fruit)
    return {"message": "Fruit added successfully"}

@app.post("/meats")
def add_meat(meat: Shopping):
    memory_db["meats"].append(meat)
    return {"message": "Meat added successfully"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)