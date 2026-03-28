const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".mobile-overlay");
const icon = menuToggle.querySelector("i");
const langToggle = document.getElementById("lang-toggle");
const langText = langToggle.querySelector("span");

const translations = {
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_exp: "Experience",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_intro: "Hi, I'm Vicente Fernandes",
    hero_title: "Software Engineer",
    hero_desc:
      "Self-taught Full Stack Developer since 2021 specializing in end-to-end web applications, robust backend logic, and building clean, functional user interfaces.",
    hero_cta: 'View My Work <i class="fa-solid fa-arrow-down"></i>',
    about_title: "About Me",
    about_subtitle:
      "Building high-performance software through self-driven learning.",
    about_p1:
      "<strong>👨‍💻 Background:</strong> I am a self-taught Software Engineer driven by a deep curiosity for how systems work. Since 2021, I have dedicated my time to mastering full-stack development, moving from building simple interfaces to designing robust backend logic.",
    about_p2:
      "<strong>🎯 Current Focus:</strong> I am currently exploring the depths of web development and systems programming. I am looking to apply my skills in a professional environment.",
    about_p3:
      "<strong>🤝 Work Philosophy:</strong> I operate with a 'solve-first' mentality. I enjoy the process of deep research and troubleshooting to find solutions.",
    skills_title: "Skills & Expertise",
    skills_subtitle: "Technologies i have experience with and use the most.",
    exp_title: "Experience",
    exp_card_title: "Professional Work History",
    exp_note:
      "Focused on public-facing roles and team collaboration in high-pressure environments.",
    exp_l1:
      "<strong>Reliability:</strong> Maintained a 100% attendance record over 1.5 years, demonstrating consistent discipline and professional commitment.",
    exp_l2:
      "<strong>Proactive Mentality:</strong> Applied a 'solve-first' approach to operational challenges, handling issues independently while keeping leadership informed of progress.",
    exp_l3:
      "<strong>Team Coordination:</strong> Gained experience leading small groups and training new staff members to maintain service standards and efficiency.",
    exp_l4:
      "<strong>Professionalism:</strong> Highly focused on maintaining a productive, ego-free work environment and quickly adapting to new team workflows.",
    proj_title: "Projects",
    proj_subtitle: "Selected work and personal projects.",
    proj_features_label: "Key Features",
    nex_desc:
      "A comprehensive event management platform designed to streamline the planning and attendance experience. Built with a focus on real-time updates and high-concurrency handling.",
    nex_f1: "Real-time event tracking and notifications",
    nex_f2: "User authentication and profile management",
    nex_f3: "Interactive event scheduling and RSVPs",
    nex_f4: "Seamless backend integration with PostgreSQL",
    proj_view_code: '<i class="fa-brands fa-github"></i> View Code',
    proj_more: 'View More on GitHub <i class="fa-brands fa-github"></i>',
    proj_status_dev: "Under Development",
    ink_desc:
      "A production-grade collaborative canvas application where multiple users can draw, design, and brainstorm together in real-time.",
    ink_f1: "Infinite canvas with real-time multiplayer sync",
    ink_f2: "Live cursors and presence indicators via Partykit",
    ink_f3: "Conflict-free data synchronization using CRDTs (Yjs)",
    ink_f4: "Modern stack with Next.js 15 and React Compiler",
    proj_in_progress: "Development in Progress",
    contact_title: "Get In Touch",
    contact_subtitle: "I’m open to new opportunities and collaborations.",
    contact_email: "Email",
    contact_loc_label: "Location",
    contact_loc_val: "Rio Grande do Sul, Brazil (BRT)",
    footer_tagline: "Software Engineer",
    footer_links_title: "Quick Links",
    footer_connect_title: "Connect",
    footer_copy: "© 2026 Vicente Fernandes. All rights reserved.",
  },
  pt: {
    nav_about: "Sobre",
    nav_skills: "Habilidades",
    nav_exp: "Experiência",
    nav_projects: "Projetos",
    nav_contact: "Contato",
    hero_intro: "Olá, eu sou Vicente Fernandes",
    hero_title: "Engenheiro de Software",
    hero_desc:
      "Desenvolvedor Full Stack autodidata desde 2021, especializado em aplicações web completas, lógica de backend robusta e interfaces limpas e funcionais.",
    hero_cta: 'Ver Meu Trabalho <i class="fa-solid fa-arrow-down"></i>',
    about_title: "Sobre Mim",
    about_subtitle:
      "Construindo software de alta performance através do aprendizado contínuo.",
    about_p1:
      "<strong>👨‍💻 Background:</strong> Sou um Engenheiro de Software autodidata movido por uma curiosidade profunda sobre como os sistemas funcionam. Desde 2021, dedico meu tempo a dominar o desenvolvimento full-stack, evoluindo de interfaces simples para lógica de backend robusta.",
    about_p2:
      "<strong>🎯 Foco Atual:</strong> Estou explorando as profundezas do desenvolvimento web e programação de sistemas. Busco aplicar minhas habilidades em um ambiente profissional — seja via freelancing ou em uma empresa onde possa contribuir em projetos relevantes.",
    about_p3:
      "<strong>🤝 Filosofia:</strong> Opero com uma mentalidade de 'resolver primeiro'. Aprecio o processo de pesquisa profunda e resolução de problemas, valorizando comunicação clara e consistência.",
    skills_title: "Habilidades & Expertise",
    skills_subtitle:
      "Tecnologias com as quais tenho experiência e mais utilizo.",
    exp_title: "Experiência",
    exp_card_title: "Histórico Profissional",
    exp_note:
      "Focado em funções voltadas ao público e colaboração em equipe em ambientes de alta pressão.",
    exp_l1:
      "<strong>Confiabilidade:</strong> Mantive 100% de assiduidade durante 1.5 anos, demonstrando disciplina consistente e compromisso profissional.",
    exp_l2:
      "<strong>Mentalidade Proativa:</strong> Apliquei a abordagem de 'resolver primeiro' em desafios operacionais, lidando com problemas de forma independente.",
    exp_l3:
      "<strong>Coordenação de Equipe:</strong> Experiência liderando pequenos grupos e treinando novos membros para manter padrões de serviço e eficiência.",
    exp_l4:
      "<strong>Profissionalismo:</strong> Focado em manter um ambiente de trabalho produtivo, livre de ego, e adaptando-me rapidamente a novos fluxos de equipe.",
    proj_title: "Projetos",
    proj_subtitle: "Trabalhos selecionados e projetos pessoais.",
    proj_features_label: "Principais Recursos",
    nex_desc:
      "Uma plataforma abrangente de gestão de eventos projetada para simplificar a experiência de planejamento e presença. Focada em atualizações em tempo real.",
    nex_f1: "Rastreamento de eventos e notificações em tempo real",
    nex_f2: "Autenticação de usuário e gestão de perfil",
    nex_f3: "Agendamento interativo de eventos e RSVPs",
    nex_f4: "Integração contínua de backend com PostgreSQL",
    proj_view_code: '<i class="fa-brands fa-github"></i> Ver Código',
    proj_more: 'Ver Mais no GitHub <i class="fa-brands fa-github"></i>',
    proj_status_dev: "Em Desenvolvimento",
    ink_desc:
      "Uma aplicação de tela colaborativa de nível de produção onde vários usuários podem desenhar e brainstorm em tempo real.",
    ink_f1: "Tela infinita com sincronização multiplayer em tempo real",
    ink_f2: "Cursores ao vivo e indicadores de presença via Partykit",
    ink_f3: "Sincronização de dados sem conflitos usando CRDTs (Yjs)",
    ink_f4: "Stack moderna com Next.js 15 e React Compiler",
    proj_in_progress: "Desenvolvimento em Progresso",
    contact_title: "Entre em Contato",
    contact_subtitle: "Estou aberto a novas oportunidades e colaborações.",
    contact_email: "E-mail",
    contact_loc_label: "Localização",
    contact_loc_val: "Rio Grande do Sul, Brasil (BRT)",
    footer_tagline: "Engenheiro de Software",
    footer_links_title: "Links Rápidos",
    footer_connect_title: "Conectar",
    footer_copy: "© 2026 Vicente Fernandes. Todos os direitos reservados.",
  },
};

function toggleMenu() {
  const isActive = navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
  icon.className = isActive ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  document.body.style.overflow = isActive ? "hidden" : "auto";
}

function updateLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

menuToggle.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) toggleMenu();
  });
});

langToggle.addEventListener("click", () => {
  const isEn = document.documentElement.lang === "en";
  const newLang = isEn ? "pt" : "en";

  document.documentElement.lang = newLang;
  langText.textContent = isEn ? "EN" : "PT";
  updateLanguage(newLang);
});
