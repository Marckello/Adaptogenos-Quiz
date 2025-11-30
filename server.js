// ============================================
// BACKEND PARA QUIZ ADAPTOHEAL
// Node.js + Express + PostgreSQL
// ============================================

const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// ============================================
// CONFIGURACIÓN DE POSTGRESQL
// ============================================

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    // Configuración para conexiones en EasyPanel
    ssl: false,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

// Test de conexión
pool.connect((err, client, release) => {
    if (err) {
        console.error('❌ Error conectando a PostgreSQL:', err.stack);
    } else {
        console.log('✅ Conectado a PostgreSQL');
        release();
    }
});

// ============================================
// MIDDLEWARE
// ============================================

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static('.')); // Sirve archivos estáticos (HTML, CSS, JS)

// ============================================
// ENDPOINT OPENAI
// ============================================

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

// ============================================
// ENDPOINTS DE BASE DE DATOS
// ============================================

// POST - Guardar nueva respuesta del quiz
app.post('/tables/quiz_responses', async (req, res) => {
    try {
        console.log('💾 Guardando respuesta del quiz...');
        
        const data = req.body;
        
        const query = `
            INSERT INTO quiz_responses (
                nombre, email, whatsapp,
                edad, sexo, peso, altura, imc,
                horas_sueno, nivel_energia, problemas_sueno,
                actividad_fisica, consumo_agua, habitos_tabaco_alcohol,
                nivel_estres, estado_animo, presion_laboral,
                dolores_cronicos, problemas_digestivos, frecuencia_enfermedades, problemas_circulacion,
                problemas_hormonales, libido, padecimientos,
                historial_familiar,
                consumo_cafeina, tipo_alimentacion,
                objetivo_1, objetivo_2, objetivo_3,
                producto_principal, producto_principal_precio,
                producto_complementario_1, producto_complementario_2, producto_complementario_3,
                explicacion_ia, pain_point_principal, pain_point_secundario,
                acepto_cupon, timestamp
            ) VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21,
                $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40
            ) RETURNING id, created_at
        `;
        
        const values = [
            data.nombre, data.email, data.whatsapp,
            data.edad, data.sexo, data.peso, data.altura, data.imc,
            data.horas_sueno, data.nivel_energia, data.problemas_sueno,
            data.actividad_fisica, data.consumo_agua, data.habitos_tabaco_alcohol,
            data.nivel_estres, data.estado_animo, data.presion_laboral,
            data.dolores_cronicos, data.problemas_digestivos, data.frecuencia_enfermedades, data.problemas_circulacion,
            data.problemas_hormonales, data.libido, data.padecimientos,
            data.historial_familiar,
            data.consumo_cafeina, data.tipo_alimentacion,
            data.objetivo_1, data.objetivo_2, data.objetivo_3,
            data.producto_principal, data.producto_principal_precio,
            data.producto_complementario_1, data.producto_complementario_2, data.producto_complementario_3,
            data.explicacion_ia, data.pain_point_principal, data.pain_point_secundario,
            data.acepto_cupon, data.timestamp
        ];
        
        const result = await pool.query(query, values);
        
        console.log(`✅ Respuesta guardada con ID: ${result.rows[0].id}`);
        
        res.status(201).json({
            success: true,
            id: result.rows[0].id,
            created_at: result.rows[0].created_at
        });
        
    } catch (error) {
        console.error('❌ Error guardando en BD:', error);
        res.status(500).json({ 
            error: 'Error guardando datos',
            message: error.message 
        });
    }
});

// PATCH - Actualizar decisión de cupón
app.patch('/tables/quiz_responses/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { acepto_cupon } = req.body;
        
        console.log(`🔄 Actualizando decisión de cupón para ID ${id}: ${acepto_cupon}`);
        
        const query = `
            UPDATE quiz_responses 
            SET acepto_cupon = $1 
            WHERE id = $2
            RETURNING id, acepto_cupon
        `;
        
        const result = await pool.query(query, [acepto_cupon, id]);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Registro no encontrado' });
        }
        
        console.log(`✅ Decisión actualizada para ID ${id}`);
        
        res.json({
            success: true,
            id: result.rows[0].id,
            acepto_cupon: result.rows[0].acepto_cupon
        });
        
    } catch (error) {
        console.error('❌ Error actualizando BD:', error);
        res.status(500).json({ 
            error: 'Error actualizando datos',
            message: error.message 
        });
    }
});

// GET - Obtener todas las respuestas (opcional, para admin)
app.get('/tables/quiz_responses', async (req, res) => {
    try {
        const { limit = 100, offset = 0 } = req.query;
        
        const query = `
            SELECT * FROM quiz_responses 
            ORDER BY created_at DESC 
            LIMIT $1 OFFSET $2
        `;
        
        const result = await pool.query(query, [limit, offset]);
        
        res.json({
            success: true,
            count: result.rows.length,
            data: result.rows
        });
        
    } catch (error) {
        console.error('❌ Error obteniendo datos:', error);
        res.status(500).json({ 
            error: 'Error obteniendo datos',
            message: error.message 
        });
    }
});

// ============================================
// HEALTH CHECK
// ============================================

app.get('/health', async (req, res) => {
    try {
        // Test de conexión a BD
        await pool.query('SELECT NOW()');
        
        res.json({ 
            status: 'OK', 
            timestamp: new Date().toISOString(),
            database: 'connected'
        });
    } catch (error) {
        res.status(500).json({ 
            status: 'ERROR', 
            timestamp: new Date().toISOString(),
            database: 'disconnected',
            error: error.message
        });
    }
});

// ============================================
// INICIAR SERVIDOR
// ============================================

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
    console.log(`📂 Sirviendo archivos estáticos desde: ${__dirname}`);
    console.log(`🔑 OpenAI API Key: ${process.env.OPENAI_API_KEY ? 'SÍ' : 'NO'}`);
    console.log(`🗄️  PostgreSQL: ${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
});

// Manejo de cierre graceful
process.on('SIGTERM', () => {
    console.log('👋 SIGTERM recibido, cerrando servidor...');
    pool.end(() => {
        console.log('✅ Pool de PostgreSQL cerrado');
        process.exit(0);
    });
});
