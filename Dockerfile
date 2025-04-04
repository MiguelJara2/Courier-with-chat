# Usa una imagen base de Node.js
FROM node:18.16.0-alpine3.17

# Crea el directorio de la aplicación
WORKDIR /app

# Copia los archivos necesarios
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código al contenedor
COPY . .

# Expone el puerto en el que corre la aplicación
EXPOSE 8000

# Comando para iniciar la aplicación
CMD ["npm", "start"]