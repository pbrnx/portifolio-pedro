const translations = {
  en: {
    page_title: "Pedro Barone - Fullstack Developer",
    portfolio: "Portfolio",
    download_cv: "Download resume",
    contact_btn: "Contact",
    hello_title: "Hi, I'm",
    hello_name: "Pedro Barone!",
    hello_profession: "Fullstack Software Engineer",
    about_me: "About Me",
    about_desc: "I’m a full-stack developer specialized in automation, system integration, and business process optimization. I have hands-on experience in projects using JavaScript, Python, SQL, and APIs, delivering robust solutions with platforms like OpenText Content Server, Adobe Sign, and analytical dashboards. My focus is to combine technology, efficiency, and usability to solve real problems, always aiming for business impact and international scalability.",
    skills: "Skills",
    projects: "Projects",
    highlights: "Highlights",
    all_projects: "All Projects",
    contacts: "Contacts",
    email_label: "Email",
    phone_label: "Phone",
    linkedin_label: "LinkedIn",
    github_label: "GitHub",
    access_project: "Access project",
    access_repository: "Access repository",
    welcome_portfolio: "Welcome to my Portfolio :)",
    about_me_nav: "About",
    skills_nav: "Skills",
    projects_nav: "Projects",
    contacts_nav: "Contacts"
  },
  pt: {
    page_title: "Pedro Barone - Desenvolvedor Fullstack",
    portfolio: "Portfólio",
    download_cv: "Baixar currículo",
    contact_btn: "Contato",
    hello_title: "Olá, eu sou",
    hello_name: "Pedro Barone!",
    hello_profession: "Engenheiro de Software Fullstack",
    about_me: "Sobre mim",
    about_desc: "Sou desenvolvedor full-stack especializado em automação, integração de sistemas e otimização de processos para empresas. Tenho experiência prática em projetos com JavaScript, Python, SQL e APIs, entregando soluções robustas em plataformas como OpenText Content Server, Adobe Sign e dashboards analíticos. Meu foco é unir tecnologia, eficiência e usabilidade para resolver problemas reais, sempre buscando impacto direto no negócio e expandindo minha atuação em ambientes internacionais.",
    skills: "Habilidades",
    projects: "Projetos",
    highlights: "Destaques",
    all_projects: "Todos os projetos",
    contacts: "Contatos",
    email_label: "E-mail",
    phone_label: "Telefone",
    linkedin_label: "LinkedIn",
    github_label: "GitHub",
    access_project: "Acessar projeto",
    access_repository: "Acessar repositório",
    welcome_portfolio: "Bem-vindo ao meu Portfólio :)",
    about_me_nav: "Sobre",
    skills_nav: "Habilidades",
    projects_nav: "Projetos",
    contacts_nav: "Contatos"
  }
};

// Open Menu

const initOpenMenu = () => {

    const menuBtn = document.querySelector('header .menu i')
    const closeBtn = document.querySelector('header .menu i:nth-child(2)')
    const menu = document.querySelector('.menuOpen');
    const header = document.querySelector('header')

    const close = () => {
        menu.classList.add('hidden')
        menuBtn.classList.remove('hidden')
        closeBtn.classList.add('hidden')
        document.body.style.overflow = 'visible';
        header.classList.remove('open')

    }

    const open = () => {
        menu.classList.remove('hidden')
        menuBtn.classList.add('hidden')
        closeBtn.classList.remove('hidden')
        document.body.style.overflow = 'hidden';
        header.classList.add('open')
    }

    // Open with Btn
    menuBtn.addEventListener('click', open)

    // Close with Btn
    closeBtn.addEventListener('click', close)

    // Close with Esc
    document.addEventListener ('keydown', (event) => event.key === "Escape" ? close() : '');

    // Close with Links
    const links = document.querySelectorAll('nav a')

    links.forEach(link => {
        link.addEventListener('click', close)
    })

}

initOpenMenu()

// Scroll Animation

