-- ============================================
-- TABLA PARA GUARDAR RESPUESTAS DEL QUIZ
-- Base de datos: quiz (PostgreSQL)
-- ============================================

CREATE TABLE IF NOT EXISTS quiz_responses (
    -- ID y metadata
    id SERIAL PRIMARY KEY,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Contacto
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    whatsapp VARCHAR(20) NOT NULL,
    
    -- Datos personales
    edad VARCHAR(10),
    sexo VARCHAR(20),
    peso DECIMAL(5,2),
    altura DECIMAL(5,2),
    imc DECIMAL(5,2),
    
    -- Sueño y energía
    horas_sueno VARCHAR(20),
    nivel_energia VARCHAR(20),
    problemas_sueno VARCHAR(50),
    
    -- Estilo de vida
    actividad_fisica VARCHAR(30),
    consumo_agua VARCHAR(20),
    habitos_tabaco_alcohol VARCHAR(30),
    
    -- Estrés y mental
    nivel_estres VARCHAR(20),
    estado_animo VARCHAR(30),
    presion_laboral VARCHAR(20),
    
    -- Salud física
    dolores_cronicos VARCHAR(30),
    problemas_digestivos VARCHAR(30),
    frecuencia_enfermedades VARCHAR(30),
    problemas_circulacion VARCHAR(20),
    
    -- Salud hormonal
    problemas_hormonales TEXT,
    libido VARCHAR(20),
    padecimientos TEXT,
    
    -- Historial
    historial_familiar TEXT,
    
    -- Hábitos
    consumo_cafeina VARCHAR(20),
    tipo_alimentacion VARCHAR(30),
    
    -- Objetivos
    objetivo_1 VARCHAR(100),
    objetivo_2 VARCHAR(100),
    objetivo_3 VARCHAR(100),
    
    -- Recomendaciones
    producto_principal VARCHAR(255),
    producto_principal_precio DECIMAL(10,2),
    producto_complementario_1 VARCHAR(255),
    producto_complementario_2 VARCHAR(255),
    producto_complementario_3 VARCHAR(255),
    
    -- IA
    explicacion_ia TEXT,
    pain_point_principal TEXT,
    pain_point_secundario TEXT,
    
    -- Conversión
    acepto_cupon BOOLEAN DEFAULT NULL,
    
    -- Índices para búsquedas rápidas
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear índices para mejorar rendimiento
CREATE INDEX IF NOT EXISTS idx_email ON quiz_responses(email);
CREATE INDEX IF NOT EXISTS idx_whatsapp ON quiz_responses(whatsapp);
CREATE INDEX IF NOT EXISTS idx_timestamp ON quiz_responses(timestamp);
CREATE INDEX IF NOT EXISTS idx_created_at ON quiz_responses(created_at);

-- Comentarios para documentación
COMMENT ON TABLE quiz_responses IS 'Almacena todas las respuestas del quiz de adaptógenos con recomendaciones personalizadas';
COMMENT ON COLUMN quiz_responses.explicacion_ia IS 'Explicación personalizada generada por OpenAI';
COMMENT ON COLUMN quiz_responses.acepto_cupon IS 'NULL = no decidió, TRUE = aceptó, FALSE = rechazó';
