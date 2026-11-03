/**
 * BAI 2: WEATHER & TRAVEL PLANNER
 * Modules:
 * 1. Mock Data Weather (Biên Hòa, Đà Lạt, Vũng Tàu, Hà Nội, Sa Pa)
 * 2. Itinerary Manager (CRUD, visited toggle, transition)
 * 3. Search, Filter, Sort, Pagination (10, 20, 50, all)
 * 4. LocalStorage persistence (selected city, itinerary list, trip date)
 * 5. Smart Suggestions based on temperature
 * 6. Export to .txt file (Blob & createObjectURL)
 * 7. Trip Countdown Timer
 */

// 1. Mock Data: Cities & Weather Details
const CITIES_DATA = [
  {
    id: 'bien-hoa',
    name: 'Biên Hòa (Đồng Nai)',
    temp: 34,
    condition: 'Nắng nóng gay gắt',
    icon: 'fa-solid fa-sun',
    theme: 'theme-sunny',
    humidity: '62%',
    wind: '14 km/h',
    feelsLike: '38°C',
    uv: 'Cực cao (9)',
    spotDesc: 'Thác Giang Điền (Đồng Nai) với cảnh sắc sông thác và cây xanh rợp bóng, cực kỳ lý tưởng cho các buổi cắm trại dã ngoại và tiệc BBQ ngoài trời.'
  },
  {
    id: 'da-lat',
    name: 'Đà Lạt (Lâm Đồng)',
    temp: 16,
    condition: 'Se lạnh & Sương mù',
    icon: 'fa-solid fa-cloud',
    theme: 'theme-chilly',
    humidity: '88%',
    wind: '8 km/h',
    feelsLike: '15°C',
    uv: 'Trung bình (4)',
    spotDesc: 'Hồ Xuân Hương (Đà Lạt) thơ mộng vào sáng sớm và hoàng hôn, nơi bạn có thể đạp vịt, đạp xe dạo quanh hồ và thưởng thức sữa đậu nành nóng hổi.'
  },
  {
    id: 'vung-tau',
    name: 'Vũng Tàu (Bà Rịa - Vũng Tàu)',
    temp: 29,
    condition: 'Nắng gió biển rực rỡ',
    icon: 'fa-solid fa-cloud-sun',
    theme: 'theme-sunny',
    humidity: '74%',
    wind: '22 km/h',
    feelsLike: '31°C',
    uv: 'Cao (7)',
    spotDesc: 'Bãi Sau (Vũng Tàu) với bờ cát dài thoai thoải và sóng biển êm dịu, là thiên đường tắm biển, thưởng thức hải sản tươi sống và ngắm bình minh tuyệt đẹp.'
  },
  {
    id: 'ha-noi',
    name: 'Hà Nội',
    temp: 22,
    condition: 'Mưa phùn nhẹ & Mát mẻ',
    icon: 'fa-solid fa-cloud-rain',
    theme: 'theme-rainy',
    humidity: '82%',
    wind: '10 km/h',
    feelsLike: '22°C',
    uv: 'Thấp (2)',
    spotDesc: 'Hồ Hoàn Kiếm và Phố Cổ Hà Nội mang vẻ đẹp cổ kính ngàn năm văn hiến, thích hợp đi bộ dạo quanh phố đi bộ và nếm thử món kem Tràng Tiền nức tiếng.'
  },
  {
    id: 'sa-pa',
    name: 'Sa Pa (Lào Cai)',
    temp: 11,
    condition: 'Rét buốt & Mây mù',
    icon: 'fa-regular fa-snowflake',
    theme: 'theme-chilly',
    humidity: '94%',
    wind: '16 km/h',
    feelsLike: '9°C',
    uv: 'Thấp (1)',
    spotDesc: 'Đỉnh Fansipan nóc nhà Đông Dương bồng bềnh giữa biển mây, mang đến trải nghiệm săn mây đỉnh cao và chiêm bái quần thể tâm linh hùng vĩ.'
  }
];

// App State
const STATE = {
  selectedCityId: 'bien-hoa',
  itinerary: [],
  tripDate: '',
  searchKeyword: '',
  filterStatus: 'all', // all | pending | visited
  sortBy: 'date-desc',
  pageSize: 10,
  currentPage: 1
};

const STORAGE_KEYS = {
  CITY: 'planner_selected_city',
  ITINERARY: 'planner_itinerary',
  TRIP_DATE: 'planner_trip_date'
};

