// ============================================
// MOTOR DE RECOMENDACIÓN INTELIGENTE
// Sistema médico con 24 variables + contraindicaciones
// ============================================

function calculateScores(userData) {
    const scores = {};
    const contraindications = [];
    
    // Inicializar todos los productos con score 0
    Object.keys(productsDatabase).forEach(slug => {
        scores[slug] = {
            score: 0,
            reasons: [],
            contraindicated: false
        };
    });
    
    console.log('🔍 Calculando puntuaciones para:', userData.nombre);
    
    // ============================================
    // ANÁLISIS POR CATEGORÍAS
    // ============================================
    
    // === DATOS PERSONALES ===
    analyzeIMC(userData, scores);
    analyzeAgeGender(userData, scores);
    
    // === SUEÑO Y ENERGÍA ===
    analyzeSleep(userData, scores);
    analyzeEnergy(userData, scores);
    
    // === ESTILO DE VIDA ===
    analyzeActivity(userData, scores);
    analyzeWaterHabits(userData, scores);
    
    // === ESTRÉS Y MENTAL ===
    analyzeStress(userData, scores);
    analyzeMood(userData, scores);
    analyzeWorkPressure(userData, scores);
    
    // === SALUD FÍSICA ===
    analyzePain(userData, scores);
    analyzeDigestion(userData, scores);
    analyzeImmunity(userData, scores);
    analyzeCirculation(userData, scores);
    
    // === SALUD HORMONAL Y SEXUAL ===
    analyzeHormones(userData, scores);
    analyzeLibido(userData, scores);
    
    // === PADECIMIENTOS Y CONTRAIND ICACIONES ===
    analyzeAilments(userData, scores, contraindications);
    analyzeFamilyHistory(userData, scores);
    
    // === HÁBITOS ===
    analyzeCaffeine(userData, scores);
    analyzeDiet(userData, scores);
    
    // === OBJETIVOS (MÁS IMPORTANTE) ===
    analyzeObjectives(userData, scores);
    
    // ============================================
    // APLICAR CONTRAIND ICACIONES
    // ============================================
    applyContraindications(userData, scores, contraindications);
    
    // ============================================
    // RANKEAR Y RETORNAR
    // ============================================
    const ranked = rankProducts(scores);
    
    console.log('🎯 Top 5 productos:', ranked.slice(0, 5).map(p => `${p.product.name} (${p.totalScore} pts)`));
    
    return {
        scores,
        ranked,
        contraindications
    };
}

// ============================================
// ANÁLISIS IMC
// ============================================

function analyzeIMC(userData, scores) {
    const imc = userData.imc;
    
    if (imc < 18.5) {
        // Bajo peso - necesita nutrientes
        addScore(scores, 'maca', 15, 'Tu IMC indica que necesitas mejorar tu peso y energía');
        addScore(scores, 'suma', 12, 'Ayuda a ganar masa muscular saludable');
        addScore(scores, 'cordyceps', 10, 'Mejora absorción de nutrientes');
    } else if (imc >= 25 && imc < 30) {
        // Sobrepeso
        addScore(scores, 'chitosan', 18, 'Tu IMC indica necesidad de control de peso');
        addScore(scores, 'yerba-mate', 15, 'Acelera metabolismo');
        addScore(scores, 'te-verde', 12, 'Antioxidante y termogénico');
        addScore(scores, 'garcinia', 12, 'Control de apetito');
    } else if (imc >= 30) {
        // Obesidad
        addScore(scores, 'chitosan', 25, 'Tu IMC indica obesidad - urgente control de peso');
        addScore(scores, 'garcinia', 20, 'Bloqueador de grasa natural');
        addScore(scores, 'yerba-mate', 18, 'Quema grasa activa');
        addScore(scores, 'te-verde', 15, 'Metabolismo y antioxidantes');
        addScore(scores, 'carnitina', 15, 'Transforma grasa en energía');
    }
}

// ============================================
// ANÁLISIS EDAD Y SEXO
// ============================================

