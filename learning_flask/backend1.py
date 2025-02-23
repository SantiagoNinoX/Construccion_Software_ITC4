from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def main():
    return "Estas en la pagina principal"

@app.route("/hola")
def hello_world():
    return "Hello, Wold!",200

@app.route("/adios")
def bye_world():
    return "Bye!",200

@app.route("/json")
def json_endpoint():
    return jsonify([{"Alumno":"Juan",
                     "Edad": 21,
                     "Carrera": "ITC"
                     }])