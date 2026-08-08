// ============================================
// i18n — dicionário de traduções (PT-BR / EN-US)
// Expõe (global): I18N, applyI18n(lang), tr(lang, key)
// ============================================

const I18N = {
  'pt-BR': {
    // Hero
    heroHi: 'Olá, eu sou',
    role: 'Analista de Sistemas <em>/</em> SQL Developer',
    intro: '<b>Surdo</b>, usuário nativo de <b>LIBRAS</b> e <b>paulista</b>.',

    // Navegação / rótulos de seção
    navHome: 'INÍCIO',
    navPerfil: 'PERFIL',
    navSkills: 'SKILLS',
    navProjects: 'PROJETOS',
    navContact: 'CONTATO',

    // Perfil
    perfilProse: 'Analista de Sistemas e <b>SQL Developer</b>. Como usuário nativo de <b>LIBRAS</b>, tenho uma forte percepção visual e gosto de manter as coisas organizadas, analisar tudo com atenção aos detalhes e entender as necessidades das pessoas.',
    factLocalK: 'LOCAL',
    factLocalV: 'São Paulo, Brasil',
    factLangK: 'IDIOMA',
    factLangV: 'LIBRAS · Português · Inglês básico',
    factAreaK: 'ÁREA',
    factAreaV: 'Análise de Sistemas · Desenvolvimento SQL · Front-end',
    interests: 'Gosto de pesquisar e conhecer mais sobre <b>História</b>, que é um dos meus principais hobbies. Também curto viajar para conhecer lugares diferentes e aproveitar momentos de tranquilidade. Gosto de andar de bicicleta no parque nos fins de semana. Sou apaixonado por <b>videogames</b>, principalmente no Nintendo, e não dispenso um bom <b>café</b>.',

    // Skills (grupos)
    groupFront: 'FRONT-END',
    groupBack: 'BACK-END',
    groupTools: 'FERRAMENTAS & APIs',

    // Projetos
    projApiT: 'API de Integração',
    projApiD: 'Camada REST documentada em Swagger e testada no Postman.',
    projDashT: 'Dashboard SQL',
    projDashD: 'Painel de indicadores sobre SQL Server, com views otimizadas e relatórios dinâmicos.',
    projAsespT: 'Portal ASESP',
    projAsespD: 'Site institucional da ASESP, desenvolvido com o auxílio do agente de IA Claude. Em fase alpha.',
    projFesaiT: 'FESAI',
    projFesaiD: 'Contribuí no desenvolvimento do site de glossário em LIBRAS, ao lado de um time pequeno e surdo.',

    // Contato
    ctEmail: 'E-MAIL',
    ctLinkedin: 'LINKEDIN',
    ctGithub: 'GITHUB',
    contactProse: 'Aberto a oportunidades como <b>Analista de Sistemas</b> e <b>SQL Developer</b>. Prefiro contato por texto ou vídeo em LIBRAS.',

    // Rodapé
    footer: 'Todos os direitos reservados',

    // Tema
    themeDark: 'ESCURO',
    themeLight: 'CLARO',

    // Flag
    flagDeaf: 'BANDEIRA SURDA',
  },

  'en-US': {
    // Hero
    heroHi: "Hello, I'm",
    role: 'Systems Analyst <em>/</em> SQL Developer',
    intro: '<b>Deaf</b>, native <b>LIBRAS</b> user, from <b>São Paulo</b>.',

    // Navigation / section labels
    navHome: 'HOME',
    navPerfil: 'PROFILE',
    navSkills: 'SKILLS',
    navProjects: 'PROJECTS',
    navContact: 'CONTACT',

    // Profile
    perfilProse: "Systems Analyst and <b>SQL Developer</b>. As a native <b>LIBRAS</b> user, I have strong visual perception and like to keep things organized, analyze everything with attention to detail, and understand people's needs.",
    factLocalK: 'LOCATION',
    factLocalV: 'São Paulo, Brazil',
    factLangK: 'LANGUAGES',
    factLangV: 'LIBRAS · Portuguese · Basic English',
    factAreaK: 'FIELD',
    factAreaV: 'Systems Analysis · SQL Development · Front-end',
    interests: "I enjoy researching and learning more about <b>History</b>, one of my main hobbies. I also love traveling to discover different places and enjoy calm moments. On weekends, I like riding my bike in the park. I'm passionate about <b>video games</b>, especially on the Nintendo, and never turn down a good <b>coffee</b>.",

    // Skills (groups)
    groupFront: 'FRONT-END',
    groupBack: 'BACK-END',
    groupTools: 'TOOLS & APIs',

    // Projects
    projApiT: 'API Integration',
    projApiD: 'REST layer documented in Swagger and tested in Postman.',
    projDashT: 'Dashboard SQL',
    projDashD: 'Indicators dashboard over SQL Server, with optimized views and dynamic reports.',
    projAsespT: 'ASESP Portal',
    projAsespD: 'ASESP institutional website, developed with the help of the AI agent Claude. In alpha stage.',
    projFesaiT: 'FESAI',
    projFesaiD: 'Contributed to the development of a LIBRAS glossary website, alongside a small, Deaf team.',

    // Contact
    ctEmail: 'EMAIL',
    ctLinkedin: 'LINKEDIN',
    ctGithub: 'GITHUB',
    contactProse: 'Open to opportunities as a <b>Systems Analyst</b> and <b>SQL Developer</b>. I prefer contact by text or LIBRAS video.',

    // Footer
    footer: 'All rights reserved',

    // Theme
    themeDark: 'DARK',
    themeLight: 'LIGHT',

    // Flag
    flagDeaf: 'DEAF FLAG',
  },
};

// Tradução avulsa por chave (com fallback para PT-BR)
function tr(lang, key) {
  const dict = I18N[lang] || I18N['pt-BR'];
  return dict[key] != null ? dict[key] : (I18N['pt-BR'][key] || '');
}

// Aplica as strings do idioma em todos os elementos com [data-i18n]
function applyI18n(lang) {
  const dict = I18N[lang] || I18N['pt-BR'];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = dict[el.dataset.i18n];
    if (v != null) el.innerHTML = v;
  });
}