function analyzeAgeGender(userData, scores) {
    const edad = userData.edad;
    const sexo = userData.sexo;
    
    // Hombres 45+
    if (sexo === 'Masculino' && (edad === '46-55' || edad === '56-65' || edad === '66+')) {
        addScore(scores, 'saw-palmetto', 20, 'Hombres 45+ necesitan apoyo prostático');
        addScore(scores, 'tribulus', 15, 'Mantiene testosterona saludable');
        addScore(scores, 'maca', 12, 'Vitalidad masculina');
    }
    
    // Mujeres 45+
    if (sexo === 'Femenino' && (edad === '46-55' || edad === '56-65' || edad === '66+')) {
        addScore(scores, 'sauzgatillo', 18, 'Balance hormonal en menopausia');
        addScore(scores, 'dong-quai', 15, 'Regulador hormonal femenino');
        addScore(scores, 'trebol-rojo', 15, 'Sofocos y síntomas de menopausia');
    }
    
    // Adultos mayores (66+)
    if (edad === '66+') {
        addScore(scores, 'ginkgo', 18, 'Memoria y circulación cerebral');
        addScore(scores, 'colageno', 15, 'Articulaciones y piel');
        addScore(scores, 'coq10', 15, 'Energía celular');
        addScore(scores, 'curcuma', 12, 'Antiinflamatorio natural');
    }
}

// ============================================
// ANÁLISIS SUEÑO
// ============================================

function analyzeSleep(userData, scores) {
    const sleep = userData.horasSueño;
    const problems = userData.problemasSueño;
    
    // Horas insuficientes
    if (sleep === 'menos-5' || sleep === '5-6') {
        addScore(scores, 'ashwagandha', 22, `Duermes ${sleep === 'menos-5' ? 'muy poco' : 'insuficiente'} - necesitas apoyo para sueño`);
        addScore(scores, 'reishi', 18, 'Mejora calidad de sueño profundo');
        addScore(scores, 'melissa', 15, 'Relaja y facilita el sueño');
        addScore(scores, 'magnesio', 15, 'Mineral esencial para dormir bien');
    }
    
    // Problemas específicos
    if (problems === 'insomnio') {
        addScore(scores, 'ashwagandha', 25, 'Combate el insomnio efectivamente');
        addScore(scores, '5htp', 20, 'Precursor de serotonina y melatonina');
        addScore(scores, 'melissa', 18, 'Calma la mente para dormir');
        addScore(scores, 'valeriana', 15, 'Inductor natural del sueño');
    } else if (problems === 'interrupciones') {
        addScore(scores, 'reishi', 20, 'Sueño profundo sin interrupciones');
        addScore(scores, 'magnesio', 18, 'Relaja músculos y mente');
        addScore(scores, 'ashwagandha', 15, 'Reduce despertares nocturnos');
    } else if (problems === 'calidad') {
        addScore(scores, 'reishi', 22, 'Mejora calidad del descanso');
        addScore(scores, 'ashwagandha', 18, 'Sueño reparador');
        addScore(scores, '5htp', 15, 'Sueño más profundo');
    }
}

// ============================================
// ANÁLISIS ENERGÍA
// ============================================

function analyzeEnergy(userData, scores) {
    const energy = userData.nivelEnergia;
    
    if (energy === 'muy-bajo' || energy === 'bajo') {
        addScore(scores, 'rhodiola', 25, `Tu nivel de energía es ${energy === 'muy-bajo' ? 'crítico' : 'bajo'} - necesitas estimulante natural`);
        addScore(scores, 'cordyceps', 22, 'Energía sostenida sin estimulantes');
        addScore(scores, 'ginseng-panax', 20, 'Revitaliza profundamente');
        addScore(scores, 'ginseng-siberiano', 18, 'Energía física y mental');
        addScore(scores, 'maca', 15, 'Vitalidad y resistencia');
        addScore(scores, 'coq10', 15, 'Energía celular');
    }
}

// ============================================
// ANÁLISIS ACTIVIDAD FÍSICA
// ============================================

