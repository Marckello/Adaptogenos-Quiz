// ============================================
// ADAPTOHEAL QUIZ - SISTEMA COMPLETO CON IA
// ============================================

// Configuración de la API (llamada a nuestro backend)
const API_URL = '/api/openai'; // Tu servidor Node.js
const OPENAI_MODEL = 'gpt-4o-mini';

// Estado global de usuario
let userData = {
    // Datos personales
    edad: '',
    sexo: '',
    peso: 0,
    altura: 0,
    imc: 0,
    
    // Sueño y energía
    horasSueño: '',
    nivelEnergia: '',
    problemasSueño: '',
    
    // Estilo de vida
    actividadFisica: '',
    consumoAgua: '',
    habitos: '',
    
    // Estrés y mental
    nivelEstres: '',
    estadoAnimo: '',
    presionLaboral: '',
    
    // Salud física
    doloresCronicos: '',
    problemasDigestivos: '',
    frecuenciaEnfermedades: '',
    problemasCirculacion: '',
    
    // Salud hormonal y sexual
    problemasHormonales: [],
    libido: '',
    padecimientos: [],
    
    // Historial médico
    historialFamiliar: [],
    
    // Hábitos
    consumoCafeina: '',
    tipoAlimentacion: '',
    
    // Objetivos (hasta 3, jerarquizados)
    objetivos: [],
    
    // Contacto
    nombre: '',
    whatsapp: '',
    
    // Timestamp
    timestamp: null
};

// Variables de navegación
let currentScreen = 0;
let totalScreens = 26; // Welcome + 24 preguntas + Contact
let swipeStartX = 0;
let swipeStartY = 0;

// Variables de selección múltiple
let selectedHormones = [];
let selectedAilments = [];
let selectedFamilyHistory = [];
let selectedObjectives = [];

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Adaptoheal Quiz inicializado');
    setupSwipeListeners();
    setupKeyboardNavigation();
    updateProgressBar();
});

// ============================================
// NAVEGACIÓN
// ============================================

function startQuiz() {
    navigateToScreen('screen-q1');
    document.getElementById('btnBack').style.display = 'inline-flex';
    document.getElementById('btnRestart').style.display = 'inline-flex';
    currentScreen = 1;
    updateProgressBar();
}

function navigateToScreen(screenId) {
    // Ocultar todas las pantallas
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Mostrar la pantalla solicitada
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        window.scrollTo(0, 0);
        
        // Limpiar todas las selecciones visuales en la nueva pantalla
        targetScreen.querySelectorAll('.option-card').forEach(card => {
            card.classList.remove('selected');
        });
        
        // Restaurar la selección previa si existe
        restorePreviousSelection(screenId);
    }
}

function restorePreviousSelection(screenId) {
    // Mapeo de pantallas a campos de userData y valores
    const screenMap = {
        'screen-q2': { field: 'sexo', values: ['masculino', 'femenino'] },
        'screen-q5': { field: 'horasSueño', values: ['menos-5h', '5-6h', '7-8h', 'mas-8h'] },
        'screen-q6': { field: 'nivelEnergia', values: ['muy-bajo', 'bajo', 'normal', 'bueno', 'excelente'] },
        'screen-q7': { field: 'problemasSueño', values: ['insomnio', 'interrupciones', 'calidad', 'ninguno'] },
        'screen-q8': { field: 'actividadFisica', values: ['sedentario', 'ligero', 'moderado', 'intenso'] },
        'screen-q9': { field: 'consumoAgua', values: ['menos-1l', '1-2l', '2-3l', 'mas-3l'] },
        'screen-q10': { field: 'habitos', values: ['fuma-bebe', 'solo-fuma', 'solo-bebe', 'ninguno'] },
        'screen-q11': { field: 'nivelEstres', values: ['bajo', 'moderado', 'alto', 'muy-alto'] },
        'screen-q12': { field: 'estadoAnimo', values: ['deprimido', 'ansioso', 'variable', 'estable'] },
        'screen-q13': { field: 'presionLaboral', values: ['baja', 'media', 'alta', 'extrema'] },
        'screen-q14': { field: 'doloresCronicos', values: ['si-intensos', 'ocasionales', 'ninguno'] },
        'screen-q15': { field: 'problemasDigestivos', values: ['frecuentes', 'ocasionales', 'ninguno'] },
        'screen-q16': { field: 'frecuenciaEnfermedades', values: ['frecuente', 'ocasional', 'raro'] },
        'screen-q17': { field: 'problemasCirculacion', values: ['si', 'a-veces', 'no'] },
        'screen-q18': { field: 'libido', values: ['muy-bajo', 'bajo', 'normal', 'alto'] },
        'screen-q22': { field: 'consumoCafeina', values: ['ninguno', '1-2', '3-4', 'mas-5'] },
        'screen-q23': { field: 'tipoAlimentacion', values: ['procesada', 'mixta', 'saludable', 'muy-saludable'] }
    };
    
    const mapping = screenMap[screenId];
    if (!mapping) return;
    
    const savedValue = userData[mapping.field];
    if (!savedValue) return;
    
    // Buscar el botón correspondiente y marcarlo como seleccionado
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        const buttons = targetScreen.querySelectorAll('.option-card');
        buttons.forEach((button, index) => {
            const onclick = button.getAttribute('onclick');
            if (onclick && onclick.includes(`'${savedValue}'`)) {
                button.classList.add('selected');
            }
        });
    }
}

