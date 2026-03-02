const ROUTE_RANKING = [
  { from: "上海", to: "北京", count: 5 },
  { from: "北京", to: "上海", count: 4 },
  { from: "匹兹堡", to: "纽约", count: 3 },
  { from: "芝加哥", to: "匹兹堡", count: 3 },
  { from: "北京", to: "中国澳门", count: 3 },
  { from: "嘉峪关", to: "北京", count: 2 },
  { from: "广州", to: "北京", count: 2 },
  { from: "北京", to: "新加坡", count: 2 },
  { from: "新加坡", to: "北京", count: 2 },
  { from: "维也纳", to: "北京", count: 2 },
  { from: "纽约", to: "匹兹堡", count: 2 },
  { from: "珠海", to: "北京", count: 2 },
  { from: "北京", to: "法兰克福", count: 2 },
  { from: "北京", to: "兰州", count: 2 },
  { from: "北京", to: "洛杉矶", count: 1 },
  { from: "新加坡", to: "纽约", count: 1 },
  { from: "北京", to: "海口", count: 1 },
  { from: "伊斯坦布尔", to: "亚特兰大", count: 1 },
  { from: "北京", to: "广州", count: 1 },
  { from: "北京", to: "丽江", count: 1 },
  { from: "海口", to: "北京", count: 1 },
  { from: "亚特兰大", to: "匹兹堡", count: 1 },
  { from: "拉斯维加斯", to: "匹兹堡", count: 1 },
  { from: "丽江", to: "北京", count: 1 },
  { from: "纽约", to: "维也纳", count: 1 },
  { from: "北京", to: "三亚", count: 1 },
  { from: "法兰克福", to: "芝加哥", count: 1 },
  { from: "上海", to: "底特律", count: 1 },
  { from: "华盛顿", to: "慕尼黑", count: 1 },
  { from: "北京", to: "嘉峪关", count: 1 },
  { from: "北京", to: "维也纳", count: 1 },
  { from: "北京", to: "日照", count: 1 },
  { from: "北京", to: "武汉", count: 1 },
  { from: "匹兹堡", to: "拉斯维加斯", count: 1 },
  { from: "维也纳", to: "芝加哥", count: 1 },
  { from: "厦门", to: "北京", count: 1 },
  { from: "北京", to: "伊斯坦布尔", count: 1 },
  { from: "底特律", to: "上海", count: 1 },
  { from: "北京", to: "珠海", count: 1 },
  { from: "纽约", to: "新加坡", count: 1 },
  { from: "洛杉矶", to: "北京", count: 1 },
  { from: "慕尼黑", to: "北京", count: 1 },
  { from: "兰州", to: "北京", count: 1 },
  { from: "武汉", to: "北京", count: 1 },
  { from: "北京", to: "厦门", count: 1 },
  { from: "日照", to: "北京", count: 1 },
  { from: "匹兹堡", to: "华盛顿", count: 1 },
  { from: "中国澳门", to: "北京", count: 1 },
  { from: "三亚", to: "北京", count: 1 }
];

const CITY_COORDS = {
  "北京": [39.9042, 116.4074],
  "上海": [31.2304, 121.4737],
  "匹兹堡": [40.4406, -79.9959],
  "纽约": [40.7128, -74.006],
  "芝加哥": [41.8781, -87.6298],
  "中国澳门": [22.1987, 113.5439],
  "嘉峪关": [39.772, 98.2892],
  "广州": [23.1291, 113.2644],
  "新加坡": [1.3521, 103.8198],
  "维也纳": [48.2082, 16.3738],
  "珠海": [22.2707, 113.5767],
  "法兰克福": [50.1109, 8.6821],
  "兰州": [36.0611, 103.8343],
  "洛杉矶": [34.0522, -118.2437],
  "海口": [20.0442, 110.1983],
  "伊斯坦布尔": [41.0082, 28.9784],
  "亚特兰大": [33.749, -84.388],
  "丽江": [26.8721, 100.2296],
  "拉斯维加斯": [36.1699, -115.1398],
  "底特律": [42.3314, -83.0458],
  "华盛顿": [38.9072, -77.0369],
  "慕尼黑": [48.1351, 11.582],
  "日照": [35.4164, 119.526],
  "武汉": [30.5928, 114.3055],
  "厦门": [24.4798, 118.0894],
  "三亚": [18.2528, 109.5119]
};

