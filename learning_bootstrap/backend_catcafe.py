from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def inicio():
    return "Hola bonito mundo",200

@app.route("/hi")
def saludo():
    return """<ol>
                    <li>Hamburguesa --- $120</li>
                    <li>Hot dogs ------ $45</li>
                    <li>Hot cakes ----- $60</li>
                    <li>Sandwich ------ $40</li>
                    <li>Café ---------- $25</li>
                </ol>"""

@app.route("/cambiaNacho")
def nuevoNacho():
    return "https://images.unsplash.com/photo-1606208427954-aa8319c4815e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2F0byUyMGJsYW5jb3xlbnwwfHwwfHx8MA%3D%3D"