function goBack() {
    if (currentScreen > 1) {
        currentScreen--;
        const screenId = currentScreen === 0 ? 'screen-welcome' : `screen-q${currentScreen}`;
        navigateToScreen(screenId);
        updateProgressBar();
    }
}

function goNext() {
    if (currentScreen < totalScreens - 1) {
        currentScreen++;
        const screenId = currentScreen === 25 ? 'screen-contact' : `screen-q${currentScreen}`;
        navigateToScreen(screenId);
        updateProgressBar();
    }
}

function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    
    if (currentScreen === 0 || currentScreen === 25) {
        // Pantalla de bienvenida o contacto
        progressBar.style.width = '0%';
        progressText.textContent = '';
        return;
    }
    
    const progress = (currentScreen / 24) * 100;
    progressBar.style.width = progress + '%';
    
    // Texto con categoría
    const categories = {
        1: 'Datos Personales', 2: 'Datos Personales', 3: 'Datos Personales', 4: 'Datos Personales',
        5: 'Sueño y Energía', 6: 'Sueño y Energía', 7: 'Sueño y Energía',
        8: 'Estilo de Vida', 9: 'Estilo de Vida', 10: 'Estilo de Vida',
        11: 'Estrés y Mental', 12: 'Estrés y Mental', 13: 'Estrés y Mental',
        14: 'Salud Física', 15: 'Salud Física', 16: 'Salud Física', 17: 'Salud Física',
        18: 'Salud Hormonal', 19: 'Salud Hormonal', 20: 'Salud Hormonal',
        21: 'Historial Médico',
        22: 'Hábitos', 23: 'Hábitos',
        24: 'Objetivos'
    };
    
    progressText.textContent = `${categories[currentScreen]} (${currentScreen}/24)`;
}

// ============================================
// SWIPE EN MÓVIL
// ============================================

function setupSwipeListeners() {
    const container = document.getElementById('quizContainer');
    
    container.addEventListener('touchstart', handleTouchStart, false);
    container.addEventListener('touchmove', handleTouchMove, false);
    container.addEventListener('touchend', handleTouchEnd, false);
}

function handleTouchStart(e) {
    swipeStartX = e.touches[0].clientX;
    swipeStartY = e.touches[0].clientY;
}

function handleTouchMove(e) {
    if (!swipeStartX || !swipeStartY) return;
    
    const xDiff = swipeStartX - e.touches[0].clientX;
    const yDiff = swipeStartY - e.touches[0].clientY;
    
    // Prevenir scroll vertical durante swipe horizontal
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        e.preventDefault();
    }
}

function handleTouchEnd(e) {
    if (!swipeStartX || !swipeStartY) return;
    
    const xEnd = e.changedTouches[0].clientX;
    const yEnd = e.changedTouches[0].clientY;
    
    const xDiff = swipeStartX - xEnd;
    const yDiff = swipeStartY - yEnd;
    
    // Si el swipe horizontal es mayor que el vertical
    if (Math.abs(xDiff) > Math.abs(yDiff) && Math.abs(xDiff) > 50) {
        if (xDiff > 0) {
            // Swipe left - siguiente
            // Solo si ya ha respondido la pregunta actual
            // goNext();
        } else {
            // Swipe right - anterior
            goBack();
        }
    }
    
    swipeStartX = 0;
    swipeStartY = 0;
}

// ============================================
// TECLADO
// ============================================

function setupKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            goBack();
        }
    });
}

// Botones de navegación
document.getElementById('btnBack')?.addEventListener('click', goBack);
document.getElementById('btnRestart')?.addEventListener('click', function() {
    if (confirm('¿Seguro que quieres reiniciar el quiz? Se perderán tus respuestas.')) {
        location.reload();
    }
});

// ============================================
// FUNCIONES DE RESPUESTA - DATOS PERSONALES
// ============================================

function selectAge(age) {
    userData.edad = age;
    animateSelection(event.target);
    setTimeout(() => {
        currentScreen = 2;
        navigateToScreen('screen-q2');
        updateProgressBar();
    }, 300);
}

function submitAge() {
    const ageInput = document.getElementById('ageInput');
    const age = parseInt(ageInput.value);
    
    if (!age || age < 18 || age > 100) {
        alert('Por favor ingresa una edad válida entre 18 y 100 años');
        return;
    }
    
    userData.edad = age.toString();
    currentScreen = 2;
    navigateToScreen('screen-q2');
    updateProgressBar();
}

function selectGender(gender) {
    userData.sexo = gender;
    animateSelection(event.target);
    setTimeout(() => {
        currentScreen = 3;
        navigateToScreen('screen-q3');
        updateProgressBar();
    }, 300);
}

function selectWeight() {
    const weight = document.getElementById('inputWeight').value;
    if (!weight || weight < 30 || weight > 250) {
        alert('Por favor ingresa un peso válido (30-250 kg)');
        return;
    }
    userData.peso = parseFloat(weight);
    currentScreen = 4;
    navigateToScreen('screen-q4');
    updateProgressBar();
}

