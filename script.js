const STORAGE_KEY = "aviation-logbook-v1";
const AUTH_SESSION_KEY = "aviation-admin-auth-v1";
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD_HASH = "ccc0b903bce51fb554262d742d0a282e1f8a87d064f1cf44f8ff5148ca4beb42";

const DEFAULT_DATA = {
  airports: [
    { code: "PVG", name: "Shanghai Pudong", lat: 31.1443, lng: 121.8083 },
    { code: "HKG", name: "Hong Kong Intl", lat: 22.308, lng: 113.9185 },
    { code: "LAX", name: "Los Angeles Intl", lat: 33.9425, lng: -118.4081 },
    { code: "NRT", name: "Tokyo Narita", lat: 35.772, lng: 140.3929 }
  ],
  flights: [
    {
      id: "f1",
      from: "PVG",
      to: "HKG",
      airline: "China Eastern",
      aircraft: "A330-300",
      date: "2025-04-18",
      note: "商务出行"
    },
    {
      id: "f2",
      from: "HKG",
      to: "LAX",
      airline: "Cathay Pacific",
      aircraft: "A350-1000",
      date: "2025-07-02",
      note: "暑期航线"
    },
    {
      id: "f3",
      from: "PVG",
      to: "NRT",
      airline: "ANA",
      aircraft: "B787-9",
      date: "2025-10-11",
      note: "Spotting trip"
    }
  ],
  photos: [
    {
      id: "p1",
      airportCode: "HKG",
      title: "A350 Pushback",
      aircraftType: "A350-1000",
      takenOn: "2025-07-03",
      imageUrl: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=1200&q=80",
      note: "Terminal 1 近机位"
    },
    {
      id: "p2",
      airportCode: "LAX",
      title: "Dreamliner at Sunset",
      aircraftType: "B787",
      takenOn: "2025-07-04",
      imageUrl: "https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&w=1200&q=80",
      note: "傍晚金色时刻"
    },
    {
      id: "p3",
      airportCode: "NRT",
      title: "Heavy Departure",
      aircraftType: "B777-300ER",
      takenOn: "2025-10-12",
      imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
      note: "RWY 34L"
    }
  ]
};

let appData = loadData();
let map;
let routeLayer;
let airportLayer;
let isAdmin = sessionStorage.getItem(AUTH_SESSION_KEY) === "1";

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

syncAdminUI();
initRevealAnimation();
initMap();
renderAll();
bindForms();
bindDataTools();
bindAdminAuth();

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(DEFAULT_DATA);

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed.airports) || !Array.isArray(parsed.flights) || !Array.isArray(parsed.photos)) {
      return structuredClone(DEFAULT_DATA);
    }
    return parsed;
  } catch (_error) {
    return structuredClone(DEFAULT_DATA);
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
}

function syncAdminUI() {
  document.body.dataset.admin = isAdmin ? "true" : "false";
  const status = document.getElementById("admin-status");
  if (status) {
    status.textContent = isAdmin ? "当前状态：已登录管理员（可编辑）" : "当前状态：未登录（只读模式）";
  }
}

function setAdminState(next) {
  isAdmin = next;
  if (isAdmin) {
    sessionStorage.setItem(AUTH_SESSION_KEY, "1");
  } else {
    sessionStorage.removeItem(AUTH_SESSION_KEY);
  }
  syncAdminUI();
}

function bindAdminAuth() {
  const form = document.getElementById("admin-login-form");
  const logoutBtn = document.getElementById("admin-logout-btn");

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const usernameInput = document.getElementById("admin-username");
    const passwordInput = document.getElementById("admin-password");

    const username = String(usernameInput?.value || "").trim();
    const password = String(passwordInput?.value || "");
    const passwordHash = await sha256Hex(password);

    if (username === ADMIN_USERNAME && passwordHash === ADMIN_PASSWORD_HASH) {
      setAdminState(true);
      form.reset();
      alert("管理员登录成功。");
      return;
    }

    setAdminState(false);
    alert("账号或密码错误。");
  });

  logoutBtn?.addEventListener("click", () => {
    setAdminState(false);
    alert("已退出管理员登录。");
  });
}