function analyzeActivity(userData, scores) {
    const activity = userData.actividadFisica;
    
    if (activity === 'sedentario') {
        addScore(scores, 'ginseng-panax', 18, 'Sedentarismo - necesitas activar metabolismo');
        addScore(scores, 'rhodiola', 15, 'Energía para moverte más');
        addScore(scores, 'yerba-mate', 12, 'Acelera metabolismo');
        addScore(scores, 'chitosan', 10, 'Control de peso por inactividad');
    } else if (activity === 'deportista' || activity === 'moderado') {
        addScore(scores, 'cordyceps', 25, 'Deportistas necesitan máximo rendimiento');
        addScore(scores, 'rhodiola', 20, 'Resistencia y recuperación');
        addScore(scores, 'leuzea', 18, 'Fuerza muscular');
        addScore(scores, 'tribulus', 15, 'Testosterona y masa muscular');
        addScore(scores, 'colageno', 12, 'Protege articulaciones');
        addScore(scores, 'msm', 12, 'Recuperación muscular');
        addScore(scores, 'ginseng-siberiano', 10, 'Energía deportiva');
    }
}

// ============================================
// ANÁLISIS AGUA Y HÁBITOS
// ============================================

function analyzeWaterHabits(userData, scores) {
    const water = userData.consumoAgua;
    const habits = userData.habitos;
    
    // Agua insuficiente
    if (water === 'poco') {
        addScore(scores, 'espirulina', 10, 'Deshidratación - necesitas más nutrientes');
        addScore(scores, 'magnesio', 8, 'Mejora hidratación celular');
    }
    
    // Tabaco/alcohol
    if (habits === 'ambos' || habits === 'alcohol' || habits === 'tabaco') {
        addScore(scores, 'cardo-mariano', 20, `${habits === 'ambos' ? 'Alcohol y tabaco' : habits === 'alcohol' ? 'Alcohol' : 'Tabaco'} - necesitas protección hepática`);
        addScore(scores, 'curcuma', 15, 'Desintoxica hígado');
        addScore(scores, 'te-verde', 12, 'Antioxidante potente');
        addScore(scores, 'ginkgo', 10, 'Mejora circulación afectada');
    }
}

// ============================================
// ANÁLISIS ESTRÉS
// ============================================

function analyzeStress(userData, scores) {
    const stress = userData.nivelEstres;
    
    if (stress === 'muy-alto' || stress === 'alto') {
        addScore(scores, 'ashwagandha', 30, `Estrés ${stress === 'muy-alto' ? 'crítico' : 'alto'} - adaptógeno #1 anti-estrés`);
        addScore(scores, 'rhodiola', 25, 'Combate estrés crónico');
        addScore(scores, 'reishi', 22, 'Calma profunda y balance');
        addScore(scores, 'melissa', 18, 'Ansiolítico natural');
        addScore(scores, 'magnesio', 18, 'Relaja sistema nervioso');
        addScore(scores, 'schizandra', 15, 'Adaptógeno anti-estrés');
    }
}

// ============================================
// ANÁLISIS ESTADO DE ÁNIMO
// ============================================

function analyzeMood(userData, scores) {
    const mood = userData.estadoAnimo;
    
    if (mood === 'bajo' || mood === 'variable') {
        addScore(scores, '5htp', 22, `Estado de ánimo ${mood === 'bajo' ? 'deprimido' : 'inestable'} - necesitas serotonina`);
        addScore(scores, 'rhodiola', 20, 'Mejora humor y motivación');
        addScore(scores, 'ashwagandha', 18, 'Equilibra emociones');
        addScore(scores, 'albahaca-sagrada', 15, 'Bienestar emocional');
        addScore(scores, 'ginkgo', 12, 'Circulación cerebral y ánimo');
    }
}

// ============================================
// ANÁLISIS PRESIÓN LABORAL
// ============================================

function analyzeWorkPressure(userData, scores) {
    const pressure = userData.presionLaboral;
    
    if (pressure === 'alta' || pressure === 'moderada') {
        addScore(scores, 'rhodiola', 20, `Presión laboral ${pressure} - necesitas resistencia al estrés`);
        addScore(scores, 'ashwagandha', 18, 'Maneja estrés laboral');
        addScore(scores, 'ginseng-panax', 15, 'Rendimiento mental bajo presión');
        addScore(scores, 'schizandra', 12, 'Concentración en trabajo demandante');
    }
}

// ============================================
// ANÁLISIS DOLOR
// ============================================