// DOM Elements
const dom = {
  citySelect: document.getElementById('citySelect'),
  weatherIcon: document.getElementById('weatherIcon'),
  weatherTemp: document.getElementById('weatherTemp'),
  weatherCondition: document.getElementById('weatherCondition'),
  weatherHumidity: document.getElementById('weatherHumidity'),
  weatherWind: document.getElementById('weatherWind'),
  weatherFeelsLike: document.getElementById('weatherFeelsLike'),
  weatherUV: document.getElementById('weatherUV'),
  suggestionText: document.getElementById('suggestionText'),
  citySpotDesc: document.getElementById('citySpotDesc'),
  itineraryForm: document.getElementById('itineraryForm'),
  placeName: document.getElementById('placeName'),
  placeTime: document.getElementById('placeTime'),
  itinerarySearch: document.getElementById('itinerarySearch'),
  filterStatus: document.getElementById('filterStatus'),
  sortPlaces: document.getElementById('sortPlaces'),
  pageSize: document.getElementById('pageSize'),
  placesList: document.getElementById('placesList'),
  emptyPlaces: document.getElementById('emptyPlaces'),
  paginationInfo: document.getElementById('paginationInfo'),
  btnPrevPage: document.getElementById('btnPrevPage'),
  btnNextPage: document.getElementById('btnNextPage'),
  totalPlacesCount: document.getElementById('totalPlacesCount'),
  visitedPlacesCount: document.getElementById('visitedPlacesCount'),
  btnExport: document.getElementById('btnExport'),
  tripDateInput: document.getElementById('tripDateInput'),
  countdownTimer: document.getElementById('countdownTimer')
};

// ==========================================
// 1. Storage Helpers
// ==========================================
function loadStorage() {
  try {
    const savedCity = localStorage.getItem(STORAGE_KEYS.CITY);
    if (savedCity && CITIES_DATA.some(c => c.id === savedCity)) {
      STATE.selectedCityId = savedCity;
    }

    const savedItinerary = localStorage.getItem(STORAGE_KEYS.ITINERARY);
    if (savedItinerary) {
      STATE.itinerary = JSON.parse(savedItinerary);
    } else {
      // Dữ liệu mẫu ban đầu
      STATE.itinerary = [
        { id: 1, name: 'Check-in khách sạn & Nhận phòng', time: '08:00 AM', visited: true, createdAt: Date.now() - 7200000 },
        { id: 2, name: 'Ăn sáng đặc sản địa phương', time: '09:00 AM', visited: true, createdAt: Date.now() - 5400000 },
        { id: 3, name: 'Khám phá Thác Giang Điền và dạo suối', time: '11:00 AM', visited: false, createdAt: Date.now() - 3600000 },
        { id: 4, name: 'Tiệc nướng BBQ cắm trại buổi chiều', time: '04:30 PM', visited: false, createdAt: Date.now() - 1800000 }
      ];
      saveStorage();
    }

    const savedTripDate = localStorage.getItem(STORAGE_KEYS.TRIP_DATE);
    if (savedTripDate) {
      STATE.tripDate = savedTripDate;
      dom.tripDateInput.value = savedTripDate;
    } else {
      // Mặc định ngày mai lúc 07:00
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 2);
      tomorrow.setHours(7, 0, 0, 0);
      const isoString = tomorrow.toISOString().slice(0, 16);
      STATE.tripDate = isoString;
      dom.tripDateInput.value = isoString;
      localStorage.setItem(STORAGE_KEYS.TRIP_DATE, isoString);
    }
  } catch (e) {
    console.error('Lỗi khi tải LocalStorage:', e);
  }
}

function saveStorage() {
  try {
    localStorage.setItem(STORAGE_KEYS.CITY, STATE.selectedCityId);
    localStorage.setItem(STORAGE_KEYS.ITINERARY, JSON.stringify(STATE.itinerary));
    localStorage.setItem(STORAGE_KEYS.TRIP_DATE, STATE.tripDate);
  } catch (e) {
    console.error('Lỗi khi ghi LocalStorage:', e);
  }
}

// ==========================================
// 2. Weather Logic & UI
// ==========================================
function initCityOptions() {
  dom.citySelect.innerHTML = '';
  CITIES_DATA.forEach(city => {
    const opt = document.createElement('option');
    opt.value = city.id;
    opt.textContent = city.name;
    if (city.id === STATE.selectedCityId) {
      opt.selected = true;
    }
    dom.citySelect.appendChild(opt);
  });
}

