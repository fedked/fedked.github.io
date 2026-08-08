// ============================================
// Fernando Kendi Utida — Portfólio
// Conteúdo (dados) + renderização + interações
// Depende de: icons.js (icon()) e i18n.js (I18N, applyI18n, tr)
// ============================================

// ---------- Navegação ----------
// (o texto vem do dicionário via data-i18n — aqui só o id e a chave)
const SECTIONS = [
  { id: 'home',     nav: 'navHome' },
  { id: 'perfil',   nav: 'navPerfil' },
  { id: 'skills',   nav: 'navSkills' },
  { id: 'projects', nav: 'navProjects' },
  { id: 'contact',  nav: 'navContact' },
];

document.getElementById('nav').innerHTML = SECTIONS.map(s =>
  `<a href="#${s.id}" data-id="${s.id}"><span class="bar"></span><span class="nav-lbl" data-i18n="${s.nav}"></span></a>`).join('');

document.getElementById('mmenu').innerHTML = SECTIONS.map(s =>
  `<a href="#${s.id}"><span data-i18n="${s.nav}"></span></a>`).join('') +
  `<div class="mf">
     <img class="flag" src="assets/flag_deaf.webp" alt="Bandeira Surda internacional" />
     <span class="flag-cap">BANDEIRA SURDA</span>
   </div>`;

// ---------- Skills ----------
const GROUPS = [
  { key: 'groupFront', items: [['HTML', 'html5'], ['CSS', 'css'], ['SCSS', 'sass'], ['JavaScript', 'javascript'], ['Angular', 'angular'], ['Bootstrap', 'bootstrap'], ['Tailwind CSS', 'tailwindcss']] },
  { key: 'groupBack', items: [['Kotlin', 'kotlin'], ['SQL', 'db']] },
  { key: 'groupTools', items: [['SQL Server', 'server'], ['DBeaver', 'dbeaver'], ['APIs REST', 'api'], ['Postman', 'postman'], ['Insomnia', 'insomnia'], ['Swagger', 'swagger'], ['Git', 'git'], ['GitHub', 'github'], ['VS Code', 'code']] },
];

document.getElementById('skillsRoot').innerHTML = GROUPS.map(g => `
  <div class="sgroup">
    <div class="gl" data-i18n="${g.key}"></div>
    <div class="slist">${g.items.map(([n, i]) => `<span class="skill">${icon(i)}${n}</span>`).join('')}</div>
  </div>`).join('');

// ---------- Projetos ----------
// título e descrição vêm do dicionário (tKey/dKey); tags e link ficam iguais nos 2 idiomas
const PROJECTS = [
  { tKey: 'projApiT',   dKey: 'projApiD',   g: 'Python · Swagger' },
  { tKey: 'projDashT',  dKey: 'projDashD',  g: 'SQL Server · Python' },
  { tKey: 'projAsespT', dKey: 'projAsespD', g: 'Next.js · Tailwind · Sanity', url: 'https://vemsonhar-portal.vercel.app/' },
  { tKey: 'projFesaiT', dKey: 'projFesaiD', g: 'Angular · Bootstrap · SASS', url: 'https://www.fesai.com.br/' },
];

document.getElementById('projRoot').innerHTML = PROJECTS.map(p => {
  const attrs = p.url ? `href="${p.url}" target="_blank" rel="noopener"` : `href="#" onclick="return false"`;
  return `
  <a ${attrs}>
    <span class="pt" data-i18n="${p.tKey}"></span>
    <span class="pg">${p.g}</span>
    <span class="pd" data-i18n="${p.dKey}"></span>
  </a>`;
}).join('');

// ---------- Contato ----------
const CONTACTS = [
  { kKey: 'ctEmail',    v: 'fedked@outlook.com', href: 'mailto:fedked@outlook.com', ic: 'mail' },
  { kKey: 'ctLinkedin', v: '/in/fernandokendi',  href: 'https://www.linkedin.com/in/fernandokendi', ic: 'linkedin' },
  { kKey: 'ctGithub',   v: '/fedked',            href: 'https://github.com/fedked', ic: 'github' },
];

document.getElementById('clinks').innerHTML = CONTACTS.map(c =>
  `<a href="${c.href}"${c.href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}><span class="k" data-i18n="${c.kKey}"></span><span class="v">${icon(c.ic)}${c.v}</span></a>`).join('');

// ---------- Idioma (PT / EN) ----------
let currentLang = localStorage.getItem('fku-lang') || 'pt-BR';   // padrão: PT

function paintLang() {
  document.querySelectorAll('#lang [data-lang]').forEach(b =>
    b.classList.toggle('on', b.dataset.lang === currentLang));
  const mLang = document.getElementById('mLang');
  if (mLang) mLang.textContent = currentLang === 'pt-BR' ? 'PT' : 'EN';
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('fku-lang', lang);
  applyI18n(lang);   // preenche todos os [data-i18n]
  paintTheme();      // rótulo ESCURO/CLARO no novo idioma
  paintLang();
}

document.querySelectorAll('#lang [data-lang]').forEach(b =>
  b.addEventListener('click', () => setLang(b.dataset.lang)));
document.getElementById('mLang').addEventListener('click', () =>
  setLang(currentLang === 'pt-BR' ? 'en-US' : 'pt-BR'));

// ---------- Tema (claro/escuro) ----------
const root = document.documentElement;
const savedTheme = localStorage.getItem('fku-theme');
if (savedTheme) root.setAttribute('data-theme', savedTheme);
else if (window.matchMedia('(prefers-color-scheme: light)').matches) root.setAttribute('data-theme', 'light');

function paintTheme() {
  const dark = root.getAttribute('data-theme') === 'dark';
  document.querySelector('#theme .tic').innerHTML = icon(dark ? 'sun' : 'moon');
  document.querySelector('#theme .tlbl').textContent = tr(currentLang, dark ? 'themeDark' : 'themeLight');
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

// ---------- Inicialização ----------
applyI18n(currentLang);   // aplica o idioma nos textos estáticos + gerados
paintTheme();
paintLang();
