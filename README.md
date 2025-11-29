# 🌿 Adaptoheal - Quiz Interactivo de Adaptógenos

Sistema de recomendación inteligente de adaptógenos basado en perfil de salud completo del usuario, potenciado por IA (GPT-4o-mini).

![Version](https://img.shields.io/badge/version-1.0.0-green)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

**📦 Repositorio:** [https://github.com/Marckello/Adaptogenos-Quiz](https://github.com/Marckello/Adaptogenos-Quiz)

---

## ✨ Características Principales

### 🧠 **Sistema Inteligente con IA**
- ✅ Análisis de perfil con **GPT-4o-mini**
- ✅ Recomendaciones **ultra-personalizadas** (menciona nombre, edad, IMC, síntomas)
- ✅ Detección automática de **pain points** principales
- ✅ Explicaciones médicas de **6-8 líneas**
- ✅ Botones psicológicos con **inverse psychology**
- ✅ Costo: ~$0.00036 USD/usuario

### 📊 **Cuestionario Médico Completo**
- ✅ **24 preguntas** en 8 categorías médicas
- ✅ Cálculo automático de **IMC** (Peso/Altura)
- ✅ Selección **multi-objetivo jerarquizada** (1️⃣2️⃣3️⃣)
- ✅ Preguntas multi-select para padecimientos, historial, hormonas
- ✅ Validación de WhatsApp (10 dígitos México)

### 🎨 **Diseño Mobile-First**
- ✅ **90% optimizado para móvil** con cards compactas
- ✅ **Swipe gestures** para navegación táctil
- ✅ Botones flotantes (Back/Next/Restart)
- ✅ Progress bar dual (% + categoría)
- ✅ Animaciones suaves
- ✅ Paleta orgánica (verdes y tierra)

### 🛍️ **Sistema Comercial**
- ✅ Catálogo real de **33 productos Adaptoheal**
- ✅ Imágenes clicables con links directos
- ✅ Precios actualizados con badges de descuento
- ✅ **1 principal + 3 complementarios** sin repeticiones
- ✅ Razones específicas por cada recomendación

### 🎁 **Cupón Personalizado con IA**
- ✅ Texto del cupón AI-personalizado
- ✅ Botones psicológicos creativos
- ✅ Código: **ADAPTOHEAL10** (10% descuento)
- ✅ Guardado en BD independiente de decisión

### 💾 **Base de Datos Completa**
- ✅ **40 campos** de información
- ✅ Guardado **SIEMPRE** (con/sin cupón)
- ✅ Todas las 24 respuestas del quiz
- ✅ Recomendaciones completas
- ✅ Insights de IA (explicación, pain points)
- ✅ Conversión (aceptó/rechazó cupón)
- ✅ RESTful API para consultas

---

## 🚀 Instalación y Despliegue

### **Requisitos**
- Node.js >= 14.0.0
- npm o yarn
- API Key de OpenAI
- Acceso a base de datos (RESTful API incluida)

### **Instalación Local**

```bash
# 1. Clonar repositorio
git clone https://github.com/TU-USUARIO/adaptoheal-quiz.git
cd adaptoheal-quiz

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
nano .env
# Pega tu OPENAI_API_KEY

# 4. Iniciar servidor
npm start

# 5. Abrir navegador
http://localhost:3000
```

### **Despliegue en Producción**

Ver guía completa en **[DEPLOY.md](DEPLOY.md)** con instrucciones para:
- ✅ EasyPanel (recomendado)
- ✅ CloudPanel
- ✅ VPS/Ubuntu
- ✅ Docker

---

## 📁 Estructura del Proyecto

```
adaptoheal-quiz/
├── index.html                    # Frontend principal
├── css/
│   └── style.css                # Estilos mobile-first
├── js/
│   ├── main.js                  # Lógica + IA + navegación
│   ├── products-data.js         # 33 productos Adaptoheal
│   └── recommendation-engine.js # Motor con 200+ reglas
├── server.js                     # Backend Node.js + Express
├── package.json                  # Dependencias
├── .env.example                  # Template variables entorno
├── .gitignore                    # Protección archivos sensibles
├── Dockerfile                    # Para Docker/EasyPanel
├── DEPLOY.md                     # Guía de despliegue
└── README.md                     # Esta documentación
```

---

## 🔧 Configuración

### **Variables de Entorno (.env)**

```bash
# API de OpenAI (REQUERIDO)
OPENAI_API_KEY=sk-proj-tu-api-key-completa-aqui

# Puerto del servidor (OPCIONAL)
PORT=3000

# Entorno (OPCIONAL)
NODE_ENV=production
```

### **⚠️ IMPORTANTE: Seguridad**
- **NUNCA** subas el archivo `.env` a Git
- **NUNCA** pongas tu API key en el código JavaScript
- El `.gitignore` ya está configurado

---

## 📊 Cómo Funciona

### **Flujo del Usuario**

1. **Pantalla de bienvenida** → Botón "Comenzar Quiz"
2. **24 preguntas interactivas** con navegación (Back/Next/Swipe)
3. **Datos de contacto** → Nombre + WhatsApp
4. **Loading con IA** → "Analizando tu perfil..."
5. **Resultados personalizados:**
   - Explicación IA ultra-detallada
   - 1 producto principal (imagen + precio + razón)
   - 3 complementarios (razones específicas)
6. **Cupón con botones psicológicos**
7. **Guardado automático en BD**

### **Motor de Recomendación**

El sistema analiza **200+ reglas** basadas en:

- ✅ **IMC calculado** (bajo peso, normal, sobrepeso, obesidad)
- ✅ **Edad y sexo** (ej: hombres 45+ → Saw Palmetto)
- ✅ **Sueño y energía** (horas, calidad, problemas)
- ✅ **Estrés y estado mental** (nivel, ánimo, presión laboral)
- ✅ **Salud física** (dolores, digestión, inmunidad, circulación)
- ✅ **Salud hormonal** (menopausia, tiroides, libido, testosterona)
- ✅ **Padecimientos** + **contraindicaciones** automáticas
- ✅ **Historial familiar** (diabetes, cáncer, Alzheimer, etc.)
- ✅ **Hábitos** (agua, cafeína, dieta, tabaco/alcohol)
- ✅ **Objetivos jerarquizados** (peso TRIPLE: 1º→30pts, 2º→20pts, 3º→10pts)

### **Integración con IA**

```javascript
// El backend llama a OpenAI de forma segura
POST /api/openai
{
  "model": "gpt-4o-mini",
  "messages": [
    { "role": "system", "content": "Experto en medicina funcional..." },
    { "role": "user", "content": "Perfil completo del usuario..." }
  ],
  "temperature": 0.7,
  "max_tokens": 800
}
```

**Respuesta generada:**
- Explicación personalizada (6-8 líneas)
- Razón del producto (2-3 líneas)
- Pain points (principal + secundario)
- Texto de cupón personalizado
- Botones creativos con psicología inversa

---

## 🧮 Algoritmo de Ejemplo

**Perfil:**
- Mujer, 42 años, IMC 28.5 (sobrepeso)
- Duerme 5-6h, energía baja, estrés muy alto
- Sedentaria, 1L agua, no fuma/bebe
- Objetivos: 1) Reducir estrés, 2) Control peso, 3) Mejorar sueño

