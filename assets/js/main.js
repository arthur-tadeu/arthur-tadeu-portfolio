const translations = {
    pt: {
        navHome: "Home",
        navAbout: "Sobre",
        navStack: "Stack",
        navCerts: "Certificações",
        navProjects: "Projetos",
        navContact: "Contato",
        badge: "Disponível para novos desafios",
        subtitle: "Backend Developer",
        description: "Construindo sistemas robustos e escaláveis. Especialista em Backend com foco no ecossistema <strong>Go (Golang)</strong>, PHP e arquiteturas modernas.",
        ctaProjects: "Explorar Projetos",
        ctaCv: "Ver Currículo",
        aboutTitle: "Sobre Mim",
        aboutText1: "Sou um <strong>Desenvolvedor Backend Júnior</strong> com uma base sólida em PHP e Java, atualmente mergulhando fundo no universo de <strong>Go (Golang)</strong> e arquitetura de sistemas.",
        aboutText2: "Minha paixão está em resolver problemas complexos no lado do servidor, otimizando performance e garantindo a integridade dos dados. Acredito na melhoria contínua e estou sempre em busca de aprender novas tecnologias que desafiem meu raciocínio lógico.",
        learningH3: "Aprendendo agora:",
        learningP: "Aprofundando em concorrência em Go, Microserviços e explorando Rust para o futuro.",
        stackTitle: "Tech Stack",
        stackBackend: "Backend",
        stackFrontend: "Frontend & Ferramentas",
        certTitle: "Formação & Certificações",
        degreeSenai: "Técnico em Desenvolvimento de Sistemas",
        durationSenai: "1 ano e meio (Previsão 2026)",
        projectsTitle: "Projetos em Destaque",
        projGoTitle: "REST API em Go",
        projGoDesc: "Uma API de alta performance desenvolvida em Go, utilizando as melhores práticas de roteamento e middlewares.",
        footerText: "Desenvolvido com foco no Backend",
        typewriter: ["Arthur Carvalho", "Backend Developer"]
    },
    en: {
        navHome: "Home",
        navAbout: "About",
        navStack: "Stack",
        navCerts: "Certifications",
        navProjects: "Projects",
        navContact: "Contact",
        badge: "Available for new challenges",
        subtitle: "Backend Developer",
        description: "Building robust and scalable systems. Backend specialist focusing on the <strong>Go (Golang)</strong> ecosystem, PHP, and modern architectures.",
        ctaProjects: "Explore Projects",
        ctaCv: "View CV",
        aboutTitle: "About Me",
        aboutText1: "I am a <strong>Junior Backend Developer</strong> with a solid foundation in PHP and Java, currently diving deep into the <strong>Go (Golang)</strong> universe and system architecture.",
        aboutText2: "My passion lies in solving complex server-side problems, optimizing performance, and ensuring data integrity. I believe in continuous improvement and am always looking to learn new technologies that challenge my logical reasoning.",
        learningH3: "Currently learning:",
        learningP: "Deepening in Go concurrency, Microservices and exploring Rust for the future.",
        stackTitle: "Tech Stack",
        stackBackend: "Backend",
        stackFrontend: "Frontend & Tools",
        certTitle: "Education & Certifications",
        degreeSenai: "Systems Development Technician",
        durationSenai: "1.5 years (Expected 2026)",
        projectsTitle: "Featured Projects",
        projGoTitle: "REST API in Go",
        projGoDesc: "A high-performance API developed in Go, using best practices for routing and middleware.",
        footerText: "Developed with a focus on Backend",
        typewriter: ["Arthur Carvalho", "Backend Developer"]
    }
};

let currentLang = localStorage.getItem('portfolio-lang') || 'pt';
const textElement = document.getElementById('typewriter-text');
let words = translations[currentLang].typewriter;
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;
let typewriterTimeout;

function type() {
    const currentWord = words[wordIndex];
    if (!currentWord) return;
    
    const isName = currentWord === "Arthur Carvalho";
    let displayText = currentWord.substring(0, isDeleting ? charIndex - 1 : charIndex + 1);
    
    textElement.textContent = displayText || "\u00A0";

    if (isDeleting) {
        charIndex--;
        typeSpeed = 50;
    } else {
        charIndex++;
        typeSpeed = isName ? 150 : 100;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 3000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    typewriterTimeout = setTimeout(type, typeSpeed);
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-br' : 'en';
    
    // Atualizar elementos com data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Atualizar Typewriter
    words = translations[lang].typewriter;
    wordIndex = 0;
    charIndex = 0;
    isDeleting = false;
    clearTimeout(typewriterTimeout);
    type();

    // Atualizar Botão de Idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

// Scroll Reveal Observer
const revealElements = document.querySelectorAll('.reveal');
const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Header Scroll Effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Navegação Ativa no Scroll
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 300)) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});

// Iniciar quando o DOM carregar
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    revealElements.forEach(el => revealObserver.observe(el));

    // Event Listener para botões de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.getAttribute('data-lang'));
        });
    });
});
