/**
 * BAI 5: DYNAMIC THEME ENGINE & BRAND SHOWCASE
 * Features:
 * 1. 3 Brand Themes: Eco Green, Luxury Gold, Cyberpunk Pink
 * 2. Dark / Light Mode Toggle
 * 3. Dynamic content, icon, and banner imagery synchronization
 * 4. Custom Color Picker applying directly to --primary-color CSS variable
 * 5. Window matchMedia system dark mode auto-detection
 * 6. LocalStorage persistence (Theme, Mode, Custom Color)
 * 7. Live CSS Variables inspector sync
 */

// Content Data Sets according to Prompt Requirements
const THEME_DATA = {
  eco: {
    brandName: "TERRA ECO",
    brandIcon: "fa-solid fa-leaf",
    bannerIcon: "fa-solid fa-seedling",
    bannerCaption: "Hệ sinh thái tuần hoàn & Sống xanh Organic",
    chip: "BẢO VỆ MÔI TRƯỜNG & SỐNG XANH",
    headline: "Kiến Tạo Tương Lai Bền Vững Cùng Thiên Nhiên",
    subtext: "Chung tay bảo vệ hệ sinh thái toàn cầu bằng những giải pháp năng lượng tái tạo và vật liệu sinh học tuần hoàn, hướng đến hành tinh xanh không rác thải.",
    btnPrimary: "Tham Gia Sống Xanh",
    btnSecondary: "Tìm Hiểu Dự Án",
    defaultPrimaryLight: "#10b981",
    defaultPrimaryDark: "#34d399",
    fontName: "Quicksand",
    fontFamily: "'Quicksand', sans-serif"
  },
  luxury: {
    brandName: "AURA MAJESTY",
    brandIcon: "fa-solid fa-crown",
    bannerIcon: "fa-solid fa-gem",
    bannerCaption: "Đỉnh cao trang sức & Phong cách Thượng lưu",
    chip: "ĐẲNG CẤP, TINH TẾ & GIỚI HẠN",
    headline: "Đặc Quyền Thượng Lưu Vượt Mọi Giới Hạn Thời Gian",
    subtext: "Từng đường nét thủ công độc bản được chế tác bởi những nghệ nhân bậc thầy, mang lại vẻ đẹp quyền quý trường tồn cùng năm tháng.",
    btnPrimary: "Bộ Sưu Tập Giới Hạn",
    btnSecondary: "Đặt Lịch Thưởng Lãm",
    defaultPrimaryLight: "#b45309",
    defaultPrimaryDark: "#fbbf24",
    fontName: "Cinzel",
    fontFamily: "'Cinzel', serif"
  },
  cyberpunk: {
    brandName: "NEO CYBER 2077",
    brandIcon: "fa-solid fa-microchip",
    bannerIcon: "fa-solid fa-vr-cardboard",
    bannerCaption: "Đô thị tương lai & Trí tuệ nhân tạo đột phá",
    chip: "TƯƠNG LAI, CÔNG NGHỆ CAO & ĐỘT PHÁ",
    headline: "Bứt Phá Thực Tại Số Với Kỷ Nguyên Tự Hướng",
    subtext: "Hòa mình vào không gian thực tế ảo tăng cường, nơi ranh giới giữa thế giới vật lý và thế giới số hoàn toàn tan biến bằng trí tuệ nhân tạo.",
    btnPrimary: "Khai Phá Metaverse",
    btnSecondary: "Giao Thức Mạng",
    defaultPrimaryLight: "#ec4899",
    defaultPrimaryDark: "#f43f5e",
    fontName: "Orbitron",
    fontFamily: "'Orbitron', monospace"
  }
};

// Storage Keys
const STORAGE = {
  THEME: 'theme_brand_name',
  MODE: 'theme_color_mode',
  CUSTOM_COLOR: 'theme_custom_color'
};

// State
const STATE = {
  theme: 'eco', // eco | luxury | cyberpunk
  isDark: false,
  customColor: null
};