function selectHeight() {
    const height = document.getElementById('inputHeight').value;
    if (!height || height < 120 || height > 230) {
        alert('Por favor ingresa una altura válida (120-230 cm)');
        return;
    }
    userData.altura = parseFloat(height);
    
    // Calcular IMC
    const heightM = userData.altura / 100;
    userData.imc = (userData.peso / (heightM * heightM)).toFixed(1);
    
    console.log(`📊 IMC calculado: ${userData.imc}`);
    
    currentScreen = 5;
    navigateToScreen('screen-q5');
    updateProgressBar();
}

// ============================================
// SUEÑO Y ENERGÍA
// ============================================

function selectSleep(hours) {
    userData.horasSueño = hours;
    animateSelection(event.target);
    setTimeout(() => {
        currentScreen = 6;
        navigateToScreen('screen-q6');
        updateProgressBar();
    }, 300);
}

function selectEnergy(energy) {
    userData.nivelEnergia = energy;
    animateSelection(event.target);
    setTimeout(() => {
        currentScreen = 7;
        navigateToScreen('screen-q7');
        updateProgressBar();
    }, 300);
}

function selectSleepProblems(problems) {
    userData.problemasSueño = problems;
    animateSelection(event.target);
    setTimeout(() => {
        currentScreen = 8;
        navigateToScreen('screen-q8');
        updateProgressBar();
    }, 300);
}

// ============================================
// ESTILO DE VIDA
// ============================================

function selectActivity(activity) {
    userData.actividadFisica = activity;
    animateSelection(event.target);
    setTimeout(() => {
        currentScreen = 9;
        navigateToScreen('screen-q9');
        updateProgressBar();
    }, 300);
}

function selectWater(water) {
    userData.consumoAgua = water;
    animateSelection(event.target);
    setTimeout(() => {
        currentScreen = 10;
        navigateToScreen('screen-q10');
        updateProgressBar();
    }, 300);
}

function selectHabits(habits) {
    userData.habitos = habits;
    animateSelection(event.target);
    setTimeout(() => {
        currentScreen = 11;
        navigateToScreen('screen-q11');
        updateProgressBar();
    }, 300);
}

// ============================================
// ESTRÉS Y MENTAL
// ============================================

function selectStress(stress) {
    userData.nivelEstres = stress;
    animateSelection(event.target);
    setTimeout(() => {
        currentScreen = 12;
        navigateToScreen('screen-q12');
        updateProgressBar();
    }, 300);
}

function selectMood(mood) {
    userData.estadoAnimo = mood;
    animateSelection(event.target);
    setTimeout(() => {
        currentScreen = 13;
        navigateToScreen('screen-q13');
        updateProgressBar();
    }, 300);
}

function selectWorkPressure(pressure) {
    userData.presionLaboral = pressure;
    animateSelection(event.target);
    setTimeout(() => {
        currentScreen = 14;
        navigateToScreen('screen-q14');
        updateProgressBar();
    }, 300);
}

// ============================================
// SALUD FÍSICA
// ============================================

function selectPain(pain) {
    userData.doloresCronicos = pain;
    animateSelection(event.target);
    setTimeout(() => {
        currentScreen = 15;
        navigateToScreen('screen-q15');
        updateProgressBar();
    }, 300);
}

function selectDigestion(digestion) {
    userData.problemasDigestivos = digestion;
    animateSelection(event.target);
    setTimeout(() => {
        currentScreen = 16;
        navigateToScreen('screen-q16');
        updateProgressBar();
    }, 300);
}

function selectIllness(illness) {
    userData.frecuenciaEnfermedades = illness;
    animateSelection(event.target);
    setTimeout(() => {
        currentScreen = 17;
        navigateToScreen('screen-q17');
        updateProgressBar();
    }, 300);
}

function selectCirculation(circulation) {
    userData.problemasCirculacion = circulation;
    animateSelection(event.target);
    setTimeout(() => {
        currentScreen = 18;
        navigateToScreen('screen-q18');
        updateProgressBar();
    }, 300);
}

// ============================================
// SALUD HORMONAL (MÚLTIPLE)
// ============================================

function toggleHormone(hormone) {
    const button = event.target.closest('.option-card');
    
    // Si selecciona "ninguno", deselecciona todo lo demás
    if (hormone === 'ninguno') {
        selectedHormones = ['ninguno'];
        document.querySelectorAll('#screen-q18 .option-card').forEach(btn => {
            btn.classList.remove('selected');
        });
        button.classList.add('selected');
    } else {
        // Remover "ninguno" si está seleccionado
        selectedHormones = selectedHormones.filter(h => h !== 'ninguno');
        
        // Toggle del seleccionado
        if (selectedHormones.includes(hormone)) {
            selectedHormones = selectedHormones.filter(h => h !== hormone);
            button.classList.remove('selected');
        } else {
            selectedHormones.push(hormone);
            button.classList.add('selected');
        }
        
        // Remover selección de "ninguno"
        document.querySelectorAll('#screen-q18 .option-card').forEach(btn => {
            if (btn.querySelector('span').textContent.includes('Ninguno')) {
                btn.classList.remove('selected');
            }
        });
    }
}