function analyzePain(userData, scores) {
    const pain = userData.doloresCronicos;
    
    if (pain === 'articulaciones') {
        addScore(scores, 'curcuma', 25, 'Dolor articular - antiinflamatorio potente');
        addScore(scores, 'colageno', 20, 'Regenera cartílago');
        addScore(scores, 'msm', 18, 'Azufre para articulaciones');
        addScore(scores, 'boswellia', 15, 'Dolor e inflamación');
    } else if (pain === 'espalda' || pain === 'muscular') {
        addScore(scores, 'msm', 20, 'Dolor muscular - recuperación');
        addScore(scores, 'curcuma', 18, 'Antiinflamatorio natural');
        addScore(scores, 'magnesio', 15, 'Relaja músculos');
        addScore(scores, 'colageno', 12, 'Tejido conectivo');
    } else if (pain === 'migraña') {
        addScore(scores, 'magnesio', 22, 'Migrañas - prevención efectiva');
        addScore(scores, 'feverfew', 18, 'Específico para migrañas');
        addScore(scores, 'ginkgo', 15, 'Circulación cerebral');
        addScore(scores, 'coq10', 12, 'Energía celular cerebral');
    }
}

// ============================================
// ANÁLISIS DIGESTIÓN
// ============================================

function analyzeDigestion(userData, scores) {
    const digestion = userData.problemasDigestivos;
    
    if (digestion === 'gastritis') {
        addScore(scores, 'regaliz', 20, 'Gastritis - protege mucosa gástrica');
        addScore(scores, 'aloe-vera', 18, 'Cicatriza estómago');
        addScore(scores, 'jengibre', 15, 'Digestivo y antiinflamatorio');
    } else if (digestion === 'intestino') {
        addScore(scores, 'probioticos', 22, 'Intestino irritable - restaura flora');
        addScore(scores, 'psyllium', 18, 'Fibra soluble reguladora');
        addScore(scores, 'aloe-vera', 15, 'Antiinflamatorio intestinal');
    } else if (digestion === 'estreñimiento') {
        addScore(scores, 'psyllium', 25, 'Estreñimiento - fibra natural');
        addScore(scores, 'aloe-vera', 18, 'Laxante suave');
        addScore(scores, 'magnesio', 15, 'Regula tránsito intestinal');
    }
}

// ============================================
// ANÁLISIS INMUNIDAD
// ============================================

function analyzeImmunity(userData, scores) {
    const illness = userData.frecuenciaEnfermedades;
    
    if (illness === 'frecuente' || illness === 'ocasional') {
        addScore(scores, 'astragalus', 25, `Te enfermas ${illness === 'frecuente' ? 'muy seguido' : 'regularmente'} - necesitas inmunidad`);
        addScore(scores, 'reishi', 22, 'Fortalece sistema inmune');
        addScore(scores, 'equinacea', 20, 'Previene infecciones');
        addScore(scores, 'elderberry', 18, 'Antiviral natural');
        addScore(scores, 'vitamina-c', 15, 'Inmunidad básica');
        addScore(scores, 'zinc', 15, 'Mineral inmune');
    }
}

// ============================================
// ANÁLISIS CIRCULACIÓN
// ============================================

function analyzeCirculation(userData, scores) {
    const circulation = userData.problemasCirculacion;
    
    if (circulation === 'si' || circulation === 'a-veces') {
        addScore(scores, 'ginkgo', 25, 'Problemas circulatorios - mejora flujo sanguíneo');
        addScore(scores, 'espino-blanco', 22, 'Circulación y presión arterial');
        addScore(scores, 'ajo', 18, 'Fluidifica sangre');
        addScore(scores, 'castaño-indias', 15, 'Várices y piernas pesadas');
    }
}

// ============================================
// ANÁLISIS HORMONAS
// ============================================

