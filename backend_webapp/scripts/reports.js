export const reports = [
    {
      id: 1,
      fechaHora: "2026-01-01T08:15:00",
      paciente: {
        nombre: "Juan Pérez",
        edad: 32,
        genero: "Masculino"
      },
      lugar: "Mosca",
      unidad: {
        numero: "AMB-01",
        operador: "Carlos López"
      },
      signosVitales: {
        temperatura: 36.8,
        fc: 78,
        fr: 16,
        spo2: 98,
        ta: "120/80",
        glu: null
      },
      nivelConciencia: {
        ocular: 4,
        verbal: 5,
        motora: 6,
        total: 15
      },
      pupilas: ["Isocóricas", "Reactivas"],
      lesiones: ["Abrasión"],
      regionesAfectadas: ["Rodilla"],
      insumos: [
        { nombre: "Gasas estériles", cantidad: 2 },
        { nombre: "Vendas 10cm", cantidad: 1 }
      ],
      alergias: ["Ninguna"],
      medicamentos: ["Ninguno"],
      patologias: ["Ninguna"],
      trasladoAceptado: false,
      observaciones: "Caída casual durante caminata",
      recomendaciones: "Limpiar herida y aplicar antibiótico tópico",
      firmas: {
        paciente: true,
        operador: true,
        testigo: false
      }
    },
    {
      id: 2,
      fechaHora: "2026-01-01T10:30:00",
      paciente: {
        nombre: "María González",
        edad: 68,
        genero: "Femenino"
      },
      lugar: "Glorieta",
      unidad: {
        numero: "AMB-02",
        operador: "Ana Martínez"
      },
      signosVitales: {
        temperatura: 37.1,
        fc: 92,
        fr: 22,
        spo2: 88,
        ta: "160/95",
        glu: 210
      },
      nivelConciencia: {
        ocular: 3,
        verbal: 4,
        motora: 5,
        total: 12
      },
      pupilas: ["Isocóricas", "Lentas"],
      lesiones: ["Sincope"],
      regionesAfectadas: [],
      insumos: [
        { nombre: "Oxígeno", cantidad: 1 },
        { nombre: "Glucosa oral", cantidad: 1 }
      ],
      alergias: ["Penicilina"],
      medicamentos: ["Metformina", "Amlodipino"],
      patologias: ["Diabetes", "Hipertensión"],
      trasladoAceptado: true,
      observaciones: "Paciente encontrada en suelo con desorientación",
      recomendaciones: "Traslado inmediato para evaluación cardiológica",
      firmas: {
        paciente: false,
        operador: true,
        testigo: true
      }
    },
    {
      id: 3,
      fechaHora: "2026-01-01T14:45:00",
      paciente: {
        nombre: "Luis Ramírez",
        edad: 45,
        genero: "Masculino"
      },
      lugar: "Toboganes",
      unidad: {
        numero: "AMB-03",
        operador: "Roberto Sánchez"
      },
      signosVitales: {
        temperatura: 38.2,
        fc: 110,
        fr: 24,
        spo2: 96,
        ta: "130/85",
        glu: null
      },
      nivelConciencia: {
        ocular: 4,
        verbal: 5,
        motora: 6,
        total: 15
      },
      pupilas: ["Isocóricas"],
      lesiones: ["Esguince"],
      regionesAfectadas: ["Tobillo"],
      insumos: [
        { nombre: "Vendas 10cm", cantidad: 2 },
        { nombre: "Férula", cantidad: 1 }
      ],
      alergias: ["AINEs"],
      medicamentos: ["Ibuprofeno"],
      patologias: ["Ninguna"],
      trasladoAceptado: false,
      observaciones: "Torcedura durante actividad deportiva",
      recomendaciones: "Reposo, hielo, elevación y consulta con traumatólogo",
      firmas: {
        paciente: true,
        operador: true,
        testigo: false
      }
    },
    {
      id: 4,
      fechaHora: "2026-01-01T16:20:00",
      paciente: {
        nombre: "Sofía Herrera",
        edad: 8,
        genero: "Femenino"
      },
      lugar: "Pinitos",
      unidad: {
        numero: "AMB-04",
        operador: "Marta Díaz"
      },
      signosVitales: {
        temperatura: 39.0,
        fc: 130,
        fr: 28,
        spo2: 97,
        ta: "100/65",
        glu: null
      },
      nivelConciencia: {
        ocular: 4,
        verbal: 5,
        motora: 6,
        total: 15
      },
      pupilas: ["Isocóricas"],
      lesiones: ["Contusión"],
      regionesAfectadas: ["Cabeza"],
      insumos: [
        { nombre: "Gasas estériles", cantidad: 3 },
        { nombre: "Botella de agua", cantidad: 1 }
      ],
      alergias: ["Ninguna"],
      medicamentos: ["Paracetamol"],
      patologias: ["Ninguna"],
      trasladoAceptado: true,
      observaciones: "Golpe en cabeza por caída de bicicleta",
      recomendaciones: "Observación por 24 horas y control de síntomas",
      firmas: {
        paciente: false,
        operador: true,
        testigo: true
      }
    },
    {
      id: 5,
      fechaHora: "2026-01-01T19:05:00",
      paciente: {
        nombre: "Carlos Ruiz",
        edad: 72,
        genero: "Masculino"
      },
      lugar: "Hermosísima",
      unidad: {
        numero: "AMB-01",
        operador: "Carlos López"
      },
      signosVitales: {
        temperatura: 36.5,
        fc: 85,
        fr: 18,
        spo2: 94,
        ta: "145/90",
        glu: 140
      },
      nivelConciencia: {
        ocular: 4,
        verbal: 4,
        motora: 5,
        total: 13
      },
      pupilas: ["Isocóricas", "Lentas"],
      lesiones: [],
      regionesAfectadas: [],
      insumos: [
        { nombre: "Oxígeno", cantidad: 1 }
      ],
      alergias: ["Sulfas"],
      medicamentos: ["Metformina"],
      patologias: ["Diabetes"],
      trasladoAceptado: false,
      observaciones: "Control de rutina, paciente estable",
      recomendaciones: "Continuar tratamiento y control mensual",
      firmas: {
        paciente: true,
        operador: true,
        testigo: false
      }
    },
    {
      id: 6,
      fechaHora: "2026-01-01T21:30:00",
      paciente: {
        nombre: "Ana Torres",
        edad: 28,
        genero: "Femenino"
      },
      lugar: "Espinazo",
      unidad: {
        numero: "AMB-02",
        operador: "Ana Martínez"
      },
      signosVitales: {
        temperatura: 37.0,
        fc: 95,
        fr: 20,
        spo2: 99,
        ta: "115/75",
        glu: null
      },
      nivelConciencia: {
        ocular: 4,
        verbal: 5,
        motora: 6,
        total: 15
      },
      pupilas: ["Isocóricas"],
      lesiones: ["Laceración"],
      regionesAfectadas: ["Mano"],
      insumos: [
        { nombre: "Gasas estériles", cantidad: 4 },
        { nombre: "Vendas 5cm", cantidad: 2 },
        { nombre: "Jabón quirúrgico", cantidad: 1 }
      ],
      alergias: ["Látex"],
      medicamentos: ["Ninguno"],
      patologias: ["Ninguna"],
      trasladoAceptado: false,
      observaciones: "Corte con vidrio durante limpieza",
      recomendaciones: "Cambio de curación cada 24 horas",
      firmas: {
        paciente: true,
        operador: true,
        testigo: false
      }
    },
    {
      id: 7,
      fechaHora: "2026-01-02T09:15:00",
      paciente: {
        nombre: "Miguel Ángel",
        edad: 55,
        genero: "Masculino"
      },
      lugar: "Vaca Muerta",
      unidad: {
        numero: "AMB-03",
        operador: "Roberto Sánchez"
      },
      signosVitales: {
        temperatura: 36.8,
        fc: 105,
        fr: 26,
        spo2: 86,
        ta: "140/95",
        glu: null
      },
      nivelConciencia: {
        ocular: 2,
        verbal: 3,
        motora: 4,
        total: 9
      },
      pupilas: ["Anisocóricas"],
      lesiones: ["Fractura", "Hematoma"],
      regionesAfectadas: ["Brazo", "Hombro"],
      insumos: [
        { nombre: "Férula", cantidad: 1 },
        { nombre: "Collarín cervical", cantidad: 1 },
        { nombre: "Vendas 20cm", cantidad: 3 }
      ],
      alergias: ["Ninguna"],
      medicamentos: ["Amlodipino"],
      patologias: ["Hipertensión"],
      trasladoAceptado: true,
      observaciones: "Caída desde altura de 2 metros",
      recomendaciones: "Traslado urgente para reducción de fractura",
      firmas: {
        paciente: false,
        operador: true,
        testigo: true
      }
    },
    {
      id: 8,
      fechaHora: "2026-01-02T11:40:00",
      paciente: {
        nombre: "Elena Castro",
        edad: 33,
        genero: "Femenino"
      },
      lugar: "Arenosas",
      unidad: {
        numero: "AMB-04",
        operador: "Marta Díaz"
      },
      signosVitales: {
        temperatura: 37.5,
        fc: 88,
        fr: 20,
        spo2: 97,
        ta: "118/76",
        glu: 85
      },
      nivelConciencia: {
        ocular: 4,
        verbal: 5,
        motora: 6,
        total: 15
      },
      pupilas: ["Isocóricas", "Reactivas"],
      lesiones: ["Quemadura"],
      regionesAfectadas: ["Antebrazo"],
      insumos: [
        { nombre: "Gel tópico", cantidad: 1 },
        { nombre: "Gasas estériles", cantidad: 3 },
        { nombre: "Parches protectores (grandes)", cantidad: 2 }
      ],
      alergias: ["Ninguna"],
      medicamentos: [],
      patologias: [],
      trasladoAceptado: false,
      observaciones: "Quemadura superficial por aceite caliente",
      recomendaciones: "Aplicar gel tópico y proteger de sol",
      firmas: {
        paciente: true,
        operador: true,
        testigo: false
      }
    },
    {
      id: 9,
      fechaHora: "2026-01-02T14:25:00",
      paciente: {
        nombre: "Jorge Mendoza",
        edad: 19,
        genero: "Masculino"
      },
      lugar: "Brujitas",
      unidad: {
        numero: "AMB-01",
        operador: "Carlos López"
      },
      signosVitales: {
        temperatura: 36.9,
        fc: 120,
        fr: 32,
        spo2: 95,
        ta: "125/80",
        glu: null
      },
      nivelConciencia: {
        ocular: 4,
        verbal: 5,
        motora: 6,
        total: 15
      },
      pupilas: ["Isocóricas"],
      lesiones: ["Contusión", "Edema"],
      regionesAfectadas: ["Pierna"],
      insumos: [
        { nombre: "Gasas estériles", cantidad: 2 },
        { nombre: "Vendas 10cm", cantidad: 2 }
      ],
      alergias: [],
      medicamentos: [],
      patologias: [],
      trasladoAceptado: false,
      observaciones: "Golpe directo durante partido de fútbol",
      recomendaciones: "Reposo y aplicación de frío local",
      firmas: {
        paciente: true,
        operador: true,
        testigo: true
      }
    },
    {
      id: 10,
      fechaHora: "2026-01-02T17:50:00",
      paciente: {
        nombre: "Lucía Vargas",
        edad: 42,
        genero: "Femenino"
      },
      lugar: "Pípila",
      unidad: {
        numero: "AMB-02",
        operador: "Ana Martínez"
      },
      signosVitales: {
        temperatura: 37.8,
        fc: 100,
        fr: 22,
        spo2: 93,
        ta: "130/85",
        glu: null
      },
      nivelConciencia: {
        ocular: 4,
        verbal: 5,
        motora: 6,
        total: 15
      },
      pupilas: ["Isocóricas"],
      lesiones: ["Luxación"],
      regionesAfectadas: ["Hombro"],
      insumos: [
        { nombre: "Férula", cantidad: 1 },
        { nombre: "Vendas 20cm", cantidad: 2 }
      ],
      alergias: ["Penicilina"],
      medicamentos: ["Ibuprofeno"],
      patologias: ["Ninguna"],
      trasladoAceptado: true,
      observaciones: "Luxación anterior de hombro derecho",
      recomendaciones: "Reducción y evaluación ortopédica",
      firmas: {
        paciente: true,
        operador: true,
        testigo: false
      }
    },
    {
      id: 11,
      fechaHora: "2026-01-02T22:10:00",
      paciente: {
        nombre: "Ricardo Soto",
        edad: 61,
        genero: "Masculino"
      },
      lugar: "Geotérmica",
      unidad: {
        numero: "AMB-03",
        operador: "Roberto Sánchez"
      },
      signosVitales: {
        temperatura: 36.2,
        fc: 115,
        fr: 26,
        spo2: 89,
        ta: "155/100",
        glu: 180
      },
      nivelConciencia: {
        ocular: 3,
        verbal: 3,
        motora: 4,
        total: 10
      },
      pupilas: ["Isocóricas", "Lentas"],
      lesiones: ["Inconsciente"],
      regionesAfectadas: [],
      insumos: [
        { nombre: "Oxígeno", cantidad: 1 },
        { nombre: "Collarín cervical", cantidad: 1 }
      ],
      alergias: ["Sulfas"],
      medicamentos: ["Metformina", "Amlodipino"],
      patologias: ["Diabetes", "Hipertensión"],
      trasladoAceptado: true,
      observaciones: "Encontrado inconsciente en domicilio",
      recomendaciones: "Traslado inmediato para TAC cerebral",
      firmas: {
        paciente: false,
        operador: true,
        testigo: true
      }
    },
    {
      id: 12,
      fechaHora: "2026-01-03T07:30:00",
      paciente: {
        nombre: "Patricia Ríos",
        edad: 29,
        genero: "Femenino"
      },
      lugar: "Obsidiana",
      unidad: {
        numero: "AMB-04",
        operador: "Marta Díaz"
      },
      signosVitales: {
        temperatura: 37.0,
        fc: 90,
        fr: 18,
        spo2: 99,
        ta: "110/70",
        glu: null
      },
      nivelConciencia: {
        ocular: 4,
        verbal: 5,
        motora: 6,
        total: 15
      },
      pupilas: ["Isocóricas"],
      lesiones: ["Esguince"],
      regionesAfectadas: ["Tobillo"],
      insumos: [
        { nombre: "Vendas 10cm", cantidad: 3 }
      ],
      alergias: ["AINEs"],
      medicamentos: [],
      patologias: [],
      trasladoAceptado: false,
      observaciones: "Torcedura leve durante ejercicio",
      recomendaciones: "Reposo y apoyo parcial por 48 horas",
      firmas: {
        paciente: true,
        operador: true,
        testigo: false
      }
    },
    {
      id: 13,
      fechaHora: "2026-01-03T10:45:00",
      paciente: {
        nombre: "Fernando López",
        edad: 77,
        genero: "Masculino"
      },
      lugar: "Campeón del Mundo",
      unidad: {
        numero: "AMB-01",
        operador: "Carlos López"
      },
      signosVitales: {
        temperatura: 36.7,
        fc: 82,
        fr: 20,
        spo2: 91,
        ta: "145/95",
        glu: 135
      },
      nivelConciencia: {
        ocular: 4,
        verbal: 4,
        motora: 5,
        total: 13
      },
      pupilas: ["Isocóricas", "Reactivas"],
      lesiones: [],
      regionesAfectadas: [],
      insumos: [
        { nombre: "Oxígeno", cantidad: 1 }
      ],
      alergias: ["Penicilina"],
      medicamentos: ["Metformina", "Amlodipino"],
      patologias: ["Diabetes", "Hipertensión"],
      trasladoAceptado: true,
      observaciones: "Disnea y desorientación leve",
      recomendaciones: "Evaluación cardiológica y ajuste de medicación",
      firmas: {
        paciente: true,
        operador: true,
        testigo: true
      }
    },
    {
      id: 14,
      fechaHora: "2026-01-03T13:20:00",
      paciente: {
        nombre: "Gabriela Mora",
        edad: 5,
        genero: "Femenino"
      },
      lugar: "Pirinola",
      unidad: {
        numero: "AMB-02",
        operador: "Ana Martínez"
      },
      signosVitales: {
        temperatura: 39.5,
        fc: 140,
        fr: 35,
        spo2: 96,
        ta: "95/60",
        glu: null
      },
      nivelConciencia: {
        ocular: 4,
        verbal: 5,
        motora: 6,
        total: 15
      },
      pupilas: ["Isocóricas"],
      lesiones: [],
      regionesAfectadas: [],
      insumos: [
        { nombre: "Gasas estériles", cantidad: 2 },
        { nombre: "Botella de agua", cantidad: 1 }
      ],
      alergias: ["Ninguna"],
      medicamentos: ["Paracetamol"],
      patologias: ["Ninguna"],
      trasladoAceptado: true,
      observaciones: "Fiebre alta persistente por más de 24 horas",
      recomendaciones: "Hidratación y evaluación pediátrica",
      firmas: {
        paciente: false,
        operador: true,
        testigo: true
      }
    },
    {
      id: 15,
      fechaHora: "2026-01-03T16:35:00",
      paciente: {
        nombre: "Oscar Torres",
        edad: 50,
        genero: "Masculino"
      },
      lugar: "Garrison",
      unidad: {
        numero: "AMB-03",
        operador: "Roberto Sánchez"
      },
      signosVitales: {
        temperatura: 37.2,
        fc: 95,
        fr: 22,
        spo2: 98,
        ta: "135/85",
        glu: null
      },
      nivelConciencia: {
        ocular: 4,
        verbal: 5,
        motora: 6,
        total: 15
      },
      pupilas: ["Isocóricas"],
      lesiones: ["Abrasión", "Contusión"],
      regionesAfectadas: ["Rodilla", "Codo"],
      insumos: [
        { nombre: "Gasas estériles", cantidad: 4 },
        { nombre: "Vendas 10cm", cantidad: 2 },
        { nombre: "Jabón quirúrgico", cantidad: 1 }
      ],
      alergias: ["Látex"],
      medicamentos: [],
      patologias: [],
      trasladoAceptado: false,
      observaciones: "Caída de motocicleta a baja velocidad",
      recomendaciones: "Curación diaria y vigilancia de infección",
      firmas: {
        paciente: true,
        operador: true,
        testigo: false
      }
    },
    {
      id: 16,
      fechaHora: "2026-01-03T20:15:00",
      paciente: {
        nombre: "Isabel Serrano",
        edad: 63,
        genero: "Femenino"
      },
      lugar: "Huevona",
      unidad: {
        numero: "AMB-04",
        operador: "Marta Díaz"
      },
      signosVitales: {
        temperatura: 36.8,
        fc: 105,
        fr: 24,
        spo2: 87,
        ta: "170/110",
        glu: 220
      },
      nivelConciencia: {
        ocular: 3,
        verbal: 4,
        motora: 5,
        total: 12
      },
      pupilas: ["Anisocóricas"],
      lesiones: ["Sincope"],
      regionesAfectadas: [],
      insumos: [
        { nombre: "Oxígeno", cantidad: 1 },
        { nombre: "Glucosa oral", cantidad: 1 }
      ],
      alergias: ["Penicilina", "Sulfas"],
      medicamentos: ["Metformina", "Insulina", "Amlodipino"],
      patologias: ["Diabetes", "Hipertensión"],
      trasladoAceptado: true,
      observaciones: "Pérdida de conocimiento súbita",
      recomendaciones: "Traslado para evaluación neurológica y metabólica",
      firmas: {
        paciente: false,
        operador: true,
        testigo: true
      }
    },
    {
      id: 17,
      fechaHora: "2026-01-04T09:00:00",
      paciente: {
        nombre: "Diego Navarro",
        edad: 23,
        genero: "Masculino"
      },
      lugar: "Árbol",
      unidad: {
        numero: "AMB-01",
        operador: "Carlos López"
      },
      signosVitales: {
        temperatura: 38.5,
        fc: 115,
        fr: 28,
        spo2: 95,
        ta: "125/80",
        glu: null
      },
      nivelConciencia: {
        ocular: 4,
        verbal: 5,
        motora: 6,
        total: 15
      },
      pupilas: ["Isocóricas"],
      lesiones: ["Fractura"],
      regionesAfectadas: ["Clavícula"],
      insumos: [
        { nombre: "Férula", cantidad: 1 },
        { nombre: "Vendas 20cm", cantidad: 3 },
        { nombre: "Collarín cervical", cantidad: 1 }
      ],
      alergias: ["Ninguna"],
      medicamentos: [],
      patologias: [],
      trasladoAceptado: true,
      observaciones: "Accidente deportivo durante escalada",
      recomendaciones: "Inmovilización y evaluación ortopédica",
      firmas: {
        paciente: true,
        operador: true,
        testigo: true
      }
    },
    {
      id: 18,
      fechaHora: "2026-01-04T12:25:00",
      paciente: {
        nombre: "Carmen Flores",
        edad: 35,
        genero: "Femenino"
      },
      lugar: "Toboganes Viejo",
      unidad: {
        numero: "AMB-02",
        operador: "Ana Martínez"
      },
      signosVitales: {
        temperatura: 37.0,
        fc: 88,
        fr: 18,
        spo2: 99,
        ta: "115/75",
        glu: null
      },
      nivelConciencia: {
        ocular: 4,
        verbal: 5,
        motora: 6,
        total: 15
      },
      pupilas: ["Isocóricas", "Reactivas"],
      lesiones: ["Laceración"],
      regionesAfectadas: ["Cara"],
      insumos: [
        { nombre: "Gasas estériles", cantidad: 5 },
        { nombre: "Vendas 5cm", cantidad: 3 },
        { nombre: "Jabón quirúrgico", cantidad: 1 }
      ],
      alergias: ["AINEs"],
      medicamentos: [],
      patologias: [],
      trasladoAceptado: false,
      observaciones: "Corte superficial por rama de árbol",
      recomendaciones: "Sutura estética y seguimiento",
      firmas: {
        paciente: true,
        operador: true,
        testigo: false
      }
    },
    {
      id: 19,
      fechaHora: "2026-01-04T15:40:00",
      paciente: {
        nombre: "Raúl Jiménez",
        edad: 82,
        genero: "Masculino"
      },
      lugar: "Hollo Negro",
      unidad: {
        numero: "AMB-03",
        operador: "Roberto Sánchez"
      },
      signosVitales: {
        temperatura: 36.3,
        fc: 78,
        fr: 16,
        spo2: 92,
        ta: "150/90",
        glu: 110
      },
      nivelConciencia: {
        ocular: 4,
        verbal: 4,
        motora: 5,
        total: 13
      },
      pupilas: ["Isocóricas", "Lentas"],
      lesiones: ["Contusión"],
      regionesAfectadas: ["Cadera"],
      insumos: [
        { nombre: "Gasas estériles", cantidad: 2 },
        { nombre: "Vendas 20cm", cantidad: 2 }
      ],
      alergias: ["Penicilina"],
      medicamentos: ["Amlodipino"],
      patologias: ["Hipertensión"],
      trasladoAceptado: true,
      observaciones: "Caída en domicilio, dolor en cadera derecha",
      recomendaciones: "Evaluación para descartar fractura de cadera",
      firmas: {
        paciente: true,
        operador: true,
        testigo: true
      }
    },
    {
      id: 20,
      fechaHora: "2026-01-04T18:55:00",
      paciente: {
        nombre: "Verónica Rojas",
        edad: 41,
        genero: "Femenino"
      },
      lugar: "½ Espinazo",
      unidad: {
        numero: "AMB-04",
        operador: "Marta Díaz"
      },
      signosVitales: {
        temperatura: 36.9,
        fc: 92,
        fr: 20,
        spo2: 97,
        ta: "120/78",
        glu: null
      },
      nivelConciencia: {
        ocular: 4,
        verbal: 5,
        motora: 6,
        total: 15
      },
      pupilas: ["Isocóricas"],
      lesiones: ["Esguince"],
      regionesAfectadas: ["Rodilla"],
      insumos: [
        { nombre: "Vendas 10cm", cantidad: 3 }
      ],
      alergias: ["Ninguna"],
      medicamentos: ["Ibuprofeno"],
      patologias: [],
      trasladoAceptado: false,
      observaciones: "Torcedura durante caminata en terreno irregular",
      recomendaciones: "Reposo y rehabilitación",
      firmas: {
        paciente: true,
        operador: true,
        testigo: false
      }
    },
    {
      id: 21,
      fechaHora: "2026-01-04T22:30:00",
      paciente: {
        nombre: "Santiago Mejía",
        edad: 31,
        genero: "Masculino"
      },
      lugar: "Brujitas",
      unidad: {
        numero: "AMB-01",
        operador: "Carlos López"
      },
      signosVitales: {
        temperatura: 37.5,
        fc: 125,
        fr: 30,
        spo2: 85,
        ta: "95/65",
        glu: null
      },
      nivelConciencia: {
        ocular: 2,
        verbal: 3,
        motora: 4,
        total: 9
      },
      pupilas: ["Midriasis"],
      lesiones: ["Inconsciente", "Hematoma"],
      regionesAfectadas: ["Cabeza", "Cuello"],
      insumos: [
        { nombre: "Collarín cervical", cantidad: 1 },
        { nombre: "Oxígeno", cantidad: 1 },
        { nombre: "Gasas estériles", cantidad: 4 }
      ],
      alergias: [],
      medicamentos: [],
      patologias: [],
      trasladoAceptado: true,
      observaciones: "Accidente automovilístico con traumatismo craneoencefálico",
      recomendaciones: "Traslado urgente para neurocirugía",
      firmas: {
        paciente: false,
        operador: true,
        testigo: true
      }
    },
    {
      id: 22,
      fechaHora: "2026-01-05T08:45:00",
      paciente: {
        nombre: "Diana Castillo",
        edad: 26,
        genero: "Femenino"
      },
      lugar: "Pípila",
      unidad: {
        numero: "AMB-02",
        operador: "Ana Martínez"
      },
      signosVitales: {
        temperatura: 37.1,
        fc: 85,
        fr: 18,
        spo2: 98,
        ta: "110/70",
        glu: null
      },
      nivelConciencia: {
        ocular: 4,
        verbal: 5,
        motora: 6,
        total: 15
      },
      pupilas: ["Isocóricas"],
      lesiones: ["Abrasión"],
      regionesAfectadas: ["Mano"],
      insumos: [
        { nombre: "Gasas estériles", cantidad: 2 },
        { nombre: "Vendas 5cm", cantidad: 1 }
      ],
      alergias: ["Ninguna"],
      medicamentos: [],
      patologias: [],
      trasladoAceptado: false,
      observaciones: "Rozadura superficial con superficie áspera",
      recomendaciones: "Limpieza y curación simple",
      firmas: {
        paciente: true,
        operador: true,
        testigo: false
      }
    },
    {
      id: 23,
      fechaHora: "2026-01-05T11:20:00",
      paciente: {
        nombre: "Alberto Reyes",
        edad: 70,
        genero: "Masculino"
      },
      lugar: "Geotérmica",
      unidad: {
        numero: "AMB-03",
        operador: "Roberto Sánchez"
      },
      signosVitales: {
        temperatura: 36.8,
        fc: 95,
        fr: 22,
        spo2: 89,
        ta: "160/100",
        glu: 190
      },
      nivelConciencia: {
        ocular: 3,
        verbal: 3,
        motora: 4,
        total: 10
      },
      pupilas: ["Isocóricas", "Lentas"],
      lesiones: ["Sincope"],
      regionesAfectadas: [],
      insumos: [
        { nombre: "Oxígeno", cantidad: 1 },
        { nombre: "Glucosa oral", cantidad: 1 }
      ],
      alergias: ["Sulfas"],
      medicamentos: ["Metformina", "Amlodipino"],
      patologias: ["Diabetes", "Hipertensión"],
      trasladoAceptado: true,
      observaciones: "Mareo seguido de pérdida breve de conciencia",
      recomendaciones: "Evaluación cardiológica completa",
      firmas: {
        paciente: false,
        operador: true,
        testigo: true
      }
    },
    {
      id: 24,
      fechaHora: "2026-01-05T14:35:00",
      paciente: {
        nombre: "Mónica Ortega",
        edad: 47,
        genero: "Femenino"
      },
      lugar: "Obsidiana",
      unidad: {
        numero: "AMB-04",
        operador: "Marta Díaz"
      },
      signosVitales: {
        temperatura: 38.0,
        fc: 105,
        fr: 24,
        spo2: 96,
        ta: "130/85",
        glu: null
      },
      nivelConciencia: {
        ocular: 4,
        verbal: 5,
        motora: 6,
        total: 15
      },
      pupilas: ["Isocóricas"],
      lesiones: ["Quemadura"],
      regionesAfectadas: ["Pierna"],
      insumos: [
        { nombre: "Gel tópico", cantidad: 1 },
        { nombre: "Gasas estériles", cantidad: 4 },
        { nombre: "Parches protectores (grandes)", cantidad: 3 }
      ],
      alergias: ["Látex"],
      medicamentos: [],
      patologias: [],
      trasladoAceptado: false,
      observaciones: "Quemadura de segundo grado por líquido caliente",
      recomendaciones: "Cuidados de la herida y control del dolor",
      firmas: {
        paciente: true,
        operador: true,
        testigo: false
      }
    },
    {
        id: 25,
        fechaHora: "2026-01-05T17:50:00",
        paciente: {
          nombre: "Francisco Guzmán",
          edad: 9,
          genero: "Masculino"
        },
        lugar: "Campeón del Mundo",
        unidad: {
          numero: "AMB-01",
          operador: "Carlos López"
        },
        signosVitales: {
          temperatura: 38.8,
          fc: 135,
          fr: 32,
          spo2: 97,
          ta: "105/65",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Contusión"],
        regionesAfectadas: ["Cabeza"],
        insumos: [
          { nombre: "Gasas estériles", cantidad: 2 },
          { nombre: "Botella de agua", cantidad: 1 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Paracetamol"],
        patologias: ["Ninguna"],
        trasladoAceptado: true,
        observaciones: "Golpe en cabeza durante juego, vómito posterior",
        recomendaciones: "Observación neurológica por 24 horas",
        firmas: {
          paciente: false,
          operador: true,
          testigo: true
        }
    },
    {
        id: 26,
        fechaHora: "2026-01-05T21:15:00",
        paciente: {
          nombre: "Rosa Medina",
          edad: 58,
          genero: "Femenino"
        },
        lugar: "Pirinola",
        unidad: {
          numero: "AMB-02",
          operador: "Ana Martínez"
        },
        signosVitales: {
          temperatura: 36.9,
          fc: 90,
          fr: 20,
          spo2: 94,
          ta: "140/90",
          glu: 150
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas", "Reactivas"],
        lesiones: [],
        regionesAfectadas: [],
        insumos: [],
        alergias: ["Penicilina"],
        medicamentos: ["Metformina"],
        patologias: ["Diabetes"],
        trasladoAceptado: false,
        observaciones: "Control de glucosa, valores elevados",
        recomendaciones: "Ajuste de medicación y dieta",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 27,
        fechaHora: "2026-01-06T09:30:00",
        paciente: {
          nombre: "Tomás Silva",
          edad: 44,
          genero: "Masculino"
        },
        lugar: "Garrison",
        unidad: {
          numero: "AMB-03",
          operador: "Roberto Sánchez"
        },
        signosVitales: {
          temperatura: 37.4,
          fc: 110,
          fr: 26,
          spo2: 96,
          ta: "125/80",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Fractura"],
        regionesAfectadas: ["Antebrazo"],
        insumos: [
          { nombre: "Férula", cantidad: 1 },
          { nombre: "Vendas 10cm", cantidad: 4 },
          { nombre: "Gasas estériles", cantidad: 3 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Ibuprofeno"],
        patologias: [],
        trasladoAceptado: true,
        observaciones: "Caída con apoyo de mano, deformidad evidente",
        recomendaciones: "Reducción y yeso",
        firmas: {
          paciente: true,
          operador: true,
          testigo: true
        }
    },
    {
        id: 28,
        fechaHora: "2026-01-06T12:45:00",
        paciente: {
          nombre: "Beatriz Cortés",
          edad: 37,
          genero: "Femenino"
        },
        lugar: "Huevona",
        unidad: {
          numero: "AMB-04",
          operador: "Marta Díaz"
        },
        signosVitales: {
          temperatura: 36.7,
          fc: 86,
          fr: 18,
          spo2: 99,
          ta: "118/76",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Esguince"],
        regionesAfectadas: ["Tobillo"],
        insumos: [
          { nombre: "Vendas 10cm", cantidad: 2 }
        ],
        alergias: ["AINEs"],
        medicamentos: [],
        patologias: [],
        trasladoAceptado: false,
        observaciones: "Torcedura al bajar escaleras",
        recomendaciones: "Reposo y carga parcial",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 29,
        fechaHora: "2026-01-06T16:20:00",
        paciente: {
          nombre: "Ernesto Vargas",
          edad: 81,
          genero: "Masculino"
        },
        lugar: "Árbol",
        unidad: {
          numero: "AMB-01",
          operador: "Carlos López"
        },
        signosVitales: {
          temperatura: 36.2,
          fc: 72,
          fr: 14,
          spo2: 90,
          ta: "155/95",
          glu: 125
        },
        nivelConciencia: {
          ocular: 3,
          verbal: 3,
          motora: 4,
          total: 10
        },
        pupilas: ["Isocóricas", "Lentas"],
        lesiones: [],
        regionesAfectadas: [],
        insumos: [
          { nombre: "Oxígeno", cantidad: 1 }
        ],
        alergias: ["Sulfas"],
        medicamentos: ["Amlodipino"],
        patologias: ["Hipertensión"],
        trasladoAceptado: true,
        observaciones: "Confusión y debilidad generalizada",
        recomendaciones: "Evaluación geriátrica integral",
        firmas: {
          paciente: false,
          operador: true,
          testigo: true
        }
    },
    {
        id: 30,
        fechaHora: "2026-01-06T19:35:00",
        paciente: {
          nombre: "Claudia Salazar",
          edad: 22,
          genero: "Femenino"
        },
        lugar: "Toboganes Viejo",
        unidad: {
          numero: "AMB-02",
          operador: "Ana Martínez"
        },
        signosVitales: {
          temperatura: 37.6,
          fc: 100,
          fr: 22,
          spo2: 98,
          ta: "115/75",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Abrasión", "Contusión"],
        regionesAfectadas: ["Rodilla", "Codo"],
        insumos: [
          { nombre: "Gasas estériles", cantidad: 3 },
          { nombre: "Vendas 10cm", cantidad: 2 },
          { nombre: "Jabón quirúrgico", cantidad: 1 }
        ],
        alergias: ["Látex"],
        medicamentos: [],
        patologias: [],
        trasladoAceptado: false,
        observaciones: "Caída de bicicleta en camino terroso",
        recomendaciones: "Limpieza profunda y vigilancia",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 31,
        fechaHora: "2026-01-06T23:00:00",
        paciente: {
          nombre: "Javier Montes",
          edad: 39,
          genero: "Masculino"
        },
        lugar: "Hollo Negro",
        unidad: {
          numero: "AMB-03",
          operador: "Roberto Sánchez"
        },
        signosVitales: {
          temperatura: 38.4,
          fc: 120,
          fr: 28,
          spo2: 86,
          ta: "130/85",
          glu: null
        },
        nivelConciencia: {
          ocular: 3,
          verbal: 4,
          motora: 5,
          total: 12
        },
        pupilas: ["Anisocóricas"],
        lesiones: ["Inconsciente"],
        regionesAfectadas: ["Cabeza"],
        insumos: [
          { nombre: "Collarín cervical", cantidad: 1 },
          { nombre: "Oxígeno", cantidad: 1 },
          { nombre: "Gasas estériles", cantidad: 5 }
        ],
        alergias: ["Ninguna"],
        medicamentos: [],
        patologias: [],
        trasladoAceptado: true,
        observaciones: "Paciente encontrado inconsciente en vía pública",
        recomendaciones: "Traslado urgente para evaluación neurológica",
        firmas: {
          paciente: false,
          operador: true,
          testigo: false
        }
    },
    {
        id: 32,
        fechaHora: "2026-01-07T08:15:00",
        paciente: {
          nombre: "Adriana León",
          edad: 64,
          genero: "Femenino"
        },
        lugar: "½ Espinazo",
        unidad: {
          numero: "AMB-04",
          operador: "Marta Díaz"
        },
        signosVitales: {
          temperatura: 36.8,
          fc: 88,
          fr: 20,
          spo2: 95,
          ta: "145/95",
          glu: 175
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 4,
          motora: 5,
          total: 13
        },
        pupilas: ["Isocóricas", "Reactivas"],
        lesiones: [],
        regionesAfectadas: [],
        insumos: [],
        alergias: ["Penicilina"],
        medicamentos: ["Metformina", "Amlodipino"],
        patologias: ["Diabetes", "Hipertensión"],
        trasladoAceptado: false,
        observaciones: "Control rutinario, paciente estable",
        recomendaciones: "Continuar tratamiento actual",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 33,
        fechaHora: "2026-01-07T11:30:00",
        paciente: {
          nombre: "Roberto Paredes",
          edad: 17,
          genero: "Masculino"
        },
        lugar: "Brujitas",
        unidad: {
          numero: "AMB-01",
          operador: "Carlos López"
        },
        signosVitales: {
          temperatura: 37.2,
          fc: 105,
          fr: 24,
          spo2: 97,
          ta: "120/78",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Luxación"],
        regionesAfectadas: ["Dedos M."],
        insumos: [
          { nombre: "Vendas 5cm", cantidad: 2 },
          { nombre: "Gasas estériles", cantidad: 2 }
        ],
        alergias: ["Ninguna"],
        medicamentos: [],
        patologias: [],
        trasladoAceptado: true,
        observaciones: "Luxación de dedo durante juego de baloncesto",
        recomendaciones: "Reducción y férula digital",
        firmas: {
          paciente: true,
          operador: true,
          testigo: true
        }
    },
    {
        id: 34,
        fechaHora: "2026-01-07T14:45:00",
        paciente: {
          nombre: "Sandra Orozco",
          edad: 53,
          genero: "Femenino"
        },
        lugar: "Pípila",
        unidad: {
          numero: "AMB-02",
          operador: "Ana Martínez"
        },
        signosVitales: {
          temperatura: 37.8,
          fc: 115,
          fr: 26,
          spo2: 94,
          ta: "135/88",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Quemadura"],
        regionesAfectadas: ["Mano"],
        insumos: [
          { nombre: "Gel tópico", cantidad: 1 },
          { nombre: "Gasas estériles", cantidad: 3 },
          { nombre: "Parches protectores (grandes)", cantidad: 2 }
        ],
        alergias: ["AINEs"],
        medicamentos: [],
        patologias: ["Asma"],
        trasladoAceptado: false,
        observaciones: "Quemadura por contacto con superficie caliente",
        recomendaciones: "Curación diaria y protección",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 35,
        fechaHora: "2026-01-07T18:20:00",
        paciente: {
          nombre: "Manuel Ibarra",
          edad: 76,
          genero: "Masculino"
        },
        lugar: "Geotérmica",
        unidad: {
          numero: "AMB-03",
          operador: "Roberto Sánchez"
        },
        signosVitales: {
          temperatura: 36.4,
          fc: 82,
          fr: 16,
          spo2: 88,
          ta: "165/100",
          glu: 205
        },
        nivelConciencia: {
          ocular: 3,
          verbal: 3,
          motora: 4,
          total: 10
        },
        pupilas: ["Isocóricas", "Lentas"],
        lesiones: ["Sincope"],
        regionesAfectadas: [],
        insumos: [
          { nombre: "Oxígeno", cantidad: 1 }
        ],
        alergias: ["Sulfas"],
        medicamentos: ["Metformina", "Amlodipino"],
        patologias: ["Diabetes", "Hipertensión"],
        trasladoAceptado: true,
        observaciones: "Hiperglucemia y presión arterial elevada",
        recomendaciones: "Traslado para control metabólico",
        firmas: {
          paciente: false,
          operador: true,
          testigo: true
        }
    },
    {
        id: 36,
        fechaHora: "2026-01-07T21:10:00",
        paciente: {
          nombre: "Paola Núñez",
          edad: 34,
          genero: "Femenino"
        },
        lugar: "Pirinola",
        unidad: {
          numero: "AMB-04",
          operador: "Marta Díaz"
        },
        signosVitales: {
          temperatura: 37.1,
          fc: 90,
          fr: 18,
          spo2: 99,
          ta: "115/75",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Abrasión"],
        regionesAfectadas: ["Antebrazo"],
        insumos: [
          { nombre: "Gasas estériles", cantidad: 2 }
        ],
        alergias: [],
        medicamentos: [],
        patologias: [],
        trasladoAceptado: false,
        observaciones: "Raspón superficial por caída leve",
        recomendaciones: "Curación simple",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 37,
        fechaHora: "2026-01-08T08:40:00",
        paciente: {
          nombre: "Hugo Carrillo",
          edad: 59,
          genero: "Masculino"
        },
        lugar: "Árbol",
        unidad: {
          numero: "AMB-01",
          operador: "Carlos López"
        },
        signosVitales: {
          temperatura: 36.9,
          fc: 102,
          fr: 22,
          spo2: 92,
          ta: "150/95",
          glu: 160
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 4,
          motora: 5,
          total: 13
        },
        pupilas: ["Isocóricas"],
        lesiones: [],
        regionesAfectadas: [],
        insumos: [
          { nombre: "Oxígeno", cantidad: 1 }
        ],
        alergias: ["Penicilina"],
        medicamentos: ["Amlodipino"],
        patologias: ["Hipertensión"],
        trasladoAceptado: false,
        observaciones: "Disnea leve en esfuerzo",
        recomendaciones: "Seguimiento médico",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 38,
        fechaHora: "2026-01-08T11:55:00",
        paciente: {
          nombre: "Valeria Cruz",
          edad: 14,
          genero: "Femenino"
        },
        lugar: "Toboganes",
        unidad: {
          numero: "AMB-02",
          operador: "Ana Martínez"
        },
        signosVitales: {
          temperatura: 37.8,
          fc: 115,
          fr: 24,
          spo2: 98,
          ta: "110/70",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Contusión"],
        regionesAfectadas: ["Espalda"],
        insumos: [
          { nombre: "Gasas estériles", cantidad: 2 }
        ],
        alergias: [],
        medicamentos: [],
        patologias: [],
        trasladoAceptado: false,
        observaciones: "Golpe al deslizarse",
        recomendaciones: "Reposo y observación",
        firmas: {
          paciente: true,
          operador: true,
          testigo: true
        }
    },
    {
        id: 39,
        fechaHora: "2026-01-08T15:20:00",
        paciente: {
          nombre: "Rafael Domínguez",
          edad: 66,
          genero: "Masculino"
        },
        lugar: "Hollo Negro",
        unidad: {
          numero: "AMB-03",
          operador: "Roberto Sánchez"
        },
        signosVitales: {
          temperatura: 36.6,
          fc: 88,
          fr: 20,
          spo2: 89,
          ta: "155/90",
          glu: 180
        },
        nivelConciencia: {
          ocular: 3,
          verbal: 4,
          motora: 5,
          total: 12
        },
        pupilas: ["Isocóricas", "Lentas"],
        lesiones: [],
        regionesAfectadas: [],
        insumos: [
          { nombre: "Oxígeno", cantidad: 1 }
        ],
        alergias: ["Sulfas"],
        medicamentos: ["Metformina"],
        patologias: ["Diabetes"],
        trasladoAceptado: true,
        observaciones: "Hipoglucemia corregida parcialmente",
        recomendaciones: "Traslado para ajuste de tratamiento",
        firmas: {
          paciente: false,
          operador: true,
          testigo: true
        }
    },
    {
        id: 40,
        fechaHora: "2026-01-08T18:45:00",
        paciente: {
          nombre: "Natalia Ponce",
          edad: 27,
          genero: "Femenino"
        },
        lugar: "Obsidiana",
        unidad: {
          numero: "AMB-04",
          operador: "Marta Díaz"
        },
        signosVitales: {
          temperatura: 37.0,
          fc: 85,
          fr: 18,
          spo2: 99,
          ta: "110/70",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Laceración"],
        regionesAfectadas: ["Pie"],
        insumos: [
          { nombre: "Gasas estériles", cantidad: 3 },
          { nombre: "Vendas 5cm", cantidad: 2 }
        ],
        alergias: ["Látex"],
        medicamentos: [],
        patologias: [],
        trasladoAceptado: false,
        observaciones: "Corte con objeto punzante",
        recomendaciones: "Curación y vigilancia",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 41,
        fechaHora: "2026-01-08T22:10:00",
        paciente: {
          nombre: "Eduardo Salinas",
          edad: 48,
          genero: "Masculino"
        },
        lugar: "Brujitas",
        unidad: {
          numero: "AMB-01",
          operador: "Carlos López"
        },
        signosVitales: {
          temperatura: 38.6,
          fc: 120,
          fr: 28,
          spo2: 91,
          ta: "140/85",
          glu: null
        },
        nivelConciencia: {
          ocular: 3,
          verbal: 4,
          motora: 5,
          total: 12
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Infección"],
        regionesAfectadas: ["Pierna"],
        insumos: [
          { nombre: "Gasas estériles", cantidad: 4 }
        ],
        alergias: ["Penicilina"],
        medicamentos: [],
        patologias: [],
        trasladoAceptado: true,
        observaciones: "Celulitis con fiebre",
        recomendaciones: "Traslado para antibiótico IV",
        firmas: {
          paciente: true,
          operador: true,
          testigo: true
        }
    },
    {
        id: 42,
        fechaHora: "2026-01-09T08:00:00",
        paciente: {
          nombre: "Laura Méndez",
          edad: 31,
          genero: "Femenino"
        },
        lugar: "Pípila",
        unidad: {
          numero: "AMB-02",
          operador: "Ana Martínez"
        },
        signosVitales: {
          temperatura: 37.2,
          fc: 92,
          fr: 20,
          spo2: 98,
          ta: "115/75",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: [],
        regionesAfectadas: [],
        insumos: [],
        alergias: [],
        medicamentos: [],
        patologias: [],
        trasladoAceptado: false,
        observaciones: "Valoración preventiva",
        recomendaciones: "Alta sin novedad",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 43,
        fechaHora: "2026-01-09T11:25:00",
        paciente: {
          nombre: "Ignacio Fuentes",
          edad: 73,
          genero: "Masculino"
        },
        lugar: "Geotérmica",
        unidad: {
          numero: "AMB-03",
          operador: "Roberto Sánchez"
        },
        signosVitales: {
          temperatura: 36.5,
          fc: 80,
          fr: 18,
          spo2: 87,
          ta: "170/105",
          glu: 210
        },
        nivelConciencia: {
          ocular: 3,
          verbal: 3,
          motora: 4,
          total: 10
        },
        pupilas: ["Anisocóricas"],
        lesiones: ["Sincope"],
        regionesAfectadas: [],
        insumos: [
          { nombre: "Oxígeno", cantidad: 1 }
        ],
        alergias: ["Sulfas"],
        medicamentos: ["Metformina"],
        patologias: ["Diabetes", "Hipertensión"],
        trasladoAceptado: true,
        observaciones: "Crisis hipertensiva",
        recomendaciones: "Traslado urgente",
        firmas: {
          paciente: false,
          operador: true,
          testigo: true
        }
    },
    {
        id: 44,
        fechaHora: "2026-01-09T14:50:00",
        paciente: {
          nombre: "Mariana Lozano",
          edad: 19,
          genero: "Femenino"
        },
        lugar: "Toboganes",
        unidad: {
          numero: "AMB-04",
          operador: "Marta Díaz"
        },
        signosVitales: {
          temperatura: 37.9,
          fc: 105,
          fr: 24,
          spo2: 97,
          ta: "115/70",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Esguince"],
        regionesAfectadas: ["Muñeca"],
        insumos: [
          { nombre: "Vendas 5cm", cantidad: 2 }
        ],
        alergias: [],
        medicamentos: [],
        patologias: [],
        trasladoAceptado: false,
        observaciones: "Caída leve",
        recomendaciones: "Reposo y hielo",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 45,
        fechaHora: "2026-01-09T18:30:00",
        paciente: {
          nombre: "José Luis Peña",
          edad: 57,
          genero: "Masculino"
        },
        lugar: "Árbol",
        unidad: {
          numero: "AMB-01",
          operador: "Carlos López"
        },
        signosVitales: {
          temperatura: 36.7,
          fc: 98,
          fr: 22,
          spo2: 93,
          ta: "145/90",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 4,
          motora: 5,
          total: 13
        },
        pupilas: ["Isocóricas"],
        lesiones: [],
        regionesAfectadas: [],
        insumos: [],
        alergias: [],
        medicamentos: [],
        patologias: ["Hipertensión"],
        trasladoAceptado: false,
        observaciones: "Control de presión arterial",
        recomendaciones: "Seguimiento médico",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 46,
        fechaHora: "2026-01-09T21:45:00",
        paciente: {
          nombre: "Silvia Andrade",
          edad: 62,
          genero: "Femenino"
        },
        lugar: "Pirinola",
        unidad: {
          numero: "AMB-02",
          operador: "Ana Martínez"
        },
        signosVitales: {
          temperatura: 37.0,
          fc: 90,
          fr: 20,
          spo2: 95,
          ta: "150/95",
          glu: 170
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 4,
          motora: 5,
          total: 13
        },
        pupilas: ["Isocóricas"],
        lesiones: [],
        regionesAfectadas: [],
        insumos: [],
        alergias: ["Penicilina"],
        medicamentos: ["Metformina"],
        patologias: ["Diabetes"],
        trasladoAceptado: false,
        observaciones: "Control glucémico",
        recomendaciones: "Ajuste dietético",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 47,
        fechaHora: "2026-01-10T08:10:00",
        paciente: {
          nombre: "Emilio Rocha",
          edad: 11,
          genero: "Masculino"
        },
        lugar: "Toboganes Viejo",
        unidad: {
          numero: "AMB-03",
          operador: "Roberto Sánchez"
        },
        signosVitales: {
          temperatura: 38.9,
          fc: 130,
          fr: 30,
          spo2: 97,
          ta: "105/65",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: [],
        regionesAfectadas: [],
        insumos: [
          { nombre: "Botella de agua", cantidad: 1 }
        ],
        alergias: [],
        medicamentos: ["Paracetamol"],
        patologias: [],
        trasladoAceptado: true,
        observaciones: "Fiebre persistente",
        recomendaciones: "Evaluación pediátrica",
        firmas: {
          paciente: false,
          operador: true,
          testigo: true
        }
    },
    {
        id: 48,
        fechaHora: "2026-01-10T11:45:00",
        paciente: {
          nombre: "Lorena Acosta",
          edad: 46,
          genero: "Femenino"
        },
        lugar: "Obsidiana",
        unidad: {
          numero: "AMB-04",
          operador: "Marta Díaz"
        },
        signosVitales: {
          temperatura: 37.3,
          fc: 95,
          fr: 22,
          spo2: 98,
          ta: "120/80",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Abrasión"],
        regionesAfectadas: ["Codo"],
        insumos: [
          { nombre: "Gasas estériles", cantidad: 2 }
        ],
        alergias: [],
        medicamentos: [],
        patologias: [],
        trasladoAceptado: false,
        observaciones: "Caída leve",
        recomendaciones: "Curación simple",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 49,
        fechaHora: "2026-01-10T15:30:00",
        paciente: {
          nombre: "Armando León",
          edad: 69,
          genero: "Masculino"
        },
        lugar: "Hollo Negro",
        unidad: {
          numero: "AMB-01",
          operador: "Carlos López"
        },
        signosVitales: {
          temperatura: 36.5,
          fc: 85,
          fr: 18,
          spo2: 90,
          ta: "160/95",
          glu: 190
        },
        nivelConciencia: {
          ocular: 3,
          verbal: 4,
          motora: 5,
          total: 12
        },
        pupilas: ["Isocóricas"],
        lesiones: [],
        regionesAfectadas: [],
        insumos: [
          { nombre: "Oxígeno", cantidad: 1 }
        ],
        alergias: ["Sulfas"],
        medicamentos: ["Metformina"],
        patologias: ["Diabetes", "Hipertensión"],
        trasladoAceptado: true,
        observaciones: "Descompensación metabólica",
        recomendaciones: "Traslado hospitalario",
        firmas: {
          paciente: false,
          operador: true,
          testigo: true
        }
    },
    {
        id: 50,
        fechaHora: "2026-01-10T18:55:00",
        paciente: {
          nombre: "Karen Villalobos",
          edad: 24,
          genero: "Femenino"
        },
        lugar: "Pípila",
        unidad: {
          numero: "AMB-02",
          operador: "Ana Martínez"
        },
        signosVitales: {
          temperatura: 37.0,
          fc: 88,
          fr: 18,
          spo2: 99,
          ta: "110/70",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: [],
        regionesAfectadas: [],
        insumos: [],
        alergias: [],
        medicamentos: [],
        patologias: [],
        trasladoAceptado: false,
        observaciones: "Valoración sin hallazgos",
        recomendaciones: "Alta",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
          id: 51,
          fechaHora: "2026-01-10T22:20:00",
          paciente: {
            nombre: "Héctor Campos",
            edad: 52,
            genero: "Masculino"
          },
          lugar: "Garrison",
          unidad: {
            numero: "AMB-03",
            operador: "Roberto Sánchez"
          },
          signosVitales: {
            temperatura: 37.1,
            fc: 100,
            fr: 22,
            spo2: 96,
            ta: "130/85",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: ["Contusión"],
          regionesAfectadas: ["Muslo"],
          insumos: [
            { nombre: "Gasas estériles", cantidad: 2 },
            { nombre: "Vendas 20cm", cantidad: 1 }
          ],
          alergias: ["Ninguna"],
          medicamentos: ["Ninguno"],
          patologias: ["Ninguna"],
          trasladoAceptado: false,
          observaciones: "Golpe durante trabajo manual",
          recomendaciones: "Reposo y aplicación de frío",
          firmas: {
            paciente: true,
            operador: true,
            testigo: false
          }
    },
    {
          id: 52,
          fechaHora: "2026-01-11T08:30:00",
          paciente: {
            nombre: "Gloria Estrada",
            edad: 75,
            genero: "Femenino"
          },
          lugar: "Hermosísima",
          unidad: {
            numero: "AMB-04",
            operador: "Marta Díaz"
          },
          signosVitales: {
            temperatura: 36.4,
            fc: 75,
            fr: 16,
            spo2: 88,
            ta: "165/100",
            glu: 195
          },
          nivelConciencia: {
            ocular: 3,
            verbal: 3,
            motora: 4,
            total: 10
          },
          pupilas: ["Isocóricas", "Lentas"],
          lesiones: ["Sincope"],
          regionesAfectadas: [],
          insumos: [
            { nombre: "Oxígeno", cantidad: 1 },
            { nombre: "Glucosa oral", cantidad: 1 }
          ],
          alergias: ["Penicilina"],
          medicamentos: ["Metformina", "Amlodipino"],
          patologias: ["Diabetes", "Hipertensión"],
          trasladoAceptado: true,
          observaciones: "Desmayo en casa, confusión",
          recomendaciones: "Traslado urgente para control",
          firmas: {
            paciente: false,
            operador: true,
            testigo: true
          }
    },
    {
          id: 53,
          fechaHora: "2026-01-11T10:15:00",
          paciente: {
            nombre: "Rodrigo Paz",
            edad: 28,
            genero: "Masculino"
          },
          lugar: "Mosca",
          unidad: {
            numero: "AMB-01",
            operador: "Carlos López"
          },
          signosVitales: {
            temperatura: 37.4,
            fc: 95,
            fr: 20,
            spo2: 98,
            ta: "120/78",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: ["Laceración"],
          regionesAfectadas: ["Dedos M."],
          insumos: [
            { nombre: "Gasas estériles", cantidad: 3 },
            { nombre: "Vendas 5cm", cantidad: 2 },
            { nombre: "Jabón quirúrgico", cantidad: 1 }
          ],
          alergias: ["Látex"],
          medicamentos: ["Ninguno"],
          patologias: ["Ninguna"],
          trasladoAceptado: false,
          observaciones: "Raspadura superficial",
          recomendaciones: "Curación simple",
          firmas: {
            paciente: true,
            operador: true,
            testigo: false
          }
    },
    {
          id: 54,
          fechaHora: "2026-01-18T18:35:00",
          paciente: {
            nombre: "Felipe Méndez",
            edad: 47,
            genero: "Masculino"
          },
          lugar: "Garrison",
          unidad: {
            numero: "AMB-03",
            operador: "Roberto Sánchez"
          },
          signosVitales: {
            temperatura: 38.0,
            fc: 110,
            fr: 24,
            spo2: 94,
            ta: "135/85",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: ["Fractura"],
          regionesAfectadas: ["Mano"],
          insumos: [
            { nombre: "Férula", cantidad: 1 },
            { nombre: "Vendas 5cm", cantidad: 3 },
            { nombre: "Gasas estériles", cantidad: 2 }
          ],
          alergias: ["Ninguna"],
          medicamentos: ["Ibuprofeno"],
          patologias: ["Ninguna"],
          trasladoAceptado: true,
          observaciones: "Fractura de metacarpiano",
          recomendaciones: "Inmovilización y radiografía",
          firmas: {
            paciente: true,
            operador: true,
            testigo: true
          }
    },
    {
          id: 55,
          fechaHora: "2026-01-18T22:00:00",
          paciente: {
            nombre: "Rocío Herrera",
            edad: 71,
            genero: "Femenino"
          },
          lugar: "Huevona",
          unidad: {
            numero: "AMB-04",
            operador: "Marta Díaz"
          },
          signosVitales: {
            temperatura: 36.4,
            fc: 75,
            fr: 16,
            spo2: 89,
            ta: "165/100",
            glu: 195
          },
          nivelConciencia: {
            ocular: 3,
            verbal: 4,
            motora: 5,
            total: 12
          },
          pupilas: ["Isocóricas", "Lentas"],
          lesiones: [],
          regionesAfectadas: [],
          insumos: [
            { nombre: "Oxígeno", cantidad: 1 }
          ],
          alergias: ["Sulfas"],
          medicamentos: ["Metformina", "Amlodipino"],
          patologias: ["Diabetes", "Hipertensión"],
          trasladoAceptado: true,
          observaciones: "Descompensación metabólica",
          recomendaciones: "Traslado para control",
          firmas: {
            paciente: false,
            operador: true,
            testigo: true
          }
    },
    {
          id: 56,
          fechaHora: "2026-01-19T08:15:00",
          paciente: {
            nombre: "Nicolás Rojas",
            edad: 23,
            genero: "Masculino"
          },
          lugar: "Árbol",
          unidad: {
            numero: "AMB-01",
            operador: "Carlos López"
          },
          signosVitales: {
            temperatura: 37.2,
            fc: 92,
            fr: 20,
            spo2: 98,
            ta: "118/76",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: ["Contusión"],
          regionesAfectadas: ["Muslo"],
          insumos: [
            { nombre: "Gasas estériles", cantidad: 2 },
            { nombre: "Vendas 20cm", cantidad: 1 }
          ],
          alergias: ["Ninguna"],
          medicamentos: ["Ninguno"],
          patologias: ["Ninguna"],
          trasladoAceptado: false,
          observaciones: "Golpe durante deporte",
          recomendaciones: "Reposo y frío",
          firmas: {
            paciente: true,
            operador: true,
            testigo: false
          }
    },
    {
          id: 57,
          fechaHora: "2026-01-19T11:40:00",
          paciente: {
            nombre: "Pilar Guzmán",
            edad: 8,
            genero: "Femenino"
          },
          lugar: "Toboganes Viejo",
          unidad: {
            numero: "AMB-02",
            operador: "Ana Martínez"
          },
          signosVitales: {
            temperatura: 39.3,
            fc: 140,
            fr: 36,
            spo2: 96,
            ta: "100/62",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: [],
          regionesAfectadas: [],
          insumos: [
            { nombre: "Botella de agua", cantidad: 1 }
          ],
          alergias: ["Ninguna"],
          medicamentos: ["Paracetamol"],
          patologias: ["Ninguna"],
          trasladoAceptado: true,
          observaciones: "Fiebre muy alta",
          recomendaciones: "Evaluación pediátrica urgente",
          firmas: {
            paciente: false,
            operador: true,
            testigo: true
          }
    },
    {
          id: 58,
          fechaHora: "2026-01-19T15:05:00",
          paciente: {
            nombre: "Samuel Castro",
            edad: 56,
            genero: "Masculino"
          },
          lugar: "Hollo Negro",
          unidad: {
            numero: "AMB-03",
            operador: "Roberto Sánchez"
          },
          signosVitales: {
            temperatura: 37.0,
            fc: 95,
            fr: 20,
            spo2: 97,
            ta: "130/85",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: ["Esguince"],
          regionesAfectadas: ["Tobillo"],
          insumos: [
            { nombre: "Vendas 10cm", cantidad: 3 }
          ],
          alergias: ["AINEs"],
          medicamentos: ["Ninguno"],
          patologias: ["Ninguna"],
          trasladoAceptado: false,
          observaciones: "Torcedura leve",
          recomendaciones: "Reposo y vendaje",
          firmas: {
            paciente: true,
            operador: true,
            testigo: false
          }
    },
    {
          id: 59,
          fechaHora: "2026-01-19T18:30:00",
          paciente: {
            nombre: "Dolores Navarro",
            edad: 69,
            genero: "Femenino"
          },
          lugar: "½ Espinazo",
          unidad: {
            numero: "AMB-04",
            operador: "Marta Díaz"
          },
          signosVitales: {
            temperatura: 36.6,
            fc: 85,
            fr: 18,
            spo2: 91,
            ta: "160/95",
            glu: 180
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 4,
            motora: 5,
            total: 13
          },
          pupilas: ["Isocóricas"],
          lesiones: [],
          regionesAfectadas: [],
          insumos: [
            { nombre: "Oxígeno", cantidad: 1 }
          ],
          alergias: ["Penicilina"],
          medicamentos: ["Metformina"],
          patologias: ["Diabetes", "Hipertensión"],
          trasladoAceptado: false,
          observaciones: "Control de rutina",
          recomendaciones: "Seguimiento médico",
          firmas: {
            paciente: true,
            operador: true,
            testigo: false
          }
    },
    {
          id: 60,
          fechaHora: "2026-01-19T21:55:00",
          paciente: {
            nombre: "Abel Cortés",
            edad: 34,
            genero: "Masculino"
          },
          lugar: "Brujitas",
          unidad: {
            numero: "AMB-01",
            operador: "Carlos López"
          },
          signosVitales: {
            temperatura: 37.8,
            fc: 115,
            fr: 26,
            spo2: 82,
            ta: "90/60",
            glu: null
          },
          nivelConciencia: {
            ocular: 2,
            verbal: 3,
            motora: 4,
            total: 9
          },
          pupilas: ["Midriasis"],
          lesiones: ["Inconsciente", "Hematoma"],
          regionesAfectadas: ["Cabeza", "Cuello"],
          insumos: [
            { nombre: "Collarín cervical", cantidad: 1 },
            { nombre: "Oxígeno", cantidad: 1 },
            { nombre: "Gasas estériles", cantidad: 4 }
          ],
          alergias: ["Ninguna"],
          medicamentos: ["Ninguno"],
          patologias: ["Ninguna"],
          trasladoAceptado: true,
          observaciones: "Traumatismo craneoencefálico severo",
          recomendaciones: "Traslado urgente a neurocirugía",
          firmas: {
            paciente: false,
            operador: true,
            testigo: true
          }
    },
    {
          id: 61,
          fechaHora: "2026-01-20T08:25:00",
          paciente: {
            nombre: "Bárbara Delgado",
            edad: 40,
            genero: "Femenino"
          },
          lugar: "Pípila",
          unidad: {
            numero: "AMB-02",
            operador: "Ana Martínez"
          },
          signosVitales: {
            temperatura: 37.1,
            fc: 90,
            fr: 18,
            spo2: 99,
            ta: "115/75",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: ["Laceración"],
          regionesAfectadas: ["Pie"],
          insumos: [
            { nombre: "Gasas estériles", cantidad: 3 },
            { nombre: "Vendas 5cm", cantidad: 2 },
            { nombre: "Jabón quirúrgico", cantidad: 1 }
          ],
          alergias: ["Látex"],
          medicamentos: ["Ninguno"],
          patologias: ["Ninguna"],
          trasladoAceptado: false,
          observaciones: "Corte en pie por objeto punzante",
          recomendaciones: "Curación y vigilancia",
          firmas: {
            paciente: true,
            operador: true,
            testigo: false
          }
    },
    {
          id: 62,
          fechaHora: "2026-01-20T11:50:00",
          paciente: {
            nombre: "Iván Salazar",
            edad: 75,
            genero: "Masculino"
          },
          lugar: "Geotérmica",
          unidad: {
            numero: "AMB-03",
            operador: "Roberto Sánchez"
          },
          signosVitales: {
            temperatura: 36.3,
            fc: 78,
            fr: 16,
            spo2: 87,
            ta: "170/105",
            glu: 210
          },
          nivelConciencia: {
            ocular: 3,
            verbal: 3,
            motora: 4,
            total: 10
          },
          pupilas: ["Anisocóricas"],
          lesiones: ["Sincope"],
          regionesAfectadas: [],
          insumos: [
            { nombre: "Oxígeno", cantidad: 1 },
            { nombre: "Glucosa oral", cantidad: 1 }
          ],
          alergias: ["Sulfas"],
          medicamentos: ["Metformina", "Insulina", "Amlodipino"],
          patologias: ["Diabetes", "Hipertensión"],
          trasladoAceptado: true,
          observaciones: "Crisis hipertensiva con hiperglucemia",
          recomendaciones: "Traslado urgente",
          firmas: {
            paciente: false,
            operador: true,
            testigo: true
          }
    },
    {
          id: 63,
          fechaHora: "2026-01-20T15:15:00",
          paciente: {
            nombre: "Clarisa Mora",
            edad: 27,
            genero: "Femenino"
          },
          lugar: "Obsidiana",
          unidad: {
            numero: "AMB-04",
            operador: "Marta Díaz"
          },
          signosVitales: {
            temperatura: 37.4,
            fc: 95,
            fr: 20,
            spo2: 98,
            ta: "118/76",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: ["Quemadura"],
          regionesAfectadas: ["Pierna"],
          insumos: [
            { nombre: "Gel tópico", cantidad: 1 },
            { nombre: "Gasas estériles", cantidad: 4 },
            { nombre: "Parches protectores (grandes)", cantidad: 3 }
          ],
          alergias: ["Ninguna"],
          medicamentos: ["Ninguno"],
          patologias: ["Ninguna"],
          trasladoAceptado: false,
          observaciones: "Quemadura por líquido caliente",
          recomendaciones: "Curación diaria y protección",
          trasladoAceptado: false,
          observaciones: "Corte con herramienta de trabajo",
          recomendaciones: "Curación diaria",
          firmas: {
            paciente: true,
            operador: true,
            testigo: false
          }
    },
    {
          id: 64,
          fechaHora: "2026-01-11T13:40:00",
          paciente: {
            nombre: "Daniela Moreno",
            edad: 6,
            genero: "Femenino"
          },
          lugar: "Glorieta",
          unidad: {
            numero: "AMB-02",
            operador: "Ana Martínez"
          },
          signosVitales: {
            temperatura: 39.2,
            fc: 138,
            fr: 34,
            spo2: 96,
            ta: "100/60",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: [],
          regionesAfectadas: [],
          insumos: [
            { nombre: "Botella de agua", cantidad: 1 }
          ],
          alergias: ["Ninguna"],
          medicamentos: ["Paracetamol"],
          patologias: ["Ninguna"],
          trasladoAceptado: true,
          observaciones: "Fiebre alta persistente",
          recomendaciones: "Evaluación pediátrica",
          firmas: {
            paciente: false,
            operador: true,
            testigo: true
          }
    },
    {
          id: 65,
          fechaHora: "2026-01-11T16:25:00",
          paciente: {
            nombre: "Alfredo Ramos",
            edad: 43,
            genero: "Masculino"
          },
          lugar: "Toboganes",
          unidad: {
            numero: "AMB-03",
            operador: "Roberto Sánchez"
          },
          signosVitales: {
            temperatura: 37.0,
            fc: 88,
            fr: 18,
            spo2: 97,
            ta: "125/82",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: ["Esguince"],
          regionesAfectadas: ["Tobillo"],
          insumos: [
            { nombre: "Vendas 10cm", cantidad: 3 }
          ],
          alergias: ["AINEs"],
          medicamentos: ["Ninguno"],
          patologias: ["Ninguna"],
          trasladoAceptado: false,
          observaciones: "Torcedura jugando fútbol",
          recomendaciones: "Reposo y hielo",
          firmas: {
            paciente: true,
            operador: true,
            testigo: false
          }
    },
    {
          id: 66,
          fechaHora: "2026-01-11T19:50:00",
          paciente: {
            nombre: "Susana Villar",
            edad: 67,
            genero: "Femenino"
          },
          lugar: "Pinitos",
          unidad: {
            numero: "AMB-04",
            operador: "Marta Díaz"
          },
          signosVitales: {
            temperatura: 36.7,
            fc: 92,
            fr: 20,
            spo2: 91,
            ta: "155/95",
            glu: 165
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 4,
            motora: 5,
            total: 13
          },
          pupilas: ["Isocóricas"],
          lesiones: [],
          regionesAfectadas: [],
          insumos: [
            { nombre: "Oxígeno", cantidad: 1 }
          ],
          alergias: ["Penicilina"],
          medicamentos: ["Metformina"],
          patologias: ["Diabetes", "Hipertensión"],
          trasladoAceptado: false,
          observaciones: "Control de rutina",
          recomendaciones: "Continuar tratamiento",
          firmas: {
            paciente: true,
            operador: true,
            testigo: false
          }
    },
    {
          id: 67,
          fechaHora: "2026-01-11T22:35:00",
          paciente: {
            nombre: "Cristian Urbina",
            edad: 21,
            genero: "Masculino"
          },
          lugar: "Espinazo",
          unidad: {
            numero: "AMB-01",
            operador: "Carlos López"
          },
          signosVitales: {
            temperatura: 38.1,
            fc: 118,
            fr: 26,
            spo2: 84,
            ta: "95/60",
            glu: null
          },
          nivelConciencia: {
            ocular: 2,
            verbal: 3,
            motora: 4,
            total: 9
          },
          pupilas: ["Anisocóricas"],
          lesiones: ["Inconsciente", "Fractura"],
          regionesAfectadas: ["Cabeza", "Brazo"],
          insumos: [
            { nombre: "Collarín cervical", cantidad: 1 },
            { nombre: "Oxígeno", cantidad: 1 },
            { nombre: "Férula", cantidad: 1 }
          ],
          alergias: ["Ninguna"],
          medicamentos: ["Ninguno"],
          patologias: ["Ninguna"],
          trasladoAceptado: true,
          observaciones: "Accidente de motocicleta grave",
          recomendaciones: "Traslado urgente a trauma",
          firmas: {
            paciente: false,
            operador: true,
            testigo: true
          }
    },
    {
          id: 68,
          fechaHora: "2026-01-12T08:00:00",
          paciente: {
            nombre: "Cecilia Bravo",
            edad: 38,
            genero: "Femenino"
          },
          lugar: "½ Mosca",
          unidad: {
            numero: "AMB-02",
            operador: "Ana Martínez"
          },
          signosVitales: {
            temperatura: 37.2,
            fc: 90,
            fr: 18,
            spo2: 99,
            ta: "115/75",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: ["Abrasión"],
          regionesAfectadas: ["Rodilla"],
          insumos: [
            { nombre: "Gasas estériles", cantidad: 2 },
            { nombre: "Vendas 10cm", cantidad: 1 }
          ],
          alergias: ["Ninguna"],
          medicamentos: ["Ninguno"],
          patologias: ["Ninguna"],
          trasladoAceptado: false,
          observaciones: "Raspadura superficial",
          recomendaciones: "Limpieza y curación",
          firmas: {
            paciente: true,
            operador: true,
            testigo: false
          }
    },
    {
          id: 69,
          fechaHora: "2026-01-12T11:20:00",
          paciente: {
            nombre: "Mauricio Solis",
            edad: 79,
            genero: "Masculino"
          },
          lugar: "Vaca Muerta",
          unidad: {
            numero: "AMB-03",
            operador: "Roberto Sánchez"
          },
          signosVitales: {
            temperatura: 36.3,
            fc: 78,
            fr: 16,
            spo2: 86,
            ta: "170/105",
            glu: 220
          },
          nivelConciencia: {
            ocular: 3,
            verbal: 3,
            motora: 4,
            total: 10
          },
          pupilas: ["Isocóricas", "Lentas"],
          lesiones: [],
          regionesAfectadas: [],
          insumos: [
            { nombre: "Oxígeno", cantidad: 1 }
          ],
          alergias: ["Sulfas"],
          medicamentos: ["Metformina", "Insulina", "Amlodipino"],
          patologias: ["Diabetes", "Hipertensión"],
          trasladoAceptado: true,
          observaciones: "Crisis hipertensiva con hiperglucemia",
          recomendaciones: "Traslado urgente",
          firmas: {
            paciente: false,
            operador: true,
            testigo: true
          }
    },
    {
          id: 70,
          fechaHora: "2026-01-12T14:45:00",
          paciente: {
            nombre: "Andrea Vega",
            edad: 30,
            genero: "Femenino"
          },
          lugar: "Arenosas",
          unidad: {
            numero: "AMB-04",
            operador: "Marta Díaz"
          },
          signosVitales: {
            temperatura: 37.5,
            fc: 95,
            fr: 20,
            spo2: 98,
            ta: "118/76",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: ["Quemadura"],
          regionesAfectadas: ["Mano"],
          insumos: [
            { nombre: "Gel tópico", cantidad: 1 },
            { nombre: "Gasas estériles", cantidad: 3 },
            { nombre: "Parches protectores (grandes)", cantidad: 2 }
          ],
          alergias: ["Látex"],
          medicamentos: ["Ninguno"],
          patologias: ["Ninguna"],
          trasladoAceptado: false,
          observaciones: "Quemadura superficial por plancha",
          recomendaciones: "Aplicar gel y proteger",
          firmas: {
            paciente: true,
            operador: true,
            testigo: false
          }
    },
    {
          id: 71,
          fechaHora: "2026-01-12T17:30:00",
          paciente: {
            nombre: "Pablo Montiel",
            edad: 15,
            genero: "Masculino"
          },
          lugar: "Brujitas",
          unidad: {
            numero: "AMB-01",
            operador: "Carlos López"
          },
          signosVitales: {
            temperatura: 37.8,
            fc: 115,
            fr: 24,
            spo2: 97,
            ta: "115/70",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: ["Contusión", "Edema"],
          regionesAfectadas: ["Pierna"],
          insumos: [
            { nombre: "Gasas estériles", cantidad: 2 },
            { nombre: "Vendas 10cm", cantidad: 2 }
          ],
          alergias: ["Ninguna"],
          medicamentos: ["Ninguno"],
          patologias: ["Ninguna"],
          trasladoAceptado: false,
          observaciones: "Golpe durante partido deportivo",
          recomendaciones: "Reposo y frío local",
          firmas: {
            paciente: true,
            operador: true,
            testigo: true
          }
    },
    {
          id: 72,
          fechaHora: "2026-01-12T20:55:00",
          paciente: {
            nombre: "Olivia Hernández",
            edad: 51,
            genero: "Femenino"
          },
          lugar: "Pípila",
          unidad: {
            numero: "AMB-02",
            operador: "Ana Martínez"
          },
          signosVitales: {
            temperatura: 36.9,
            fc: 98,
            fr: 22,
            spo2: 94,
            ta: "135/88",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: ["Luxación"],
          regionesAfectadas: ["Hombro"],
          insumos: [
            { nombre: "Férula", cantidad: 1 },
            { nombre: "Vendas 5cm", cantidad: 2 }
          ],
          alergias: ["AINEs"],
          medicamentos: ["Ninguno"],
          patologias: ["Ninguna"],
          trasladoAceptado: true,
          observaciones: "Fractura de dedo del pie por caída",
          recomendaciones: "Inmovilización y evaluación ortopédica",
          firmas: {
            paciente: true,
            operador: true,
            testigo: true
          }
    },
    {
          id: 73,
          fechaHora: "2026-01-14T17:45:00",
          paciente: {
            nombre: "Bruno Santana",
            edad: 55,
            genero: "Masculino"
          },
          lugar: "Hollo Negro",
          unidad: {
            numero: "AMB-03",
            operador: "Roberto Sánchez"
          },
          signosVitales: {
            temperatura: 36.8,
            fc: 95,
            fr: 20,
            spo2: 94,
            ta: "145/90",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: ["Contusión"],
          regionesAfectadas: ["Tórax"],
          insumos: [
            { nombre: "Gasas estériles", cantidad: 3 },
            { nombre: "Vendas 20cm", cantidad: 2 }
          ],
          alergias: ["Penicilina"],
          medicamentos: ["Ninguno"],
          patologias: ["Hipertensión"],
          trasladoAceptado: false,
          observaciones: "Golpe en tórax durante trabajo",
          recomendaciones: "Reposo y observación",
          firmas: {
            paciente: true,
            operador: true,
            testigo: false
          }
    },
    {
          id: 74,
          fechaHora: "2026-01-14T20:30:00",
          paciente: {
            nombre: "Alicia Mendoza",
            edad: 33,
            genero: "Femenino"
          },
          lugar: "½ Espinazo",
          unidad: {
            numero: "AMB-04",
            operador: "Marta Díaz"
          },
          signosVitales: {
            temperatura: 37.2,
            fc: 90,
            fr: 18,
            spo2: 98,
            ta: "115/75",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: ["Quemadura"],
          regionesAfectadas: ["Pie"],
          insumos: [
            { nombre: "Gel tópico", cantidad: 1 },
            { nombre: "Gasas estériles", cantidad: 3 },
            { nombre: "Parches protectores (grandes)", cantidad: 2 }
          ],
          alergias: ["Látex"],
          medicamentos: ["Ninguno"],
          patologias: ["Ninguna"],
          trasladoAceptado: false,
          observaciones: "Quemadura por agua caliente",
          recomendaciones: "Curación diaria",
          firmas: {
            paciente: true,
            operador: true,
            testigo: false
          }
    },
    {
          id: 75,
          fechaHora: "2026-01-15T08:15:00",
          paciente: {
            nombre: "Esteban Rosales",
            edad: 12,
            genero: "Masculino"
          },
          lugar: "Brujitas",
          unidad: {
            numero: "AMB-01",
            operador: "Carlos López"
          },
          signosVitales: {
            temperatura: 37.9,
            fc: 110,
            fr: 26,
            spo2: 96,
            ta: "105/65",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: ["Abrasión", "Contusión"],
          regionesAfectadas: ["Rodilla", "Mano"],
          insumos: [
            { nombre: "Gasas estériles", cantidad: 3 },
            { nombre: "Vendas 10cm", cantidad: 2 }
          ],
          alergias: ["Ninguna"],
          medicamentos: ["Ninguno"],
          patologias: ["Ninguna"],
          trasladoAceptado: false,
          observaciones: "Caída de bicicleta",
          recomendaciones: "Curación y observación",
          firmas: {
            paciente: true,
            operador: true,
            testigo: true
          }
    },
    {
          id: 76,
          fechaHora: "2026-01-15T11:40:00",
          paciente: {
            nombre: "Norma Aguilar",
            edad: 68,
            genero: "Femenino"
          },
          lugar: "Pípila",
          unidad: {
            numero: "AMB-02",
            operador: "Ana Martínez"
          },
          signosVitales: {
            temperatura: 36.5,
            fc: 85,
            fr: 18,
            spo2: 90,
            ta: "160/95",
            glu: 185
          },
          nivelConciencia: {
            ocular: 3,
            verbal: 4,
            motora: 5,
            total: 12
          },
          pupilas: ["Isocóricas", "Lentas"],
          lesiones: [],
          regionesAfectadas: [],
          insumos: [
            { nombre: "Oxígeno", cantidad: 1 }
          ],
          alergias: ["Penicilina"],
          medicamentos: ["Metformina", "Amlodipino"],
          patologias: ["Diabetes", "Hipertensión"],
          trasladoAceptado: true,
          observaciones: "Desorientación y disnea",
          recomendaciones: "Traslado para control",
          firmas: {
            paciente: false,
            operador: true,
            testigo: true
          }
    },
    {
          id: 77,
          fechaHora: "2026-01-15T14:25:00",
          paciente: {
            nombre: "Ismael Carvajal",
            edad: 26,
            genero: "Masculino"
          },
          lugar: "Geotérmica",
          unidad: {
            numero: "AMB-03",
            operador: "Roberto Sánchez"
          },
          signosVitales: {
            temperatura: 37.4,
            fc: 98,
            fr: 20,
            spo2: 98,
            ta: "120/80",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: ["Laceración"],
          regionesAfectadas: ["Cara"],
          insumos: [
            { nombre: "Gasas estériles", cantidad: 4 },
            { nombre: "Vendas 5cm", cantidad: 2 },
            { nombre: "Jabón quirúrgico", cantidad: 1 }
          ],
          alergias: ["Ninguna"],
          medicamentos: ["Ninguno"],
          patologias: ["Ninguna"],
          trasladoAceptado: false,
          observaciones: "Corte facial superficial",
          recomendaciones: "Sutura estética",
          firmas: {
            paciente: true,
            operador: true,
            testigo: false
          }
    },
    {
          id: 78,
          fechaHora: "2026-01-15T17:50:00",
          paciente: {
            nombre: "Julieta Paredes",
            edad: 45,
            genero: "Femenino"
          },
          lugar: "Obsidiana",
          unidad: {
            numero: "AMB-04",
            operador: "Marta Díaz"
          },
          signosVitales: {
            temperatura: 37.1,
            fc: 92,
            fr: 20,
            spo2: 97,
            ta: "125/82",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: ["Esguince"],
          regionesAfectadas: ["Tobillo"],
          insumos: [
            { nombre: "Vendas 10cm", cantidad: 3 }
          ],
          alergias: ["AINEs"],
          medicamentos: ["Ninguno"],
          patologias: ["Ninguna"],
          trasladoAceptado: false,
          observaciones: "Torcedura al caminar",
          recomendaciones: "Reposo y vendaje",
          firmas: {
            paciente: true,
            operador: true,
            testigo: false
          }
    },
    {
          id: 79,
          fechaHora: "2026-01-15T21:15:00",
          paciente: {
            nombre: "Marcos Silva",
            edad: 74,
            genero: "Masculino"
          },
          lugar: "Campeón del Mundo",
          unidad: {
            numero: "AMB-01",
            operador: "Carlos López"
          },
          signosVitales: {
            temperatura: 36.3,
            fc: 78,
            fr: 16,
            spo2: 88,
            ta: "165/100",
            glu: 205
          },
          nivelConciencia: {
            ocular: 3,
            verbal: 3,
            motora: 4,
            total: 10
          },
          pupilas: ["Isocóricas", "Lentas"],
          lesiones: ["Sincope"],
          regionesAfectadas: [],
          insumos: [
            { nombre: "Oxígeno", cantidad: 1 },
            { nombre: "Glucosa oral", cantidad: 1 }
          ],
          alergias: ["Sulfas"],
          medicamentos: ["Metformina", "Amlodipino"],
          patologias: ["Diabetes", "Hipertensión"],
          trasladoAceptado: true,
          observaciones: "Desmayo con confusión",
          recomendaciones: "Traslado urgente",
          firmas: {
            paciente: false,
            operador: true,
            testigo: true
          }
    },
    {
          id: 80,
          fechaHora: "2026-01-16T08:30:00",
          paciente: {
            nombre: "Irene Morales",
            edad: 39,
            genero: "Femenino"
          },
          lugar: "Pirinola",
          unidad: {
            numero: "AMB-02",
            operador: "Ana Martínez"
          },
          signosVitales: {
            temperatura: 37.3,
            fc: 95,
            fr: 20,
            spo2: 98,
            ta: "118/76",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: ["Contusión"],
          regionesAfectadas: ["Brazo"],
          insumos: [
            { nombre: "Gasas estériles", cantidad: 2 },
            { nombre: "Vendas 10cm", cantidad: 1 }
          ],
          alergias: ["Látex"],
          medicamentos: ["Ninguno"],
          patologias: ["Ninguna"],
          trasladoAceptado: false,
          observaciones: "Golpe leve en brazo",
          recomendaciones: "Reposo y observación",
          firmas: {
            paciente: true,
            operador: true,
            testigo: false
          }
    },
    {
          id: 81,
          fechaHora: "2026-01-16T11:55:00",
          paciente: {
            nombre: "Valentín Ibarra",
            edad: 18,
            genero: "Masculino"
          },
          lugar: "Garrison",
          unidad: {
            numero: "AMB-03",
            operador: "Roberto Sánchez"
          },
          signosVitales: {
            temperatura: 38.2,
            fc: 115,
            fr: 26,
            spo2: 83,
            ta: "110/70",
            glu: null
          },
          nivelConciencia: {
            ocular: 2,
            verbal: 3,
            motora: 4,
            total: 9
          },
          pupilas: ["Midriasis"],
          lesiones: ["Inconsciente", "Fractura", "Hematoma"],
          regionesAfectadas: ["Cabeza", "Pierna"],
          insumos: [
            { nombre: "Collarín cervical", cantidad: 1 },
            { nombre: "Oxígeno", cantidad: 1 },
            { nombre: "Férula", cantidad: 1 }
          ],
          alergias: ["Ninguna"],
          medicamentos: ["Ninguno"],
          patologias: ["Ninguna"],
          trasladoAceptado: true,
          observaciones: "Accidente deportivo grave",
          recomendaciones: "Traslado urgente a trauma",
          firmas: {
            paciente: false,
            operador: true,
            testigo: true
          }
    },
    {
          id: 82,
          fechaHora: "2026-01-16T15:20:00",
          paciente: {
            nombre: "Elvira Zamora",
            edad: 54,
            genero: "Femenino"
          },
          lugar: "Huevona",
          unidad: {
            numero: "AMB-04",
            operador: "Marta Díaz"
          },
          signosVitales: {
            temperatura: 37.0,
            fc: 88,
            fr: 18,
            spo2: 97,
            ta: "130/85",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: ["Abrasión"],
          regionesAfectadas: ["Rodilla"],
          insumos: [
            { nombre: "Gasas estériles", cantidad: 2 },
            { nombre: "Vendas 10cm", cantidad: 1 }
          ],
          alergias: ["AINEs"],
          medicamentos: ["Ninguno"],
          patologias: ["Ninguna"],
          trasladoAceptado: false,
          observaciones: "Raspadura leve",
          recomendaciones: "Curación simple",
          firmas: {
            paciente: true,
            operador: true,
            testigo: false
          }
    },
    {
          id: 83,
          fechaHora: "2026-01-16T18:45:00",
          paciente: {
            nombre: "Sebastián Campos",
            edad: 7,
            genero: "Masculino"
          },
          lugar: "Árbol",
          unidad: {
            numero: "AMB-01",
            operador: "Carlos López"
          },
          signosVitales: {
            temperatura: 39.1,
            fc: 132,
            fr: 32,
            spo2: 96,
            ta: "98/62",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: [],
          regionesAfectadas: [],
          insumos: [
            { nombre: "Botella de agua", cantidad: 1 }
          ],
          alergias: ["Ninguna"],
          medicamentos: ["Paracetamol"],
          patologias: ["Ninguna"],
          trasladoAceptado: true,
          observaciones: "Fiebre alta persistente",
          recomendaciones: "Evaluación pediátrica",
          firmas: {
            paciente: false,
            operador: true,
            testigo: true
          }
    },
    {
          id: 84,
          fechaHora: "2026-01-16T22:10:00",
          paciente: {
            nombre: "Leticia Ortiz",
            edad: 61,
            genero: "Femenino"
          },
          lugar: "Toboganes Viejo",
          unidad: {
            numero: "AMB-02",
            operador: "Ana Martínez"
          },
          signosVitales: {
            temperatura: 36.7,
            fc: 90,
            fr: 20,
            spo2: 93,
            ta: "150/92",
            glu: 170
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 4,
            motora: 5,
            total: 13
          },
          pupilas: ["Isocóricas"],
          lesiones: [],
          regionesAfectadas: [],
          insumos: [],
          alergias: ["Penicilina"],
          medicamentos: ["Metformina"],
          patologias: ["Diabetes"],
          trasladoAceptado: false,
          observaciones: "Control de glucosa",
          recomendaciones: "Ajuste de tratamiento",
          firmas: {
            paciente: true,
            operador: true,
            testigo: false
          }
    },
    {
          id: 85,
          fechaHora: "2026-01-17T08:00:00",
          paciente: {
            nombre: "Damián Vargas",
            edad: 42,
            genero: "Masculino"
          },
          lugar: "Hollo Negro",
          unidad: {
            numero: "AMB-03",
            operador: "Roberto Sánchez"
          },
          signosVitales: {
            temperatura: 37.5,
            fc: 105,
            fr: 24,
            spo2: 97,
            ta: "125/80",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: ["Luxación"],
          regionesAfectadas: ["Dedos M."],
          insumos: [
            { nombre: "Vendas 5cm", cantidad: 2 },
            { nombre: "Gasas estériles", cantidad: 1 }
          ],
          alergias: ["Ninguna"],
          medicamentos: ["Ninguno"],
          patologias: ["Ninguna"],
          trasladoAceptado: true,
          observaciones: "Luxación de dedo",
          recomendaciones: "Reducción y férula",
          firmas: {
            paciente: true,
            operador: true,
            testigo: false
          }
    },
    {
          id: 86,
          fechaHora: "2026-01-17T11:25:00",
          paciente: {
            nombre: "Miriam Solís",
            edad: 35,
            genero: "Femenino"
          },
          lugar: "½ Espinazo",
          unidad: {
            numero: "AMB-04",
            operador: "Marta Díaz"
          },
          signosVitales: {
            temperatura: 37.2,
            fc: 92,
            fr: 20,
            spo2: 98,
            ta: "115/75",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: ["Quemadura"],
          regionesAfectadas: ["Antebrazo"],
          insumos: [
            { nombre: "Gel tópico", cantidad: 1 },
            { nombre: "Gasas estériles", cantidad: 3 },
            { nombre: "Parches protectores (grandes)", cantidad: 2 }
          ],
          alergias: ["Látex"],
          medicamentos: ["Ninguno"],
          patologias: ["Ninguna"],
          trasladoAceptado: false,
          observaciones: "Quemadura de segundo grado",
          recomendaciones: "Curación diaria",
          firmas: {
            paciente: true,
            operador: true,
            testigo: false
          }
    },
    {
          id: 87,
          fechaHora: "2026-01-17T14:50:00",
          paciente: {
            nombre: "Lorenzo Ruiz",
            edad: 78,
            genero: "Masculino"
          },
          lugar: "Brujitas",
          unidad: {
            numero: "AMB-01",
            operador: "Carlos López"
          },
          signosVitales: {
            temperatura: 36.2,
            fc: 72,
            fr: 14,
            spo2: 86,
            ta: "170/105",
            glu: 215
          },
          nivelConciencia: {
            ocular: 3,
            verbal: 3,
            motora: 4,
            total: 10
          },
          pupilas: ["Anisocóricas"],
          lesiones: ["Sincope"],
          regionesAfectadas: [],
          insumos: [
            { nombre: "Oxígeno", cantidad: 1 }
          ],
          alergias: ["Sulfas"],
          medicamentos: ["Metformina", "Insulina", "Amlodipino"],
          patologias: ["Diabetes", "Hipertensión"],
          trasladoAceptado: true,
          observaciones: "Crisis hipertensiva severa",
          recomendaciones: "Traslado inmediato",
          firmas: {
            paciente: false,
            operador: true,
            testigo: true
          }
    },
    {
          id: 88,
          fechaHora: "2026-01-17T18:15:00",
          paciente: {
            nombre: "Teresa Vega",
            edad: 29,
            genero: "Femenino"
          },
          lugar: "Pípila",
          unidad: {
            numero: "AMB-02",
            operador: "Ana Martínez"
          },
          signosVitales: {
            temperatura: 37.1,
            fc: 88,
            fr: 18,
            spo2: 99,
            ta: "110/70",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: ["Laceración"],
          regionesAfectadas: ["Mano"],
          insumos: [
            { nombre: "Gasas estériles", cantidad: 3 },
            { nombre: "Vendas 5cm", cantidad: 2 },
            { nombre: "Jabón quirúrgico", cantidad: 1 }
          ],
          alergias: ["Ninguna"],
          medicamentos: ["Ninguno"],
          patologias: ["Ninguna"],
          trasladoAceptado: false,
          observaciones: "Corte en mano durante cocina",
          recomendaciones: "Curación y vigilancia",
          firmas: {
            paciente: true,
            operador: true,
            testigo: false
          }
    },
    {
          id: 89,
          fechaHora: "2026-01-17T21:40:00",
          paciente: {
            nombre: "Gonzalo Ramírez",
            edad: 50,
            genero: "Masculino"
          },
          lugar: "Geotérmica",
          unidad: {
            numero: "AMB-03",
            operador: "Roberto Sánchez"
          },
          signosVitales: {
            temperatura: 36.9,
            fc: 98,
            fr: 22,
            spo2: 95,
            ta: "140/88",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: ["Esguince"],
          regionesAfectadas: ["Rodilla"],
          insumos: [
            { nombre: "Vendas 10cm", cantidad: 3 }
          ],
          alergias: ["AINEs"],
          medicamentos: ["Ibuprofeno"],
          patologias: ["Ninguna"],
          trasladoAceptado: false,
          observaciones: "Torcedura durante caminata",
          recomendaciones: "Reposo y hielo",
          firmas: {
            paciente: true,
            operador: true,
            testigo: false
          }
    },
    {
          id: 90,
          fechaHora: "2026-01-18T08:20:00",
          paciente: {
            nombre: "Graciela Peña",
            edad: 13,
            genero: "Femenino"
          },
          lugar: "Obsidiana",
          unidad: {
            numero: "AMB-04",
            operador: "Marta Díaz"
          },
          signosVitales: {
            temperatura: 38.5,
            fc: 120,
            fr: 28,
            spo2: 97,
            ta: "110/70",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: ["Contusión"],
          regionesAfectadas: ["Abdomen"],
          insumos: [
            { nombre: "Gasas estériles", cantidad: 2 }
          ],
          alergias: ["Ninguna"],
          medicamentos: ["Ninguno"],
          patologias: ["Ninguna"],
          trasladoAceptado: false,
          observaciones: "Golpe abdominal leve",
          recomendaciones: "Observación domiciliaria",
          firmas: {
            paciente: true,
            operador: true,
            testigo: true
          }
    }, 
    {
          id: 91,
          fechaHora: "2026-01-13T08:25:00",
          paciente: {
            nombre: "Guillermo Arias",
            edad: 64,
            genero: "Masculino"
          },
          lugar: "Geotérmica",
          unidad: {
            numero: "AMB-03",
            operador: "Roberto Sánchez"
          },
          signosVitales: {
            temperatura: 36.6,
            fc: 88,
            fr: 18,
            spo2: 92,
            ta: "150/90",
            glu: 145
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 4,
            motora: 5,
            total: 13
          },
          pupilas: ["Isocóricas"],
          lesiones: [],
          regionesAfectadas: [],
          insumos: [
            { nombre: "Oxígeno", cantidad: 1 }
          ],
          alergias: ["Penicilina"],
          medicamentos: ["Amlodipino"],
          patologias: ["Hipertensión"],
          trasladoAceptado: false,
          observaciones: "Control de presión arterial",
          recomendaciones: "Seguimiento médico",
          firmas: {
            paciente: true,
            operador: true,
            testigo: false
          }
    },
    {
          id: 92,
          fechaHora: "2026-01-13T11:50:00",
          paciente: {
            nombre: "Viviana Campos",
            edad: 25,
            genero: "Femenino"
          },
          lugar: "Obsidiana",
          unidad: {
            numero: "AMB-04",
            operador: "Marta Díaz"
          },
          signosVitales: {
            temperatura: 37.1,
            fc: 85,
            fr: 18,
            spo2: 99,
            ta: "110/70",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: ["Laceración"],
          regionesAfectadas: ["Antebrazo"],
          insumos: [
            { nombre: "Gasas estériles", cantidad: 4 },
            { nombre: "Vendas 10cm", cantidad: 2 },
            { nombre: "Jabón quirúrgico", cantidad: 1 }
          ],
          alergias: ["Ninguna"],
          medicamentos: ["Ninguno"],
          patologias: ["Ninguna"],
          trasladoAceptado: false,
          observaciones: "Corte con objeto filoso",
          recomendaciones: "Curación y vigilancia",
          firmas: {
            paciente: true,
            operador: true,
            testigo: false
          }
    },
    {
          id: 93,
          fechaHora: "2026-01-13T15:15:00",
          paciente: {
            nombre: "Arturo Delgado",
            edad: 72,
            genero: "Masculino"
          },
          lugar: "Campeón del Mundo",
          unidad: {
            numero: "AMB-01",
            operador: "Carlos López"
          },
          signosVitales: {
            temperatura: 36.4,
            fc: 80,
            fr: 18,
            spo2: 89,
            ta: "165/100",
            glu: 200
          },
          nivelConciencia: {
            ocular: 3,
            verbal: 3,
            motora: 4,
            total: 10
          },
          pupilas: ["Isocóricas", "Lentas"],
          lesiones: ["Sincope"],
          regionesAfectadas: [],
          insumos: [
            { nombre: "Oxígeno", cantidad: 1 },
            { nombre: "Glucosa oral", cantidad: 1 }
          ],
          alergias: ["Sulfas"],
          medicamentos: ["Metformina", "Amlodipino"],
          patologias: ["Diabetes", "Hipertensión"],
          trasladoAceptado: true,
          observaciones: "Pérdida de conciencia breve",
          recomendaciones: "Traslado para evaluación",
          firmas: {
            paciente: false,
            operador: true,
            testigo: true
          }
    },
    {
          id: 94,
          fechaHora: "2026-01-13T18:40:00",
          paciente: {
            nombre: "Ximena Torres",
            edad: 10,
            genero: "Femenino"
          },
          lugar: "Pirinola",
          unidad: {
            numero: "AMB-02",
            operador: "Ana Martínez"
          },
          signosVitales: {
            temperatura: 38.7,
            fc: 125,
            fr: 30,
            spo2: 97,
            ta: "100/65",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: ["Contusión"],
          regionesAfectadas: ["Cabeza"],
          insumos: [
            { nombre: "Gasas estériles", cantidad: 2 },
            { nombre: "Botella de agua", cantidad: 1 }
          ],
          alergias: ["Ninguna"],
          medicamentos: ["Paracetamol"],
          patologias: ["Ninguna"],
          trasladoAceptado: true,
          observaciones: "Golpe en cabeza con fiebre",
          recomendaciones: "Observación neurológica",
          firmas: {
            paciente: false,
            operador: true,
            testigo: true
          }
    },
    {
          id: 95,
          fechaHora: "2026-01-13T21:25:00",
          paciente: {
            nombre: "Vicente Reyes",
            edad: 49,
            genero: "Masculino"
          },
          lugar: "Garrison",
          unidad: {
            numero: "AMB-03",
            operador: "Roberto Sánchez"
          },
          signosVitales: {
            temperatura: 37.3,
            fc: 105,
            fr: 22,
            spo2: 96,
            ta: "130/85",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: ["Esguince"],
          regionesAfectadas: ["Rodilla"],
          insumos: [
            { nombre: "Vendas 10cm", cantidad: 3 }
          ],
          alergias: ["Látex"],
          medicamentos: ["Ibuprofeno"],
          patologias: ["Ninguna"],
          trasladoAceptado: false,
          observaciones: "Torcedura leve caminando",
          recomendaciones: "Reposo y hielo",
          firmas: {
            paciente: true,
            operador: true,
            testigo: false
          }
    },
    {
          id: 96,
          fechaHora: "2026-01-14T08:10:00",
          paciente: {
            nombre: "Fernanda Luna",
            edad: 36,
            genero: "Femenino"
          },
          lugar: "Huevona",
          unidad: {
            numero: "AMB-04",
            operador: "Marta Díaz"
          },
          signosVitales: {
            temperatura: 37.0,
            fc: 88,
            fr: 18,
            spo2: 98,
            ta: "115/75",
            glu: null
          },
          nivelConciencia: {
            ocular: 4,
            verbal: 5,
            motora: 6,
            total: 15
          },
          pupilas: ["Isocóricas"],
          lesiones: ["Abrasión"],
          regionesAfectadas: ["Codo"],
          insumos: [
            { nombre: "Gasas estériles", cantidad: 2 },
            { nombre: "Vendas 5cm", cantidad: 1 }
          ],
          alergias: ["Ninguna"],
          medicamentos: ["Ninguno"],
          patologias: ["Ninguna"],
          trasladoAceptado: false,
          observaciones: "Raspadura superficial",
          recomendaciones: "Limpieza simple",
          firmas: {
            paciente: true,
            operador: true,
            testigo: false
          }
    },
    {
          id: 97,
          fechaHora: "2026-01-14T11:35:00",
          paciente: {
            nombre: "Octavio Navarro",
            edad: 83,
            genero: "Masculino"
          },
          lugar: "Árbol",
          unidad: {
            numero: "AMB-01",
            operador: "Carlos López"
          },
          signosVitales: {
            temperatura: 36.2,
            fc: 70,
            fr: 14,
            spo2: 85,
            ta: "175/110",
            glu: 230
          },
          nivelConciencia: {
            ocular: 2,
            verbal: 3,
            motora: 4,
            total: 9
          },
          pupilas: ["Anisocóricas"],
          lesiones: ["Inconsciente"],
          regionesAfectadas: [],
          insumos: [
            { nombre: "Oxígeno", cantidad: 1 },
            { nombre: "Collarín cervical", cantidad: 1 }
          ],
          alergias: ["Sulfas"],
          medicamentos: ["Metformina", "Insulina", "Amlodipino"],
          patologias: ["Diabetes", "Hipertensión"],
          trasladoAceptado: true,
          observaciones: "Encontrado inconsciente en domicilio",
          recomendaciones: "Traslado urgente",
          firmas: {
            paciente: false,
            operador: true,
            testigo: true
          }
    },
    {
        id: 98,
        fechaHora: "2026-01-20T08:25:00",
        paciente: {
          nombre: "Bárbara Delgado",
          edad: 40,
          genero: "Femenino"
        },
        lugar: "Pípila",
        unidad: {
          numero: "AMB-02",
          operador: "Ana Martínez"
        },
        signosVitales: {
          temperatura: 37.1,
          fc: 90,
          fr: 18,
          spo2: 99,
          ta: "115/75",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Laceración"],
        regionesAfectadas: ["Pie"],
        insumos: [
          { nombre: "Gasas estériles", cantidad: 3 },
          { nombre: "Vendas 5cm", cantidad: 2 },
          { nombre: "Jabón quirúrgico", cantidad: 1 }
        ],
        alergias: ["Látex"],
        medicamentos: ["Ninguno"],
        patologias: ["Ninguna"],
        trasladoAceptado: false,
        observaciones: "Corte en pie por objeto punzante",
        recomendaciones: "Curación y vigilancia",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 99,
        fechaHora: "2026-01-20T11:50:00",
        paciente: {
          nombre: "Iván Salazar",
          edad: 75,
          genero: "Masculino"
        },
        lugar: "Geotérmica",
        unidad: {
          numero: "AMB-03",
          operador: "Roberto Sánchez"
        },
        signosVitales: {
          temperatura: 36.3,
          fc: 78,
          fr: 16,
          spo2: 87,
          ta: "170/105",
          glu: 210
        },
        nivelConciencia: {
          ocular: 3,
          verbal: 3,
          motora: 4,
          total: 10
        },
        pupilas: ["Anisocóricas"],
        lesiones: ["Sincope"],
        regionesAfectadas: [],
        insumos: [
          { nombre: "Oxígeno", cantidad: 1 },
          { nombre: "Glucosa oral", cantidad: 1 }
        ],
        alergias: ["Sulfas"],
        medicamentos: ["Metformina", "Insulina", "Amlodipino"],
        patologias: ["Diabetes", "Hipertensión"],
        trasladoAceptado: true,
        observaciones: "Crisis hipertensiva con hiperglucemia",
        recomendaciones: "Traslado urgente",
        firmas: {
          paciente: false,
          operador: true,
          testigo: true
        }
    },
    {
        id: 100,
        fechaHora: "2026-01-20T15:15:00",
        paciente: {
          nombre: "Clarisa Mora",
          edad: 27,
          genero: "Femenino"
        },
        lugar: "Obsidiana",
        unidad: {
          numero: "AMB-04",
          operador: "Marta Díaz"
        },
        signosVitales: {
          temperatura: 37.4,
          fc: 95,
          fr: 20,
          spo2: 98,
          ta: "118/76",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Quemadura"],
        regionesAfectadas: ["Pierna"],
        insumos: [
          { nombre: "Gel tópico", cantidad: 1 },
          { nombre: "Gasas estériles", cantidad: 4 },
          { nombre: "Parches protectores (grandes)", cantidad: 3 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Ninguno"],
        patologias: ["Ninguna"],
        trasladoAceptado: false,
        observaciones: "Quemadura por líquido caliente",
        recomendaciones: "Curación diaria y protección",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 101,
        fechaHora: "2026-03-20T18:40:00",
        paciente: {
          nombre: "Héctor Morales",
          edad: 16,
          genero: "Masculino"
        },
        lugar: "Campeón del Mundo",
        unidad: {
          numero: "AMB-01",
          operador: "Carlos López"
        },
        signosVitales: {
          temperatura: 37.6,
          fc: 105,
          fr: 24,
          spo2: 97,
          ta: "115/70",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Contusión", "Edema"],
        regionesAfectadas: ["Pierna"],
        insumos: [
          { nombre: "Gasas estériles", cantidad: 2 },
          { nombre: "Vendas 10cm", cantidad: 2 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Ninguno"],
        patologias: ["Ninguna"],
        trasladoAceptado: false,
        observaciones: "Golpe durante partido de fútbol",
        recomendaciones: "Reposo y aplicación de frío",
        firmas: {
          paciente: true,
          operador: true,
          testigo: true
        }
    },
    {
        id: 102,
        fechaHora: "2026-01-20T22:05:00",
        paciente: {
          nombre: "Eugenia Flores",
          edad: 63,
          genero: "Femenino"
        },
        lugar: "Pirinola",
        unidad: {
          numero: "AMB-02",
          operador: "Ana Martínez"
        },
        signosVitales: {
          temperatura: 36.7,
          fc: 88,
          fr: 20,
          spo2: 92,
          ta: "155/95",
          glu: 165
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 4,
          motora: 5,
          total: 13
        },
        pupilas: ["Isocóricas"],
        lesiones: [],
        regionesAfectadas: [],
        insumos: [
          { nombre: "Oxígeno", cantidad: 1 }
        ],
        alergias: ["Penicilina"],
        medicamentos: ["Metformina", "Amlodipino"],
        patologias: ["Diabetes", "Hipertensión"],
        trasladoAceptado: false,
        observaciones: "Control de presión arterial",
        recomendaciones: "Seguimiento médico",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 103,
        fechaHora: "2026-03-21T08:30:00",
        paciente: {
          nombre: "Óscar Jiménez",
          edad: 44,
          genero: "Masculino"
        },
        lugar: "Garrison",
        unidad: {
          numero: "AMB-03",
          operador: "Roberto Sánchez"
        },
        signosVitales: {
          temperatura: 37.3,
          fc: 100,
          fr: 22,
          spo2: 96,
          ta: "128/82",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Abrasión"],
        regionesAfectadas: ["Rodilla"],
        insumos: [
          { nombre: "Gasas estériles", cantidad: 2 },
          { nombre: "Vendas 10cm", cantidad: 1 }
        ],
        alergias: ["AINEs"],
        medicamentos: ["Ninguno"],
        patologias: ["Ninguna"],
        trasladoAceptado: false,
        observaciones: "Raspadura al caer caminando",
        recomendaciones: "Limpieza y curación",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 104,
        fechaHora: "2026-03-21T11:55:00",
        paciente: {
          nombre: "Lucía Ramírez",
          edad: 9,
          genero: "Femenino"
        },
        lugar: "Huevona",
        unidad: {
          numero: "AMB-04",
          operador: "Marta Díaz"
        },
        signosVitales: {
          temperatura: 38.8,
          fc: 128,
          fr: 30,
          spo2: 97,
          ta: "102/64",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Contusión"],
        regionesAfectadas: ["Cabeza"],
        insumos: [
          { nombre: "Gasas estériles", cantidad: 2 },
          { nombre: "Botella de agua", cantidad: 1 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Paracetamol"],
        patologias: ["Ninguna"],
        trasladoAceptado: true,
        observaciones: "Golpe en cabeza con fiebre",
        recomendaciones: "Observación pediátrica",
        firmas: {
          paciente: false,
          operador: true,
          testigo: true
        }
    },
    {
        id: 105,
        fechaHora: "2026-01-21T15:20:00",
        paciente: {
          nombre: "Gerardo León",
          edad: 58,
          genero: "Masculino"
        },
        lugar: "Árbol",
        unidad: {
          numero: "AMB-01",
          operador: "Carlos López"
        },
        signosVitales: {
          temperatura: 36.8,
          fc: 98,
          fr: 22,
          spo2: 94,
          ta: "145/90",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Esguince"],
        regionesAfectadas: ["Tobillo"],
        insumos: [
          { nombre: "Vendas 10cm", cantidad: 3 }
        ],
        alergias: ["Látex"],
        medicamentos: ["Amlodipino"],
        patologias: ["Hipertensión"],
        trasladoAceptado: false,
        observaciones: "Torcedura leve de tobillo",
        recomendaciones: "Reposo y hielo",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 106,
        fechaHora: "2026-02-21T18:45:00",
        paciente: {
          nombre: "Azucena Torres",
          edad: 37,
          genero: "Femenino"
        },
        lugar: "Toboganes Viejo",
        unidad: {
          numero: "AMB-02",
          operador: "Ana Martínez"
        },
        signosVitales: {
          temperatura: 37.2,
          fc: 92,
          fr: 20,
          spo2: 98,
          ta: "118/76",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Laceración"],
        regionesAfectadas: ["Antebrazo"],
        insumos: [
          { nombre: "Gasas estériles", cantidad: 3 },
          { nombre: "Vendas 10cm", cantidad: 2 },
          { nombre: "Jabón quirúrgico", cantidad: 1 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Ninguno"],
        patologias: ["Ninguna"],
        trasladoAceptado: false,
        observaciones: "Corte con vidrio",
        recomendaciones: "Curación diaria",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 107,
        fechaHora: "2026-01-21T22:10:00",
        paciente: {
          nombre: "Teodoro Ruiz",
          edad: 80,
          genero: "Masculino"
        },
        lugar: "Hollo Negro",
        unidad: {
          numero: "AMB-03",
          operador: "Roberto Sánchez"
        },
        signosVitales: {
          temperatura: 36.2,
          fc: 70,
          fr: 14,
          spo2: 86,
          ta: "175/110",
          glu: 225
        },
        nivelConciencia: {
          ocular: 2,
          verbal: 3,
          motora: 4,
          total: 9
        },
        pupilas: ["Anisocóricas"],
        lesiones: ["Inconsciente"],
        regionesAfectadas: [],
        insumos: [
          { nombre: "Oxígeno", cantidad: 1 },
          { nombre: "Collarín cervical", cantidad: 1 }
        ],
        alergias: ["Sulfas"],
        medicamentos: ["Metformina", "Insulina", "Amlodipino"],
        patologias: ["Diabetes", "Hipertensión"],
        trasladoAceptado: true,
        observaciones: "Encontrado inconsciente, crisis metabólica",
        recomendaciones: "Traslado urgente",
        firmas: {
          paciente: false,
          operador: true,
          testigo: true
        }
    },
    {
        id: 108,
        fechaHora: "2026-01-22T08:15:00",
        paciente: {
          nombre: "Mónica Peña",
          edad: 31,
          genero: "Femenino"
        },
        lugar: "½ Espinazo",
        unidad: {
          numero: "AMB-04",
          operador: "Marta Díaz"
        },
        signosVitales: {
          temperatura: 37.1,
          fc: 88,
          fr: 18,
          spo2: 99,
          ta: "115/75",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Abrasión"],
        regionesAfectadas: ["Mano"],
        insumos: [
          { nombre: "Gasas estériles", cantidad: 2 },
          { nombre: "Vendas 5cm", cantidad: 1 }
        ],
        alergias: ["Látex"],
        medicamentos: ["Ninguno"],
        patologias: ["Ninguna"],
        trasladoAceptado: false,
        observaciones: "Raspadura superficial",
        recomendaciones: "Limpieza simple",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 109,
        fechaHora: "2026-01-22T11:40:00",
        paciente: {
          nombre: "Adrián Castillo",
          edad: 52,
          genero: "Masculino"
        },
        lugar: "Brujitas",
        unidad: {
          numero: "AMB-01",
          operador: "Carlos López"
        },
        signosVitales: {
          temperatura: 37.5,
          fc: 105,
          fr: 24,
          spo2: 95,
          ta: "135/88",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Fractura"],
        regionesAfectadas: ["Clavícula"],
        insumos: [
          { nombre: "Férula", cantidad: 1 },
          { nombre: "Vendas 20cm", cantidad: 3 },
          { nombre: "Collarín cervical", cantidad: 1 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Ibuprofeno"],
        patologias: ["Ninguna"],
        trasladoAceptado: true,
        observaciones: "Fractura de clavícula por caída",
        recomendaciones: "Inmovilización y evaluación",
        firmas: {
          paciente: true,
          operador: true,
          testigo: true
        }
    },
    {
        id: 110,
        fechaHora: "2026-01-22T15:05:00",
        paciente: {
          nombre: "Regina Vega",
          edad: 65,
          genero: "Femenino"
        },
        lugar: "Pípila",
        unidad: {
          numero: "AMB-02",
          operador: "Ana Martínez"
        },
        signosVitales: {
          temperatura: 36.5,
          fc: 82,
          fr: 18,
          spo2: 90,
          ta: "162/98",
          glu: 175
        },
        nivelConciencia: {
          ocular: 3,
          verbal: 4,
          motora: 5,
          total: 12
        },
        pupilas: ["Isocóricas", "Lentas"],
        lesiones: ["Sincope"],
        regionesAfectadas: [],
        insumos: [
          { nombre: "Oxígeno", cantidad: 1 }
        ],
        alergias: ["Penicilina"],
        medicamentos: ["Metformina", "Amlodipino"],
        patologias: ["Diabetes", "Hipertensión"],
        trasladoAceptado: true,
        observaciones: "Desmayo con desorientación",
        recomendaciones: "Traslado para evaluación",
        firmas: {
          paciente: false,
          operador: true,
          testigo: true
        }
    },
    {
        id: 111,
        fechaHora: "2026-01-22T18:30:00",
        paciente: {
          nombre: "Ramiro Ortiz",
          edad: 20,
          genero: "Masculino"
        },
        lugar: "Geotérmica",
        unidad: {
          numero: "AMB-03",
          operador: "Roberto Sánchez"
        },
        signosVitales: {
          temperatura: 37.8,
          fc: 110,
          fr: 26,
          spo2: 97,
          ta: "120/78",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Contusión", "Edema"],
        regionesAfectadas: ["Pierna"],
        insumos: [
          { nombre: "Gasas estériles", cantidad: 2 },
          { nombre: "Vendas 10cm", cantidad: 2 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Ninguno"],
        patologias: ["Ninguna"],
        trasladoAceptado: false,
        observaciones: "Golpe durante deporte",
        recomendaciones: "Reposo y frío local",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 112,
        fechaHora: "2026-01-22T21:55:00",
        paciente: {
          nombre: "Celia Mendoza",
          edad: 48,
          genero: "Femenino"
        },
        lugar: "Obsidiana",
        unidad: {
          numero: "AMB-04",
          operador: "Marta Díaz"
        },
        signosVitales: {
          temperatura: 37.3,
          fc: 95,
          fr: 20,
          spo2: 98,
          ta: "125/82",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Quemadura"],
        regionesAfectadas: ["Mano"],
        insumos: [
          { nombre: "Gel tópico", cantidad: 1 },
          { nombre: "Gasas estériles", cantidad: 3 },
          { nombre: "Parches protectores (grandes)", cantidad: 2 }
        ],
        alergias: ["AINEs"],
        medicamentos: ["Ninguno"],
        patologias: ["Ninguna"],
        trasladoAceptado: false,
        observaciones: "Quemadura superficial en cocina",
        recomendaciones: "Curación y protección",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 113,
        fechaHora: "2026-01-23T08:20:00",
        paciente: {
          nombre: "Homero Silva",
          edad: 77,
          genero: "Masculino"
        },
        lugar: "Campeón del Mundo",
        unidad: {
          numero: "AMB-01",
          operador: "Carlos López"
        },
        signosVitales: {
          temperatura: 36.3,
          fc: 75,
          fr: 16,
          spo2: 88,
          ta: "168/102",
          glu: 200
        },
        nivelConciencia: {
          ocular: 3,
          verbal: 3,
          motora: 4,
          total: 10
        },
        pupilas: ["Isocóricas", "Lentas"],
        lesiones: [],
        regionesAfectadas: [],
        insumos: [
          { nombre: "Oxígeno", cantidad: 1 }
        ],
        alergias: ["Sulfas"],
        medicamentos: ["Metformina", "Amlodipino"],
        patologias: ["Diabetes", "Hipertensión"],
        trasladoAceptado: true,
        observaciones: "Confusión y presión alta",
        recomendaciones: "Traslado urgente",
        firmas: {
          paciente: false,
          operador: true,
          testigo: true
        }
    },
    {
        id: 114,
        fechaHora: "2026-01-23T11:45:00",
        paciente: {
          nombre: "Fabiola Cruz",
          edad: 24,
          genero: "Femenino"
        },
        lugar: "Pirinola",
        unidad: {
          numero: "AMB-02",
          operador: "Ana Martínez"
        },
        signosVitales: {
          temperatura: 37.0,
          fc: 85,
          fr: 18,
          spo2: 99,
          ta: "112/72",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Esguince"],
        regionesAfectadas: ["Tobillo"],
        insumos: [
          { nombre: "Vendas 10cm", cantidad: 3 }
        ],
        alergias: ["Látex"],
        medicamentos: ["Ninguno"],
        patologias: ["Ninguna"],
        trasladoAceptado: false,
        observaciones: "Torcedura leve al caminar",
        recomendaciones: "Reposo y vendaje",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 115,
        fechaHora: "2026-01-23T15:10:00",
        paciente: {
          nombre: "Benito Rojas",
          edad: 11,
          genero: "Masculino"
        },
        lugar: "Garrison",
        unidad: {
          numero: "AMB-03",
          operador: "Roberto Sánchez"
        },
        signosVitales: {
          temperatura: 38.6,
          fc: 125,
          fr: 28,
          spo2: 96,
          ta: "100/64",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Abrasión", "Contusión"],
        regionesAfectadas: ["Rodilla", "Codo"],
        insumos: [
          { nombre: "Gasas estériles", cantidad: 3 },
          { nombre: "Vendas 10cm", cantidad: 2 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Ninguno"],
        patologias: ["Ninguna"],
        trasladoAceptado: false,
        observaciones: "Caída de bicicleta",
        recomendaciones: "Curación y observación",
        firmas: {
          paciente: true,
          operador: true,
          testigo: true
        }
    },
    {
        id: 116,
        fechaHora: "2026-01-23T18:35:00",
        paciente: {
          nombre: "Delia Paredes",
          edad: 59,
          genero: "Femenino"
        },
        lugar: "Huevona",
        unidad: {
          numero: "AMB-04",
          operador: "Marta Díaz"
        },
        signosVitales: {
          temperatura: 36.8,
          fc: 90,
          fr: 20,
          spo2: 93,
          ta: "148/92",
          glu: 155
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 4,
          motora: 5,
          total: 13
        },
        pupilas: ["Isocóricas"],
        lesiones: [],
        regionesAfectadas: [],
        insumos: [
          { nombre: "Oxígeno", cantidad: 1 }
        ],
        alergias: ["Penicilina"],
        medicamentos: ["Metformina"],
        patologias: ["Diabetes"],
        trasladoAceptado: false,
        observaciones: "Control de glucosa",
        recomendaciones: "Seguimiento médico",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 117,
        fechaHora: "2026-01-23T22:00:00",
        paciente: {
          nombre: "Maximiliano Campos",
          edad: 36,
          genero: "Masculino"
        },
        lugar: "Árbol",
        unidad: {
          numero: "AMB-01",
          operador: "Carlos López"
        },
        signosVitales: {
          temperatura: 37.9,
          fc: 118,
          fr: 28,
          spo2: 84,
          ta: "92/58",
          glu: null
        },
        nivelConciencia: {
          ocular: 2,
          verbal: 3,
          motora: 4,
          total: 9
        },
        pupilas: ["Midriasis"],
        lesiones: ["Inconsciente", "Fractura", "Hematoma"],
        regionesAfectadas: ["Cabeza", "Brazo"],
        insumos: [
          { nombre: "Collarín cervical", cantidad: 1 },
          { nombre: "Oxígeno", cantidad: 1 },
          { nombre: "Férula", cantidad: 1 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Ninguno"],
        patologias: ["Ninguna"],
        trasladoAceptado: true,
        observaciones: "Accidente grave con politraumatismo",
        recomendaciones: "Traslado urgente a trauma",
        firmas: {
          paciente: false,
          operador: true,
          testigo: true
        }
    },
    {
        id: 118,
        fechaHora: "2026-01-24T08:25:00",
        paciente: {
          nombre: "Estela Navarro",
          edad: 42,
          genero: "Femenino"
        },
        lugar: "Toboganes Viejo",
        unidad: {
          numero: "AMB-02",
          operador: "Ana Martínez"
        },
        signosVitales: {
          temperatura: 37.2,
          fc: 92,
          fr: 20,
          spo2: 98,
          ta: "120/78",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Laceración"],
        regionesAfectadas: ["Pie"],
        insumos: [
          { nombre: "Gasas estériles", cantidad: 3 },
          { nombre: "Vendas 5cm", cantidad: 2 },
          { nombre: "Jabón quirúrgico", cantidad: 1 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Ninguno"],
        patologias: ["Ninguna"],
        trasladoAceptado: false,
        observaciones: "Corte en pie con objeto punzante",
        recomendaciones: "Curación diaria",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 119,
        fechaHora: "2026-01-24T11:50:00",
        paciente: {
          nombre: "Ulises Soto",
          edad: 73,
          genero: "Masculino"
        },
        lugar: "Hollo Negro",
        unidad: {
          numero: "AMB-03",
          operador: "Roberto Sánchez"
        },
        signosVitales: {
          temperatura: 36.4,
          fc: 80,
          fr: 18,
          spo2: 87,
          ta: "172/108",
          glu: 218
        },
        nivelConciencia: {
          ocular: 3,
          verbal: 3,
          motora: 4,
          total: 10
        },
        pupilas: ["Anisocóricas"],
        lesiones: ["Sincope"],
        regionesAfectadas: [],
        insumos: [
          { nombre: "Oxígeno", cantidad: 1 },
          { nombre: "Glucosa oral", cantidad: 1 }
        ],
        alergias: ["Sulfas"],
        medicamentos: ["Metformina", "Insulina", "Amlodipino"],
        patologias: ["Diabetes", "Hipertensión"],
        trasladoAceptado: true,
        observaciones: "Crisis hipertensiva severa con hiperglucemia",
        recomendaciones: "Traslado urgente",
        firmas: {
          paciente: false,
          operador: true,
          testigo: true
        }
    },
    {
        id: 120,
        fechaHora: "2026-01-24T15:15:00",
        paciente: {
          nombre: "Valentina Ruiz",
          edad: 29,
          genero: "Femenino"
        },
        lugar: "½ Espinazo",
        unidad: {
          numero: "AMB-04",
          operador: "Marta Díaz"
        },
        signosVitales: {
          temperatura: 37.1,
          fc: 88,
          fr: 18,
          spo2: 99,
          ta: "115/75",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Abrasión"],
        regionesAfectadas: ["Rodilla"],
        insumos: [
          { nombre: "Gasas estériles", cantidad: 2 },
          { nombre: "Vendas 10cm", cantidad: 1 }
        ],
        alergias: ["Látex"],
        medicamentos: ["Ninguno"],
        patologias: ["Ninguna"],
        trasladoAceptado: false,
        observaciones: "Raspadura superficial al caer",
        recomendaciones: "Curación simple",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 121,
        fechaHora: "2026-01-24T18:40:00",
        paciente: {
          nombre: "Leonardo Méndez",
          edad: 51,
          genero: "Masculino"
        },
        lugar: "Brujitas",
        unidad: {
          numero: "AMB-01",
          operador: "Carlos López"
        },
        signosVitales: {
          temperatura: 37.4,
          fc: 102,
          fr: 24,
          spo2: 96,
          ta: "138/86",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Luxación"],
        regionesAfectadas: ["Hombro"],
        insumos: [
          { nombre: "Férula", cantidad: 1 },
          { nombre: "Vendas 20cm", cantidad: 2 }
        ],
        alergias: ["AINEs"],
        medicamentos: ["Ninguno"],
        patologias: ["Ninguna"],
        trasladoAceptado: true,
        observaciones: "Luxación de hombro izquierdo",
        recomendaciones: "Reducción ortopédica",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 122,
        fechaHora: "2026-01-24T22:05:00",
        paciente: {
          nombre: "Josefina Ríos",
          edad: 68,
          genero: "Femenino"
        },
        lugar: "Pípila",
        unidad: {
          numero: "AMB-02",
          operador: "Ana Martínez"
        },
        signosVitales: {
          temperatura: 36.6,
          fc: 86,
          fr: 20,
          spo2: 91,
          ta: "158/96",
          glu: 172
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 4,
          motora: 5,
          total: 13
        },
        pupilas: ["Isocóricas"],
        lesiones: [],
        regionesAfectadas: [],
        insumos: [
          { nombre: "Oxígeno", cantidad: 1 }
        ],
        alergias: ["Penicilina"],
        medicamentos: ["Metformina", "Amlodipino"],
        patologias: ["Diabetes", "Hipertensión"],
        trasladoAceptado: false,
        observaciones: "Control de signos vitales",
        recomendaciones: "Seguimiento médico",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 123,
        fechaHora: "2026-01-25T08:30:00",
        paciente: {
          nombre: "Rogelio Sánchez",
          edad: 33,
          genero: "Masculino"
        },
        lugar: "Geotérmica",
        unidad: {
          numero: "AMB-03",
          operador: "Roberto Sánchez"
        },
        signosVitales: {
          temperatura: 37.5,
          fc: 98,
          fr: 22,
          spo2: 97,
          ta: "122/80",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Contusión"],
        regionesAfectadas: ["Abdomen"],
        insumos: [
          { nombre: "Gasas estériles", cantidad: 2 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Ninguno"],
        patologias: ["Ninguna"],
        trasladoAceptado: false,
        observaciones: "Golpe abdominal leve",
        recomendaciones: "Observación y reposo",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 124,
        fechaHora: "2026-01-25T11:55:00",
        paciente: {
          nombre: "Liliana Moreno",
          edad: 7,
          genero: "Femenino"
        },
        lugar: "Obsidiana",
        unidad: {
          numero: "AMB-04",
          operador: "Marta Díaz"
        },
        signosVitales: {
          temperatura: 39.4,
          fc: 136,
          fr: 34,
          spo2: 96,
          ta: "98/60",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: [],
        regionesAfectadas: [],
        insumos: [
          { nombre: "Botella de agua", cantidad: 1 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Paracetamol"],
        patologias: ["Ninguna"],
        trasladoAceptado: true,
        observaciones: "Fiebre alta persistente por 48 horas",
        recomendaciones: "Evaluación pediátrica urgente",
        firmas: {
          paciente: false,
          operador: true,
          testigo: true
        }
    },
    {
        id: 125,
        fechaHora: "2026-01-25T15:20:00",
        paciente: {
          nombre: "Arnaldo Castro",
          edad: 45,
          genero: "Masculino"
        },
        lugar: "Campeón del Mundo",
        unidad: {
          numero: "AMB-01",
          operador: "Carlos López"
        },
        signosVitales: {
          temperatura: 37.0,
          fc: 95,
          fr: 20,
          spo2: 98,
          ta: "128/82",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Esguince"],
        regionesAfectadas: ["Tobillo"],
        insumos: [
          { nombre: "Vendas 10cm", cantidad: 3 }
        ],
        alergias: ["Látex"],
        medicamentos: ["Ibuprofeno"],
        patologias: ["Ninguna"],
        trasladoAceptado: false,
        observaciones: "Torcedura durante caminata",
        recomendaciones: "Reposo y hielo",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 126,
        fechaHora: "2026-01-25T18:45:00",
        paciente: {
          nombre: "Margarita Solís",
          edad: 71,
          genero: "Femenino"
        },
        lugar: "Pirinola",
        unidad: {
          numero: "AMB-02",
          operador: "Ana Martínez"
        },
        signosVitales: {
          temperatura: 36.4,
          fc: 78,
          fr: 16,
          spo2: 89,
          ta: "168/104",
          glu: 205
        },
        nivelConciencia: {
          ocular: 3,
          verbal: 3,
          motora: 4,
          total: 10
        },
        pupilas: ["Isocóricas", "Lentas"],
        lesiones: ["Sincope"],
        regionesAfectadas: [],
        insumos: [
          { nombre: "Oxígeno", cantidad: 1 },
          { nombre: "Glucosa oral", cantidad: 1 }
        ],
        alergias: ["Sulfas"],
        medicamentos: ["Metformina", "Insulina", "Amlodipino"],
        patologias: ["Diabetes", "Hipertensión"],
        trasladoAceptado: true,
        observaciones: "Desmayo con crisis hipertensiva",
        recomendaciones: "Traslado urgente",
        firmas: {
          paciente: false,
          operador: true,
          testigo: true
        }
    },
    {
        id: 127,
        fechaHora: "2026-01-25T22:10:00",
        paciente: {
          nombre: "Arturo Vega",
          edad: 28,
          genero: "Masculino"
        },
        lugar: "Garrison",
        unidad: {
          numero: "AMB-03",
          operador: "Roberto Sánchez"
        },
        signosVitales: {
          temperatura: 37.3,
          fc: 92,
          fr: 20,
          spo2: 98,
          ta: "118/76",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Laceración"],
        regionesAfectadas: ["Antebrazo"],
        insumos: [
          { nombre: "Gasas estériles", cantidad: 3 },
          { nombre: "Vendas 10cm", cantidad: 2 },
          { nombre: "Jabón quirúrgico", cantidad: 1 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Ninguno"],
        patologias: ["Ninguna"],
        trasladoAceptado: false,
        observaciones: "Corte profundo con metal",
        recomendaciones: "Curación diaria y vigilancia",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 128,
        fechaHora: "2026-01-26T08:15:00",
        paciente: {
          nombre: "Sofía Herrera",
          edad: 54,
          genero: "Femenino"
        },
        lugar: "Huevona",
        unidad: {
          numero: "AMB-04",
          operador: "Marta Díaz"
        },
        signosVitales: {
          temperatura: 37.6,
          fc: 100,
          fr: 22,
          spo2: 97,
          ta: "132/84",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Quemadura"],
        regionesAfectadas: ["Pierna"],
        insumos: [
          { nombre: "Gel tópico", cantidad: 1 },
          { nombre: "Gasas estériles", cantidad: 4 },
          { nombre: "Parches protectores (grandes)", cantidad: 3 }
        ],
        alergias: ["AINEs"],
        medicamentos: ["Ninguno"],
        patologias: ["Asma"],
        trasladoAceptado: false,
        observaciones: "Quemadura de segundo grado",
        recomendaciones: "Curación diaria y protección",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 129,
        fechaHora: "2026-01-26T11:40:00",
        paciente: {
          nombre: "Emiliano Ramos",
          edad: 17,
          genero: "Masculino"
        },
        lugar: "Árbol",
        unidad: {
          numero: "AMB-01",
          operador: "Carlos López"
        },
        signosVitales: {
          temperatura: 38.0,
          fc: 112,
          fr: 26,
          spo2: 82,
          ta: "88/56",
          glu: null
        },
        nivelConciencia: {
          ocular: 2,
          verbal: 3,
          motora: 4,
          total: 9
        },
        pupilas: ["Midriasis"],
        lesiones: ["Inconsciente", "Fractura"],
        regionesAfectadas: ["Cabeza", "Pierna"],
        insumos: [
          { nombre: "Collarín cervical", cantidad: 1 },
          { nombre: "Oxígeno", cantidad: 1 },
          { nombre: "Férula", cantidad: 1 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Ninguno"],
        patologias: ["Ninguna"],
        trasladoAceptado: true,
        observaciones: "Accidente de motocicleta grave",
        recomendaciones: "Traslado urgente a trauma",
        firmas: {
          paciente: false,
          operador: true,
          testigo: true
        }
    },
    {
        id: 130,
        fechaHora: "2026-01-26T15:05:00",
        paciente: {
          nombre: "Blanca Díaz",
          edad: 38,
          genero: "Femenino"
        },
        lugar: "Toboganes Viejo",
        unidad: {
          numero: "AMB-02",
          operador: "Ana Martínez"
        },
        signosVitales: {
          temperatura: 37.2,
          fc: 90,
          fr: 18,
          spo2: 99,
          ta: "118/76",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Abrasión"],
        regionesAfectadas: ["Rodilla"],
        insumos: [
          { nombre: "Gasas estériles", cantidad: 2 },
          { nombre: "Vendas 10cm", cantidad: 1 }
        ],
        alergias: ["Látex"],
        medicamentos: ["Ninguno"],
        patologias: ["Ninguna"],
        trasladoAceptado: false,
        observaciones: "Raspadura superficial",
        recomendaciones: "Limpieza y curación",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 131,
        fechaHora: "2026-01-26T18:30:00",
        paciente: {
          nombre: "Luis Moreno",
          edad: 62,
          genero: "Masculino"
        },
        lugar: "Pinitos",
        unidad: {
          numero: "AMB-03",
          operador: "Roberto Sánchez"
        },
        signosVitales: {
          temperatura: 36.8,
          fc: 88,
          fr: 18,
          spo2: 94,
          ta: "146/92",
          glu: 178
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Hiperglucemia"],
        regionesAfectadas: [],
        insumos: [
          { nombre: "Glucosa oral", cantidad: 1 }
        ],
        alergias: ["Penicilina"],
        medicamentos: ["Metformina"],
        patologias: ["Diabetes"],
        trasladoAceptado: false,
        observaciones: "Mal control glucémico",
        recomendaciones: "Seguimiento médico",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 132,
        fechaHora: "2026-01-26T20:10:00",
        paciente: {
          nombre: "Daniela Ponce",
          edad: 24,
          genero: "Femenino"
        },
        lugar: "Vaca Muerta",
        unidad: {
          numero: "AMB-04",
          operador: "Marta Díaz"
        },
        signosVitales: {
          temperatura: 37.1,
          fc: 102,
          fr: 22,
          spo2: 99,
          ta: "110/70",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Crisis de ansiedad"],
        regionesAfectadas: [],
        insumos: [],
        alergias: ["Ninguna"],
        medicamentos: ["Sertralina"],
        patologias: ["Ansiedad"],
        trasladoAceptado: false,
        observaciones: "Hiperventilación y nerviosismo",
        recomendaciones: "Ejercicios de respiración",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 133,
        fechaHora: "2026-01-26T22:55:00",
        paciente: {
          nombre: "Raúl Jiménez",
          edad: 47,
          genero: "Masculino"
        },
        lugar: "Campeón del Mundo",
        unidad: {
          numero: "AMB-01",
          operador: "Carlos López"
        },
        signosVitales: {
          temperatura: 37.9,
          fc: 110,
          fr: 24,
          spo2: 96,
          ta: "140/88",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 4,
          motora: 6,
          total: 14
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Golpe de calor"],
        regionesAfectadas: ["Cabeza"],
        insumos: [
          { nombre: "Suero oral", cantidad: 1 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Ninguno"],
        patologias: ["Ninguna"],
        trasladoAceptado: false,
        observaciones: "Exposición prolongada al sol",
        recomendaciones: "Hidratación y reposo",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 134,
        fechaHora: "2026-01-27T01:20:00",
        paciente: {
          nombre: "Patricia León",
          edad: 33,
          genero: "Femenino"
        },
        lugar: "Huevona",
        unidad: {
          numero: "AMB-02",
          operador: "Ana Martínez"
        },
        signosVitales: {
          temperatura: 36.5,
          fc: 86,
          fr: 18,
          spo2: 100,
          ta: "118/72",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Herida cortante"],
        regionesAfectadas: ["Mano"],
        insumos: [
          { nombre: "Gasas estériles", cantidad: 2 },
          { nombre: "Vendas 5cm", cantidad: 1 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Ninguno"],
        patologias: ["Ninguna"],
        trasladoAceptado: false,
        observaciones: "Corte con vidrio",
        recomendaciones: "Curación y vigilancia",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 135,
        fechaHora: "2026-01-27T04:10:00",
        paciente: {
          nombre: "Héctor Salinas",
          edad: 56,
          genero: "Masculino"
        },
        lugar: "Vaca Muerta",
        unidad: {
          numero: "AMB-03",
          operador: "Roberto Sánchez"
        },
        signosVitales: {
          temperatura: 36.9,
          fc: 72,
          fr: 16,
          spo2: 88,
          ta: "150/96",
          glu: null
        },
        nivelConciencia: {
          ocular: 3,
          verbal: 4,
          motora: 6,
          total: 13
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Disnea"],
        regionesAfectadas: ["Tórax"],
        insumos: [
          { nombre: "Oxígeno", cantidad: 1 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Salbutamol"],
        patologias: ["EPOC"],
        trasladoAceptado: true,
        observaciones: "Dificultad respiratoria",
        recomendaciones: "Traslado para valoración",
        firmas: {
          paciente: false,
          operador: true,
          testigo: true
        }
    },
    {
        id: 136,
        fechaHora: "2026-01-27T07:35:00",
        paciente: {
          nombre: "María Fernanda Cruz",
          edad: 29,
          genero: "Femenino"
        },
        lugar: "Espinazo",
        unidad: {
          numero: "AMB-04",
          operador: "Marta Díaz"
        },
        signosVitales: {
          temperatura: 37.0,
          fc: 98,
          fr: 20,
          spo2: 99,
          ta: "112/74",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Esguince"],
        regionesAfectadas: ["Muñeca"],
        insumos: [
          { nombre: "Vendas 10cm", cantidad: 2 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Ninguno"],
        patologias: ["Ninguna"],
        trasladoAceptado: false,
        observaciones: "Lesión durante ejercicio",
        recomendaciones: "Reposo y compresión",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 137,
        fechaHora: "2026-01-27T10:50:00",
        paciente: {
          nombre: "José Ramírez",
          edad: 18,
          genero: "Masculino"
        },
        lugar: "Mosca",
        unidad: {
          numero: "AMB-01",
          operador: "Carlos López"
        },
        signosVitales: {
          temperatura: 36.2,
          fc: 60,
          fr: 14,
          spo2: 90,
          ta: "100/60",
          glu: 68
        },
        nivelConciencia: {
          ocular: 3,
          verbal: 3,
          motora: 5,
          total: 11
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Hipoglucemia"],
        regionesAfectadas: [],
        insumos: [
          { nombre: "Glucosa oral", cantidad: 1 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Insulina"],
        patologias: ["Diabetes"],
        trasladoAceptado: true,
        observaciones: "Bajo nivel de glucosa",
        recomendaciones: "Traslado y monitoreo",
        firmas: {
          paciente: false,
          operador: true,
          testigo: true
        }
    },
    {
        id: 138,
        fechaHora: "2026-01-27T13:25:00",
        paciente: {
          nombre: "Andrea Núñez",
          edad: 41,
          genero: "Femenino"
        },
        lugar: "Pípila",
        unidad: {
          numero: "AMB-02",
          operador: "Ana Martínez"
        },
        signosVitales: {
          temperatura: 37.4,
          fc: 104,
          fr: 22,
          spo2: 97,
          ta: "130/86",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Cefalea"],
        regionesAfectadas: ["Cabeza"],
        insumos: [],
        alergias: ["Ninguna"],
        medicamentos: ["Paracetamol"],
        patologias: ["Migraña"],
        trasladoAceptado: false,
        observaciones: "Dolor intenso de cabeza",
        recomendaciones: "Reposo y medicación",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 139,
        fechaHora: "2026-01-27T16:40:00",
        paciente: {
          nombre: "Fernando Castillo",
          edad: 35,
          genero: "Masculino"
        },
        lugar: "Garrison",
        unidad: {
          numero: "AMB-03",
          operador: "Roberto Sánchez"
        },
        signosVitales: {
          temperatura: 37.8,
          fc: 108,
          fr: 24,
          spo2: 95,
          ta: "122/80",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Contusión"],
        regionesAfectadas: ["Hombro"],
        insumos: [
          { nombre: "Compresa fría", cantidad: 1 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Ninguno"],
        patologias: ["Ninguna"],
        trasladoAceptado: false,
        observaciones: "Golpe durante partido",
        recomendaciones: "Hielo y reposo",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 140,
        fechaHora: "2026-01-27T19:55:00",
        paciente: {
          nombre: "Rosa Méndez",
          edad: 67,
          genero: "Femenino"
        },
        lugar: "Garrison",
        unidad: {
          numero: "AMB-04",
          operador: "Marta Díaz"
        },
        signosVitales: {
          temperatura: 36.7,
          fc: 82,
          fr: 18,
          spo2: 91,
          ta: "158/98",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 4,
          motora: 6,
          total: 14
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Crisis hipertensiva"],
        regionesAfectadas: [],
        insumos: [
          { nombre: "Oxígeno", cantidad: 1 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Losartán"],
        patologias: ["Hipertensión"],
        trasladoAceptado: true,
        observaciones: "Presión arterial elevada",
        recomendaciones: "Traslado para control",
        firmas: {
          paciente: false,
          operador: true,
          testigo: true
        }
    },
    {
        id: 141,
        fechaHora: "2026-01-27T22:10:00",
        paciente: {
          nombre: "Iván Torres",
          edad: 34,
          genero: "Masculino"
        },
        lugar: "Garrison",
        unidad: {
          numero: "AMB-01",
          operador: "Carlos López"
        },
        signosVitales: {
          temperatura: 36.9,
          fc: 84,
          fr: 18,
          spo2: 98,
          ta: "120/78",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Abrasión"],
        regionesAfectadas: ["Codo"],
        insumos: [
          { nombre: "Gasas estériles", cantidad: 2 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Ninguno"],
        patologias: ["Ninguna"],
        trasladoAceptado: false,
        observaciones: "Caída leve",
        recomendaciones: "Limpieza y vigilancia",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 142,
        fechaHora: "2026-01-28T00:35:00",
        paciente: {
          nombre: "Claudia Ríos",
          edad: 58,
          genero: "Femenino"
        },
        lugar: "Mosca",
        unidad: {
          numero: "AMB-02",
          operador: "Ana Martínez"
        },
        signosVitales: {
          temperatura: 37.2,
          fc: 96,
          fr: 20,
          spo2: 93,
          ta: "142/90",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Disnea leve"],
        regionesAfectadas: ["Tórax"],
        insumos: [
          { nombre: "Oxígeno", cantidad: 1 }
        ],
        alergias: ["AINEs"],
        medicamentos: ["Salbutamol"],
        patologias: ["Asma"],
        trasladoAceptado: false,
        observaciones: "Dificultad respiratoria controlada",
        recomendaciones: "Uso de inhalador y reposo",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 143,
        fechaHora: "2026-01-28T03:00:00",
        paciente: {
          nombre: "Óscar Medina",
          edad: 46,
          genero: "Masculino"
        },
        lugar: "Pirinola",
        unidad: {
          numero: "AMB-03",
          operador: "Roberto Sánchez"
        },
        signosVitales: {
          temperatura: 36.6,
          fc: 110,
          fr: 22,
          spo2: 97,
          ta: "130/84",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 4,
          motora: 6,
          total: 14
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Intoxicación alcohólica"],
        regionesAfectadas: [],
        insumos: [],
        alergias: ["Ninguna"],
        medicamentos: ["Ninguno"],
        patologias: ["Ninguna"],
        trasladoAceptado: false,
        observaciones: "Consumo excesivo de alcohol",
        recomendaciones: "Reposo e hidratación",
        firmas: {
          paciente: true,
          operador: true,
          testigo: true
        }
    },
    {
        id: 144,
        fechaHora: "2026-01-28T06:40:00",
        paciente: {
          nombre: "Natalia Fuentes",
          edad: 19,
          genero: "Femenino"
        },
        lugar: "Garrison",
        unidad: {
          numero: "AMB-04",
          operador: "Marta Díaz"
        },
        signosVitales: {
          temperatura: 37.8,
          fc: 105,
          fr: 24,
          spo2: 99,
          ta: "114/72",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Laceración"],
        regionesAfectadas: [],
        insumos: [
          { nombre: "Compresa fría", cantidad: 1 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Paracetamol"],
        patologias: ["Ninguna"],
        trasladoAceptado: false,
        observaciones: "Fiebre sin otros síntomas",
        recomendaciones: "Control de temperatura",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 145,
        fechaHora: "2026-01-28T09:15:00",
        paciente: {
          nombre: "Manuel Ortega",
          edad: 73,
          genero: "Masculino"
        },
        lugar: "Arenosas",
        unidad: {
          numero: "AMB-01",
          operador: "Carlos López"
        },
        signosVitales: {
          temperatura: 36.4,
          fc: 70,
          fr: 16,
          spo2: 89,
          ta: "102/64",
          glu: 74
        },
        nivelConciencia: {
          ocular: 3,
          verbal: 4,
          motora: 5,
          total: 12
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Mareo"],
        regionesAfectadas: [],
        insumos: [
          { nombre: "Glucosa oral", cantidad: 1 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Enalapril"],
        patologias: ["Hipertensión"],
        trasladoAceptado: true,
        observaciones: "Sensación de desvanecimiento",
        recomendaciones: "Traslado para valoración",
        firmas: {
          paciente: false,
          operador: true,
          testigo: true
        }
    },
    {
        id: 146,
        fechaHora: "2026-01-28T12:50:00",
        paciente: {
          nombre: "Paola Jiménez",
          edad: 27,
          genero: "Femenino"
        },
        lugar: "Garrison",
        unidad: {
          numero: "AMB-02",
          operador: "Ana Martínez"
        },
        signosVitales: {
          temperatura: 37.0,
          fc: 92,
          fr: 18,
          spo2: 100,
          ta: "118/76",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Esguince"],
        regionesAfectadas: ["Tobillo"],
        insumos: [
          { nombre: "Vendas 10cm", cantidad: 2 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Ninguno"],
        patologias: ["Ninguna"],
        trasladoAceptado: false,
        observaciones: "Torcedura al caminar",
        recomendaciones: "Reposo, hielo y compresión",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 147,
        fechaHora: "2026-01-28T16:30:00",
        paciente: {
          nombre: "Ricardo Molina",
          edad: 41,
          genero: "Masculino"
        },
        lugar: "Hermosísima",
        unidad: {
          numero: "AMB-03",
          operador: "Roberto Sánchez"
        },
        signosVitales: {
          temperatura: 36.8,
          fc: 88,
          fr: 18,
          spo2: 97,
          ta: "124/80",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Contusión"],
        regionesAfectadas: ["Hombro"],
        insumos: [
          { nombre: "Gasas estériles", cantidad: 2 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Ninguno"],
        patologias: ["Ninguna"],
        trasladoAceptado: false,
        observaciones: "Golpe directo sin limitación funcional",
        recomendaciones: "Reposo y analgésico si hay dolor",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 148,
        fechaHora: "2026-01-28T19:05:00",
        paciente: {
          nombre: "Leticia Campos",
          edad: 62,
          genero: "Femenino"
        },
        lugar: "Mosca",
        unidad: {
          numero: "AMB-04",
          operador: "Marta Díaz"
        },
        signosVitales: {
          temperatura: 36.5,
          fc: 74,
          fr: 16,
          spo2: 91,
          ta: "150/92",
          glu: 180
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 4,
          motora: 6,
          total: 14
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Sincope"],
        regionesAfectadas: [],
        insumos: [
          { nombre: "Oxígeno", cantidad: 1 },
          { nombre: "Glucosa oral", cantidad: 1 }
        ],
        alergias: ["Penicilina"],
        medicamentos: ["Metformina"],
        patologias: ["Diabetes", "Hipertensión"],
        trasladoAceptado: true,
        observaciones: "Episodio de desmayo breve",
        recomendaciones: "Traslado para evaluación médica",
        firmas: {
          paciente: false,
          operador: true,
          testigo: true
        }
    },
    {
        id: 149,
        fechaHora: "2026-01-28T21:55:00",
        paciente: {
          nombre: "Daniela Ponce",
          edad: 23,
          genero: "Femenino"
        },
        lugar: "Pinitos",
        unidad: {
          numero: "AMB-01",
          operador: "Carlos López"
        },
        signosVitales: {
          temperatura: 37.4,
          fc: 102,
          fr: 22,
          spo2: 99,
          ta: "116/74",
          glu: null
        },
        nivelConciencia: {
          ocular: 4,
          verbal: 5,
          motora: 6,
          total: 15
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Abrasión"],
        regionesAfectadas: ["Rodilla"],
        insumos: [
          { nombre: "Jabón quirúrgico", cantidad: 1 },
          { nombre: "Gasas estériles", cantidad: 2 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Ninguno"],
        patologias: ["Ninguna"],
        trasladoAceptado: false,
        observaciones: "Caída durante actividad recreativa",
        recomendaciones: "Limpieza y curación local",
        firmas: {
          paciente: true,
          operador: true,
          testigo: false
        }
    },
    {
        id: 150,
        fechaHora: "2026-01-29T01:20:00",
        paciente: {
          nombre: "José Antonio Cruz",
          edad: 59,
          genero: "Masculino"
        },
        lugar: "Obsidiana",
        unidad: {
          numero: "AMB-02",
          operador: "Ana Martínez"
        },
        signosVitales: {
          temperatura: 36.1,
          fc: 66,
          fr: 14,
          spo2: 88,
          ta: "98/60",
          glu: 62
        },
        nivelConciencia: {
          ocular: 3,
          verbal: 4,
          motora: 5,
          total: 12
        },
        pupilas: ["Isocóricas"],
        lesiones: ["Fracturas"],
        regionesAfectadas: [],
        insumos: [
          { nombre: "Glucosa oral", cantidad: 1 }
        ],
        alergias: ["Ninguna"],
        medicamentos: ["Insulina"],
        patologias: ["Diabetes"],
        trasladoAceptado: true,
        observaciones: "Paciente sudoroso y confuso",
        recomendaciones: "Traslado para control metabólico",
        firmas: {
          paciente: false,
          operador: true,
          testigo: true
        }
    }
];

export default reports;