function confirmHormones() {
    if (selectedHormones.length === 0) {
        alert('Por favor selecciona al menos una opción');
        return;
    }
    userData.problemasHormonales = [...selectedHormones];
    currentScreen = 19;
    navigateToScreen('screen-q19');
    updateProgressBar();
}

function selectLibido(libido) {
    userData.libido = libido;
    animateSelection(event.target);
    setTimeout(() => {
        currentScreen = 20;
        navigateToScreen('screen-q20');
        updateProgressBar();
    }, 300);
}

// ============================================
// PADECIMIENTOS (MÚLTIPLE)
// ============================================

function toggleAilment(ailment) {
    const button = event.target.closest('.option-card');
    
    if (ailment === 'ninguno') {
        selectedAilments = ['ninguno'];
        document.querySelectorAll('#screen-q20 .option-card').forEach(btn => {
            btn.classList.remove('selected');
        });
        button.classList.add('selected');
    } else {
        selectedAilments = selectedAilments.filter(a => a !== 'ninguno');
        
        if (selectedAilments.includes(ailment)) {
            selectedAilments = selectedAilments.filter(a => a !== ailment);
            button.classList.remove('selected');
        } else {
            selectedAilments.push(ailment);
            button.classList.add('selected');
        }
        
        document.querySelectorAll('#screen-q20 .option-card').forEach(btn => {
            if (btn.querySelector('span').textContent.includes('Ninguno')) {
                btn.classList.remove('selected');
            }
        });
    }
}

function confirmAilments() {
    if (selectedAilments.length === 0) {
        alert('Por favor selecciona al menos una opción');
        return;
    }
    userData.padecimientos = [...selectedAilments];
    currentScreen = 21;
    navigateToScreen('screen-q21');
    updateProgressBar();
}

// ============================================
// HISTORIAL FAMILIAR (MÚLTIPLE)
// ============================================

function toggleFamilyHistory(condition) {
    const button = event.target.closest('.option-card');
    
    if (condition === 'ninguno') {
        selectedFamilyHistory = ['ninguno'];
        document.querySelectorAll('#screen-q21 .option-card').forEach(btn => {
            btn.classList.remove('selected');
        });
        button.classList.add('selected');
    } else {
        selectedFamilyHistory = selectedFamilyHistory.filter(c => c !== 'ninguno');
        
        if (selectedFamilyHistory.includes(condition)) {
            selectedFamilyHistory = selectedFamilyHistory.filter(c => c !== condition);
            button.classList.remove('selected');
        } else {
            selectedFamilyHistory.push(condition);
            button.classList.add('selected');
        }
        
        document.querySelectorAll('#screen-q21 .option-card').forEach(btn => {
            if (btn.querySelector('span').textContent.includes('Ninguno')) {
                btn.classList.remove('selected');
            }
        });
    }
}

function confirmFamilyHistory() {
    if (selectedFamilyHistory.length === 0) {
        alert('Por favor selecciona al menos una opción');
        return;
    }
    userData.historialFamiliar = [...selectedFamilyHistory];
    currentScreen = 22;
    navigateToScreen('screen-q22');
    updateProgressBar();
}

// ============================================
// HÁBITOS
// ============================================

function selectCaffeine(caffeine) {
    userData.consumoCafeina = caffeine;
    animateSelection(event.target);
    setTimeout(() => {
        currentScreen = 23;
        navigateToScreen('screen-q23');
        updateProgressBar();
    }, 300);
}

function selectDiet(diet) {
    userData.tipoAlimentacion = diet;
    animateSelection(event.target);
    setTimeout(() => {
        currentScreen = 24;
        navigateToScreen('screen-q24');
        updateProgressBar();
    }, 300);
}

// ============================================
// OBJETIVOS (MÚLTIPLE - JERARQUIZADO - HASTA 3)
// ============================================

function toggleObjective(objective) {
    const button = event.target.closest('.option-card');
    const badge = button.querySelector('.objective-badge');
    const counter = document.getElementById('objectivesSelected');
    const btnContinue = document.getElementById('btnObjectivesContinue');
    
    // Si ya está seleccionado, deseleccionar
    if (selectedObjectives.includes(objective)) {
        selectedObjectives = selectedObjectives.filter(o => o !== objective);
        button.classList.remove('selected');
        badge.textContent = '';
    } else {
        // Si no hay espacio, no permitir
        if (selectedObjectives.length >= 3) {
            alert('Solo puedes seleccionar hasta 3 objetivos');
            return;
        }
        
        selectedObjectives.push(objective);
        button.classList.add('selected');
        
        // Asignar badge según orden
        const badges = ['1️⃣', '2️⃣', '3️⃣'];
        badge.textContent = badges[selectedObjectives.length - 1];
    }
    
    // Actualizar contador
    counter.textContent = selectedObjectives.length;
    
    // Habilitar botón si hay al menos 1 objetivo
    btnContinue.disabled = selectedObjectives.length === 0;
    
    // Re-numerar badges
    document.querySelectorAll('#screen-q24 .option-card.selected').forEach((btn, index) => {
        const bdg = btn.querySelector('.objective-badge');
        const badges = ['1️⃣', '2️⃣', '3️⃣'];
        bdg.textContent = badges[index];
    });
}