const EXPERIENCE_DATA = [
  {
    period: "Most Recent",
    company: "To be filled from LinkedIn",
    role: "Position Title",
    summary: "你提供每段经历后，我会替换为真实公司、岗位、成果。",
    logoText: "EX"
  },
  {
    period: "Earlier",
    company: "To be filled from LinkedIn",
    role: "Position Title",
    summary: "按时间顺序展示，风格保持成熟稳重。",
    logoText: "EX"
  }
];

const PHOTO_DATA = [
  {
    city: "香港",
    title: "A350 Pushback",
    imageUrl: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    city: "洛杉矶",
    title: "Dreamliner at Sunset",
    imageUrl: "https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    city: "东京",
    title: "Heavy Departure",
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80"
  }
];

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

initMap();
renderRouteBoard();
renderGallery();
renderExperience();
updateStats();

function initMap() {
  const map = L.map("map", { worldCopyJump: true, minZoom: 2 }).setView([30, 30], 2);

  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
    maxZoom: 8
  }).addTo(map);

  const routeLayer = L.layerGroup().addTo(map);
  const airportLayer = L.layerGroup().addTo(map);

  ROUTE_RANKING.forEach((route) => {
    const from = CITY_COORDS[route.from];
    const to = CITY_COORDS[route.to];
    if (!from || !to) return;

    const arc = buildGreatCircleArc(from, to, 80);
    L.polyline(arc, {
      color: "#b14c1f",
      weight: 1.2 + route.count * 0.7,
      opacity: 0.32 + route.count * 0.08
    })
      .bindTooltip(`${route.from} → ${route.to} · ${route.count}次`)
      .addTo(routeLayer);
  });

  Object.entries(CITY_COORDS).forEach(([city, coord]) => {
    const visits = cityVisitCount(city);
    if (visits === 0) return;

    L.circleMarker(coord, {
      radius: 3 + Math.min(visits, 8),
      color: "#0f6f7f",
      weight: 2,
      fillColor: "#ffffff",
      fillOpacity: 0.95
    })
      .bindPopup(`<b>${escapeHtml(city)}</b><br>关联航线: ${visits}`)
      .addTo(airportLayer);
  });
}

function renderRouteBoard() {
  const board = document.getElementById("route-board");
  if (!board) return;

  const max = Math.max(...ROUTE_RANKING.map((r) => r.count));

  board.innerHTML = ROUTE_RANKING
    .map((route, idx) => {
      const pct = (route.count / max) * 100;
      return `
        <article class="route-item">
          <div class="route-item-head">
            <span>${idx + 1}. ${escapeHtml(route.from)} - ${escapeHtml(route.to)}</span>
            <span>${route.count}次</span>
          </div>
          <div class="route-bar"><div class="route-bar-fill" style="width:${pct}%;"></div></div>
        </article>
      `;
    })
    .join("");
}

function cityVisitCount(city) {
  return ROUTE_RANKING.reduce((sum, route) => {
    if (route.from === city || route.to === city) return sum + route.count;
    return sum;
  }, 0);
}

function renderGallery() {
  const gallery = document.getElementById("gallery");
  if (!gallery) return;

  gallery.innerHTML = PHOTO_DATA.map((photo) => `
    <article class="photo-card">
      <img src="${escapeAttr(photo.imageUrl)}" alt="${escapeAttr(photo.title)}" loading="lazy" />
      <div class="photo-body">
        <h4>${escapeHtml(photo.title)}</h4>
        <small>${escapeHtml(photo.city)}</small>
      </div>
    </article>
  `).join("");
}

function renderExperience() {
  const container = document.getElementById("experience-list");
  if (!container) return;

  container.innerHTML = EXPERIENCE_DATA.map((item) => `
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
  `).join("");
}

function updateStats() {
  const uniqueCities = new Set(ROUTE_RANKING.flatMap((r) => [r.from, r.to]));
  const totalRoutes = ROUTE_RANKING.reduce((sum, r) => sum + r.count, 0);

  const totalDistance = ROUTE_RANKING.reduce((sum, r) => {
    const from = CITY_COORDS[r.from];
    const to = CITY_COORDS[r.to];
    if (!from || !to) return sum;
    return sum + haversineKm(from[0], from[1], to[0], to[1]) * r.count;
  }, 0);

  setText("stat-airports", String(uniqueCities.size));
  setText("stat-routes", String(totalRoutes));
  setText("stat-photos", String(PHOTO_DATA.length));
  setText("stat-distance", `${Math.round(totalDistance).toLocaleString()} km`);
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
