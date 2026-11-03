/**
 * BAI 1: PERSONALIZED AI DASHBOARD
 * Core logic: DOM, Events, LocalStorage, Search, Filter, Sort, Pagination, Clock, Dark Mode
 */

// State Management
const STATE = {
  tasks: [],
  filterStatus: 'all', // all | pending | completed
  filterPriority: 'all', // all | high | medium | low
  searchKeyword: '',
  sortBy: 'date-desc',
  pageSize: 10,
  currentPage: 1,
  darkMode: true
};

const STORAGE_KEYS = {
  TASKS: 'ai_dashboard_tasks',
  THEME: 'ai_dashboard_theme'
};

// DOM Selectors
const elements = {
  clockDisplay: document.getElementById('clockDisplay').querySelector('span'),
  themeToggle: document.getElementById('themeToggle'),
  sidebarToggle: document.getElementById('sidebarToggle'),
  sidebar: document.getElementById('sidebar'),
  searchInput: document.getElementById('searchInput'),
  taskForm: document.getElementById('taskForm'),
  taskTitle: document.getElementById('taskTitle'),
  taskPriority: document.getElementById('taskPriority'),
  taskList: document.getElementById('taskList'),
  emptyState: document.getElementById('emptyState'),
  sortBy: document.getElementById('sortBy'),
  pageSize: document.getElementById('pageSize'),
  pageInfo: document.getElementById('pageInfo'),
  btnPrevPage: document.getElementById('btnPrevPage'),
  btnNextPage: document.getElementById('btnNextPage'),
  totalTaskCount: document.getElementById('totalTaskCount'),
  completedTaskCount: document.getElementById('completedTaskCount'),
  completionRate: document.getElementById('completionRate'),
  countAll: document.getElementById('countAll'),
  countPending: document.getElementById('countPending'),
  countCompleted: document.getElementById('countCompleted'),
  countHigh: document.getElementById('countHigh'),
  countMedium: document.getElementById('countMedium'),
  countLow: document.getElementById('countLow'),
  navItems: document.querySelectorAll('.sidebar-nav .nav-item')
};

// ==========================================
// 1. Clock & Real-time Greeting
// ==========================================
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  elements.clockDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

// ==========================================
// 2. Storage Helpers
// ==========================================
function loadStorage() {
  try {
    const savedTasks = localStorage.getItem(STORAGE_KEYS.TASKS);
    if (savedTasks) {
      STATE.tasks = JSON.parse(savedTasks);
    } else {
      // Dữ liệu mẫu ban đầu
      STATE.tasks = [
        { id: 1, title: 'Chuẩn bị slide thuyết trình đồ án Web', priority: 'high', completed: false, createdAt: Date.now() - 3600000 },
        { id: 2, title: 'Ôn tập cú pháp JavaScript DOM & Event', priority: 'medium', completed: true, createdAt: Date.now() - 7200000 },
        { id: 3, title: 'Hoàn thiện giao diện Glassmorphism buổi 10', priority: 'high', completed: false, createdAt: Date.now() - 1800000 },
        { id: 4, title: 'Đọc tài liệu về CSS Grid và Flexbox', priority: 'low', completed: true, createdAt: Date.now() - 10800000 }
      ];
      saveStorage();
    }

    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    if (savedTheme === 'light') {
      STATE.darkMode = false;
      document.body.classList.add('light-theme');
      elements.themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      STATE.darkMode = true;
      document.body.classList.remove('light-theme');
      elements.themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  } catch (e) {
    console.error('Lỗi khi đọc LocalStorage:', e);
  }
}

function saveStorage() {
  try {
    localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(STATE.tasks));
  } catch (e) {
    console.error('Lỗi khi lưu LocalStorage:', e);
  }
}

// ==========================================
// 3. Task Management (Add, Toggle, Delete)
// ==========================================
function addTask(title, priority) {
  const newTask = {
    id: Date.now(),
    title: title.trim(),
    priority: priority,
    completed: false,
    createdAt: Date.now()
  };
  STATE.tasks.unshift(newTask);
  saveStorage();
  renderUI();
}

