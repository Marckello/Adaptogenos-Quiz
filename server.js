// ============================================
// BACKEND SIMPLE PARA OPENAI (Node.js + Express)
// ============================================

const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static('.')); // Sirve archivos estáticos (HTML, CSS, JS)

// Endpoint para OpenAI
app.post('/api/openai', async (req, res) => {
    try {
        console.log('📨 Recibida petición a OpenAI');
        
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify(req.body)
        });

        if (!response.ok) {
            const error = await response.json();
            console.error('❌ Error de OpenAI:', error);
            return res.status(response.status).json(error);
        }

        const data = await response.json();
        console.log('✅ Respuesta exitosa de OpenAI');
        res.json(data);
        
    } catch (error) {
        console.error('❌ Error en servidor:', error);
        res.status(500).json({ 
            error: 'Error interno del servidor',
            message: error.message 
        });
    }
});

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
    console.log(`📂 Sirviendo archivos estáticos desde: ${__dirname}`);
    console.log(`🔑 API Key configurada: ${process.env.OPENAI_API_KEY ? 'SÍ' : 'NO'}`);
});
