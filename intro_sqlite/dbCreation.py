import sqlite3

try:
    with sqlite3.connect("myfirstDB.db") as conn:
        cur = conn.cursor()

        cur.execute("""CREATE TABLE Creadores(id INTEGER PRIMARY KEY,
                    Nombre TEXT, Edad INTEGER, Info TEXT)""")

        cur.execute("""CREATE TABLE Series(id INTEGER PRIMARY KEY, 
                    Nombre TEXT, Creador INTEGRER, Genero TEXT, 
                    FOREIGN KEY(Creador) REFERENCES Creadores(id))""")
        
        pass

except sqlite3.OperationalError as e:
    print("Failed to open database: ", e)