**Resultado:**
1. **Ashwagandha** (215 pts) - Estrés + sueño + objetivo #1
2. **Chitosan** (178 pts) - IMC + objetivo #2 + sedentarismo
3. **Rhodiola** (165 pts) - Estrés + energía baja
4. **Magnesio** (142 pts) - Estrés + sueño + objetivo #3

---

## 🗄️ Base de Datos

### **Tabla: `quiz_responses`** (40 campos)

Almacena:
- ✅ Contacto (nombre, WhatsApp)
- ✅ Datos personales (edad, sexo, peso, altura, IMC)
- ✅ Todas las 24 respuestas del quiz
- ✅ Objetivos jerarquizados (1º, 2º, 3º)
- ✅ Recomendaciones (principal + 3 complementarios)
- ✅ Insights de IA (explicación, pain points)
- ✅ Conversión (aceptó/rechazó cupón)
- ✅ Timestamp

**API RESTful incluida:**
```bash
GET    /tables/quiz_responses         # Listar
GET    /tables/quiz_responses/:id     # Ver uno
POST   /tables/quiz_responses         # Crear
PATCH  /tables/quiz_responses/:id     # Actualizar
DELETE /tables/quiz_responses/:id     # Eliminar
```

---

## 💰 Costos Estimados

- **Hosting:** $0 (si ya tienes servidor)
- **OpenAI GPT-4o-mini:** ~$0.00036/usuario
- **Base de datos:** $0 (incluida)

**Proyección:**
- 10,000 usuarios: ~$3.60 USD
- 100,000 usuarios: ~$36 USD

**ROI Ejemplo:**
- Si 1% convierte con ticket promedio $500 MXN
- 10,000 usuarios → 100 ventas → $50,000 MXN
- Costo IA: $3.60 USD (~$70 MXN)
- **ROI: 71,328%** 🤯

---

## 🎨 Paleta de Colores

```css
--verde-bosque: #2D5016
--verde-salvia: #6B8E23
--verde-oliva: #8FA875
--tierra-oscura: #5C4033
--tierra-clara: #C19A6B
--crema-natural: #F5F1E8
--acento-dorado: #D4AF37
```

---

## 🧪 Testing

### **Modo desarrollo**
```bash
npm run dev  # Con nodemon (auto-restart)
```

### **Tests manuales**
1. Completa el quiz (3-4 minutos)
2. Verifica recomendaciones personalizadas
3. Prueba botones de cupón
4. Revisa datos guardados en BD

### **Health check**
```bash
curl http://localhost:3000/health
# Respuesta: {"status":"OK","timestamp":"2025-..."}
```

---

## 📈 Métricas y Marketing

**Datos almacenados para segmentación:**
- Edad, sexo, IMC
- Objetivos prioritarios
- Padecimientos actuales
- Pain points detectados por IA
- Conversión de cupón

**Audiencias automáticas para Meta/Google Ads:**
- Mujeres 35-55 con menopausia + objetivo balance hormonal
- Hombres 45-65 con sobrepeso + hipertensión
- Personas 25-45 con estrés muy alto + insomnio
- Deportistas con objetivo rendimiento físico

---

## 🐛 Troubleshooting

### **Error: Cannot find module**
```bash
npm install
```

### **Error: OPENAI_API_KEY is not defined**
```bash
# Verificar .env
cat .env
# Debe contener: OPENAI_API_KEY=sk-proj-...
```

### **Error 502 Bad Gateway**
```bash
# Verificar que el servidor corre
pm2 list
pm2 logs quiz
```

---

## 📞 Soporte

**Desarrollado para:** Adaptoheal MX  
**Website:** https://adaptohealmx.com  
**Contacto:** [Tu email/contacto aquí]

---

## 📄 Licencia

MIT License - Ver archivo LICENSE para más detalles

---

## 🙏 Créditos

- **Adaptógenos:** Base de datos de productos reales de Adaptoheal
- **IA:** OpenAI GPT-4o-mini
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Backend:** Node.js + Express
- **Fonts:** Google Fonts (Inter, Playfair Display)
- **Icons:** Font Awesome 6

---

**🌿 Transformando vidas a través de los adaptógenos naturales 🌿**