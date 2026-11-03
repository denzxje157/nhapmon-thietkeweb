/**
 * BAI 4: LUXURY BRAND LANDING PAGE JAVASCRIPT
 * Features:
 * 1. Sticky Header with color shift on scroll
 * 2. Mobile Hamburger menu
 * 3. Intersection Observer API for Scroll Reveal Animation
 * 4. Interactive Showroom Color Switcher
 * 5. Tabs & Accordion for Technical Specs
 * 6. Multi-language (I18n: Tiếng Việt / English)
 * 7. 10-Second Promo Modal (Points 9-10)
 */

// 1. Translations Dictionary (I18n)
const TRANSLATIONS = {
  vi: {
    nav_home: "Trang chủ",
    nav_about: "Về thương hiệu",
    nav_features: "Công nghệ pin",
    nav_gallery: "Showroom",
    nav_specs: "Thông số kỹ thuật",
    nav_models: "Phiên bản",
    nav_contact: "Liên hệ",
    btn_preorder: "Đặt trước ngay",
    hero_badge: "ĐỈNH CAO THIẾT KẾ & CÔNG NGHỆ 2026",
    hero_title: "Tương Lai Di Chuyển Thông Minh Đích Thực",
    hero_slogan: "Đột phá với hệ thống pin trạng thái rắn siêu sạc 15 phút, phạm vi di chuyển 950km và trí tuệ nhân tạo tự hành cấp độ 4 độc quyền.",
    hero_btn_explore: "Khám Phá Ngay",
    hero_btn_specs: "Xem Thông Số",
    about_tag: "TRIẾT LÝ SÁNG TẠO",
    about_title: "Biểu Tượng Của Phong Cách Sống Không Phát Thải",
    about_desc1: "Tại AURA, chúng tôi tái định nghĩa trải nghiệm lái xe bằng sự hòa quyện hoàn hảo giữa nghệ thuật thủ công tinh xảo, vật liệu thân thiện môi trường và sức mạnh điện hóa tiên tiến bậc nhất thế giới.",
    about_desc2: "Mỗi chi tiết trên chiếc AURA Hyper-GT đều được trau chuốt tỉ mỉ từ nhôm tái chế hàng không đến da sinh học cao cấp, đem lại cảm giác sang trọng tột cùng mà vẫn trọn vẹn trách nhiệm với hành tinh.",
    stat_range: "Hành trình 1 lần sạc",
    stat_accel: "Tăng tốc 0 - 100km/h",
    stat_charge: "Sạc siêu tốc 10-80%",
    feat_tag: "CÔNG NGHỆ DẪN ĐẦU",
    feat_title: "Pin Xanh Nguyên Khối & Trí Tuệ Tự Hành AI Cấp Độ 4",
    feat_sub: "Được trang bị chip xử lý thần kinh 1000 TOPS và tế bào pin Solid-State thế hệ mới nhất, AURA tự tin đưa bạn đến mọi đích đến an toàn tuyệt đối.",
    feat_1_title: "Pin Xanh Solid-State 120 kWh",
    feat_1_desc: "Khả năng chống suy giảm tuổi thọ tới 1.000.000 km, loại bỏ hoàn toàn nguy cơ cháy nổ nhờ dung môi điện phân dạng rắn tiên phong.",
    feat_2_title: "AURA Copilot Tự Hành Cấp Độ 4",
    feat_2_desc: "12 cảm biến LiDAR, 16 camera độ phân giải 8K và radar mmWave giúp xe tự hành mượt mà trong mọi điều kiện thời tiết khắc nghiệt.",
    feat_3_title: "Khung Gầm Titanium Siêu Cường",
    feat_3_desc: "Đạt chuẩn an toàn 5 sao Euro NCAP cao nhất, bảo vệ toàn diện khoang cabin trước mọi xung lực va chạm đa hướng.",
    gallery_tag: "SHOWROOM TƯƠNG TÁC",
    gallery_title: "Chiêm Ngưỡng Từng Tông Màu Kiệt Tác",
    gallery_sub: "Lựa chọn màu sắc ngoại thất phản chiếu cá tính quyền uy của chủ nhân.",
    color_picker_label: "Chọn màu sắc ngoại thất:",
    specs_tag: "BẢNG DỮ LIỆU KỸ THUẬT",
    specs_title: "Thông Số Hiệu Năng Vượt Trội",
    tab_power: "Động Cơ & Vận Hành",
    tab_dimension: "Kích Thước & Khung Gầm",
    tab_comfort: "Tiện Nghi & Nội Thất",
    spec_motor_title: "Hệ thống động cơ điện Tri-Motor AWD",
    spec_motor_desc: "Trang bị 3 mô tơ điện nam châm vĩnh cửu độc lập, tổng công suất cực đại 1,020 mã lực, mô-men xoắn tức thời 1,420 Nm giúp xe tăng tốc 0-100km/h chỉ trong 2.4 giây.",
    spec_battery_title: "Hệ thống pin và công nghệ sạc cực nhanh 800V",
    spec_battery_desc: "Kiến trúc điện áp cao 800V Silicon Carbide hỗ trợ công suất sạc DC lên đến 350 kW, nạp đủ 400km hành trình chỉ sau đúng 15 phút cắm sạc.",
    spec_size_title: "Kích thước tổng thể D x R x C",
    spec_size_desc: "4,990 mm x 1,980 mm x 1,420 mm. Chiều dài cơ sở 3,020 mm mang lại không gian để chân rộng rãi cho hàng ghế ông chủ phía sau.",
    spec_suspension_title: "Treo khí nén thích ứng thông minh (Air Suspension)",
    spec_suspension_desc: "Hệ thống camera quét mặt đường trước 15m với tần số 1000 lần/giây để tự động điều chỉnh độ cứng và nâng hạ gầm xe theo từng gờ giảm tốc.",
    spec_sound_title: "Âm thanh vòm Burmester 3D 24 loa",
    spec_sound_desc: "Công suất 1,600W tích hợp công nghệ chống ồn chủ động chủ động qua micro trần xe, mang lại không gian tĩnh lặng như thính phòng nhạc kịch.",
    models_tag: "CÁC PHIÊN BẢN",
    models_title: "Lựa Chọn Phiên Bản Xứng Tầm",
    ver_std: "Tiêu Chuẩn (Standard)",
    ver_std_desc: "Lựa chọn lý tưởng cho việc di chuyển đô thị hiện đại với phạm vi 650km, mâm đúc 20 inch và gói tự hành Autopilot cấp 2.",
    std_feat_1: "Động cơ đơn RWD 350 HP",
    std_feat_2: "Tăng tốc 0-100km/h: 5.2s",
    std_feat_3: "Màn hình giải trí OLED 15.6 inch",
    ribbon_popular: "Bán chạy nhất",
    ver_adv: "Nâng Cao (Advanced)",
    ver_adv_desc: "Sự cân bằng hoàn hảo giữa sức mạnh thể thao dẫn động 4 bánh toàn thời gian AWD và tiện nghi cao cấp vượt trội.",
    adv_feat_1: "Động cơ kép Dual-Motor AWD 680 HP",
    adv_feat_2: "Tăng tốc 0-100km/h: 3.4s",
    adv_feat_3: "Tự hành AURA Copilot cấp 3",
    adv_feat_4: "Treo khí nén thích ứng thông minh",
    ver_lux: "Cao Cấp (Luxury Flagship)",
    ver_lux_desc: "Kiệt tác tối thượng sở hữu 1,020 mã lực, nội thất bọc da Nappa thủ công và trần xe mô phỏng dải ngân hà đầy mê hoặc.",
    lux_feat_1: "Tri-Motor Hyper AWD 1,020 HP",
    lux_feat_2: "Tăng tốc 0-100km/h: 2.4s",
    lux_feat_3: "Tự hành cấp độ 4 hoàn chỉnh",
    lux_feat_4: "Hệ thống âm thanh Burmester 3D 24 loa",
    btn_choose: "Chọn Phiên Bản Này",
    footer_about: "Tiên phong kiến tạo kỷ nguyên di chuyển xanh không khí thải với tinh hoa công nghệ điện hóa và trí tuệ nhân tạo.",
    footer_links_title: "Liên Kết Nhanh",
    footer_contact_title: "Tổng Đài & Showroom",
    promo_title: "Món Quà Tri Ân Khách Hàng Thượng Lưu",
    promo_desc: "Chúc mừng bạn đã dành thời gian khám phá AURA Motors! Nhận ngay mã voucher giảm trực tiếp 10% giá trị gói sạc pin siêu tốc trọn đời khi đặt cọc trong hôm nay:",
    promo_btn: "Áp Dụng Đặt Cọc Ngay"
  },
  en: {
    nav_home: "Home",
    nav_about: "About Brand",
    nav_features: "Battery Tech",
    nav_gallery: "Showroom",
    nav_specs: "Specifications",
    nav_models: "Models",
    nav_contact: "Contact",
    btn_preorder: "Pre-order Now",
    hero_badge: "PEAK LUXURY & INTELLIGENCE 2026",
    hero_title: "The True Future of Smart Mobility",
    hero_slogan: "Breakthrough Solid-State battery with 15-minute ultra-charge, 950km range, and exclusive Level 4 Autonomous AI copilot.",
    hero_btn_explore: "Explore Now",
    hero_btn_specs: "View Specs",
    about_tag: "CREATIVE PHILOSOPHY",
    about_title: "The Symbol of Zero-Emission Luxury",
    about_desc1: "At AURA, we redefine the driving experience through the seamless union of master craftsmanship, eco-friendly materials, and world-leading electric performance.",
    about_desc2: "Every curve of the AURA Hyper-GT is sculpted from aerospace-grade recycled aluminum and bio-engineered leather, delivering ultimate luxury with absolute planetary stewardship.",
    stat_range: "Range on a single charge",
    stat_accel: "0 - 100 km/h acceleration",
    stat_charge: "10-80% Ultra-fast charge",
    feat_tag: "LEAPING INNOVATION",
    feat_title: "Solid-State Green Battery & Level 4 Autonomous AI",
    feat_sub: "Powered by 1000 TOPS neural processors and next-generation Solid-State cells, AURA safely guides you to every destination.",
    feat_1_title: "Solid-State Battery 120 kWh",
    feat_1_desc: "Resistant to degradation up to 1,000,000 km, entirely flame-retardant through cutting-edge solid electrolytes.",
    feat_2_title: "Level 4 AURA Copilot",
    feat_2_desc: "12 LiDAR units, 16 8K cameras, and mmWave radars ensure flawless self-driving in extreme weather.",
    feat_3_title: "Titanium Ultra-Reinforced Chassis",
    feat_3_desc: "Top 5-star Euro NCAP rating, providing unmatched multidirectional collision safety.",
    gallery_tag: "INTERACTIVE SHOWROOM",
    gallery_title: "Admire Masterpiece Exterior Finishes",
    gallery_sub: "Select an exterior shade mirroring your commanding prestige.",
    color_picker_label: "Select exterior color:",
    specs_tag: "TECHNICAL SPECIFICATIONS",
    specs_title: "Exhilarating Benchmark Performance",
    tab_power: "Powertrain & Drive",
    tab_dimension: "Dimensions & Chassis",
    tab_comfort: "Comfort & Interior",
    spec_motor_title: "Tri-Motor AWD Electric Powertrain",
    spec_motor_desc: "Three permanent-magnet electric motors produce an astonishing 1,020 HP and 1,420 Nm torque, launching from 0-100 km/h in just 2.4 seconds.",
    spec_battery_title: "800V Ultra-Fast Architecture & Charging",
    spec_battery_desc: "800V Silicon Carbide architecture accepts 350 kW DC charging, restoring 400km of highway range in just 15 minutes.",
    spec_size_title: "Overall Dimensions L x W x H",
    spec_size_desc: "4,990 mm x 1,980 mm x 1,420 mm with a 3,020 mm wheelbase providing executive legroom.",
    spec_suspension_title: "Predictive Air Suspension",
    spec_suspension_desc: "Road-scanning camera evaluates road surfaces 15m ahead at 1000Hz to dynamically optimize damping.",
    spec_sound_title: "Burmester 3D 24-Speaker Surround Sound",
    spec_sound_desc: "1,600W audiophile output featuring ceiling-mounted active road-noise cancellation mics.",
    models_tag: "EDITIONS & TRIMS",
    models_title: "Select Your Signature Model",
    ver_std: "Standard Edition",
    ver_std_desc: "The pristine electric daily driver offering 650km range, 20-inch alloys, and Level 2 Autopilot.",
    std_feat_1: "Single Motor RWD 350 HP",
    std_feat_2: "0-100 km/h in 5.2s",
    std_feat_3: "15.6-inch OLED Infotainment",
    ribbon_popular: "Most Popular",
    ver_adv: "Advanced Edition",
    ver_adv_desc: "The pinnacle balance of dual-motor AWD performance and enhanced executive comfort amenities.",
    adv_feat_1: "Dual-Motor AWD 680 HP",
    adv_feat_2: "0-100 km/h in 3.4s",
    adv_feat_3: "Level 3 AURA Copilot",
    adv_feat_4: "Predictive Adaptive Air Suspension",
    ver_lux: "Luxury Flagship Edition",
    ver_lux_desc: "Ultimate automotive supremacy packing 1,020 HP, hand-stitched Nappa leather, and Starlight canopy.",
    lux_feat_1: "Tri-Motor Hyper AWD 1,020 HP",
    lux_feat_2: "0-100 km/h in 2.4s",
    lux_feat_3: "Full Level 4 Autonomous Suite",
    lux_feat_4: "Burmester 3D 24-Speaker Surround System",
    btn_choose: "Select This Model",
    footer_about: "Pioneering the zero-emission era with the culmination of electrification and artificial intelligence.",
    footer_links_title: "Quick Links",
    footer_contact_title: "Flagship Showrooms",
    promo_title: "An Exclusive Courtesy for Discerning Guests",
    promo_desc: "Thank you for exploring AURA Motors. Receive an exclusive 10% voucher for lifetime ultra-fast charging when reserving today:",
    promo_btn: "Claim & Reserve Now"
  }
};

