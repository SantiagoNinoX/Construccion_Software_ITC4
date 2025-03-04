import sqlite3

try:
    with sqlite3.connect("gatosDB.db") as conn:
        cur = conn.cursor()
        
        cur.execute("CREATE TABLE Platillos(id INTEGER PRIMARY KEY, nombre TEXT, precio INTEGER)")

        cur.execute("""CREATE TABLE Gatos(id INTEGER PRIMARY KEY, nombre TEXT,
                    foto BLOB, descripcion TEXT)""")
        
        cur.execute("CREATE TABLE Usuarios(id INTEGER PRIMARY KEY, usuario TEXT, password TEXT)")

        pass

except sqlite3.OperationalError as e:
    print("Failed to open database: ", e)