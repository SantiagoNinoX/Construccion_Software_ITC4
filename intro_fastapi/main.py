from fastapi import FastAPI, Form
from typing import Annotated
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import sqlite3

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class FormData(BaseModel):    #o Item
    primero: str
    segundo: str


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/suma")
def suma(item: Annotated[FormData, Form]):     # o Item
    x = int(item.primero)
    y = int(item.segundo)
    resultado = x + y
    return str(resultado)

@app.post("/resta")
def resta(item: Annotated[FormData, Form]):     # o Item
    x = int(item.primero)
    y = int(item.segundo)
    resultado = x - y
    return str(resultado)

@app.post("/multiplicacion")
def multiplicacion(item: Annotated[FormData, Form]):     # o Item
    x = int(item.primero)
    y = int(item.segundo)
    resultado = x * y
    return str(resultado)

@app.post("/division")
def division(item: Annotated[FormData, Form]):     # o Item
    x = int(item.primero)
    y = int(item.segundo)
    resultado = x / y
    return str(resultado)

@app.get("/gato")
def infoCat():
    try:
        with sqlite3.connect("gatosDB.db") as conn:
            cur = conn.cursor()
            consulta = cur.execute("SELECT * FROM Gatos;")
            respuesta = consulta.fetchall()
            print(respuesta)
            pass
            return respuesta
    except sqlite3.OperationalError as e:
        print("Failed to open database: ", e)