function confirmObjectives() {
    if (selectedObjectives.length === 0) {
        alert('Por favor selecciona al menos 1 objetivo');
        return;
    }
    userData.objetivos = [...selectedObjectives];
    currentScreen = 25;
    navigateToScreen('screen-contact');
    updateProgressBar();
}

// ============================================
// ENVÍO FINAL
// ============================================

async function submitQuiz() {
    const name = document.getElementById('inputName').value.trim();
    const whatsapp = document.getElementById('inputWhatsapp').value.trim();
    
    // Validaciones
    if (!name || name.length < 2) {
        alert('Por favor ingresa tu nombre');
        document.getElementById('inputName').focus();
        return;
    }
    
    if (!whatsapp || whatsapp.length !== 10 || !/^[0-9]{10}$/.test(whatsapp)) {
        alert('Por favor ingresa un WhatsApp válido de 10 dígitos');
        document.getElementById('inputWhatsapp').focus();
        return;
    }
    
    userData.nombre = name;
    userData.whatsapp = '+52' + whatsapp;
    userData.timestamp = new Date().toISOString();
    
    console.log('📊 Datos del usuario:', userData);
    
    // Mostrar pantalla de carga
    navigateToScreen('screen-loading');
    animateLoadingSteps();
    
    // Generar recomendaciones
    try {
        const recommendations = await generateRecommendations();
        console.log('✅ Recomendaciones generadas:', recommendations);
        
        // Guardar en BD (SIEMPRE)
        await saveToDatabase(recommendations);
        
        // Mostrar resultados
        displayResults(recommendations);
    } catch (error) {
        console.error('❌ Error:', error);
        
        // Ocultar loading
        const loadingScreen = document.getElementById('screen-loading');
        loadingScreen.innerHTML = `
            <div class="loading-content">
                <div class="logo-container" style="background: #E74C3C;">
                    <i class="fas fa-exclamation-triangle" style="color: white; font-size: 2.5rem;"></i>
                </div>
                <h2 class="loading-title" style="color: #E74C3C;">Error de Conexión</h2>
                <p class="loading-subtitle">
                    ${error.message || 'No pudimos conectar con nuestro sistema de IA. Por favor verifica tu conexión a internet e intenta de nuevo.'}
                </p>
                <button class="btn-primary" onclick="location.reload()" style="margin-top: 2rem;">
                    <i class="fas fa-redo"></i> Intentar de nuevo
                </button>
                <button class="btn-restart-final" onclick="location.reload()" style="margin-top: 1rem;">
                    <i class="fas fa-home"></i> Volver al inicio
                </button>
            </div>
        `;
    }
}

// ============================================
// ANIMACIÓN DE LOADING
// ============================================

function animateLoadingSteps() {
    const steps = document.querySelectorAll('.loading-step');
    
    setTimeout(() => {
        steps[0].classList.add('active');
        steps[0].querySelector('i').className = 'fas fa-check-circle';
    }, 800);
    
    setTimeout(() => {
        steps[1].classList.add('active');
        steps[1].querySelector('i').className = 'fas fa-check-circle';
    }, 1600);
    
    setTimeout(() => {
        steps[2].classList.add('active');
        steps[2].querySelector('i').className = 'fas fa-circle-notch fa-spin';
    }, 2400);
}

// ============================================
// GENERACIÓN DE RECOMENDACIONES CON IA
// ============================================

async function generateRecommendations() {
    // 1. Calcular puntuaciones con el motor de recomendación
    const scores = calculateScores(userData);
    
    // 2. Obtener productos recomendados
    const mainProduct = scores.ranked[0];
    const complementaryProducts = scores.ranked.slice(1, 4);
    
    console.log('🎯 Producto principal:', mainProduct.product.name);
    console.log('🔀 Productos complementarios:', complementaryProducts.map(p => p.product.name));
    
    // 3. Generar explicación personalizada con GPT-4o-mini
    const aiResponse = await callOpenAI(userData, mainProduct, complementaryProducts);
    
    return {
        mainProduct,
        complementaryProducts,
        aiExplanation: aiResponse.explanation,
        productReason: aiResponse.productReason || aiResponse.explanation,
        painPoints: aiResponse.painPoints,
        couponText: aiResponse.couponText,
        btnDeclineText: aiResponse.btnDeclineText,
        btnAcceptText: aiResponse.btnAcceptText
    };
}

// ============================================
// LLAMADA A OPENAI GPT-4O-MINI
// ============================================

async function callOpenAI(userData, mainProduct, complementaryProducts) {
    const prompt = buildAIPrompt(userData, mainProduct, complementaryProducts);
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: OPENAI_MODEL,
                messages: [
                    {
                        role: 'system',
                        content: 'Eres un experto en medicina funcional y adaptógenos con 20 años de experiencia. Tu rol es analizar perfiles de salud y crear recomendaciones ultra-personalizadas, empáticas y certeras. Hablas de forma directa, profesional pero cercana, sin ser condescendiente. Usas datos concretos del usuario para hacer sentir que realmente entiendes su situación.'
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                temperature: 0.7,
                max_tokens: 800
            })
        });
        
        if (!response.ok) {
            throw new Error(`OpenAI API error: ${response.status}`);
        }
        
        const data = await response.json();
        const aiText = data.choices[0].message.content;
        
        console.log('🤖 Respuesta de IA:', aiText);
        
        // Parsear la respuesta
        return parseAIResponse(aiText);
    } catch (error) {
        console.error('❌ Error en OpenAI:', error);
        throw new Error('No pudimos conectar con nuestro sistema de IA. Por favor intenta de nuevo.');
    }
}

