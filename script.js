const HOBBY_DATA = {
  airports: [
    { code: "PVG", name: "Shanghai Pudong", lat: 31.1443, lng: 121.8083 },
    { code: "HKG", name: "Hong Kong Intl", lat: 22.308, lng: 113.9185 },
    { code: "NRT", name: "Tokyo Narita", lat: 35.772, lng: 140.3929 },
    { code: "LAX", name: "Los Angeles Intl", lat: 33.9425, lng: -118.4081 }
  ],
  flights: [
    { from: "PVG", to: "HKG", date: "2025-04" },
    { from: "HKG", to: "LAX", date: "2025-07" },
    { from: "PVG", to: "NRT", date: "2025-10" }
  ],
  photos: [
    {
      airportCode: "HKG",
      title: "A350 Pushback",
      imageUrl: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=1200&q=80"
    },
    {
      airportCode: "LAX",
      title: "Dreamliner at Sunset",
      imageUrl: "https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&w=1200&q=80"
    },
    {
      airportCode: "NRT",
      title: "Heavy Departure",
      imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80"
    }
  ]
};

const EXPERIENCE_DATA = [
  {
    period: "Most Recent",
    company: "To be filled from LinkedIn",
    role: "Position Title",
    summary: "将根据你的 LinkedIn 工作经历替换为真实岗位、职责与成果。",
    logoText: "EX"
  },
  {
    period: "Earlier",
    company: "To be filled from LinkedIn",
    role: "Position Title",
    summary: "保留时间线结构，后续按实际经历补齐。",
    logoText: "EX"
  }
];

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

initMap();
renderGallery();
renderExperience();
updateStats();

function initMap() {
  const map = L.map("map", {
    worldCopyJump: true,
    minZoom: 2
  }).setView([24, 20], 2);

  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
    maxZoom: 8
  }).addTo(map);

  const routeLayer = L.layerGroup().addTo(map);
  const airportLayer = L.layerGroup().addTo(map);

  HOBBY_DATA.flights.forEach((flight) => {
    const from = findAirport(flight.from);
    const to = findAirport(flight.to);
    if (!from || !to) return;

    const arc = buildGreatCircleArc([from.lat, from.lng], [to.lat, to.lng], 80);
    L.polyline(arc, {
      color: "#b14c1f",
      weight: 2.4,
      opacity: 0.78
    })
      .bindTooltip(`${from.code} → ${to.code}<br>${flight.date}`)
      .addTo(routeLayer);
  });

  HOBBY_DATA.airports.forEach((airport) => {
    const count = HOBBY_DATA.photos.filter((p) => p.airportCode === airport.code).length;
    L.circleMarker([airport.lat, airport.lng], {
      radius: 6,
      color: "#0f6f7f",
      weight: 2,
      fillColor: "#ffffff",
      fillOpacity: 0.95
    })
      .bindPopup(`<b>${airport.code}</b> · ${airport.name}<br>Photos: ${count}`)
      .addTo(airportLayer);
  });
}

function renderGallery() {
  const gallery = document.getElementById("gallery");
  if (!gallery) return;

  gallery.innerHTML = HOBBY_DATA.photos
    .map((photo) => {
      return `
        <article class="photo-card">
          <img src="${escapeAttr(photo.imageUrl)}" alt="${escapeAttr(photo.title)}" loading="lazy" />
          <div class="photo-body">
            <h4>${escapeHtml(photo.title)}</h4>
            <small>${escapeHtml(photo.airportCode)}</small>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderExperience() {
  const container = document.getElementById("experience-list");
  if (!container) return;

  container.innerHTML = EXPERIENCE_DATA
    .map((item) => {
      return `
      <article class="timeline-item">
        <div class="exp-head">
          <div class="exp-meta">
            <div class="logo-badge">${escapeHtml(item.logoText)}</div>
            <div>
              <strong>${escapeHtml(item.company)}</strong><br>
              <span>${escapeHtml(item.role)}</span>
            </div>
          </div>
          <small>${escapeHtml(item.period)}</small>
        </div>
        <p>${escapeHtml(item.summary)}</p>
      </article>
      `;
    })
    .join("");
}

function updateStats() {
  setText("stat-airports", String(HOBBY_DATA.airports.length));
  setText("stat-routes", String(HOBBY_DATA.flights.length));
  setText("stat-photos", String(HOBBY_DATA.photos.length));

  const totalDistance = HOBBY_DATA.flights.reduce((sum, flight) => {
    const from = findAirport(flight.from);
    const to = findAirport(flight.to);
    if (!from || !to) return sum;
    return sum + haversineKm(from.lat, from.lng, to.lat, to.lng);
  }, 0);

  setText("stat-distance", `${Math.round(totalDistance).toLocaleString()} km`);
}

function findAirport(code) {
  return HOBBY_DATA.airports.find((airport) => airport.code === code);
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function toRad(deg) {
  return (deg * Math.PI) / 180;
}

function toDeg(rad) {
  return (rad * 180) / Math.PI;
}

function buildGreatCircleArc(startLatLng, endLatLng, points) {
  const [lat1, lon1] = startLatLng.map(toRad);
  const [lat2, lon2] = endLatLng.map(toRad);

  const d = 2 * Math.asin(Math.sqrt(
    Math.sin((lat2 - lat1) / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin((lon2 - lon1) / 2) ** 2
  ));

  if (d === 0) return [startLatLng, endLatLng];

  const result = [];
  for (let i = 0; i <= points; i += 1) {
    const f = i / points;
    const a = Math.sin((1 - f) * d) / Math.sin(d);
    const b = Math.sin(f * d) / Math.sin(d);

    const x = a * Math.cos(lat1) * Math.cos(lon1) + b * Math.cos(lat2) * Math.cos(lon2);
    const y = a * Math.cos(lat1) * Math.sin(lon1) + b * Math.cos(lat2) * Math.sin(lon2);
    const z = a * Math.sin(lat1) + b * Math.sin(lat2);

    const lat = Math.atan2(z, Math.sqrt(x * x + y * y));
    const lon = Math.atan2(y, x);
    result.push([toDeg(lat), toDeg(lon)]);
  }
  return result;
}

function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttr(str) {
  return escapeHtml(str).replaceAll("`", "&#96;");
}