function toggleTask(id) {
  const task = STATE.tasks.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
    saveStorage();
    renderUI();
  }
}

function deleteTask(id, element) {
  element.classList.add('fade-out');
  setTimeout(() => {
    STATE.tasks = STATE.tasks.filter(t => t.id !== id);
    saveStorage();
    renderUI();
  }, 300);
}

// ==========================================
// 4. Filtering, Sorting & Pagination Logic
// ==========================================
function getProcessedTasks() {
  let list = [...STATE.tasks];

  // 1. Search
  if (STATE.searchKeyword.trim() !== '') {
    const kw = STATE.searchKeyword.trim().toLowerCase();
    list = list.filter(t => t.title.toLowerCase().includes(kw));
  }

  // 2. Filter Status
  if (STATE.filterStatus === 'pending') {
    list = list.filter(t => !t.completed);
  } else if (STATE.filterStatus === 'completed') {
    list = list.filter(t => t.completed);
  }

  // 3. Filter Priority
  if (STATE.filterPriority !== 'all') {
    list = list.filter(t => t.priority === STATE.filterPriority);
  }

  // 4. Sort
  list.sort((a, b) => {
    switch (STATE.sortBy) {
      case 'date-asc': return a.createdAt - b.createdAt;
      case 'title-asc': return a.title.localeCompare(b.title, 'vi');
      case 'title-desc': return b.title.localeCompare(a.title, 'vi');
      case 'priority-desc': {
        const order = { high: 3, medium: 2, low: 1 };
        return order[b.priority] - order[a.priority];
      }
      case 'date-desc':
      default:
        return b.createdAt - a.createdAt;
    }
  });

  return list;
}

