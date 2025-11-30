# 🗄️ Configuración de Base de Datos

## Instrucciones para crear la tabla en PostgreSQL

### Opción 1: Desde EasyPanel (Recomendado)

1. Ve a tu proyecto en EasyPanel
2. Abre el servicio **sesiones** (PostgreSQL)
3. Busca la opción **"Terminal"** o **"Console"**
4. Ejecuta:

```bash
psql -U postgres -d quiz -f /path/to/create_table.sql
```

### Opción 2: Usando psql desde terminal

```bash
psql -h quiz_sesiones -p 5432 -U postgres -d quiz -f create_table.sql
```

Contraseña: `2c7f252ce3bbb308c933`

### Opción 3: Copiar y pegar SQL

1. Abre el archivo `create_table.sql`
2. Copia todo el contenido
3. Conéctate a PostgreSQL desde EasyPanel
4. Pega y ejecuta el SQL

## Verificar que la tabla se creó correctamente

```sql
-- Ver estructura de la tabla
\d quiz_responses

-- Contar registros
SELECT COUNT(*) FROM quiz_responses;

-- Ver últimas 5 respuestas
SELECT id, nombre, email, created_at 
FROM quiz_responses 
ORDER BY created_at DESC 
LIMIT 5;
```

## Estructura de la tabla

La tabla `quiz_responses` contiene:

- **Contacto**: nombre, email, whatsapp
- **Datos personales**: edad, sexo, peso, altura, IMC
- **Salud**: 24 campos con respuestas del quiz
- **Recomendaciones**: productos sugeridos y precios
- **IA**: explicación personalizada y pain points
- **Conversión**: si aceptó o rechazó el cupón

Total: **~45 campos** para análisis completo del usuario.
