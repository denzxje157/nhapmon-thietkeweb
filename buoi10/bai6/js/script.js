/**
 * BAI 6: INTERACTIVE IMMERSIVE EXPERIENCE - JAVASCRIPT
 * Key Features:
 * 1. Custom Cursor with Smooth Lag & 4 Meteor Trails (LERP interpolation)
 * 2. 60 FPS requestAnimationFrame loop with FPS counter monitor
 * 3. Magnetic Interaction (buttons pull towards cursor within 100px)
 * 4. Scroll Parallax (background translateY at 0.5x scroll speed)
 * 5. Typewriter Effect & Scroll Reveal Quotes
 * 6. Smooth Navigation by JavaScript
 * 7. prefers-reduced-motion / Low-Motion Mode toggle
 * 8. Touch Screen Fallback Detection
 */

// Math Linear Interpolation Helper: LERP
function lerp(start, end, factor) {
  return start + (end - start) * factor;
}

// State
const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const cursor = { x: mouse.x, y: mouse.y };
const trails = [
  { x: mouse.x, y: mouse.y, factor: 0.25 },
  { x: mouse.x, y: mouse.y, factor: 0.18 },
  { x: mouse.x, y: mouse.y, factor: 0.12 },
  { x: mouse.x, y: mouse.y, factor: 0.08 }
];

let isLowMotion = false;
let isTouchDevice = false;

// DOM Elements
const cursorDot = document.getElementById('cursorDot');
const cursorCircle = document.getElementById('cursorCircle');
const trailElems = [
  document.getElementById('trail1'),
  document.getElementById('trail2'),
  document.getElementById('trail3'),
  document.getElementById('trail4')
];
const fpsDisplay = document.getElementById('fpsDisplay');
const btnMotionToggle = document.getElementById('btnMotionToggle');
const motionLabel = document.getElementById('motionLabel');
const parallaxLayer = document.getElementById('parallaxLayer');
const typewriterElem = document.getElementById('typewriterText');
const magneticBtns = document.querySelectorAll('.magnetic-btn');

// ==========================================
// 1. Touch & Reduced Motion Detection
// ==========================================
function checkDeviceCapabilities() {
  // Check touch
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    isTouchDevice = true;
    document.body.classList.add('touch-device');
  }

  // Check OS reduced motion setting
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    enableLowMotion(true);
  }
}

function enableLowMotion(enable) {
  isLowMotion = enable;
  if (isLowMotion) {
    document.body.classList.add('low-motion');
    motionLabel.textContent = 'Low Motion';
  } else {
    document.body.classList.remove('low-motion');
    motionLabel.textContent = 'Full Motion';
  }
}

// ==========================================
// 2. Custom Cursor & Meteor Trails Loop (60 FPS)
// ==========================================
let lastTime = performance.now();
let frameCount = 0;
let lastFpsUpdate = performance.now();