function renderWeather() {
  const city = CITIES_DATA.find(c => c.id === STATE.selectedCityId) || CITIES_DATA[0];

  dom.weatherIcon.innerHTML = `<i class="${city.icon}"></i>`;
  dom.weatherTemp.textContent = `${city.temp}°C`;
  dom.weatherCondition.textContent = city.condition;
  dom.weatherHumidity.textContent = city.humidity;
  dom.weatherWind.textContent = city.wind;
  dom.weatherFeelsLike.textContent = city.feelsLike;
  dom.weatherUV.textContent = city.uv;
  dom.citySpotDesc.textContent = city.spotDesc;

  // Cập nhật theme class cho body
  document.body.className = city.theme;

  // Gợi ý thông minh (Smart suggestions)
  let suggestion = '';
  if (city.temp < 15) {
    suggestion = 'Thời tiết rất rét buốt, nhớ mang theo áo phao dày, găng tay, khăn len và bình giữ nhiệt nước nóng!';
  } else if (city.temp < 22) {
    suggestion = 'Thời tiết se lạnh dễ chịu, hãy chuẩn bị áo khoác nhẹ, cardigan hoặc hoodie giữ ấm khi ra ngoài.';
  } else if (city.temp > 30) {
    suggestion = 'Thời tiết nắng nóng gay gắt, đừng quên mang nước lọc giải nhiệt, kính râm, mũ rộng vành và thoa kem chống nắng SPF50+!';
  } else {
    suggestion = 'Thời tiết mát mẻ tuyệt vời, rất thích hợp cho các hoạt động tham quan ngoài trời và chụp ảnh kỷ niệm.';
  }
  dom.suggestionText.textContent = suggestion;
}

// ==========================================
// 3. Itinerary CRUD & List Operations
// ==========================================
function addPlace(name, time) {
  const newPlace = {
    id: Date.now(),
    name: name.trim(),
    time: time.trim(),
    visited: false,
    createdAt: Date.now()
  };
  STATE.itinerary.unshift(newPlace);
  saveStorage();
  renderItineraryUI();
}

function toggleVisited(id) {
  const place = STATE.itinerary.find(p => p.id === id);
  if (place) {
    place.visited = !place.visited;
    saveStorage();
    renderItineraryUI();
  }
}

function deletePlace(id, elem) {
  elem.classList.add('slide-out');
  setTimeout(() => {
    STATE.itinerary = STATE.itinerary.filter(p => p.id !== id);
    saveStorage();
    renderItineraryUI();
  }, 300);
}

function getProcessedItinerary() {
  let list = [...STATE.itinerary];

  // 1. Search
  if (STATE.searchKeyword.trim()) {
    const kw = STATE.searchKeyword.trim().toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(kw) || p.time.toLowerCase().includes(kw));
  }

  // 2. Filter Status
  if (STATE.filterStatus === 'pending') {
    list = list.filter(p => !p.visited);
  } else if (STATE.filterStatus === 'visited') {
    list = list.filter(p => p.visited);
  }

  // 3. Sort
  list.sort((a, b) => {
    switch (STATE.sortBy) {
      case 'title-asc': return a.name.localeCompare(b.name, 'vi');
      case 'title-desc': return b.name.localeCompare(a.name, 'vi');
      case 'date-desc':
      default:
        return b.createdAt - a.createdAt;
    }
  });

  return list;
}

function renderItineraryUI() {
  const total = STATE.itinerary.length;
  const visited = STATE.itinerary.filter(p => p.visited).length;
  dom.totalPlacesCount.textContent = total;
  dom.visitedPlacesCount.textContent = visited;

  const processed = getProcessedItinerary();
  const totalItems = processed.length;
  const pageSize = STATE.pageSize === 'all' ? totalItems : parseInt(STATE.pageSize, 10);
  const totalPages = pageSize > 0 ? Math.ceil(totalItems / pageSize) || 1 : 1;

  if (STATE.currentPage > totalPages) STATE.currentPage = totalPages;
  if (STATE.currentPage < 1) STATE.currentPage = 1;

  const startIndex = (STATE.currentPage - 1) * (pageSize || 1);
  const pagePlaces = STATE.pageSize === 'all' ? processed : processed.slice(startIndex, startIndex + pageSize);

  dom.placesList.innerHTML = '';
  if (pagePlaces.length === 0) {
    dom.emptyPlaces.style.display = 'block';
  } else {
    dom.emptyPlaces.style.display = 'none';
    pagePlaces.forEach(place => {
      const li = document.createElement('li');
      li.className = `place-item ${place.visited ? 'visited' : ''}`;
      li.dataset.id = place.id;

      li.innerHTML = `
        <div class="place-info">
          <div class="place-badge-status" title="Đánh dấu đã đến">
            <i class="fa-solid fa-check"></i>
          </div>
          <div class="place-text">
            <h4>${escapeHtml(place.name)}</h4>
            <span><i class="fa-regular fa-clock"></i> ${escapeHtml(place.time)}</span>
          </div>
        </div>
        <div class="place-actions">
          <button class="btn-toggle-visit">
            ${place.visited ? '<i class="fa-solid fa-rotate-left"></i> Chưa đến' : '<i class="fa-solid fa-check"></i> Đã đến'}
          </button>
          <button class="btn-delete-place" title="Xóa địa điểm">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `;

      // Event listeners
      li.querySelector('.place-badge-status').addEventListener('click', () => toggleVisited(place.id));
      li.querySelector('.btn-toggle-visit').addEventListener('click', () => toggleVisited(place.id));
      li.querySelector('.btn-delete-place').addEventListener('click', () => deletePlace(place.id, li));

      dom.placesList.appendChild(li);
    });
  }

  dom.paginationInfo.textContent = `Trang ${STATE.currentPage} / ${totalPages} (${totalItems} địa điểm)`;
  dom.btnPrevPage.disabled = STATE.currentPage <= 1;
  dom.btnNextPage.disabled = STATE.currentPage >= totalPages;
}