function analyzeHormones(userData, scores) {
    const hormones = userData.problemasHormonales;
    
    hormones.forEach(problem => {
        if (problem === 'menopausia') {
            addScore(scores, 'sauzgatillo', 25, 'Menopausia - regulador hormonal femenino');
            addScore(scores, 'dong-quai', 22, 'Sofocos y cambios hormonales');
            addScore(scores, 'trebol-rojo', 20, 'Fitoestrógenos naturales');
            addScore(scores, 'maca', 18, 'Balance hormonal menopausia');
        } else if (problem === 'menstruacion') {
            addScore(scores, 'sauzgatillo', 22, 'Ciclos irregulares - normaliza menstruación');
            addScore(scores, 'dong-quai', 18, 'Regula período menstrual');
            addScore(scores, 'trebol-rojo', 15, 'Balance estrogénico');
        } else if (problem === 'tiroides') {
            addScore(scores, 'ashwagandha', 20, 'Tiroides - regula función tiroidea');
            addScore(scores, 'yodo', 18, 'Nutriente esencial tiroides');
            addScore(scores, 'selenio', 15, 'Conversión T4 a T3');
        } else if (problem === 'testosterona') {
            addScore(scores, 'tribulus', 25, 'Testosterona baja - estimula producción');
            addScore(scores, 'maca', 20, 'Vitalidad masculina');
            addScore(scores, 'saw-palmetto', 18, 'Salud prostática y hormonal');
            addScore(scores, 'tongkat-ali', 18, 'Testosterona natural');
        }
    });
}

// ============================================
// ANÁLISIS LIBIDO
// ============================================

function analyzeLibido(userData, scores) {
    const libido = userData.libido;
    
    if (libido === 'bajo' || libido === 'disminuido') {
        if (userData.sexo === 'Masculino') {
            addScore(scores, 'maca', 25, 'Libido baja masculina - afrodisíaco natural');
            addScore(scores, 'tribulus', 22, 'Testosterona y deseo');
            addScore(scores, 'tongkat-ali', 20, 'Potencia sexual masculina');
            addScore(scores, 'ginseng-panax', 18, 'Vigor sexual');
        } else {
            addScore(scores, 'maca', 25, 'Libido baja femenina - deseo sexual');
            addScore(scores, 'damiana', 20, 'Afrodisíaco femenino');
            addScore(scores, 'dong-quai', 18, 'Vitalidad sexual femenina');
            addScore(scores, 'trebol-rojo', 15, 'Balance hormonal');
        }
    }
}

// ============================================
// ANÁLISIS PADECIMIENTOS Y CONTRAIND ICACIONES
// ============================================

function analyzeAilments(userData, scores, contraindications) {
    const ailments = userData.padecimientos;
    
    ailments.forEach(ailment => {
        if (ailment === 'diabetes') {
            // CONTRAIND ICACIONES
            if (scores['ginseng-siberiano']) {
                scores['ginseng-siberiano'].contraindicated = true;
                scores['ginseng-siberiano'].score = -9999;
            }
            contraindications.push('Diabetes: precaución con Ginseng Siberiano');
            
            // RECOMENDADOS
            addScore(scores, 'curcuma', 20, 'Diabetes - antiinflamatorio y control glucosa');
            addScore(scores, 'magnesio', 18, 'Mejora sensibilidad a insulina');
        } else if (ailment === 'hipertension') {
            // CONTRAIND ICACIONES
            if (scores['ginseng-panax']) {
                scores['ginseng-panax'].contraindicated = true;
                scores['ginseng-panax'].score = -9999;
            }
            if (scores['rhodiola']) {
                scores['rhodiola'].contraindicated = true;
                scores['rhodiola'].score = -9999;
            }
            contraindications.push('Hipertensión: evitamos Ginseng Panax y Rhodiola');
            
            // RECOMENDADOS
            addScore(scores, 'espino-blanco', 25, 'Hipertensión - reduce presión arterial');
            addScore(scores, 'ajo', 20, 'Hipotensor natural');
            addScore(scores, 'coq10', 18, 'Salud cardiovascular');
            addScore(scores, 'magnesio', 15, 'Relaja vasos sanguíneos');
        } else if (ailment === 'tiroides') {
            addScore(scores, 'ashwagandha', 20, 'Problemas de tiroides - regula función');
            addScore(scores, 'selenio', 18, 'Conversión hormonal tiroidea');
            addScore(scores, 'yodo', 15, 'Nutriente esencial');
        } else if (ailment === 'artritis') {
            addScore(scores, 'curcuma', 25, 'Artritis - potente antiinflamatorio');
            addScore(scores, 'boswellia', 22, 'Inflamación articular');
            addScore(scores, 'colageno', 20, 'Regenera cartílago');
            addScore(scores, 'msm', 18, 'Azufre para articulaciones');
        } else if (ailment === 'ansiedad') {
            addScore(scores, 'ashwagandha', 28, 'Ansiedad clínica - ansiolítico natural');
            addScore(scores, '5htp', 25, 'Serotonina y calma');
            addScore(scores, 'melissa', 22, 'Reduce ansiedad');
            addScore(scores, 'magnesio', 20, 'Relaja sistema nervioso');
            addScore(scores, 'l-teanina', 18, 'Calma sin sedación');
        } else if (ailment === 'higado') {
            addScore(scores, 'cardo-mariano', 28, 'Hígado graso - protector hepático #1');
            addScore(scores, 'curcuma', 22, 'Desintoxica hígado');
            addScore(scores, 'alcachofa', 20, 'Regeneración hepática');
            addScore(scores, 'diente-leon', 18, 'Depuración hepática');
        } else if (ailment === 'colesterol') {
            addScore(scores, 'ajo', 25, 'Colesterol alto - reduce LDL');
            addScore(scores, 'levadura-arroz-rojo', 22, 'Estatina natural');
            addScore(scores, 'omega3', 20, 'Perfil lipídico saludable');
            addScore(scores, 'psyllium', 18, 'Fibra que atrapa colesterol');
        }
    });
}