const initAnimationScroll = () => {
    const sections = document.querySelectorAll('.js-section')

    const windowHalfSize = window.innerHeight * 0.6
    
    const animateScroll = () => {
        sections.forEach(item => {
            const sectionTop = item.getBoundingClientRect().top

            const isSectionVisible = (sectionTop - windowHalfSize) < 0

            if (isSectionVisible) {
                item.classList.add('active')
            } else {
                item.classList.remove('active')
            }

        })
        
    }

    animateScroll()

    window.addEventListener('scroll', animateScroll)


}

initAnimationScroll()

// Scroll Smooth

const initScrollSmooth = () => {

    const linksInternos = document.querySelectorAll('nav a')

    linksInternos.forEach(item => {

        const scrollToSection = (event) => {
            event.preventDefault()
            const href = event.currentTarget.getAttribute('href');
            const section = document.querySelector(href)

            window.scrollTo ({
                top: section.offsetTop - 100
            })


        }


        item.addEventListener('click', scrollToSection)

    })

}

initScrollSmooth()

// Typing Animation

// Define fora da função
let typingAnimationTimeouts = [];

function clearTypingAnimationTimeouts() {
  typingAnimationTimeouts.forEach(timeout => clearTimeout(timeout));
  typingAnimationTimeouts = [];
}

function initTypingAnimation() {
  clearTypingAnimationTimeouts();

  const title = document.getElementById('helloTitle');
  const span = document.getElementById('helloName');
  const paragraph = document.getElementById('helloProfession');
  const lang = localStorage.getItem('lang') || 'en';
  const dict = translations[lang];

  const animationSteps = [
    { el: title, text: dict.hello_title, speed: 120 },
    { el: span, text: dict.hello_name, speed: 150 },
    { el: paragraph, text: dict.hello_profession, speed: 75 }
  ];

  let current = 0;

  function typeNext() {
    if (current >= animationSteps.length) return;
    const { el, text, speed } = animationSteps[current];
    el.innerHTML = '';
    text.split('').forEach((char, i) => {
      const timeout = setTimeout(() => {
        el.innerHTML += char;
        if (i === text.length - 1) {
          const nextTimeout = setTimeout(typeNext, speed + 600);
          typingAnimationTimeouts.push(nextTimeout);
        }
      }, speed * i);
      typingAnimationTimeouts.push(timeout);
    });
    current++;
  }

  // Limpa antes de animar
  title.innerHTML = '';
  span.innerHTML = '';
  paragraph.innerHTML = '';
  current = 0;
  typeNext();
}



initTypingAnimation()

function setLanguage(lang) {
  // Troca textos estáticos
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Troca o atributo lang do <html>
  document.documentElement.lang = lang;

  // Troca o label do switch
  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = lang.toUpperCase();

  // Troca o <title> da página
  document.title = translations[lang].page_title;

  // Salva preferência
  localStorage.setItem('lang', lang);
    
  
  
  window.dataProjects = (lang === 'pt') ? window.dataProjectsPT : window.dataProjectsEN;
    renderProjects();
    openModal();
  // Aqui, se quiser, chame funções para atualizar projetos/arrays em ambos idiomas (passo 3)
  initTypingAnimation();
}


document.addEventListener('DOMContentLoaded', () => {
  // Define idioma salvo ou padrão
  const savedLang = localStorage.getItem('lang') || 'en';
  const langSwitch = document.getElementById('langSwitch');
  const langLabel = document.getElementById('langLabel');

  // SÓ precisa disso: setLanguage já faz renderProjects e openModal!
  setLanguage(savedLang);

  if (langSwitch) {
    langSwitch.checked = (savedLang === 'pt');
    langLabel.textContent = savedLang.toUpperCase();

    langSwitch.addEventListener('change', () => {
      const newLang = langSwitch.checked ? 'pt' : 'en';
      setLanguage(newLang);
      // NÃO chame renderProjects/openModal aqui — setLanguage já faz!
    });
  }
});


