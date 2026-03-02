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
    period: "2025.08 - 2026.01",
    company: "Carnegie Mellon University",
    role: "硬件与控制系统工程师",
    summary: "参与软体机器人与控制系统项目，负责执行器控制与系统级性能验证。",
    logoText: "CMU",
    highlights: [
      "负责 PWM 驱动与 PID 控制算法设计，实现 SMA 仿生记忆合金执行器的稳定控制。",
      "在硬件约束下完成系统级联调，使用 MATLAB / Python 进行数据分析与参数优化。",
      "完成 200+ 轮实验调参与性能验证，显著提升控制稳定性与可重复性。"
    ]
  },
  {
    period: "2025.05 - 2025.08",
    company: "西门子(中国)有限公司",
    role: "5G 网络工程实习生",
    summary: "面向工业场景 5G 网络落地，参与核心网测试、数据分析与信令定位。",
    logoText: "SIEM",
    highlights: [
      "参与工业场景下 5G 核心网部署与系统级验证，设计终端接入与网络兼容性测试流程。",
      "搭建并配置基于自研核心网的独立测试环境，完成多终端接入与端到端性能评估。",
      "抓取并分析 GTP-U 用户面数据流，定位异常时延与丢包，持续优化网络稳定性。"
    ]
  },
  {
    period: "2021.09 - 2024.07",
    company: "上海交通大学",
    role: "无人机系统设计工程师",
    summary: "聚焦无人机系统设计与验证，覆盖气动、结构、控制与硬件集成。",
    logoText: "SJTU",
    highlights: [
      "主导无人机总体方案与硬件系统设计，完成气动外形优化与关键参数验证。",
      "负责飞控电路与传感链路设计，完成从原理图到 PCB 的实现与调试闭环。",
      "执行原理图审查、布局布线与台架测试，确保系统电气性能与可靠性。"
    ]
  }
];

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

initMap();
renderExperience();

function initMap() {
  const map = L.map("map", {
    worldCopyJump: false,
    minZoom: 2,
    maxBounds: [[-85, -180], [85, 180]],
    maxBoundsViscosity: 1
  }).setView([30, 30], 2);

  L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
    attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
    maxZoom: 8,
    noWrap: true
  }).addTo(map);

  const routeLayer = L.layerGroup().addTo(map);
  const airportLayer = L.layerGroup().addTo(map);

  ROUTE_RANKING.forEach((route) => {
    const from = CITY_COORDS[route.from];
    const to = CITY_COORDS[route.to];
    if (!from || !to) return;

    for (let i = 0; i < route.count; i += 1) {
      const arc = buildRouteArcVariant(from, to, i, route.count, 80);
      const segments = splitArcOnDateline(arc);

      segments.forEach((segment) => {
        if (segment.length < 2) return;
        L.polyline(segment, {
          color: "#ffffff",
          weight: 1.7,
          opacity: 0.82
        })
          .bindTooltip(`${route.from} → ${route.to} · 第${i + 1}次`)
          .addTo(routeLayer);
      });
    }
  });

  Object.entries(CITY_COORDS).forEach(([city, coord]) => {
    const visits = cityVisitCount(city);
    if (visits === 0) return;

    L.circleMarker(coord, {
      radius: 3 + Math.min(visits, 8),
      color: "#f4d58d",
      weight: 1.6,
      fillColor: "#111111",
      fillOpacity: 0.98
    })
      .bindPopup(`<b>${escapeHtml(city)}</b><br>关联航线: ${visits}`)
      .addTo(airportLayer);
  });
}

function cityVisitCount(city) {
  return ROUTE_RANKING.reduce((sum, route) => {
    if (route.from === city || route.to === city) return sum + route.count;
    return sum;
  }, 0);
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
      <ul class="exp-points">
        ${(item.highlights || []).map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}

function toRad(deg) {
  return (deg * Math.PI) / 180;
}

function toDeg(rad) {
  return (rad * 180) / Math.PI;
}

function buildRouteArc(startLatLng, endLatLng, points) {
  const [startLat, startLng] = startLatLng;
  const [endLat, endLngRaw] = endLatLng;
  const deltaLng = normalizeLng(endLngRaw - startLng);
  const endLng = startLng + deltaLng;

  const distance = haversineKm(startLat, startLng, endLat, normalizeLng(endLng));
  const lift = Math.min(22, Math.max(2.2, distance / 1200));

  const result = [];
  for (let i = 0; i <= points; i += 1) {
    const t = i / points;
    const latLinear = startLat + (endLat - startLat) * t;
    const lngLinear = startLng + (endLng - startLng) * t;
    const curve = Math.sin(Math.PI * t) * lift;
    const lat = latLinear + curve;
    result.push([lat, normalizeLng(lngLinear)]);
  }
  return result;
}

function buildRouteArcVariant(startLatLng, endLatLng, index, total, points) {
  const center = (total - 1) / 2;
  const rank = index - center;
  const [startLat, startLng] = startLatLng;
  const [endLat, endLngRaw] = endLatLng;

  const deltaLng = normalizeLng(endLngRaw - startLng);
  const endLng = startLng + deltaLng;

  const distance = haversineKm(startLat, startLng, endLat, normalizeLng(endLng));
  const baseLift = Math.min(22, Math.max(2.2, distance / 1200));
  const variantLift = baseLift + rank * 1.05;

  const result = [];
  for (let i = 0; i <= points; i += 1) {
    const t = i / points;
    const latLinear = startLat + (endLat - startLat) * t;
    const lngLinear = startLng + (endLng - startLng) * t;
    const curve = Math.sin(Math.PI * t) * variantLift;
    const lat = latLinear + curve;
    result.push([lat, normalizeLng(lngLinear)]);
  }

  // Keep exact same endpoints across repeated flights.
  result[0] = [startLat, normalizeLng(startLng)];
  result[result.length - 1] = [endLat, normalizeLng(endLngRaw)];
  return result;
}

function splitArcOnDateline(points) {
  if (points.length < 2) return [points];

  const segments = [];
  let current = [[points[0][0], normalizeLng(points[0][1])]];

  for (let i = 1; i < points.length; i += 1) {
    const prev = current[current.length - 1];
    const nextRaw = points[i];
    const next = [nextRaw[0], normalizeLng(nextRaw[1])];

    const lonDiff = next[1] - prev[1];
    if (Math.abs(lonDiff) <= 170) {
      current.push(next);
      continue;
    }

    // Interpolate exact dateline crossing point to avoid long wrap lines.
    const crossesEast = lonDiff > 180;
    const boundaryFrom = crossesEast ? -180 : 180;
    const boundaryTo = crossesEast ? 180 : -180;
    const adjustedNextLon = crossesEast ? next[1] - 360 : next[1] + 360;
    const t = (boundaryFrom - prev[1]) / (adjustedNextLon - prev[1]);
    const latAtBoundary = prev[0] + (next[0] - prev[0]) * t;

    current.push([latAtBoundary, boundaryFrom]);
    if (current.length > 1) segments.push(current);
    current = [[latAtBoundary, boundaryTo], next];
  }

  if (current.length > 1) segments.push(current);
  return segments;
}

function normalizeLng(lng) {
  let value = lng;
  while (value > 180) value -= 360;
  while (value < -180) value += 360;
  return value;
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
