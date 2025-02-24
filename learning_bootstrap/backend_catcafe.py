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

@app.route("/cambiaGabo")
def nuevoGabo():
    return "https://www.mirringo.com.co/Portals/mirringo/Images/articulos-actualidad-gatuna/5-mitos-sobre-los-gatos-naranjas/gatos-de-color-naranja.png?ver=2024-10-30-115216-760"

@app.route("/cambiaOmar")
def nuevoOmar():
    return "https://www.hola.com/horizon/square/7a62013a79a9-por-que-gatos-negros-dan-mala-suerte-t.jpg"

@app.route("/menuLunes")
def menuMonday():
    return "Sopa de letras, nachos con queso, carne al pastor, agua de limón y un cheesecake de frambuesa."

@app.route("/menuMartes")
def menuTuesday():
    return "Arroz rojo, tostadas preparadas, pechugas rellenas, agua de jamaica y gelatina de rompope."

@app.route("/menuMiercoles")
def menuWednesday():
    return "Consome de pollo, arroz blanco, enchiladas suizas, agua de horchata y arroz con leche."

@app.route("/menuJueves")
def menuThursday():
    return "Ensalada rusa, pozole rojo, picadillo de res, agua de fresa y pastel de chocolate."

@app.route("/menuViernes")
def menuFriday():
    return "Pasta boloñesa, pan de ajo, pizza de peperoni, sodas italianas y tiramisú."

@app.route("/menuSabado")
def menuSaturday():
    return "Arroz blanco, camarones, tacos dorados, agua de rompope y pay de limon."
