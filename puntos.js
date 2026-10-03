// Puntos del recorrido (03/10/2026). Sentidos de calle tomados de OpenStreetMap.
window.PUNTOS = [
  {
    "id": "r01",
    "tipo": "cierre",
    "prioridad": "alta",
    "es": {
      "titulo": "Calle cerrada con barriles y cinta",
      "descripcion": "El paso está cerrado solo con barriles y cinta de “Peligro”. No hay letrero que indique por dónde rodear. Busca otra calle antes de llegar a esta esquina."
    },
    "en": {
      "titulo": "Street closed with barrels and tape",
      "descripcion": "The street is blocked only with barrels and “Danger” tape. There is no sign showing a detour. Take another street before reaching this corner."
    },
    "foto": "fotos/r01.jpg",
    "fecha": "2026-08-25",
    "lat": 23.061885,
    "lng": -109.696395
  },
  {
    "id": "r02",
    "tipo": "faltante",
    "prioridad": "media",
    "es": {
      "titulo": "Solo hay un letrero turístico, no de sentido",
      "descripcion": "El letrero azul “Misión →” indica el camino a la iglesia, pero no hacia dónde circulan los autos. Falta una señal de sentido de la calle."
    },
    "en": {
      "titulo": "Only a tourist sign, no one-way sign",
      "descripcion": "The blue “Misión →” sign points to the church, not the direction of traffic. A one-way street sign is missing."
    },
    "foto": "fotos/r02.jpg",
    "fecha": "2026-10-03",
    "lat": 23.061885,
    "lng": -109.696275
  },
  {
    "id": "r18",
    "tipo": "riesgo",
    "prioridad": "media",
    "es": {
      "titulo": "Arena de obra sobre la calle",
      "descripcion": "Hay arena y material de obra sobre el adoquín y una cinta amarilla en la banqueta. El piso puede estar resbaloso."
    },
    "en": {
      "titulo": "Construction sand on the street",
      "descripcion": "There is sand and construction material on the road and yellow tape on the sidewalk. The surface may be slippery."
    },
    "foto": "fotos/r18.jpg",
    "fecha": "2026-10-03",
    "lat": 23.061765,
    "lng": -109.696275
  },
  {
    "id": "r09",
    "tipo": "faltante",
    "prioridad": "media",
    "es": {
      "titulo": "Sin señal de sentido en la esquina",
      "descripcion": "Solo hay placa con el nombre de la calle y un letrero de “no estacionarse”. No se indica hacia dónde circulan los autos."
    },
    "en": {
      "titulo": "No one-way sign at this corner",
      "descripcion": "There is only a street-name plaque and a “no parking” sign. Nothing shows which way traffic goes."
    },
    "foto": "fotos/r09.jpg",
    "fecha": "2026-10-03",
    "lat": 23.062551,
    "lng": -109.696445
  },
  {
    "id": "r12",
    "tipo": "deteriorada",
    "prioridad": "alta",
    "es": {
      "titulo": "Señal de ALTO tapada con calcomanías",
      "descripcion": "La señal de ALTO está cubierta de calcomanías y casi no se lee la palabra. Detente por completo en esta esquina."
    },
    "en": {
      "titulo": "STOP sign covered with stickers",
      "descripcion": "The STOP sign is covered with stickers and is hard to read. Come to a full stop at this corner."
    },
    "foto": "fotos/r12.jpg",
    "fecha": "2026-10-03",
    "lat": 23.062671,
    "lng": -109.696325
  },
  {
    "id": "r13",
    "tipo": "riesgo",
    "prioridad": "media",
    "es": {
      "titulo": "Adoquín hundido en la calle",
      "descripcion": "El adoquín tiene hundimientos y desniveles. Reduce la velocidad; en moto o bicicleta puede hacerte perder el equilibrio."
    },
    "en": {
      "titulo": "Sunken cobblestones",
      "descripcion": "The cobblestone road has dips and uneven spots. Slow down; on a motorcycle or bike you could lose balance."
    },
    "foto": "fotos/r13.jpg",
    "fecha": "2026-10-03",
    "lat": 23.062551,
    "lng": -109.696325
  },
  {
    "id": "r10",
    "tipo": "faltante",
    "prioridad": "media",
    "es": {
      "titulo": "Calle Manuel Doblado: subida sin señales",
      "descripcion": "No hay ninguna señal de sentido ni de velocidad. Los autos estacionados reducen la visibilidad. Sube despacio."
    },
    "en": {
      "titulo": "Manuel Doblado St.: uphill with no signs",
      "descripcion": "There are no direction or speed signs. Parked cars reduce visibility. Drive up slowly."
    },
    "foto": "fotos/r10.jpg",
    "fecha": "2026-10-03",
    "lat": 23.061115,
    "lng": -109.696417
  },
  {
    "id": "r15",
    "tipo": "faltante",
    "prioridad": "media",
    "es": {
      "titulo": "Tope sin señal de aviso",
      "descripcion": "Hay un tope pintado de amarillo en la subida, pero no hay señal que avise antes. Tampoco se indica el sentido de la calle."
    },
    "en": {
      "titulo": "Speed bump with no warning sign",
      "descripcion": "There is a yellow speed bump on the uphill street, but no sign warns you beforehand. The traffic direction is not shown either."
    },
    "foto": "fotos/r15.jpg",
    "fecha": "2026-10-03",
    "lat": 23.060637,
    "lng": -109.69631
  },
  {
    "id": "r16",
    "tipo": "faltante",
    "prioridad": "media",
    "es": {
      "titulo": "Esquina sin señales de sentido",
      "descripcion": "No hay ninguna señal que indique hacia dónde circulan los autos en esta esquina."
    },
    "en": {
      "titulo": "Corner with no direction signs",
      "descripcion": "No sign shows which way traffic goes at this corner."
    },
    "foto": "fotos/r16.jpg",
    "fecha": "2026-10-03",
    "lat": 23.063339,
    "lng": -109.696332
  },
  {
    "id": "r17",
    "tipo": "riesgo",
    "prioridad": "media",
    "es": {
      "titulo": "Calle con baches y adoquín suelto",
      "descripcion": "El pavimento del cruce está desgastado, con baches y piezas sueltas. Maneja despacio."
    },
    "en": {
      "titulo": "Potholes and loose cobblestones",
      "descripcion": "The pavement at this crossing is worn, with potholes and loose pieces. Drive slowly."
    },
    "foto": "fotos/r17.jpg",
    "fecha": "2026-10-03",
    "lat": 23.063219,
    "lng": -109.696452
  },
  {
    "id": "r14",
    "tipo": "riesgo",
    "prioridad": "media",
    "es": {
      "titulo": "Pavimento roto en el cruce",
      "descripcion": "El cruce tiene adoquín roto, parches de cemento y arena suelta. Cruza con cuidado, sobre todo a pie."
    },
    "en": {
      "titulo": "Broken pavement at the crossing",
      "descripcion": "The crossing has broken cobblestones, cement patches and loose sand. Cross carefully, especially on foot."
    },
    "foto": "fotos/r14.jpg",
    "fecha": "2026-10-03",
    "lat": 23.062727,
    "lng": -109.695345
  },
  {
    "id": "s01",
    "tipo": "sentido",
    "prioridad": "baja",
    "coords": [
      [
        23.0606365,
        -109.6962497
      ],
      [
        23.0611154,
        -109.6962973
      ],
      [
        23.0618253,
        -109.6963353
      ],
      [
        23.0626108,
        -109.6963846
      ],
      [
        23.0632786,
        -109.696392
      ]
    ],
    "es": {
      "titulo": "Morelos: un solo sentido hacia el norte",
      "descripcion": "Calle de un solo sentido. Circula en la dirección de la flecha."
    },
    "en": {
      "titulo": "Morelos St.: one way, northbound",
      "descripcion": "One-way street. Drive in the direction of the arrow."
    },
    "foto": "",
    "fecha": "2026-10-03"
  },
  {
    "id": "s02",
    "tipo": "sentido",
    "prioridad": "baja",
    "coords": [
      [
        23.0627866,
        -109.6954048
      ],
      [
        23.061899,
        -109.6953163
      ],
      [
        23.0612228,
        -109.6952847
      ]
    ],
    "es": {
      "titulo": "Hidalgo: un solo sentido hacia el sur",
      "descripcion": "Calle de un solo sentido. Circula en la dirección de la flecha."
    },
    "en": {
      "titulo": "Hidalgo St.: one way, southbound",
      "descripcion": "One-way street. Drive in the direction of the arrow."
    },
    "foto": "",
    "fecha": "2026-10-03"
  },
  {
    "id": "s03",
    "tipo": "sentido",
    "prioridad": "baja",
    "coords": [
      [
        23.0618253,
        -109.6963353
      ],
      [
        23.061899,
        -109.6953163
      ]
    ],
    "es": {
      "titulo": "Zaragoza: un solo sentido hacia la plaza",
      "descripcion": "Calle de un solo sentido. Circula en la dirección de la flecha."
    },
    "en": {
      "titulo": "Zaragoza St.: one way, toward the plaza",
      "descripcion": "One-way street. Drive in the direction of the arrow."
    },
    "foto": "",
    "fecha": "2026-10-03"
  },
  {
    "id": "s04",
    "tipo": "sentido",
    "prioridad": "baja",
    "coords": [
      [
        23.0626108,
        -109.6963846
      ],
      [
        23.0627866,
        -109.6954048
      ]
    ],
    "es": {
      "titulo": "Álvaro Obregón: un solo sentido hacia el oriente",
      "descripcion": "Calle de un solo sentido. Circula en la dirección de la flecha."
    },
    "en": {
      "titulo": "Álvaro Obregón St.: one way, eastbound",
      "descripcion": "One-way street. Drive in the direction of the arrow."
    },
    "foto": "",
    "fecha": "2026-10-03"
  },
  {
    "id": "s05",
    "tipo": "sentido",
    "prioridad": "baja",
    "coords": [
      [
        23.0612228,
        -109.6952847
      ],
      [
        23.0611154,
        -109.6962973
      ]
    ],
    "es": {
      "titulo": "Manuel Doblado: un solo sentido hacia el poniente",
      "descripcion": "Calle de un solo sentido. Circula en la dirección de la flecha."
    },
    "en": {
      "titulo": "Manuel Doblado St.: one way, westbound",
      "descripcion": "One-way street. Drive in the direction of the arrow."
    },
    "foto": "",
    "fecha": "2026-10-03"
  }
];
