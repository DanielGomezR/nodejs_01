## Primera Aplicación en Node
Pasos:
Pasos:
1. Crear carpeta de la app
2. Dentro de la carpeta creada, inicializar como aplicación de node con el comando: npm init Este comando pregunta datos de configuración y genera el archivo package.json
3. Crear el archivo index.js que es donde definimos el servidor de aplicaciones (vacío inicialmente). 
    3.1 Crear el archivo bmi conla función para calcular el bmi
4. Instalar express
5. Definir en el index.js el servidor de aplicaciones con express
6. Definir las rutas de acceso al servidor de aplicaciones insight: 
    Definir en el archivo package.json el comando 
    start para referenciar el comando node index.js
    :Ejecutar npm run start
    :Ejecutar npm start (solo sirve para el comando start)
7. Definir una ruta con parámetros
8. Definir un módulo e importar en el archivo principal
9. Definir middleware logger para uso general app.use(logger)
10. Definir middelware para recibir objetos json app.user(express.json())
11. Definir ruta con método post para crear usuarios
12. Desde Postman acceder a la ruta del paso 11
13. Instalar nodemon de forma global