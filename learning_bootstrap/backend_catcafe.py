from flask import Flask, jsonify, request
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

@app.route("/cambiaImagen/<gato>")
def nuevaImagen(gato):
    imagenes = {
        "nacho": "https://cdn0.expertoanimal.com/es/posts/7/7/4/cuidados_para_un_gato_blanco_22477_orig.jpg",
        "gabo": "https://www.mirringo.com.co/Portals/mirringo/Images/articulos-actualidad-gatuna/5-mitos-sobre-los-gatos-naranjas/gatos-de-color-naranja.png?ver=2024-10-30-115216-760",
        "omar": "https://www.hola.com/horizon/square/7a62013a79a9-por-que-gatos-negros-dan-mala-suerte-t.jpg"
    }
    if gato in imagenes:
        return jsonify({"url": imagenes[gato]}),200
    else:
        return jsonify({"error": "No existe la imagen de ese gato"}),400


@app.route("/menu/<dia>")
def mostrarMenu(dia):
    menus = {
        "lunes": "Sopa de letras, nachos con queso, carne al pastor, agua de limón y un cheesecake de frambuesa.",
        "martes": "Arroz rojo, tostadas preparadas, pechugas rellenas, agua de jamaica y gelatina de rompope.",
        "miercoles": "Consome de pollo, arroz blanco, enchiladas suizas, agua de horchata y arroz con leche.",
        "jueves": "Ensalada rusa, pozole rojo, picadillo de res, agua de fresa y pastel de chocolate.",
        "viernes": "Pasta boloñesa, pan de ajo, pizza de peperoni, sodas italianas y tiramisú.",
        "sabado": "Arroz blanco, camarones, tacos dorados, agua de rompope y pay de limon."
    }
    if dia in menus:
        return jsonify({"platillos": menus[dia]}),200
    else:
        return ({"error": "No existe el menú de ese día"}),400
    
@app.route("/info/<gato>")
def infoGatos(gato):
    descripciones = {
        "nacho": "El es Nacho, un gato blanco, muy amable y cariñoso. "
                "Le encanta dormir en los lugares más cómodos de la casa. "
                "Siempre busca compañía y se acurruca en el regazo de las personas. "
                "Su comida favorita es el atún y odia los ruidos fuertes.",

        "gabo": "El es Gabriel, un gato naranja muy violento e inteligente. "
                "Tiene una mirada desafiante y siempre está listo para la acción. "
                "Le gusta trepar a los lugares más altos y observar todo desde arriba. "
                "A pesar de su actitud ruda, disfruta de los mimos cuando nadie lo ve.",

        "omar": "El es Omar, un gato negro muy tenebroso y kawai. "
                "Se esconde en las sombras y aparece cuando menos lo esperas. "
                "Su pasatiempo favorito es perseguir luces y jugar con sombras. "
                "Aunque parece misterioso, en realidad es muy juguetón y curioso."
    }

    if gato in descripciones:
        return jsonify({"descripcion": descripciones[gato]}),200
    else:
        return({"error": "No existe información de ese gato."}),400

if __name__ == "__main__":
    app.run(debug=True)