let currentLang = 'vi';

// 2. DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const btnLang = document.getElementById('btnLang');
const currentLangLabel = document.getElementById('currentLangLabel');
const carRender = document.getElementById('carRender');
const carColorName = document.getElementById('carColorName');
const colorDots = document.querySelectorAll('.color-dot');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-content-panel');
const accordionHeaders = document.querySelectorAll('.accordion-header');
const promoModal = document.getElementById('promoModal');
const btnClosePromo = document.getElementById('btnClosePromo');
const btnCopyPromo = document.getElementById('btnCopyPromo');
const promoCodeText = document.getElementById('promoCodeText');
const btnClaimPromo = document.getElementById('btnClaimPromo');

// ==========================================
// 1. Sticky Header
// ==========================================
function handleScrollNavbar() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// ==========================================
// 2. Intersection Observer (Scroll Reveal)
// ==========================================
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  elements.forEach(el => observer.observe(el));
}

// ==========================================
// 3. Interactive Showroom Color Switcher
// ==========================================
const COLOR_NAMES = {
  vi: {
    gold: "Imperial Gold (Vàng Hoàng Gia)",
    black: "Onyx Black (Đen Huyền Bí)",
    white: "Pearl White (Trắng Ngọc Trai)",
    crimson: "Crimson Red (Đỏ Rực Rỡ)"
  },
  en: {
    gold: "Imperial Gold",
    black: "Onyx Black",
    white: "Pearl White",
    crimson: "Crimson Red"
  }
};

