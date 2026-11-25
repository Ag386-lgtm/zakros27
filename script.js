/* =====================================================
   مُشغّل الموقع — يربط القائمة الجانبية بالمحتوى
   ===================================================== */

const sidebar    = document.getElementById('sidebar');
const content    = document.getElementById('content');
const nav        = document.getElementById('lectureNav');
const menuToggle = document.getElementById('menuToggle');
const themeToggle= document.getElementById('themeToggle');
const backTop    = document.getElementById('backTop');
const searchInp  = document.getElementById('searchInput');
const welcome    = document.getElementById('welcome');

/* ---------- بناء القائمة الجانبية ---------- */
function buildSidebar() {
  const groups = {};
  LECTURES.forEach(l => {
    if (!groups[l.group]) groups[l.group] = { ar: l.groupAr, items: [] };
    groups[l.group].items.push(l);
  });

  nav.innerHTML = '';
  Object.entries(groups).forEach(([groupName, data]) => {
    const div = document.createElement('div');
    div.className = 'nav-group';
    div.innerHTML = `
      <div class="nav-group-title">${data.ar}</div>
      ${data.items.map(l => `
        <a class="nav-item" data-id="${l.id}">
          <span class="num">${l.num}</span>
          <span>${l.title}</span>
        </a>
      `).join('')}
    `;
    nav.appendChild(div);
  });

  document.getElementById('totalLectures').textContent = LECTURES.length;

  // ربط الأحداث
  nav.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => openLecture(item.dataset.id, item));
  });
}

/* ---------- فتح محاضرة ---------- */
function openLecture(id, el) {
  const data = window['lecture_' + id];
  if (!data) {
    content.innerHTML = `<div class="section"><h3>⚠️ لا يوجد محتوى لهذه المحاضرة بعد</h3></div>`;
    return;
  }

  // تمييز العنصر النشط
  nav.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (el) el.classList.add('active');

  // بناء المحتوى
  let html = `
    <div class="lecture-header">
      <span class="badge">${data.badge}</span>
      <h2>${data.title}</h2>
      <div class="sub">${data.en}</div>
      <p style="margin-top:14px;opacity:.9;font-size:14px">${data.subtitle}</p>
    </div>
  `;

  data.sections.forEach(sec => {
    html += `
      <section class="section">
        <h3>${sec.title}<span class="en">${sec.en}</span></h3>
        ${sec.html}
      </section>
    `;
  });

  content.innerHTML = html;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // إغلاق القائمة على الموبايل
  if (window.innerWidth <= 900) sidebar.classList.remove('open');
}

/* ---------- الوضع الليلي ---------- */
function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('pn-theme', theme);
}
themeToggle.addEventListener('click', () => {
  applyTheme(document.body.classList.contains('dark') ? 'light' : 'dark');
});
applyTheme(localStorage.getItem('pn-theme') || 'light');

/* ---------- القائمة على الموبايل ---------- */
menuToggle.addEventListener('click', () => sidebar.classList.toggle('open'));
document.addEventListener('click', e => {
  if (window.innerWidth <= 900 && !sidebar.contains(e.target) && !menuToggle.contains(e.target))
    sidebar.classList.remove('open');
});

/* ---------- زر أعلى ---------- */
window.addEventListener('scroll', () => {
  backTop.classList.toggle('show', window.scrollY > 400);
});
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ---------- البحث ---------- */
searchInp.addEventListener('input', e => {
  const q = e.target.value.trim().toLowerCase();
  nav.querySelectorAll('.nav-item').forEach(item => {
    const match = item.textContent.toLowerCase().includes(q);
    item.style.display = match ? '' : 'none';
  });
  nav.querySelectorAll('.nav-group').forEach(g => {
    const visible = [...g.querySelectorAll('.nav-item')].some(i => i.style.display !== 'none');
    g.style.display = visible ? '' : 'none';
  });
});

/* ---------- تشغيل ---------- */
buildSidebar();