// DOM References
const dom = {
  themeToolbar: document.getElementById('themeToolbar'),
  btnCollapseToolbar: document.getElementById('btnCollapseToolbar'),
  btnModeToggle: document.getElementById('btnModeToggle'),
  modeText: document.getElementById('modeText'),
  themeButtons: document.querySelectorAll('.btn-theme-select'),
  customColorPicker: document.getElementById('customColorPicker'),
  colorHexLabel: document.getElementById('colorHexLabel'),
  btnResetColor: document.getElementById('btnResetColor'),
  // Dynamic Content
  brandTitle: document.getElementById('brandTitle'),
  brandIcon: document.getElementById('brandIcon'),
  bannerGraphicIcon: document.getElementById('bannerGraphicIcon'),
  bannerCaption: document.getElementById('bannerCaption'),
  heroChip: document.getElementById('heroChip'),
  heroHeadline: document.getElementById('heroHeadline'),
  heroSubtext: document.getElementById('heroSubtext'),
  heroPrimaryBtn: document.getElementById('heroPrimaryBtn'),
  heroSecondaryBtn: document.getElementById('heroSecondaryBtn'),
  headerCtaBtn: document.getElementById('headerCtaBtn'),
  // Inspector
  samplePrimary: document.getElementById('samplePrimary'),
  sampleBg: document.getElementById('sampleBg'),
  sampleText: document.getElementById('sampleText'),
  sampleFont: document.getElementById('sampleFont'),
  valPrimary: document.getElementById('valPrimary'),
  valBg: document.getElementById('valBg'),
  valText: document.getElementById('valText'),
  valFont: document.getElementById('valFont')
};

