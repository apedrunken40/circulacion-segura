// Definiciones compartidas por index.html y captura.html
window.TIPOS = {
  faltante:    { color: '#d62828', glifo: '!', linea: false, es: 'Falta una señal',     en: 'Missing sign' },
  deteriorada: { color: '#e76f00', glifo: '≈', linea: false, es: 'Señal dañada',        en: 'Damaged sign' },
  cierre:      { color: '#7b2cbf', glifo: '✕', linea: false, es: 'Calle cerrada',       en: 'Street closed' },
  riesgo:      { color: '#c99700', glifo: '▲', linea: false, es: 'Cruce peligroso',     en: 'Dangerous crossing' },
  sentido:     { color: '#1d4ed8', glifo: '➜', linea: true,  es: 'Sentido de la calle (sigue la flecha)', en: 'One-way street (follow the arrow)' },
  desvio:      { color: '#0f8a6b', glifo: '↪', linea: true,  es: 'Camino para rodear',  en: 'Detour route' }
};

window.PRIORIDADES = {
  alta:  { es: '⚠️ Mucho cuidado',   en: '⚠️ Be very careful', corto: 'Alta' },
  media: { es: 'Ten precaución',     en: 'Use caution',         corto: 'Media' },
  baja:  { es: 'Para que lo sepas',  en: 'Good to know',        corto: 'Baja' }
};

// Mapa de calles.
// - Publicado en internet (GitHub Pages): OpenStreetMap.
// - Abierto como archivo en la computadora (vista previa): OpenStreetMap y CARTO bloquean
//   esas solicitudes, así que se usa el mapa de calles de Esri solo para revisar.
window.TILES = location.protocol === 'file:' ? {
  url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
  attribution: 'Tiles &copy; Esri &mdash; Esri, HERE, Garmin, &copy; OpenStreetMap',
  maxNativeZoom: 19
} : {
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  maxNativeZoom: 19
};

window.capaBase = function (mapa) {
  return L.tileLayer(TILES.url, { maxZoom: 20, maxNativeZoom: TILES.maxNativeZoom, attribution: TILES.attribution }).addTo(mapa);
};

// Marcador circular con glifo
window.iconoTipo = function (tipo, grande) {
  const t = TIPOS[tipo] || TIPOS.riesgo;
  const s = grande ? 34 : 28;
  return L.divIcon({
    className: 'mk',
    html: '<span style="background:' + t.color + ';width:' + s + 'px;height:' + s + 'px;line-height:' + s + 'px;font-size:' + (s * 0.5) + 'px">' + t.glifo + '</span>',
    iconSize: [s, s],
    iconAnchor: [s / 2, s / 2],
    popupAnchor: [0, -s / 2]
  });
};

// Rumbo en grados (0 = norte) entre dos puntos
window.rumbo = function (a, b) {
  const toR = Math.PI / 180;
  const y = Math.sin((b[1] - a[1]) * toR) * Math.cos(b[0] * toR);
  const x = Math.cos(a[0] * toR) * Math.sin(b[0] * toR) - Math.sin(a[0] * toR) * Math.cos(b[0] * toR) * Math.cos((b[1] - a[1]) * toR);
  return (Math.atan2(y, x) / toR + 360) % 360;
};

// Dibuja una línea con flechas de dirección; regresa un L.FeatureGroup
window.lineaConFlechas = function (coords, tipo) {
  const t = TIPOS[tipo];
  const g = L.featureGroup();
  L.polyline(coords, { color: '#fff', weight: 9, opacity: 0.9 }).addTo(g);
  L.polyline(coords, { color: t.color, weight: 5, opacity: 0.95, dashArray: tipo === 'desvio' ? '10 8' : null }).addTo(g);
  for (let i = 0; i < coords.length - 1; i++) {
    const a = coords[i], b = coords[i + 1];
    const ang = rumbo(a, b);
    [0.33, 0.75].forEach(function (f) {
      const p = [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f];
      L.marker(p, {
        interactive: false,
        icon: L.divIcon({
          className: 'flecha',
          html: '<span style="transform:rotate(' + (ang - 90) + 'deg);color:' + t.color + '">➤</span>',
          iconSize: [28, 28], iconAnchor: [14, 14]
        })
      }).addTo(g);
    });
  }
  return g;
};

window.escapar = function (s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
};
