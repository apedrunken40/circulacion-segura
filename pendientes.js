// ============================================================
//  PUNTOS PREPARADOS (texto listo, falta la ubicación)
//  Salen de las fotos y videos de los recorridos del 25/08/2026 y 03/10/2026.
//  En captura.html: "Mis puntos y exportar" → botón "📍 Ubicar" → toca el mapa.
//  "pista" es solo para ti (no se publica). Corrige lo que no coincida.
// ============================================================
window.PENDIENTES = [
  {
    "id": "r01",
    "tipo": "cierre",
    "prioridad": "alta",
    "pista": "esquina José María Morelos e Ignacio Zaragoza (barriles naranjas y cinta PELIGRO)",
    "es": {
      "titulo": "Calle cerrada con barriles y cinta",
      "descripcion": "El paso está cerrado solo con barriles y cinta de “Peligro”. No hay letrero que indique por dónde rodear. Busca otra calle antes de llegar a esta esquina."
    },
    "en": {
      "titulo": "Street closed with barrels and tape",
      "descripcion": "The street is blocked only with barrels and “Danger” tape. There is no sign showing a detour. Take another street before reaching this corner."
    },
    "foto": "fotos/r01.jpg",
    "fecha": "2026-08-25"
  },
  {
    "id": "r02",
    "tipo": "faltante",
    "prioridad": "media",
    "pista": "esquina José María Morelos e Ignacio Zaragoza (casa blanca con naranja, letrero azul “Misión →”)",
    "es": {
      "titulo": "Solo hay un letrero turístico, no de sentido",
      "descripcion": "El letrero azul “Misión →” indica el camino a la iglesia, pero no hacia dónde circulan los autos. Falta una señal de sentido de la calle."
    },
    "en": {
      "titulo": "Only a tourist sign, no one-way sign",
      "descripcion": "The blue “Misión →” sign points to the church, not the direction of traffic. A one-way street sign is missing."
    },
    "foto": "fotos/r02.jpg",
    "fecha": "2026-10-03"
  },
  {
    "id": "r03",
    "tipo": "riesgo",
    "prioridad": "alta",
    "pista": "cruce junto a la Plaza Mijares donde corre agua sobre el adoquín",
    "es": {
      "titulo": "Agua corriendo en la calle: piso resbaloso",
      "descripcion": "Hay agua corriendo sobre el adoquín y la banqueta. El piso se vuelve resbaloso para peatones y motociclistas. Camina y maneja con cuidado."
    },
    "en": {
      "titulo": "Water running on the street: slippery surface",
      "descripcion": "Water runs over the cobblestones and sidewalk, making it slippery for pedestrians and motorcyclists. Walk and drive carefully."
    },
    "foto": "fotos/r03.jpg",
    "fecha": "2026-08-25"
  },
  {
    "id": "r04",
    "tipo": "riesgo",
    "prioridad": "alta",
    "pista": "banqueta con hoyo junto a la guarnición rota (cerca de los barriles de la foto del cierre)",
    "es": {
      "titulo": "Hoyo y piedras sueltas en la banqueta",
      "descripcion": "La banqueta tiene un hoyo y la orilla (guarnición) está rota, con piedras sueltas. Peligro de tropezar, sobre todo para adultos mayores y personas con carriola o silla de ruedas."
    },
    "en": {
      "titulo": "Hole and loose stones on the sidewalk",
      "descripcion": "The sidewalk has a hole and the curb is broken, with loose stones. Tripping hazard, especially for older adults, strollers and wheelchairs."
    },
    "foto": "fotos/r04.jpg",
    "fecha": "2026-08-25"
  },
  {
    "id": "r05",
    "tipo": "riesgo",
    "prioridad": "media",
    "pista": "bache con adoquines sueltos en la calle (foto del hoyo con piedras)",
    "es": {
      "titulo": "Bache con adoquines sueltos",
      "descripcion": "Faltan adoquines y hay piedras sueltas en el arroyo vehicular. Reduce la velocidad y esquívalo con cuidado."
    },
    "en": {
      "titulo": "Pothole with loose cobblestones",
      "descripcion": "Cobblestones are missing and loose stones are on the road. Slow down and go around it carefully."
    },
    "foto": "fotos/r05.jpg",
    "fecha": "2026-08-25"
  },
  {
    "id": "r06",
    "tipo": "riesgo",
    "prioridad": "alta",
    "pista": "banqueta con registro abierto y una piedra adentro (calle con casa amarilla)",
    "es": {
      "titulo": "Registro abierto en la banqueta",
      "descripcion": "Un registro no tiene tapa y solo tiene una piedra adentro. Mira dónde pisas, sobre todo de noche."
    },
    "en": {
      "titulo": "Open utility hole on the sidewalk",
      "descripcion": "A utility box has no cover, only a rock inside. Watch your step, especially at night."
    },
    "foto": "fotos/r06.jpg",
    "fecha": "2026-10-03"
  },
  {
    "id": "r07",
    "tipo": "riesgo",
    "prioridad": "media",
    "pista": "banqueta con tapas de registro sueltas y conos naranjas al fondo",
    "es": {
      "titulo": "Tapas de registro sueltas o desniveladas",
      "descripcion": "Varias tapas metálicas de la banqueta están sueltas o más bajas que el piso. Camina con cuidado."
    },
    "en": {
      "titulo": "Loose or uneven utility covers",
      "descripcion": "Several metal covers on the sidewalk are loose or lower than the ground. Walk carefully."
    },
    "foto": "fotos/r07.jpg",
    "fecha": "2026-10-03"
  },
  {
    "id": "r08",
    "tipo": "deteriorada",
    "prioridad": "media",
    "pista": "cruce sobre José María Morelos (casa rosa con placa “Calle José María Morelos”)",
    "es": {
      "titulo": "Adoquín levantado en el cruce",
      "descripcion": "El adoquín del cruce está roto y levantado. La única indicación de sentido es la flecha pequeña en la placa del nombre de la calle."
    },
    "en": {
      "titulo": "Broken cobblestones at the crossing",
      "descripcion": "The cobblestones at this crossing are broken and raised. The only direction indicator is a small arrow on the street-name plaque."
    },
    "foto": "fotos/r08.jpg",
    "fecha": "2026-10-03"
  },
  {
    "id": "r09",
    "tipo": "faltante",
    "prioridad": "media",
    "pista": "esquina José María Morelos y Álvaro Obregón (restaurante Agave, placa en la pared)",
    "es": {
      "titulo": "Sin señal de sentido en la esquina",
      "descripcion": "Solo hay placa con el nombre de la calle y un letrero de “no estacionarse”. No se indica hacia dónde circulan los autos."
    },
    "en": {
      "titulo": "No one-way sign at this corner",
      "descripcion": "There is only a street-name plaque and a “no parking” sign. Nothing shows which way traffic goes."
    },
    "foto": "fotos/r09.jpg",
    "fecha": "2026-10-03"
  },
  {
    "id": "r10",
    "tipo": "faltante",
    "prioridad": "media",
    "pista": "calle Manuel Doblado, en la subida desde José María Morelos",
    "es": {
      "titulo": "Calle Manuel Doblado: subida sin señales",
      "descripcion": "No hay ninguna señal de sentido ni de velocidad. Los autos estacionados reducen la visibilidad. Sube despacio."
    },
    "en": {
      "titulo": "Manuel Doblado St.: uphill with no signs",
      "descripcion": "There are no direction or speed signs. Parked cars reduce visibility. Drive up slowly."
    },
    "foto": "fotos/r10.jpg",
    "fecha": "2026-10-03"
  },
  {
    "id": "r11",
    "tipo": "cierre",
    "prioridad": "media",
    "pista": "calle larga de adoquín con conos naranjas al fondo (foto de la farmacia)",
    "es": {
      "titulo": "Paso cerrado con conos",
      "descripcion": "Al fondo de la calle hay conos que cierran el paso. No hay aviso antes de entrar a la calle."
    },
    "en": {
      "titulo": "Road blocked with cones",
      "descripcion": "Cones block the road at the end of this street. There is no warning before you enter."
    },
    "foto": "fotos/r11.jpg",
    "fecha": "2026-08-25"
  },
  {
    "id": "r12",
    "tipo": "deteriorada",
    "prioridad": "alta",
    "pista": "esquina Álvaro Obregón y José María Morelos (señal de ALTO frente a Osteria 107)",
    "es": {
      "titulo": "Señal de ALTO tapada con calcomanías",
      "descripcion": "La señal de ALTO está cubierta de calcomanías y casi no se lee la palabra. Detente por completo en esta esquina."
    },
    "en": {
      "titulo": "STOP sign covered with stickers",
      "descripcion": "The STOP sign is covered with stickers and is hard to read. Come to a full stop at this corner."
    },
    "foto": "fotos/r12.jpg",
    "fecha": "2026-10-03"
  },
  {
    "id": "r13",
    "tipo": "riesgo",
    "prioridad": "media",
    "pista": "José María Morelos y Álvaro Obregón, sobre la calle de adoquín (restaurante Agave)",
    "es": {
      "titulo": "Adoquín hundido en la calle",
      "descripcion": "El adoquín tiene hundimientos y desniveles. Reduce la velocidad; en moto o bicicleta puede hacerte perder el equilibrio."
    },
    "en": {
      "titulo": "Sunken cobblestones",
      "descripcion": "The cobblestone road has dips and uneven spots. Slow down; on a motorcycle or bike you could lose balance."
    },
    "foto": "fotos/r13.jpg",
    "fecha": "2026-10-03"
  },
  {
    "id": "r14",
    "tipo": "riesgo",
    "prioridad": "media",
    "pista": "esquina Miguel Hidalgo y Álvaro Obregón (casa con mural de colores)",
    "es": {
      "titulo": "Pavimento roto en el cruce",
      "descripcion": "El cruce tiene adoquín roto, parches de cemento y arena suelta. Cruza con cuidado, sobre todo a pie."
    },
    "en": {
      "titulo": "Broken pavement at the crossing",
      "descripcion": "The crossing has broken cobblestones, cement patches and loose sand. Cross carefully, especially on foot."
    },
    "foto": "fotos/r14.jpg",
    "fecha": "2026-10-03"
  },
  {
    "id": "r15",
    "tipo": "faltante",
    "prioridad": "media",
    "pista": "José María Morelos y Mauricio Castro (calle en subida, edificio rosa)",
    "es": {
      "titulo": "Tope sin señal de aviso",
      "descripcion": "Hay un tope pintado de amarillo en la subida, pero no hay señal que avise antes. Tampoco se indica el sentido de la calle."
    },
    "en": {
      "titulo": "Speed bump with no warning sign",
      "descripcion": "There is a yellow speed bump on the uphill street, but no sign warns you beforehand. The traffic direction is not shown either."
    },
    "foto": "fotos/r15.jpg",
    "fecha": "2026-10-03"
  },
  {
    "id": "r16",
    "tipo": "faltante",
    "prioridad": "media",
    "pista": "esquina José María Morelos e Ignacio Comonfort (casa amarilla, panadería)",
    "es": {
      "titulo": "Esquina sin señales de sentido",
      "descripcion": "No hay ninguna señal que indique hacia dónde circulan los autos en esta esquina."
    },
    "en": {
      "titulo": "Corner with no direction signs",
      "descripcion": "No sign shows which way traffic goes at this corner."
    },
    "foto": "fotos/r16.jpg",
    "fecha": "2026-10-03"
  },
  {
    "id": "r17",
    "tipo": "riesgo",
    "prioridad": "media",
    "pista": "José María Morelos e Ignacio Comonfort (casa rosa y casa amarilla con bugambilias)",
    "es": {
      "titulo": "Calle con baches y adoquín suelto",
      "descripcion": "El pavimento del cruce está desgastado, con baches y piezas sueltas. Maneja despacio."
    },
    "en": {
      "titulo": "Potholes and loose cobblestones",
      "descripcion": "The pavement at this crossing is worn, with potholes and loose pieces. Drive slowly."
    },
    "foto": "fotos/r17.jpg",
    "fecha": "2026-10-03"
  },
  {
    "id": "r18",
    "tipo": "riesgo",
    "prioridad": "media",
    "pista": "José María Morelos e Ignacio Zaragoza, frente a la casa amarilla (arena y cinta amarilla)",
    "es": {
      "titulo": "Arena de obra sobre la calle",
      "descripcion": "Hay arena y material de obra sobre el adoquín y una cinta amarilla en la banqueta. El piso puede estar resbaloso."
    },
    "en": {
      "titulo": "Construction sand on the street",
      "descripcion": "There is sand and construction material on the road and yellow tape on the sidewalk. The surface may be slippery."
    },
    "foto": "fotos/r18.jpg",
    "fecha": "2026-10-03"
  }
];