// ==========================================
// 1. Theme & Mode Application
// ==========================================
function applyTheme() {
  const t = THEME_DATA[STATE.theme];

  // Update Body Classes
  document.body.className = `theme-${STATE.theme} ${STATE.isDark ? 'dark-mode' : 'light-mode'}`;

  // Mode button text & icon
  if (STATE.isDark) {
    dom.btnModeToggle.innerHTML = `
      <span class="mode-icon"><i class="fa-solid fa-moon"></i></span>
      <span class="mode-text">Dark Mode</span>
    `;
  } else {
    dom.btnModeToggle.innerHTML = `
      <span class="mode-icon"><i class="fa-solid fa-sun"></i></span>
      <span class="mode-text">Light Mode</span>
    `;
  }

  // Active button
  dom.themeButtons.forEach(btn => {
    if (btn.dataset.theme === STATE.theme) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Synchronize Content
  dom.brandTitle.textContent = t.brandName;
  dom.brandIcon.className = `brand-dynamic-icon ${t.brandIcon}`;
  dom.bannerGraphicIcon.innerHTML = `<i class="${t.bannerIcon}"></i>`;
  dom.bannerCaption.textContent = t.bannerCaption;
  dom.heroChip.textContent = t.chip;
  dom.heroHeadline.textContent = t.headline;
  dom.heroSubtext.textContent = t.subtext;
  dom.heroPrimaryBtn.innerHTML = `<i class="fa-solid fa-arrow-right"></i> ${t.btnPrimary}`;
  dom.heroSecondaryBtn.innerHTML = `<i class="fa-regular fa-compass"></i> ${t.btnSecondary}`;
  dom.headerCtaBtn.textContent = t.btnPrimary;

  // Custom Color Override or Theme Default
  if (STATE.customColor) {
    document.documentElement.style.setProperty('--primary-color', STATE.customColor);
    document.documentElement.style.setProperty('--primary-glow', hexToRgba(STATE.customColor, 0.35));
    dom.customColorPicker.value = STATE.customColor;
    dom.colorHexLabel.textContent = STATE.customColor;
  } else {
    document.documentElement.style.removeProperty('--primary-color');
    document.documentElement.style.removeProperty('--primary-glow');
    const defaultColor = STATE.isDark ? t.defaultPrimaryDark : t.defaultPrimaryLight;
    dom.customColorPicker.value = defaultColor;
    dom.colorHexLabel.textContent = defaultColor;
  }

  // Update Inspector
  setTimeout(updateInspector, 50);

  // Save Storage
  saveStorage();
}

function hexToRgba(hex, alpha) {
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const num = parseInt(c, 16);
  return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}, ${alpha})`;
}

// ==========================================
// 2. CSS Variables Inspector Update
// ==========================================
function updateInspector() {
  const styles = getComputedStyle(document.body);
  const primary = styles.getPropertyValue('--primary-color').trim();
  const bg = styles.getPropertyValue('--bg-color').trim();
  const text = styles.getPropertyValue('--text-color').trim();
  const font = styles.getPropertyValue('--font-main').trim();

  dom.valPrimary.textContent = primary;
  dom.samplePrimary.style.backgroundColor = primary;

  dom.valBg.textContent = bg;
  dom.sampleBg.style.backgroundColor = bg;

  dom.valText.textContent = text;
  dom.sampleText.style.backgroundColor = text;

  dom.valFont.textContent = font;
  dom.sampleFont.style.fontFamily = font;
  dom.sampleFont.textContent = THEME_DATA[STATE.theme].fontName;
}

// ==========================================
// 3. Storage Helpers
// ==========================================
function loadStorage() {
  try {
    const savedTheme = localStorage.getItem(STORAGE.THEME);
    if (savedTheme && THEME_DATA[savedTheme]) {
      STATE.theme = savedTheme;
    }

    const savedMode = localStorage.getItem(STORAGE.MODE);
    if (savedMode !== null) {
      STATE.isDark = savedMode === 'dark';
    } else {
      // Auto match system preference (matchMedia)
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        STATE.isDark = true;
      } else {
        STATE.isDark = false;
      }
    }

    const savedColor = localStorage.getItem(STORAGE.CUSTOM_COLOR);
    if (savedColor) {
      STATE.customColor = savedColor;
    }
  } catch (e) {
    console.error('Storage error:', e);
  }
}

function saveStorage() {
  try {
    localStorage.setItem(STORAGE.THEME, STATE.theme);
    localStorage.setItem(STORAGE.MODE, STATE.isDark ? 'dark' : 'light');
    if (STATE.customColor) {
      localStorage.setItem(STORAGE.CUSTOM_COLOR, STATE.customColor);
    } else {
      localStorage.removeItem(STORAGE.CUSTOM_COLOR);
    }
  } catch (e) {
    console.error('Save storage error:', e);
  }
}

// ==========================================
// 4. Setup Listeners
// ==========================================
function setupListeners() {
  // Toggle Dark/Light Mode
  dom.btnModeToggle.addEventListener('click', () => {
    STATE.isDark = !STATE.isDark;
    applyTheme();
  });

  // Switch Theme
  dom.themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      STATE.theme = btn.dataset.theme;
      applyTheme();
    });
  });

  // Custom Color Picker input
  dom.customColorPicker.addEventListener('input', (e) => {
    const color = e.target.value;
    STATE.customColor = color;
    dom.colorHexLabel.textContent = color;
    document.documentElement.style.setProperty('--primary-color', color);
    document.documentElement.style.setProperty('--primary-glow', hexToRgba(color, 0.35));
    saveStorage();
    updateInspector();
  });

  // Reset Color
  dom.btnResetColor.addEventListener('click', () => {
    STATE.customColor = null;
    saveStorage();
    applyTheme();
  });

  // Collapse Toolbar
  dom.btnCollapseToolbar.addEventListener('click', () => {
    dom.themeToolbar.classList.toggle('collapsed');
  });

  // Listen to OS Dark Mode Change in real-time
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      // Chỉ cập nhật nếu người dùng chưa chủ động lưu cấu hình
      if (!localStorage.getItem(STORAGE.MODE)) {
        STATE.isDark = e.matches;
        applyTheme();
      }
    });
  }
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  loadStorage();
  setupListeners();
  applyTheme();
});
