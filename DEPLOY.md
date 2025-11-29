# 🚀 GUÍA DE DESPLIEGUE - ADAPTOHEAL QUIZ

## ✅ **OPCIÓN 1: EasyPanel (RECOMENDADO)**

### **Paso 1: Preparar el proyecto**
```bash
# Crear archivo .env con tu API key
echo "OPENAI_API_KEY=tu-api-key-aqui" > .env
echo "PORT=3000" >> .env
```

### **Paso 2: Desplegar en EasyPanel**
1. **Login a EasyPanel**
2. **Create New Service** → **Node.js App**
3. **Upload/Git:**
   - Si usas Git: conecta tu repositorio
   - Si usas upload: sube toda la carpeta como ZIP
4. **Environment Variables:**
   ```
   OPENAI_API_KEY=sk-proj-tu-api-key-completa
   PORT=3000
   NODE_ENV=production
   ```
5. **Build Command:** `npm install`
6. **Start Command:** `npm start`
7. **Port:** `3000`
8. **Deploy** 🚀

### **Paso 3: Configurar dominio**
- En EasyPanel → Settings → Domains
- Agregar: `quiz.adaptohealmx.com`
- Configurar DNS en tu proveedor:
  ```
  Type: CNAME
  Name: quiz
  Value: [tu-easypanel-url]
  ```

---

## ✅ **OPCIÓN 2: CloudPanel**

### **Paso 1: Instalar Node.js en CloudPanel**
```bash
# SSH a tu servidor
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### **Paso 2: Subir archivos**
1. Sube todos los archivos a `/home/[usuario]/htdocs/quiz/`
2. SSH al servidor:
```bash
cd /home/[usuario]/htdocs/quiz/
npm install
```

### **Paso 3: Configurar variables de entorno**
```bash
nano .env
```
Pega:
```
OPENAI_API_KEY=sk-proj-tu-api-key-completa
PORT=3000
```

### **Paso 4: Configurar PM2 (para mantener corriendo)**
```bash
npm install -g pm2
pm2 start server.js --name adaptoheal-quiz
pm2 save
pm2 startup
```

### **Paso 5: Configurar Nginx como proxy**
En CloudPanel → Sites → Tu sitio → Vhost Editor

Agrega dentro del bloque `server`:
```nginx
location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
```

---

## ✅ **OPCIÓN 3: VPS Normal (Ubuntu/Debian)**

### **Instalación completa**
```bash
# 1. Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 2. Clonar/subir proyecto
cd /var/www/
# Sube los archivos aquí

# 3. Instalar dependencias
npm install

# 4. Configurar .env
nano .env
# Pega: OPENAI_API_KEY=tu-key

# 5. Instalar PM2
sudo npm install -g pm2

# 6. Iniciar aplicación
pm2 start server.js --name quiz
pm2 save
pm2 startup

# 7. Configurar Nginx
sudo nano /etc/nginx/sites-available/quiz.adaptohealmx.com
```

Configuración Nginx:
```nginx
server {
    listen 80;
    server_name quiz.adaptohealmx.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Activar sitio
sudo ln -s /etc/nginx/sites-available/quiz.adaptohealmx.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# SSL con Certbot
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d quiz.adaptohealmx.com
```

---

## 🧪 **TESTING LOCAL**

### **Probar en tu computadora**
```bash
# 1. Instalar dependencias
npm install

# 2. Crear .env
echo "OPENAI_API_KEY=tu-api-key" > .env

# 3. Iniciar servidor
npm start

# 4. Abrir navegador
http://localhost:3000
```

---

## 📁 **ESTRUCTURA DE ARCHIVOS**

```
adaptoheal-quiz/
├── index.html              # Frontend principal
├── css/
│   └── style.css          # Estilos
├── js/
│   ├── main.js            # Lógica principal
│   ├── products-data.js   # Base de datos productos
│   └── recommendation-engine.js  # Motor de recomendación
├── server.js              # Backend Node.js (NUEVO)
├── package.json           # Dependencias
├── .env                   # Variables de entorno (TU API KEY)
├── .env.example           # Ejemplo de .env
├── .gitignore             # Ignorar archivos sensibles
├── Dockerfile             # Para Docker/EasyPanel
└── DEPLOY.md              # Esta guía
```

---

## 🔐 **SEGURIDAD**

### ⚠️ **IMPORTANTE:**
1. **NUNCA** subas el archivo `.env` a Git
2. **NUNCA** pongas tu API key en el código JavaScript
3. El `.gitignore` ya está configurado para proteger `.env`

### ✅ **Verificar seguridad:**
```bash
# La API key DEBE estar en .env, NO en el código
grep -r "sk-proj-" js/  # NO debe encontrar nada
```

---

## 🐛 **TROUBLESHOOTING**

### **Error: Cannot find module 'express'**
```bash
npm install
```

### **Error: OPENAI_API_KEY is not defined**
```bash
# Verificar que .env existe
cat .env

# Debe mostrar:
# OPENAI_API_KEY=sk-proj-...
```

### **Error 502 Bad Gateway**
```bash
# Verificar que el servidor está corriendo
pm2 list

# Reiniciar si es necesario
pm2 restart quiz

# Ver logs
pm2 logs quiz
```

### **Error de CORS**
- El servidor ya tiene CORS habilitado
- Si persiste, verifica que llamas a `/api/openai` (no directo a OpenAI)

---

## 📊 **MONITOREO**

### **Ver logs en tiempo real:**
```bash
# Con PM2
pm2 logs quiz

# O directo del servidor
node server.js
```

### **Verificar que funciona:**
```bash
# Health check
curl http://localhost:3000/health

# Debe responder:
# {"status":"OK","timestamp":"2025-..."}
```

---

## 💰 **COSTOS ESTIMADOS**

- **EasyPanel/CloudPanel:** $0 (si ya tienes servidor)
- **OpenAI GPT-4o-mini:** ~$0.00036 por usuario
- **10,000 usuarios/mes:** ~$3.60 USD

---

## 🎯 **RECOMENDACIÓN FINAL**

**Para Marco (Adaptoheal):**
- ✅ **EasyPanel**: Si ya lo usas, es perfecto (Docker automático)
- ✅ **CloudPanel**: Si prefieres control manual (Nginx + PM2)
- ❌ **WordPress**: NO recomendado (complicado e innecesario)

**Mi recomendación: EasyPanel** 
- Deploy en 5 minutos
- Variables de entorno fáciles
- Auto-restart si falla
- Logs centralizados

---

## 📞 **SOPORTE**

Si tienes problemas, revisa:
1. Logs del servidor (`pm2 logs` o consola de EasyPanel)
2. Consola del navegador (F12)
3. Archivo `.env` configurado correctamente

¡Listo para deploy! 🚀