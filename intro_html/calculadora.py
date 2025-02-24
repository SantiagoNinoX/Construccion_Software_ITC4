from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def inicio():
    return "Hola bonito mundo",200

@app.route("/suma", methods=["POST"])
def suma():
    fNumber = int(request.form["first"])
    sNumber = int(request.form["second"])
    resultado = fNumber + sNumber
    return str(resultado)

@app.route("/resta", methods=["POST"])
def resta():
    fNumber = int(request.form["first"])
    sNumber = int(request.form["second"])
    resultado = fNumber - sNumber
    return str(resultado)

@app.route("/multi", methods=["POST"])
def multiplicacion():
    fNumber = int(request.form["first"])
    sNumber = int(request.form["second"])
    resultado = fNumber * sNumber
    return str(resultado)

@app.route("/div", methods=["POST"])
def division():
    fNumber = int(request.form["first"])
    sNumber = int(request.form["second"])
    resultado = fNumber / sNumber
    return str(resultado)

@app.route("/login", methods=["POST"])
def inicioSesion():
    usr = request.form["username"]
    ps = request.form["password"]
    if usr == "admin" and ps == "1234":
        return "Bienvenido admin"
    else:
        return "Usuario o contraseña incorrectos"