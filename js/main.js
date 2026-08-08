// ============================================
// Fernando Kendi Utida — Portfólio
// Conteúdo (dados) + renderização + interações
// Depende de: icons.js (função global icon())
// ============================================

// ---------- Navegação ----------
const SECTIONS = [
  { id: 'home',   label: 'HOME' },
  { id: 'perfil',   label: 'PERFIL' },
  { id: 'skills',   label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'contact',  label: 'CONTACT' },
];

document.getElementById('nav').innerHTML = SECTIONS.map(s =>
  `<a href="#${s.id}" data-id="${s.id}"><span class="bar"></span>${s.label}</a>`).join('');

document.getElementById('mmenu').innerHTML = SECTIONS.map(s =>
  `<a href="#${s.id}">${s.label}</a>`).join('') +
  `<div class="mf">
     <img class="flag" src="assets/flag_deaf.webp" alt="Bandeira da comunidade Surda" />
     <span class="flag-cap">BANDEIRA SURDA</span>
   </div>`;

// ---------- Skills ----------
const GROUPS = [
  { label: 'FRONT-END', items: [['HTML', 'html5'], ['CSS', 'css'], ['SCSS', 'sass'], ['JavaScript', 'javascript'], ['Angular', 'angular'], ['Bootstrap', 'bootstrap'], ['Tailwind CSS', 'tailwindcss']] },
  { label: 'BACK-END', items: [['Kotlin', 'kotlin'], ['SQL', 'db']] },
  { label: 'FERRAMENTAS & APIs', items: [['SQL Server', 'server'], ['DBeaver', 'dbeaver'], ['APIs REST', 'api'], ['Postman', 'postman'], ['Insomnia', 'insomnia'], ['Swagger', 'swagger'], ['Git', 'git'], ['GitHub', 'github'], ['VS Code', 'code']] },
];

document.getElementById('skillsRoot').innerHTML = GROUPS.map(g => `
  <div class="sgroup">
    <div class="gl">${g.label}</div>
    <div class="slist">${g.items.map(([n, i]) => `<span class="skill">${icon(i)}${n}</span>`).join('')}</div>
  </div>`).join('');

// ---------- Projetos (exemplos) ----------
const PROJECTS = [
  { t: 'API de Integração', d: 'Camada REST documentada em Swagger e testada no Postman.', g: 'Python · Swagger' },
  { t: 'Dashboard SQL', d: 'Painel de indicadores sobre SQL Server, com views otimizadas e relatórios dinâmicos.', g: 'SQL Server · Python' },
  { t: 'Portal ASESP', d: 'Site institucional da ASESP, desenvolvido com o auxílio do agente de IA Claude. Em fase alpha.', g: 'Next.js · Tailwind · Sanity', url: 'https://vemsonhar-portal.vercel.app/' },
  { t: 'FESAI', d: 'Contribuí no desenvolvimento do site de glossário em LIBRAS, ao lado de um time pequeno e surdo.', g: 'Angular · Bootstrap · SASS', url: 'https://www.fesai.com.br/' },
];

document.getElementById('projRoot').innerHTML = PROJECTS.map(p => {
  const attrs = p.url ? `href="${p.url}" target="_blank" rel="noopener"` : `href="#" onclick="return false"`;
  return `
  <a ${attrs}>
    <span class="pt">${p.t}</span>
    <span class="pg">${p.g}</span>
    <span class="pd">${p.d}</span>
  </a>`;
}).join('');

// ---------- Contato ----------
const CONTACTS = [
  { k: 'E-MAIL',   v: 'fedked@outlook.com', href: 'mailto:fedked@outlook.com', ic: 'mail' },
  { k: 'LINKEDIN', v: '/in/fernandokendi',  href: 'https://www.linkedin.com/in/fernandokendi', ic: 'linkedin' },
  { k: 'GITHUB',   v: '/fedked',            href: 'https://github.com/fedked', ic: 'github' },
];

document.getElementById('clinks').innerHTML = CONTACTS.map(c =>
  `<a href="${c.href}"${c.href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}><span class="k">${c.k}</span><span class="v">${icon(c.ic)}${c.v}</span></a>`).join('');

// ---------- Tema (claro/escuro) ----------
const root = document.documentElement;
const saved = localStorage.getItem('fku-theme');
if (saved) root.setAttribute('data-theme', saved);
else if (window.matchMedia('(prefers-color-scheme: light)').matches) root.setAttribute('data-theme', 'light');

function paintTheme() {
  const dark = root.getAttribute('data-theme') === 'dark';
  document.querySelector('#theme .tic').innerHTML = icon(dark ? 'sun' : 'moon');
  document.querySelector('#theme .tlbl').textContent = dark ? 'ESCURO' : 'CLARO';
  document.getElementById('mTheme').innerHTML = icon(dark ? 'sun' : 'moon');
}

function toggleTheme() {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('fku-theme', next);
  paintTheme();
}

document.getElementById('theme').addEventListener('click', toggleTheme);
document.getElementById('mTheme').addEventListener('click', toggleTheme);
paintTheme();

// ---------- Menu mobile ----------
const mMenu = document.getElementById('mMenu');
const mmenu = document.getElementById('mmenu');

function setMenu(open) {
  mmenu.classList.toggle('open', open);
  mMenu.setAttribute('aria-expanded', open);
  mMenu.innerHTML = icon(open ? 'close' : 'menu');
}

mMenu.addEventListener('click', () => setMenu(!mmenu.classList.contains('open')));
mmenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
setMenu(false);

// ---------- Navegação ativa (scroll spy) ----------
const links = [...document.querySelectorAll('.nav a')];
const spy = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) links.forEach(l => l.classList.toggle('active', l.dataset.id === e.target.id));
  });
}, { rootMargin: '-45% 0px -45% 0px', threshold: 0 }); // faixa fina no centro da tela
SECTIONS.forEach(s => { const el = document.getElementById(s.id); if (el) spy.observe(el); });

// ---------- Ano no rodapé ----------
document.getElementById('yr').textContent = new Date().getFullYear();
