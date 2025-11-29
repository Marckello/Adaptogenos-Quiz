# Dockerfile para EasyPanel
FROM node:18-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm ci --only=production

# Copiar el resto de archivos
COPY . .

# Exponer puerto
EXPOSE 3000

# Variable de entorno por defecto
ENV NODE_ENV=production
ENV PORT=3000

# Comando de inicio
CMD ["node", "server.js"]