function escapeHtml(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

// ==========================================
// 4. Export to Text File (.txt)
// ==========================================
function exportToTextFile() {
  const city = CITIES_DATA.find(c => c.id === STATE.selectedCityId) || CITIES_DATA[0];
  let content = `====================================================\n`;
  content += `   KẾ HOẠCH LỊCH TRÌNH DU LỊCH & THỜI TIẾT\n`;
  content += `====================================================\n\n`;
  content += `Điểm đến: ${city.name}\n`;
  content += `Thời tiết dự kiến: ${city.temp}°C - ${city.condition} (Độ ẩm: ${city.humidity})\n`;
  content += `Ngày khởi hành: ${STATE.tripDate ? STATE.tripDate.replace('T', ' ') : 'Chưa định'}\n`;
  content += `Gợi ý chuẩn bị: ${dom.suggestionText.textContent}\n\n`;
  content += `----------------------------------------------------\n`;
  content += `DANH SÁCH ĐỊA ĐIỂM CHI TIẾT:\n`;
  content += `----------------------------------------------------\n`;

  if (STATE.itinerary.length === 0) {
    content += `Chưa có địa điểm nào.\n`;
  } else {
    STATE.itinerary.forEach((p, idx) => {
      content += `${idx + 1}. [${p.visited ? 'x' : ' '}] ${p.name} (${p.time})\n`;
    });
  }

  content += `\nTổng số địa điểm: ${STATE.itinerary.length}\n`;
  content += `Đã hoàn thành: ${STATE.itinerary.filter(p => p.visited).length}\n`;
  content += `\nĐược xuất từ ứng dụng Weather & Travel Planner\n`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Lich-Trinh-Du-Lich-${city.id}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ==========================================
// 5. Countdown Timer
// ==========================================
function updateCountdown() {
  if (!STATE.tripDate) {
    dom.countdownTimer.textContent = '-- : -- : --';
    return;
  }
  const targetTime = new Date(STATE.tripDate).getTime();
  const now = new Date().getTime();
  const diff = targetTime - now;

  if (diff <= 0) {
    dom.countdownTimer.textContent = 'Đã đến giờ khởi hành!';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  dom.countdownTimer.textContent = `${days}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
}

// ==========================================
// 6. Setup Listeners
// ==========================================
function setupListeners() {
  // City change
  dom.citySelect.addEventListener('change', (e) => {
    STATE.selectedCityId = e.target.value;
    saveStorage();
    renderWeather();
  });

  // Trip date change
  dom.tripDateInput.addEventListener('change', (e) => {
    STATE.tripDate = e.target.value;
    saveStorage();
    updateCountdown();
  });

  // Itinerary form submit
  dom.itineraryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = dom.placeName.value.trim();
    const time = dom.placeTime.value.trim();
    if (!name || !time) return;
    addPlace(name, time);
    dom.placeName.value = '';
    dom.placeTime.value = '';
    dom.placeName.focus();
  });

  // Search, filter, sort, page size
  dom.itinerarySearch.addEventListener('input', (e) => {
    STATE.searchKeyword = e.target.value;
    STATE.currentPage = 1;
    renderItineraryUI();
  });

  dom.filterStatus.addEventListener('change', (e) => {
    STATE.filterStatus = e.target.value;
    STATE.currentPage = 1;
    renderItineraryUI();
  });

  dom.sortPlaces.addEventListener('change', (e) => {
    STATE.sortBy = e.target.value;
    renderItineraryUI();
  });

  dom.pageSize.addEventListener('change', (e) => {
    STATE.pageSize = e.target.value === 'all' ? 'all' : parseInt(e.target.value, 10);
    STATE.currentPage = 1;
    renderItineraryUI();
  });

  dom.btnPrevPage.addEventListener('click', () => {
    if (STATE.currentPage > 1) {
      STATE.currentPage--;
      renderItineraryUI();
    }
  });

  dom.btnNextPage.addEventListener('click', () => {
    STATE.currentPage++;
    renderItineraryUI();
  });

  // Export .txt
  dom.btnExport.addEventListener('click', exportToTextFile);
}

// ==========================================
// 7. Init
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  loadStorage();
  initCityOptions();
  renderWeather();
  renderItineraryUI();
  setupListeners();
  updateCountdown();
  setInterval(updateCountdown, 1000);
});
