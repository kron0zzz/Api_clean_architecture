#  API Clean Architecture

## Descripción
Esta API implementa un CRUD de frutas utilizando **Node.js**, **Express** y **MongoDB Atlas**, siguiendo los principios de **Clean Architecture**.  
Permite crear, consultar, actualizar y eliminar frutas, organizando el código en capas para mantener separación de responsabilidades.

---

## Requisitos Previos
- **Node.js** v14 o superior
- **npm** (incluido con Node.js)
- **MongoDB Atlas** (o cualquier base MongoDB compatible)
- **Postman** (opcional, para pruebas)

---

## Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

env
PORT=3000
MONGO_URI=mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/<nombreDeLaBase>


## Instalación y ejecución 

1. Clonar este repositorio: git clone https://github.com/kron0zzz/Api_clean_architecture.git
cd Api_clean_architecture
2. Instalar dependencias: npm install
3. Ejecutar el servidor: node src/app


## Estructura del proyecto

src/
  domain/            # Entidades y contratos
  application/       # Casos de uso
  infrastructure/    # Conexión DB, modelos
  interfaces/        # Rutas y controladores
index.js             # Punto de entrada
.env                 # Variables de entorno


## Endpoints

- Obtener todas las compras: get/purchases
- Obtener compras por id: get/purchases:id
- Crear nueva compra: post/purchases:id
- Actualizar compra existente: put/purchases/:id
- Eliminar compra existente: delete/purchases/:id

## Autor

Juan Diego Rios Restrepo - Aprendiz SENA
