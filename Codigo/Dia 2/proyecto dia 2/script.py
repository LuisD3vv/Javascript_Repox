import psycopg2

# Parámetros de conexión
host = "localhost"
port = "5432"  # El puerto por defecto de PostgreSQL
user = "postgres"  # Tu usuario de PostgreSQL
password = "luisito"  # La contraseña de tu usuario
dbname = "new_database"  # El nombre de la base de datos a la que te quieres conectar

try:
    # Conectar a la base de datos
    conn = psycopg2.connect(
        host=host,
        port=port,
        user=user,
        password=password,
        dbname=dbname
    )

    # Crear un cursor
    cursor = conn.cursor()

    # Listar las tablas en la base de datos
    cursor.execute(
        "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';")
    tables = cursor.fetchall()

    # Mostrar las tablas
    if tables:
        print("Tablas en la base de datos:")
        for table in tables:
            print(table[0])
    else:
        print("No se encontraron tablas en la base de datos.")

    # Cerrar el cursor y la conexión
    cursor.close()
    conn.close()

except Exception as e:
    print(f"Error de conexión: {e}")