function buildAIPrompt(userData, mainProduct, complementaryProducts) {
    return `Eres un experto médico funcional especializado en adaptógenos. Analiza este perfil COMPLETO y genera una recomendación ULTRA-PERSONALIZADA e IMPACTANTE:

**DATOS COMPLETOS DEL USUARIO:**
👤 Nombre: ${userData.nombre}
📊 Edad: ${userData.edad} | Sexo: ${userData.sexo}
⚖️ IMC: ${userData.imc} (Peso: ${userData.peso}kg, Altura: ${userData.altura}cm)

**PERFIL DE SALUD DETALLADO:**
😴 Sueño: ${userData.horasSueño} horas | Problemas: ${userData.problemasSueño}
⚡ Nivel de energía: ${userData.nivelEnergia}
🏃 Actividad física: ${userData.actividadFisica}
💧 Hidratación: ${userData.consumoAgua}
🚬 Hábitos: ${userData.habitos}

🧠 Estado Mental:
- Estrés: ${userData.nivelEstres}
- Ánimo: ${userData.estadoAnimo}
- Presión laboral: ${userData.presionLaboral}

💪 Salud Física:
- Dolores crónicos: ${userData.doloresCronicos}
- Digestión: ${userData.problemasDigestivos}
- Frecuencia enfermedades: ${userData.frecuenciaEnfermedades}
- Circulación: ${userData.problemasCirculacion}

🔥 Salud Hormonal/Sexual:
- Problemas hormonales: ${userData.problemasHormonales.join(', ') || 'ninguno'}
- Libido: ${userData.libido}

⚕️ Condiciones Médicas:
- Padecimientos actuales: ${userData.padecimientos.join(', ') || 'ninguno'}
- Historial familiar: ${userData.historialFamiliar.join(', ') || 'ninguno'}

☕ Hábitos Diarios:
- Cafeína: ${userData.consumoCafeina}
- Alimentación: ${userData.tipoAlimentacion}

🎯 OBJETIVOS PRIORITARIOS:
1️⃣ ${userData.objetivos[0]?.replace(/-/g, ' ').toUpperCase()}
${userData.objetivos[1] ? `2️⃣ ${userData.objetivos[1].replace(/-/g, ' ').toUpperCase()}` : ''}
${userData.objetivos[2] ? `3️⃣ ${userData.objetivos[2].replace(/-/g, ' ').toUpperCase()}` : ''}

**PRODUCTOS RECOMENDADOS POR EL SISTEMA:**
🌟 PRINCIPAL: ${mainProduct.product.name} ($${mainProduct.product.sale_price || mainProduct.product.regular_price} MXN)
🔀 COMPLEMENTARIOS: ${complementaryProducts.map(p => p.product.name).join(', ')}

**INSTRUCCIONES CRÍTICAS:**
Genera un JSON con una explicación TAN personalizada que ${userData.nombre} sienta que fue escrita ESPECÍFICAMENTE para él/ella. Debe ser IMPACTANTE y hacer que se identifique TOTALMENTE.

{
  "explanation": "Párrafo de 6-8 líneas MUY DETALLADO. Menciona: su nombre, edad exacta, IMC específico, sus 3 objetivos prioritarios, su nivel de estrés/sueño/energía, sus padecimientos si los tiene, y EXPLICA CON DETALLE por qué ${mainProduct.product.name.split(' ')[0]} es LA SOLUCIÓN PERFECTA para su situación ESPECÍFICA. Usa un tono directo, empático pero sin condescendencia. Haz que sienta que realmente entiendes su situación única.",
  
  "productReason": "2-3 líneas explicando cómo este producto ataca ESPECÍFICAMENTE los problemas de ${userData.nombre} basándote en sus respuestas del quiz (menciona datos concretos como su IMC, horas de sueño, nivel de estrés, etc.)",
  
  "painPoints": {
    "primary": "Pain point PRINCIPAL en 2-4 palabras (ej: 'estrés crónico diario', 'insomnio severo', 'sobrepeso y fatiga', 'baja energía constante')",
    "secondary": "Pain point SECUNDARIO en 2-4 palabras"
  },
  
  "couponText": "${userData.nombre}, sabemos que tu ${userData.objetivos[0]?.replace(/-/g, ' ')} está afectando tu calidad de vida. Te ofrecemos 10% de descuento para que empieces tu transformación HOY.",
  
  "btnDeclineText": "Texto creativo para botón de rechazo con psicología inversa basado en el pain point principal (ej: 'No quiero el cupón, prefiero seguir estresado/a sin energía todos los días')",
  
  "btnAcceptText": "Texto creativo para botón de aceptación con urgencia basado en la solución (ej: '¡Sí! Quiero mi 10% para al fin tener la energía que necesito')"
}

**IMPORTANTE:** 
- La "explanation" debe ser LARGA (6-8 líneas) y MUY específica
- Usa DATOS REALES del perfil (IMC ${userData.imc}, ${userData.horasSueño} de sueño, estrés ${userData.nivelEstres})
- Haz que ${userData.nombre} sienta que REALMENTE entiendes su situación
- Los botones deben ser CREATIVOS y usar pain points ESPECÍFICOS de su caso

RESPONDE SOLO CON EL JSON, SIN MARKDOWN NI TEXTO ADICIONAL.`;
}

