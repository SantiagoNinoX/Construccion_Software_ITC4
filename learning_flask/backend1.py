from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/hola")

def hello_world():
    return "Hello, Wold!"

@app.route("/adios")

def bye_world():
    return "Bye!"

@app.route("/json")

def json_endpoint():
    return jsonify([{"Alumno":"Juan",
                     "Edad": 21,
                     "Carrera": "ITC"
                     }])