function setupColorSwitcher() {
  colorDots.forEach(dot => {
    dot.addEventListener('click', () => {
      colorDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');

      const colorKey = dot.dataset.color;
      carRender.className = `car-render car-color-${colorKey}`;
      carColorName.textContent = COLOR_NAMES[currentLang][colorKey];
    });
  });
}

// ==========================================
// 4. Tabs & Accordion
// ==========================================
function setupTabsAndAccordion() {
  // Tabs
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.dataset.tab;
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // Accordion inside panels
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const parentItem = header.parentElement;
      parentItem.classList.toggle('open');
    });
  });
}

// ==========================================
// 5. Multi-Language Switcher (I18n)
// ==========================================
function setLanguage(lang) {
  currentLang = lang;
  document.body.setAttribute('data-lang', lang);
  currentLangLabel.textContent = lang.toUpperCase();

  const dict = TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update current active color name
  const activeDot = document.querySelector('.color-dot.active');
  if (activeDot) {
    const colorKey = activeDot.dataset.color;
    carColorName.textContent = COLOR_NAMES[lang][colorKey];
  }

  localStorage.setItem('aura_lang', lang);
}

function toggleLanguage() {
  const newLang = currentLang === 'vi' ? 'en' : 'vi';
  setLanguage(newLang);
}