// ============================================
// ANÁLISIS HISTORIAL FAMILIAR
// ============================================

function analyzeFamilyHistory(userData, scores) {
    const history = userData.historialFamiliar;
    
    history.forEach(condition => {
        if (condition === 'diabetes') {
            addScore(scores, 'gimnema', 15, 'Antecedentes de diabetes - prevención');
            addScore(scores, 'canela', 12, 'Control glucosa preventivo');
        } else if (condition === 'cancer') {
            addScore(scores, 'reishi', 18, 'Antecedentes de cáncer - inmunomodulador');
            addScore(scores, 'curcuma', 15, 'Antiinflamatorio preventivo');
            addScore(scores, 'te-verde', 12, 'Antioxidante potente');
        } else if (condition === 'alzheimer') {
            addScore(scores, 'ginkgo', 20, 'Antecedentes de Alzheimer - neuroprotector');
            addScore(scores, 'lions-mane', 18, 'Regeneración neuronal');
            addScore(scores, 'curcuma', 15, 'Protege cerebro');
            addScore(scores, 'omega3', 12, 'Salud cerebral');
        } else if (condition === 'cardiaco') {
            addScore(scores, 'coq10', 18, 'Antecedentes cardíacos - protección cardiovascular');
            addScore(scores, 'espino-blanco', 15, 'Fortalece corazón');
            addScore(scores, 'ajo', 12, 'Salud vascular');
        } else if (condition === 'obesidad') {
            addScore(scores, 'chitosan', 15, 'Antecedentes de obesidad - control preventivo');
            addScore(scores, 'garcinia', 12, 'Metabolismo saludable');
        } else if (condition === 'hipertension') {
            addScore(scores, 'espino-blanco', 15, 'Antecedentes de hipertensión - prevención');
            addScore(scores, 'ajo', 12, 'Presión arterial saludable');
            addScore(scores, 'coq10', 10, 'Cardiovascular preventivo');
        }
    });
}

// ============================================
// ANÁLISIS CAFEÍNA
// ============================================

function analyzeCaffeine(userData, scores) {
    const caffeine = userData.consumoCafeina;
    
    if (caffeine === '5+' || caffeine === '3-4') {
        addScore(scores, 'l-teanina', 18, `Consumes mucha cafeína (${caffeine} tazas) - necesitas balance`);
        addScore(scores, 'magnesio', 15, 'Compensa efectos de cafeína');
        addScore(scores, 'ashwagandha', 12, 'Reduce ansiedad por cafeína');
    }
}

// ============================================
// ANÁLISIS DIETA
// ============================================

