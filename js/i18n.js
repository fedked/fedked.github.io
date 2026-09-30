// ============================================
// i18n — dicionário de traduções (PT-BR / EN-US)
// Expõe (global): I18N, applyI18n(lang), tr(lang, key)
// ============================================

const I18N = {
  'pt-BR': {
    // Hero
    heroHi: 'Olá, eu sou',
    role: 'Profissional de TI e Administração',
    intro: '<b>Surdo</b>, usuário nativo de <b>LIBRAS</b> e <b>paulista</b>.',

    // Navegação / rótulos de seção
    navHome: 'INÍCIO',
    navPerfil: 'PERFIL',
    navSkills: 'SKILLS',
    navProjects: 'PROJETOS',
    navContact: 'CONTATO',

    // Perfil
    opportunityBadge: 'Em busca de oportunidades',
    perfilProse: 'Tenho experiência em TI e na área administrativa, além de conhecimentos em SQL Server adquiridos durante meus estudos. Minha percepção visual é apurada, e gosto de manter as coisas organizadas, analisar tudo com atenção aos detalhes e entender as necessidades das pessoas.<br><br>Atualmente, estou aprendendo a utilizar ferramentas de inteligência artificial e a criar prompts com instruções claras para diferentes tarefas. Também estou aprofundando meus conhecimentos em comandos Linux, com foco no uso do terminal.',
    factLocalK: 'LOCAL',
    factLocalV: 'São Paulo, Brasil',
    factLangK: 'IDIOMA',
    factLangV: 'LIBRAS · Português · Inglês básico',
    factAreaK: 'ÁREA',
    factAreaV: 'TI: Suporte técnico · Infraestrutura · Sistemas · Administração',
    interests: 'Gosto de pesquisar e conhecer mais sobre <b>História</b>, que é um dos meus principais hobbies. Também curto viajar para conhecer lugares diferentes e aproveitar momentos de tranquilidade. Gosto de andar de bicicleta no parque nos fins de semana. Sou apaixonado por <b>videogames</b>, principalmente no Nintendo, e não dispenso um bom <b>café</b>.',

    // Skills (grupos)
    groupFront: 'FRONT-END',
    groupBack: 'BACK-END',
    groupTools: 'FERRAMENTAS & APIs',

    // Projetos
    projApiT: 'API de Integração',
    projApiD: 'Camada REST documentada em Swagger e testada no Postman.',
    projStudy: 'ESTUDO',
    projAsespT: 'Portal ASESP',
    projFrontEnd: 'FRONT-END',
    projAsespD: 'Site institucional da ASESP, desenvolvido com o auxílio do agente de IA Claude. Em desenvolvimento; lançamento previsto em breve.',
    projFesaiT: 'FESAI',
    projFesaiD: 'Contribuí no desenvolvimento do site de glossário em LIBRAS, ao lado de um time pequeno e surdo.',

    // Contato
    ctEmail: 'E-MAIL',
    ctLinkedin: 'LINKEDIN',
    ctGithub: 'GITHUB',
    contactProse: 'Aberto a oportunidades em <b>suporte técnico</b>, <b>infraestrutura</b>, <b>sistemas</b> e <b>funções administrativas</b>. Prefiro contato por texto ou vídeo em LIBRAS.',

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
    role: 'IT and Administrative Professional',
    intro: '<b>Deaf</b>, native <b>LIBRAS</b> user, from <b>São Paulo</b>.',

    // Navigation / section labels
    navHome: 'HOME',
    navPerfil: 'PROFILE',
    navSkills: 'SKILLS',
    navProjects: 'PROJECTS',
    navContact: 'CONTACT',

    // Profile
    opportunityBadge: 'Seeking opportunities',
    perfilProse: "I have experience in IT and administration, as well as knowledge of SQL Server gained through my studies. I have a keen visual perception and like to keep things organized, analyze everything with attention to detail, and understand people's needs.<br><br>I am currently learning to use artificial intelligence tools and write clear prompts for different tasks. I am also expanding my knowledge of Linux commands, focusing on terminal use.",
    factLocalK: 'LOCATION',
    factLocalV: 'São Paulo, Brazil',
    factLangK: 'LANGUAGES',
    factLangV: 'LIBRAS · Portuguese · Basic English',
    factAreaK: 'FIELD',
    factAreaV: 'IT: Technical Support · Infrastructure · Systems · Administration',
    interests: "I enjoy researching and learning more about <b>History</b>, one of my main hobbies. I also love traveling to discover different places and enjoy calm moments. On weekends, I like riding my bike in the park. I'm passionate about <b>video games</b>, especially on the Nintendo, and never turn down a good <b>coffee</b>.",

    // Skills (groups)
    groupFront: 'FRONT-END',
    groupBack: 'BACK-END',
    groupTools: 'TOOLS & APIs',

    // Projects
    projApiT: 'API Integration',
    projApiD: 'REST layer documented in Swagger and tested in Postman.',
    projStudy: 'STUDY',
    projAsespT: 'ASESP Portal',
    projFrontEnd: 'FRONT-END',
    projAsespD: 'ASESP institutional website, developed with the help of the AI agent Claude. In development; planned to launch soon.',
    projFesaiT: 'FESAI',
    projFesaiD: 'Contributed to the development of a LIBRAS glossary website, alongside a small, Deaf team.',

    // Contact
    ctEmail: 'EMAIL',
    ctLinkedin: 'LINKEDIN',
    ctGithub: 'GITHUB',
    contactProse: 'Open to opportunities in <b>technical support</b>, <b>infrastructure</b>, <b>systems</b>, and <b>administrative roles</b>. I prefer contact by text or LIBRAS video.',

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