async function sha256Hex(input) {
  if (!window.crypto?.subtle) return "";

  const bytes = new TextEncoder().encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", bytes);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

function requireAdmin(actionText) {
  if (isAdmin) return true;
  alert(`请先在“管理员登录”中登录后再${actionText}。`);
  return false;
}

function initRevealAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), index * 70);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function initMap() {
  map = L.map("map", {
    worldCopyJump: true,
    minZoom: 2
  }).setView([25, 15], 2);

  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
    maxZoom: 8
  }).addTo(map);

  routeLayer = L.layerGroup().addTo(map);
  airportLayer = L.layerGroup().addTo(map);
}

function renderAll() {
  renderMapData();
  renderGallery();
  updateStats();
  saveData();
}

function renderMapData() {
  routeLayer.clearLayers();
  airportLayer.clearLayers();

  appData.flights.forEach((flight) => {
    const from = findAirport(flight.from);
    const to = findAirport(flight.to);
    if (!from || !to) return;

    const arc = buildGreatCircleArc([from.lat, from.lng], [to.lat, to.lng], 80);
    L.polyline(arc, {
      color: "#ce5221",
      weight: 2.5,
      opacity: 0.75
    })
      .bindTooltip(buildFlightTooltip(flight, from, to), { sticky: true })
      .addTo(routeLayer);
  });

  appData.airports.forEach((airport) => {
    const photoCount = appData.photos.filter((p) => p.airportCode === airport.code).length;
    L.circleMarker([airport.lat, airport.lng], {
      radius: 6,
      weight: 2,
      color: "#0f7b6c",
      fillColor: "#ffffff",
      fillOpacity: 0.95
    })
      .bindPopup(`<b>${escapeHtml(airport.code)}</b> · ${escapeHtml(airport.name || "Unknown")}<br/>照片: ${photoCount}`)
      .addTo(airportLayer);
  });
}

function renderGallery() {
  const galleryEl = document.getElementById("gallery");
  if (!galleryEl) return;

  if (appData.photos.length === 0) {
    galleryEl.innerHTML = "<p>还没有照片，先在下方添加第一张吧。</p>";
    return;
  }

  const sorted = [...appData.photos].sort((a, b) => (b.takenOn || "").localeCompare(a.takenOn || ""));

  galleryEl.innerHTML = sorted
    .map((photo) => {
      const airport = findAirport(photo.airportCode);
      return `
      <article class="photo-card">
        <img src="${escapeAttribute(photo.imageUrl)}" alt="${escapeAttribute(photo.title)}" loading="lazy" />
        <div class="photo-body">
          <h4>${escapeHtml(photo.title)}</h4>
          <div class="photo-meta">${escapeHtml(photo.aircraftType || "机型未知")} · ${escapeHtml(photo.airportCode)}</div>
          <div class="photo-meta">${escapeHtml(airport?.name || "未登记机场")}${photo.takenOn ? ` · ${escapeHtml(photo.takenOn)}` : ""}</div>
          ${photo.note ? `<div class="photo-meta">${escapeHtml(photo.note)}</div>` : ""}
        </div>
      </article>
      `;
    })
    .join("");
}

function updateStats() {
  setText("stat-airports", String(appData.airports.length));
  setText("stat-routes", String(appData.flights.length));
  setText("stat-photos", String(appData.photos.length));

  const totalDistance = appData.flights.reduce((sum, flight) => {
    const from = findAirport(flight.from);
    const to = findAirport(flight.to);
    if (!from || !to) return sum;
    return sum + haversineKm(from.lat, from.lng, to.lat, to.lng);
  }, 0);

  setText("stat-distance", `${Math.round(totalDistance).toLocaleString()} km`);
}