function analyzeDiet(userData, scores) {
    const diet = userData.tipoAlimentacion;
    
    if (diet === 'desbalanceada') {
        addScore(scores, 'multivitaminico', 20, 'Dieta desbalanceada - necesitas nutrientes');
        addScore(scores, 'omega3', 15, 'Grasas saludables esenciales');
        addScore(scores, 'probioticos', 12, 'Salud digestiva');
        addScore(scores, 'espirulina', 12, 'Superalimento completo');
    } else if (diet === 'especial') {
        addScore(scores, 'multivitaminico', 15, 'Dieta especial - complementa nutrientes');
        addScore(scores, 'b12', 12, 'B12 si eres vegano');
        addScore(scores, 'hierro', 10, 'Prevención de deficiencias');
    }
}

// ============================================
// ANÁLISIS OBJETIVOS (MÁS IMPORTANTE - TRIPLE PESO)
// ============================================

function analyzeObjectives(userData, scores) {
    const objectives = userData.objetivos;
    
    // Objetivos jerarquizados: 1° más importante
    const weights = [30, 20, 10]; // Prioridad 1, 2, 3
    
    objectives.forEach((objective, index) => {
        const weight = weights[index] || 5;
        
        switch (objective) {
            case 'reducir-estres':
                addScore(scores, 'ashwagandha', weight, `Objetivo #${index+1}: Reducir estrés`);
                addScore(scores, 'rhodiola', weight * 0.8, 'Anti-estrés efectivo');
                addScore(scores, 'reishi', weight * 0.7, 'Calma y balance');
                break;
                
            case 'mejorar-sueño':
                addScore(scores, 'ashwagandha', weight, `Objetivo #${index+1}: Mejorar sueño`);
                addScore(scores, 'reishi', weight * 0.9, 'Sueño profundo');
                addScore(scores, 'melissa', weight * 0.7, 'Facilita dormir');
                addScore(scores, '5htp', weight * 0.6, 'Serotonina para sueño');
                break;
                
            case 'aumentar-energia':
                addScore(scores, 'rhodiola', weight, `Objetivo #${index+1}: Aumentar energía`);
                addScore(scores, 'cordyceps', weight * 0.9, 'Energía sostenida');
                addScore(scores, 'ginseng-panax', weight * 0.8, 'Revitaliza');
                addScore(scores, 'maca', weight * 0.7, 'Vitalidad');
                break;
                
            case 'memoria-foco':
                addScore(scores, 'ginkgo', weight, `Objetivo #${index+1}: Memoria y concentración`);
                addScore(scores, 'lions-mane', weight * 0.9, 'Regeneración neuronal');
                addScore(scores, 'bacopa', weight * 0.8, 'Memoria y aprendizaje');
                addScore(scores, 'rhodiola', weight * 0.7, 'Claridad mental');
                break;
                
            case 'sistema-inmune':
                addScore(scores, 'astragalus', weight, `Objetivo #${index+1}: Sistema inmune`);
                addScore(scores, 'reishi', weight * 0.9, 'Inmunomodulador');
                addScore(scores, 'equinacea', weight * 0.8, 'Prevención');
                break;
                
            case 'rendimiento-fisico':
                addScore(scores, 'cordyceps', weight, `Objetivo #${index+1}: Rendimiento físico`);
                addScore(scores, 'rhodiola', weight * 0.9, 'Resistencia');
                addScore(scores, 'leuzea', weight * 0.8, 'Fuerza muscular');
                addScore(scores, 'tribulus', weight * 0.7, 'Testosterona deportiva');
                break;
                
            case 'balance-hormonal':
                if (userData.sexo === 'Femenino') {
                    addScore(scores, 'sauzgatillo', weight, `Objetivo #${index+1}: Balance hormonal femenino`);
                    addScore(scores, 'dong-quai', weight * 0.9, 'Regulador hormonal');
                    addScore(scores, 'maca', weight * 0.7, 'Balance natural');
                } else {
                    addScore(scores, 'tribulus', weight, `Objetivo #${index+1}: Balance hormonal masculino`);
                    addScore(scores, 'maca', weight * 0.9, 'Testosterona natural');
                    addScore(scores, 'tongkat-ali', weight * 0.8, 'Hormonal masculino');
                }
                break;
                
            case 'libido':
                addScore(scores, 'maca', weight, `Objetivo #${index+1}: Mejorar libido`);
                if (userData.sexo === 'Masculino') {
                    addScore(scores, 'tribulus', weight * 0.9, 'Libido masculina');
                    addScore(scores, 'tongkat-ali', weight * 0.8, 'Potencia sexual');
                } else {
                    addScore(scores, 'damiana', weight * 0.9, 'Libido femenina');
                    addScore(scores, 'dong-quai', weight * 0.7, 'Deseo sexual');
                }
                break;
                
            case 'control-peso':
                addScore(scores, 'chitosan', weight, `Objetivo #${index+1}: Control de peso`);
                addScore(scores, 'garcinia', weight * 0.9, 'Bloqueador de grasa');
                addScore(scores, 'yerba-mate', weight * 0.8, 'Acelera metabolismo');
                addScore(scores, 'te-verde', weight * 0.7, 'Termogénico');
                break;
                
            case 'antienvejecimiento':
                addScore(scores, 'reishi', weight, `Objetivo #${index+1}: Anti-envejecimiento`);
                addScore(scores, 'coq10', weight * 0.9, 'Energía celular');
                addScore(scores, 'colageno', weight * 0.8, 'Piel y tejidos');
                addScore(scores, 'curcuma', weight * 0.7, 'Antioxidante');
                break;
                
            case 'digestivo':
                addScore(scores, 'probioticos', weight, `Objetivo #${index+1}: Salud digestiva`);
                addScore(scores, 'psyllium', weight * 0.8, 'Fibra saludable');
                addScore(scores, 'jengibre', weight * 0.7, 'Digestión');
                break;
                
            case 'dolor':
                addScore(scores, 'curcuma', weight, `Objetivo #${index+1}: Reducir dolor e inflamación`);
                addScore(scores, 'boswellia', weight * 0.9, 'Antiinflamatorio');
                addScore(scores, 'msm', weight * 0.8, 'Dolor articular');
                break;
        }
    });
}