function parseAIResponse(aiText) {
    try {
        // Intentar parsear JSON directo
        const json = JSON.parse(aiText);
        return json;
    } catch (e) {
        // Si falla, intentar extraer JSON del texto
        const jsonMatch = aiText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            try {
                return JSON.parse(jsonMatch[0]);
            } catch (e2) {
                console.error('Error parsing AI JSON:', e2);
                throw new Error('La IA generó una respuesta con formato inválido. Por favor intenta de nuevo.');
            }
        }
        
        throw new Error('No pudimos procesar la respuesta de la IA. Por favor intenta de nuevo.');
    }
}

// Función eliminada - TODO se genera con IA ahora

// ============================================
// GUARDAR EN BASE DE DATOS
// ============================================

async function saveToDatabase(recommendations) {
    const dbData = {
        // Contacto
        nombre: userData.nombre,
        whatsapp: userData.whatsapp,
        
        // Datos personales
        edad: userData.edad,
        sexo: userData.sexo,
        peso: userData.peso,
        altura: userData.altura,
        imc: userData.imc,
        
        // Sueño y energía
        horas_sueno: userData.horasSueño,
        nivel_energia: userData.nivelEnergia,
        problemas_sueno: userData.problemasSueño,
        
        // Estilo de vida
        actividad_fisica: userData.actividadFisica,
        consumo_agua: userData.consumoAgua,
        habitos_tabaco_alcohol: userData.habitos,
        
        // Estrés y mental
        nivel_estres: userData.nivelEstres,
        estado_animo: userData.estadoAnimo,
        presion_laboral: userData.presionLaboral,
        
        // Salud física
        dolores_cronicos: userData.doloresCronicos,
        problemas_digestivos: userData.problemasDigestivos,
        frecuencia_enfermedades: userData.frecuenciaEnfermedades,
        problemas_circulacion: userData.problemasCirculacion,
        
        // Salud hormonal
        problemas_hormonales: userData.problemasHormonales.join(', '),
        libido: userData.libido,
        padecimientos: userData.padecimientos.join(', '),
        
        // Historial
        historial_familiar: userData.historialFamiliar.join(', '),
        
        // Hábitos
        consumo_cafeina: userData.consumoCafeina,
        tipo_alimentacion: userData.tipoAlimentacion,
        
        // Objetivos
        objetivo_1: userData.objetivos[0] || '',
        objetivo_2: userData.objetivos[1] || '',
        objetivo_3: userData.objetivos[2] || '',
        
        // Recomendaciones
        producto_principal: recommendations.mainProduct.product.name,
        producto_principal_precio: recommendations.mainProduct.product.sale_price || recommendations.mainProduct.product.regular_price,
        producto_complementario_1: recommendations.complementaryProducts[0]?.product.name || '',
        producto_complementario_2: recommendations.complementaryProducts[1]?.product.name || '',
        producto_complementario_3: recommendations.complementaryProducts[2]?.product.name || '',
        
        // IA
        explicacion_ia: recommendations.aiExplanation,
        pain_point_principal: recommendations.painPoints.primary,
        pain_point_secundario: recommendations.painPoints.secondary,
        
        // Conversión (se actualizará luego)
        acepto_cupon: null,
        timestamp: userData.timestamp
    };
    
    try {
        const response = await fetch('/tables/quiz_responses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dbData)
        });
        
        if (!response.ok) {
            throw new Error(`DB save failed: ${response.status}`);
        }
        
        const savedData = await response.json();
        console.log('✅ Datos guardados en BD:', savedData);
        
        // Guardar ID para actualizar después
        userData.dbRecordId = savedData.id;
        
        return savedData;
    } catch (error) {
        console.error('❌ Error guardando en BD:', error);
        // No detener el flujo si falla el guardado
    }
}

// ============================================
// MOSTRAR RESULTADOS
// ============================================

