import sqlite3

platos = [
        (1, "Hamburguesa", 120),
        (2, "Hot dogs", 45),
        (3, "Hot cakes", 60),
        (4, "Sandwich", 40),
        (5, "Café", 25)
]

gatos = [
       (1, "Nacho", "gataNacha.jpg", "El es Nacho, un gato blanco, muy amable y cariñoso. Le encanta dormir en los lugares más cómodos de la casa. Siempre busca compañía y se acurruca en el regazo de las personas. Su comida favorita es el atún y odia los ruidos fuertes."),
       (2, "Gabo", "gataGaba.webp", "El es Gabriel, un gato naranja muy violento e inteligente. Tiene una mirada desafiante y siempre está listo para la acción. Le gusta trepar a los lugares más altos y observar todo desde arriba. A pesar de su actitud ruda, disfruta de los mimos cuando nadie lo ve."),
       (3, "Omar", "gataOma.avif", "El es Omar, un gato negro muy tenebroso y kawai. Se esconde en las sombras y aparece cuando menos lo esperas. Su pasatiempo favorito es perseguir luces y jugar con sombras. Aunque parece misterioso, en realidad es muy juguetón y curioso.")
]

users = [
       (1, "profe@tec.mx", "profecool"),
       (2, "alumno@tec.mx", "soyestudiante"),
       (3, "admin@tec.mx", "soyadmin")
]

try:
        with sqlite3.connect("gatosDB.db") as conn:
            cur = conn.cursor()
            cur.executemany("INSERT INTO Platillos(id, nombre, precio) VALUES (?, ?, ?)", platos)
            cur.executemany("INSERT INTO Gatos(id, nombre, foto, descripcion) VALUES (?, ?, ?, ?)", gatos)
            cur.executemany("INSERT INTO Usuarios(id, usuario, password) VALUES(?, ?, ?)", users)
            conn.commit()
            consulta1 = cur.execute("SELECT * FROM Platillos;")
            resultado1 = consulta1.fetchall() 
            print(resultado1)
            consulta2 = cur.execute("SELECT * FROM Gatos;")
            resultado2 = consulta2.fetchall() 
            print(resultado2)
            consulta3 = cur.execute("SELECT * FROM Usuarios;")
            resultado3 = consulta3.fetchall() 
            print(resultado3)
            print("Data saved")
            pass
except sqlite3.OperationalError as e:
        print("Failed to open database: ", e)
    