// ==========================================
// 5. Render UI
// ==========================================
function renderUI() {
  // Update Counts
  const total = STATE.tasks.length;
  const completed = STATE.tasks.filter(t => t.completed).length;
  const pending = total - completed;
  const high = STATE.tasks.filter(t => t.priority === 'high').length;
  const medium = STATE.tasks.filter(t => t.priority === 'medium').length;
  const low = STATE.tasks.filter(t => t.priority === 'low').length;

  elements.countAll.textContent = total;
  elements.countPending.textContent = pending;
  elements.countCompleted.textContent = completed;
  elements.countHigh.textContent = high;
  elements.countMedium.textContent = medium;
  elements.countLow.textContent = low;

  elements.totalTaskCount.textContent = total;
  elements.completedTaskCount.textContent = completed;

  const rate = total > 0 ? Math.round((completed / total) * 100) : 0;
  elements.completionRate.textContent = `${rate}%`;

  // Filtered & Paginated items
  const processed = getProcessedTasks();
  const totalItems = processed.length;
  const pageSize = STATE.pageSize === 'all' ? totalItems : parseInt(STATE.pageSize, 10);
  const totalPages = pageSize > 0 ? Math.ceil(totalItems / pageSize) || 1 : 1;

  if (STATE.currentPage > totalPages) {
    STATE.currentPage = totalPages;
  }
  if (STATE.currentPage < 1) {
    STATE.currentPage = 1;
  }

  const startIndex = (STATE.currentPage - 1) * (pageSize || 1);
  const pageTasks = STATE.pageSize === 'all' ? processed : processed.slice(startIndex, startIndex + pageSize);

  // Render Task Items
  elements.taskList.innerHTML = '';
  if (pageTasks.length === 0) {
    elements.emptyState.style.display = 'block';
  } else {
    elements.emptyState.style.display = 'none';
    pageTasks.forEach(task => {
      const li = document.createElement('li');
      li.className = `task-item priority-${task.priority} ${task.completed ? 'completed' : ''}`;
      li.dataset.id = task.id;

      const priorityLabel = task.priority === 'high' ? 'Quan trọng' : (task.priority === 'medium' ? 'Bình thường' : 'Thấp');

      li.innerHTML = `
        <div class="task-content">
          <div class="task-checkbox">
            <i class="fa-solid fa-check"></i>
          </div>
          <span class="task-text">${escapeHtml(task.title)}</span>
        </div>
        <div class="task-actions">
          <span class="priority-pill ${task.priority}">${priorityLabel}</span>
          <button class="btn-delete" title="Xóa công việc">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `;

      // Event Click toggle
      li.querySelector('.task-content').addEventListener('click', () => {
        toggleTask(task.id);
      });

      // Event Click delete
      li.querySelector('.btn-delete').addEventListener('click', (e) => {
        e.stopPropagation();
        deleteTask(task.id, li);
      });

      elements.taskList.appendChild(li);
    });
  }

  // Update Pagination Controls
  elements.pageInfo.textContent = `Trang ${STATE.currentPage} / ${totalPages} (${totalItems} mục)`;
  elements.btnPrevPage.disabled = STATE.currentPage <= 1;
  elements.btnNextPage.disabled = STATE.currentPage >= totalPages;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ==========================================
// 6. Event Listeners
// ==========================================
function setupEventListeners() {
  // Add task submit
  elements.taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = elements.taskTitle.value.trim();
    if (!title) {
      alert('Vui lòng nhập nội dung công việc!');
      elements.taskTitle.focus();
      return;
    }
    const priority = elements.taskPriority.value;
    addTask(title, priority);
    elements.taskTitle.value = '';
  });

  // Search input
  elements.searchInput.addEventListener('input', (e) => {
    STATE.searchKeyword = e.target.value;
    STATE.currentPage = 1;
    renderUI();
  });

  // Sort & PageSize change
  elements.sortBy.addEventListener('change', (e) => {
    STATE.sortBy = e.target.value;
    renderUI();
  });

  elements.pageSize.addEventListener('change', (e) => {
    STATE.pageSize = e.target.value === 'all' ? 'all' : parseInt(e.target.value, 10);
    STATE.currentPage = 1;
    renderUI();
  });

  // Pagination buttons
  elements.btnPrevPage.addEventListener('click', () => {
    if (STATE.currentPage > 1) {
      STATE.currentPage--;
      renderUI();
    }
  });

  elements.btnNextPage.addEventListener('click', () => {
    STATE.currentPage++;
    renderUI();
  });

  // Sidebar navigation filter
  elements.navItems.forEach(item => {
    item.addEventListener('click', () => {
      elements.navItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');

      if (item.dataset.filter) {
        STATE.filterStatus = item.dataset.filter;
        STATE.filterPriority = 'all';
      } else if (item.dataset.priority) {
        STATE.filterPriority = item.dataset.priority;
        STATE.filterStatus = 'all';
      }
      STATE.currentPage = 1;
      renderUI();
    });
  });

  // Theme toggle
  elements.themeToggle.addEventListener('click', () => {
    STATE.darkMode = !STATE.darkMode;
    if (STATE.darkMode) {
      document.body.classList.remove('light-theme');
      elements.themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
      localStorage.setItem(STORAGE_KEYS.THEME, 'dark');
    } else {
      document.body.classList.add('light-theme');
      elements.themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
      localStorage.setItem(STORAGE_KEYS.THEME, 'light');
    }
  });

  // Sidebar Mobile Toggle
  elements.sidebarToggle.addEventListener('click', () => {
    elements.sidebar.classList.toggle('active');
  });

  // Close sidebar on click outside (mobile)
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 992) {
      if (!elements.sidebar.contains(e.target) && !elements.sidebarToggle.contains(e.target)) {
        elements.sidebar.classList.remove('active');
      }
    }
  });
}

// ==========================================
// 7. Initialization
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  updateClock();
  setInterval(updateClock, 1000);
  loadStorage();
  setupEventListeners();
  renderUI();
});