function displayResults(recommendations) {
    // Explicación IA
    document.getElementById('aiExplanation').textContent = recommendations.aiExplanation;
    
    // Guardar productReason para usarlo después
    window.currentRecommendations = recommendations;
    
    // Producto principal
    const mainProductHTML = `
        <a href="${recommendations.mainProduct.product.permalink}" target="_blank" class="product-link">
            <div class="product-image-container">
                ${recommendations.mainProduct.product.sale_price ? '<span class="discount-badge">¡OFERTA!</span>' : ''}
                <img src="${recommendations.mainProduct.product.images[0]}" alt="${recommendations.mainProduct.product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/300x200?text=Producto'">
            </div>
            <div class="product-info">
                <h3 class="product-name">${recommendations.mainProduct.product.name}</h3>
                <div class="product-price">
                    ${recommendations.mainProduct.product.sale_price ? 
                        `<span class="price-original">$${recommendations.mainProduct.product.regular_price} MXN</span>
                         <span class="price-sale">$${recommendations.mainProduct.product.sale_price} MXN</span>` :
                        `<span class="price-sale">$${recommendations.mainProduct.product.regular_price} MXN</span>`
                    }
                </div>
                <p class="product-description"><strong>¿Por qué este producto para ti?</strong><br>${recommendations.productReason || recommendations.mainProduct.reason}</p>
                <span class="btn-view-product">Ver Producto <i class="fas fa-arrow-right"></i></span>
            </div>
        </a>
    `;
    document.getElementById('mainProduct').innerHTML = mainProductHTML;
    
    // Productos complementarios
    let complementaryHTML = '';
    recommendations.complementaryProducts.forEach(item => {
        complementaryHTML += `
            <a href="${item.product.permalink}" target="_blank" class="product-card">
                <div class="product-image-small-container">
                    ${item.product.sale_price ? '<span class="discount-badge-small">OFERTA</span>' : ''}
                    <img src="${item.product.images[0]}" alt="${item.product.name}" class="product-image-small" onerror="this.src='https://via.placeholder.com/150?text=Producto'">
                </div>
                <h4 class="product-name-small">${item.product.name.split(' ').slice(0, 3).join(' ')}</h4>
                <div class="product-price-small">
                    ${item.product.sale_price ?
                        `<span class="price-original-small">$${item.product.regular_price}</span>
                         <span class="price-sale-small">$${item.product.sale_price} MXN</span>` :
                        `<span class="price-sale-small">$${item.product.regular_price} MXN</span>`
                    }
                </div>
                <p class="product-reason"><strong>Complementa porque:</strong> ${item.reason}</p>
                <span class="btn-view-small">Ver más <i class="fas fa-external-link-alt"></i></span>
            </a>
        `;
    });
    document.getElementById('complementaryProducts').innerHTML = complementaryHTML;
    
    // Cupón con IA
    document.getElementById('couponText').textContent = recommendations.couponText;
    document.getElementById('btnDecline').innerHTML = recommendations.btnDeclineText;
    document.getElementById('btnAccept').innerHTML = recommendations.btnAcceptText;
    
    // Mostrar resultados
    navigateToScreen('screen-results');
}

// ============================================
// ACCIONES DE CUPÓN
// ============================================

async function declineCoupon() {
    // Guardar decisión en BD
    await updateCouponDecision(false);
    
    // Ocultar sección de cupón
    document.getElementById('couponSection').style.display = 'none';
    
    // Mostrar mensaje
    alert('¡Entendido! Puedes comprar cuando estés listo en Adaptoheal.com');
}

async function acceptCoupon() {
    // Guardar decisión en BD
    await updateCouponDecision(true);
    
    // Mostrar cupón
    document.getElementById('couponSection').innerHTML = `
        <div class="coupon-success">
            <i class="fas fa-check-circle"></i>
            <h3>¡Cupón Activado!</h3>
            <div class="coupon-code">ADAPTOHEAL10</div>
            <p>Usa el código <strong>ADAPTOHEAL10</strong> en tu compra para obtener 10% de descuento</p>
            <p class="coupon-note">📧 También lo enviamos a tu WhatsApp: ${userData.whatsapp}</p>
            <a href="https://adaptohealmx.com/shop" target="_blank" class="btn-shop-now">
                Ir a la tienda <i class="fas fa-shopping-cart"></i>
            </a>
        </div>
    `;
    
    // Simular envío de email/WhatsApp (en producción, esto se haría en el backend)
    console.log('📧 Enviando cupón a:', userData.whatsapp);
}

async function updateCouponDecision(accepted) {
    if (!userData.dbRecordId) return;
    
    try {
        await fetch(`/tables/quiz_responses/${userData.dbRecordId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                acepto_cupon: accepted
            })
        });
        console.log(`✅ Decisión de cupón actualizada: ${accepted}`);
    } catch (error) {
        console.error('❌ Error actualizando decisión:', error);
    }
}

// ============================================
// UTILIDADES
// ============================================

function animateSelection(element) {
    // Remover selección previa de todos los botones en el mismo contenedor
    const parent = element.closest('.options-grid');
    if (parent) {
        parent.querySelectorAll('.option-card').forEach(card => {
            card.classList.remove('selected');
        });
    }
    
    // Agregar selección al elemento actual
    element.classList.add('selected');
    element.style.transform = 'scale(0.95)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 150);
}

// ============================================
// LOG INICIAL
// ============================================

console.log('%c🌿 ADAPTOHEAL QUIZ 2.0 ', 'background: #2D5016; color: #F5F1E8; padding: 10px; font-size: 20px; font-weight: bold;');
console.log('%c✨ Sistema con IA GPT-4o-mini', 'color: #6B8E23; font-size: 14px;');
console.log('%c📊 24 preguntas médicas', 'color: #6B8E23; font-size: 14px;');
console.log('%c🎯 Recomendaciones ultra-personalizadas', 'color: #6B8E23; font-size: 14px;');