// ==========================================
// 6. 10-Second Promo Modal
// ==========================================
function initPromoModal() {
  // Hiển thị sau 10 giây (10000ms)
  setTimeout(() => {
    const hasSeen = sessionStorage.getItem('aura_promo_seen');
    if (!hasSeen) {
      promoModal.classList.add('active');
      sessionStorage.setItem('aura_promo_seen', 'true');
    }
  }, 10000);

  btnClosePromo.addEventListener('click', () => {
    promoModal.classList.remove('active');
  });

  btnCopyPromo.addEventListener('click', () => {
    navigator.clipboard.writeText(promoCodeText.textContent).then(() => {
      btnCopyPromo.innerHTML = '<i class="fa-solid fa-check"></i> Đã chép!';
      setTimeout(() => {
        btnCopyPromo.innerHTML = '<i class="fa-regular fa-copy"></i> Sao chép';
      }, 2000);
    });
  });

  btnClaimPromo.addEventListener('click', () => {
    promoModal.classList.remove('active');
    document.getElementById('models').scrollIntoView({ behavior: 'smooth' });
  });
}

// ==========================================
// 7. General Setup & Mobile Menu
// ==========================================
function setupGeneral() {
  window.addEventListener('scroll', handleScrollNavbar);

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Close nav on click link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  btnLang.addEventListener('click', toggleLanguage);

  // Model selection buttons
  document.querySelectorAll('.btn-select-model').forEach(btn => {
    btn.addEventListener('click', () => {
      const model = btn.dataset.model;
      alert(`Cảm ơn quý khách đã quan tâm phiên bản AURA ${model}! Nhân viên chăm sóc VIP sẽ liên hệ trong ít phút.`);
    });
  });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('aura_lang') || 'vi';
  setLanguage(savedLang);

  setupGeneral();
  initScrollReveal();
  setupColorSwitcher();
  setupTabsAndAccordion();
  initPromoModal();
  handleScrollNavbar();
});