// ============================================
// APLICAR CONTRAIND ICACIONES
// ============================================

function applyContraindications(userData, scores, contraindications) {
    // Eliminar productos contraindicados
    Object.keys(scores).forEach(slug => {
        if (scores[slug].contraindicated) {
            scores[slug].score = -9999; // Penalización máxima
            console.warn(`⚠️ ${slug} está CONTRAINDICADO`);
        }
    });
    
    if (contraindications.length > 0) {
        console.log('⚠️ Contraind icaciones aplicadas:', contraindications);
    }
}

// ============================================
// RANKEAR PRODUCTOS
// ============================================

function rankProducts(scores) {
    const products = [];
    
    Object.keys(scores).forEach(slug => {
        const productData = productsDatabase[slug];
        
        if (productData && scores[slug].score > 0) {
            products.push({
                product: {
                    name: productData.name || productData.fullName,
                    slug: slug,
                    permalink: productData.url,
                    regular_price: productData.regularPrice || productData.price,
                    sale_price: productData.price < productData.regularPrice ? productData.price : null,
                    images: [productData.image]
                },
                totalScore: scores[slug].score,
                reason: scores[slug].reasons.filter(r => r).join('. '),
                contraindicated: scores[slug].contraindicated
            });
        }
    });
    
    // Ordenar por score descendente
    products.sort((a, b) => b.totalScore - a.totalScore);
    
    // Asegurar que no se repitan productos
    const uniqueProducts = [];
    const seenNames = new Set();
    
    products.forEach(p => {
        if (!seenNames.has(p.product.name)) {
            seenNames.add(p.product.name);
            uniqueProducts.push(p);
        }
    });
    
    return uniqueProducts;
}

// ============================================
// UTILIDAD: AGREGAR SCORE
// ============================================

function addScore(scores, slug, points, reason) {
    if (scores[slug]) {
        scores[slug].score += points;
        if (reason && !scores[slug].reasons.includes(reason)) {
            scores[slug].reasons.push(reason);
        }
    } else {
        // Si el producto no existe, no hacer nada (silencioso)
        console.warn(`⚠️ Producto no encontrado: ${slug}`);
    }
}