function animateCursor(now) {
  // FPS calculation
  frameCount++;
  if (now - lastFpsUpdate >= 500) {
    const fps = Math.round((frameCount * 1000) / (now - lastFpsUpdate));
    fpsDisplay.innerHTML = `<i class="fa-solid fa-bolt"></i> ${fps} FPS`;
    frameCount = 0;
    lastFpsUpdate = now;
  }

  if (!isTouchDevice && !isLowMotion) {
    // Lead cursor interpolation
    cursor.x = lerp(cursor.x, mouse.x, 0.2);
    cursor.y = lerp(cursor.y, mouse.y, 0.2);

    cursorDot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`;
    cursorCircle.style.transform = `translate3d(${cursor.x}px, ${cursor.y}px, 0) translate(-50%, -50%)`;

    // Trails interpolation
    trails.forEach((trail, index) => {
      trail.x = lerp(trail.x, cursor.x, trail.factor);
      trail.y = lerp(trail.y, cursor.y, trail.factor);
      if (trailElems[index]) {
        trailElems[index].style.transform = `translate3d(${trail.x}px, ${trail.y}px, 0) translate(-50%, -50%)`;
      }
    });
  }

  // Animate magnetic buttons towards cursor
  updateMagneticButtons();

  requestAnimationFrame(animateCursor);
}

// Listen to mousemove
window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// Cursor hover scale on links and buttons
document.querySelectorAll('a, button, .quote-card').forEach(el => {
  el.addEventListener('mouseenter', () => cursorCircle.classList.add('hover-link'));
  el.addEventListener('mouseleave', () => cursorCircle.classList.remove('hover-link'));
});

// ==========================================
// 3. Magnetic Interaction with Buttons (Within 100px)
// ==========================================
const magneticData = new Map();

magneticBtns.forEach(btn => {
  magneticData.set(btn, { currentX: 0, currentY: 0, targetX: 0, targetY: 0 });

  btn.addEventListener('mousemove', (e) => {
    if (isLowMotion || isTouchDevice) return;
    const rect = btn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    const data = magneticData.get(btn);
    // Move up to 35% towards cursor
    data.targetX = deltaX * 0.35;
    data.targetY = deltaY * 0.35;
  });

  btn.addEventListener('mouseleave', () => {
    const data = magneticData.get(btn);
    data.targetX = 0;
    data.targetY = 0;
  });
});

function updateMagneticButtons() {
  if (isLowMotion || isTouchDevice) return;

  magneticBtns.forEach(btn => {
    const rect = btn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.hypot(mouse.x - centerX, mouse.y - centerY);

    const data = magneticData.get(btn);

    // If mouse is within 100px distance, pull lightly
    if (distance < 100 && !btn.matches(':hover')) {
      const deltaX = mouse.x - centerX;
      const deltaY = mouse.y - centerY;
      data.targetX = deltaX * 0.2;
      data.targetY = deltaY * 0.2;
    } else if (distance >= 100 && !btn.matches(':hover')) {
      data.targetX = 0;
      data.targetY = 0;
    }

    data.currentX = lerp(data.currentX, data.targetX, 0.15);
    data.currentY = lerp(data.currentY, data.targetY, 0.15);

    btn.style.transform = `translate3d(${data.currentX}px, ${data.currentY}px, 0)`;
  });
}

// ==========================================
// 4. Parallax Scroll Effect (0.5x speed)
// ==========================================
function handleScrollParallax() {
  if (isLowMotion) return;
  const scrollY = window.scrollY;
  if (parallaxLayer && scrollY < window.innerHeight) {
    parallaxLayer.style.transform = `translate3d(0, ${scrollY * 0.5}px, 0)`;
  }
}

window.addEventListener('scroll', handleScrollParallax, { passive: true });

// ==========================================
// 5. Typewriter Effect
// ==========================================
const typewriterPhrases = [
  "Nơi ranh giới giữa mỹ thuật kỹ thuật số và mã nguồn hòa quyện làm một.",
  "Tối ưu hóa hiệu năng GPU từng khung hình với requestAnimationFrame mượt mà 60 FPS.",
  "Trải nghiệm tương tác xúc giác thông minh trên mọi thiết bị và màn hình cảm ứng."
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentPhrase = typewriterPhrases[phraseIndex];

  if (isDeleting) {
    typewriterElem.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterElem.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  let typingSpeed = isDeleting ? 30 : 60;

  if (!isDeleting && charIndex === currentPhrase.length) {
    typingSpeed = 2000; // Pause at end
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % typewriterPhrases.length;
    typingSpeed = 500;
  }

  setTimeout(typeWriter, typingSpeed);
}

// ==========================================
// 6. Scroll Reveal Quotes (Intersection Observer)
// ==========================================
function initScrollReveal() {
  const cards = document.querySelectorAll('.reveal-card');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  cards.forEach(card => observer.observe(card));
}

// ==========================================
// 7. Smooth Navigation
// ==========================================
function initSmoothNav() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        targetElem.scrollIntoView({ behavior: 'smooth' });
      }

      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
}

// ==========================================
// 8. Init & Event Listeners
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  checkDeviceCapabilities();
  requestAnimationFrame(animateCursor);
  typeWriter();
  initScrollReveal();
  initSmoothNav();

  // Toggle Low-Motion Mode
  btnMotionToggle.addEventListener('click', () => {
    enableLowMotion(!isLowMotion);
  });
});