function bindForms() {
  const routeForm = document.getElementById("route-form");
  const photoForm = document.getElementById("photo-form");

  routeForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!requireAdmin("添加航线")) return;

    const form = new FormData(routeForm);
    const fromCode = normalizeCode(form.get("fromCode"));
    const toCode = normalizeCode(form.get("toCode"));
    const fromLat = Number(form.get("fromLat"));
    const fromLng = Number(form.get("fromLng"));
    const toLat = Number(form.get("toLat"));
    const toLng = Number(form.get("toLng"));

    if (!fromCode || !toCode || Number.isNaN(fromLat) || Number.isNaN(fromLng) || Number.isNaN(toLat) || Number.isNaN(toLng)) {
      alert("请完整填写机场代码和经纬度。");
      return;
    }

    upsertAirport({ code: fromCode, name: String(form.get("fromName") || fromCode).trim(), lat: fromLat, lng: fromLng });
    upsertAirport({ code: toCode, name: String(form.get("toName") || toCode).trim(), lat: toLat, lng: toLng });

    appData.flights.push({
      id: uid("f"),
      from: fromCode,
      to: toCode,
      airline: String(form.get("airline") || "").trim(),
      aircraft: String(form.get("aircraft") || "").trim(),
      date: String(form.get("date") || "").trim(),
      note: String(form.get("note") || "").trim()
    });

    routeForm.reset();
    renderAll();
  });

  photoForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!requireAdmin("添加照片")) return;

    const form = new FormData(photoForm);
    const airportCode = normalizeCode(form.get("airportCode"));
    const title = String(form.get("title") || "").trim();
    const imageUrl = String(form.get("imageUrl") || "").trim();
    const imageFile = form.get("imageFile");

    if (!airportCode || !title) {
      alert("请填写机场代码和照片标题。");
      return;
    }

    if (!findAirport(airportCode)) {
      alert("该机场代码尚未登记。请先添加一条包含该机场的航线。");
      return;
    }

    let finalImage = imageUrl;
    if (!finalImage && imageFile instanceof File && imageFile.size > 0) {
      finalImage = await readFileAsDataUrl(imageFile);
    }

    if (!finalImage) {
      alert("请提供图片 URL 或上传本地图片。");
      return;
    }

    appData.photos.push({
      id: uid("p"),
      airportCode,
      title,
      aircraftType: String(form.get("aircraftType") || "").trim(),
      takenOn: String(form.get("takenOn") || "").trim(),
      imageUrl: finalImage,
      note: String(form.get("note") || "").trim()
    });

    photoForm.reset();
    renderAll();
  });
}

function bindDataTools() {
  const exportBtn = document.getElementById("export-btn");
  const importInput = document.getElementById("import-input");
  const resetBtn = document.getElementById("reset-btn");

  exportBtn?.addEventListener("click", () => {
    if (!requireAdmin("导出数据")) return;

    const dataStr = JSON.stringify(appData, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "aviation-logbook-data.json";
    a.click();
    URL.revokeObjectURL(url);
  });

  importInput?.addEventListener("change", async (event) => {
    if (!requireAdmin("导入数据")) {
      event.target.value = "";
      return;
    }

    const input = event.target;
    const file = input.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      if (!Array.isArray(parsed.airports) || !Array.isArray(parsed.flights) || !Array.isArray(parsed.photos)) {
        throw new Error("invalid shape");
      }
      appData = parsed;
      renderAll();
      input.value = "";
      alert("导入成功。");
    } catch (_error) {
      alert("导入失败：请检查 JSON 格式。");
    }
  });

  resetBtn?.addEventListener("click", () => {
    if (!requireAdmin("恢复示例数据")) return;

    if (!confirm("确定要恢复示例数据吗？当前浏览器中的自定义数据会被覆盖。")) {
      return;
    }
    appData = structuredClone(DEFAULT_DATA);
    renderAll();
  });
}

function upsertAirport(airport) {
  const index = appData.airports.findIndex((a) => a.code === airport.code);
  if (index >= 0) {
    appData.airports[index] = { ...appData.airports[index], ...airport };
    return;
  }
  appData.airports.push(airport);
}

function findAirport(code) {
  const normalized = normalizeCode(code);
  return appData.airports.find((airport) => airport.code === normalized);
}

function buildFlightTooltip(flight, from, to) {
  const segments = [
    `${escapeHtml(from.code)} → ${escapeHtml(to.code)}`,
    flight.airline ? escapeHtml(flight.airline) : "",
    flight.aircraft ? escapeHtml(flight.aircraft) : "",
    flight.date ? escapeHtml(flight.date) : ""
  ].filter(Boolean);
  return segments.join("<br/>");
}

function uid(prefix) {
  return `${prefix}${Date.now()}${Math.floor(Math.random() * 1000)}`;
}

function normalizeCode(value) {
  return String(value || "").trim().toUpperCase();
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
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

  if (d === 0) {
    return [startLatLng, endLatLng];
  }

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
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttribute(str) {
  return escapeHtml(str).replaceAll("`", "&#96;");
}
