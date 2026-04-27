const translations = {
    pt: {
        navHome: "Home",
        navAbout: "Sobre",
        navStack: "Stack",
        navEducation: "Educação",
        navProjects: "Projetos",
        navContact: "Contato",
        badge: "Ola eu sou",
        subtitle: "Backend Developer",
        description: "Construindo sistemas robustos e escaláveis. Especialista em Backend com foco em PHP, Java e agora explorando o campo da **Inteligência Artificial**.",
        ctaProjects: "Explorar Projetos",
        ctaCv: "Ver Currículo",
        aboutTitle: "Sobre Mim",
        aboutText1: "Sou um <strong>Desenvolvedor Backend Júnior</strong> com uma base sólida em PHP e Java, atualmente mergulhando fundo em arquitetura de sistemas.",
        aboutText2: "Atualmente, estou direcionando meus estudos para a área de **Inteligência Artificial**, buscando integrar soluções inteligentes e automação ao desenvolvimento backend. Acredito na inovação constante e na aplicação prática de novas tecnologias.",
        learningH3: "Aprendendo agora:",
        learningP: "Aprofundando em **Inteligência Artificial**, Machine Learning e Visão Computacional.",
        stackTitle: "Tech Stack",
        stackBackend: "Backend",
        stackDatabase: "Banco de Dados",
        stackFrontend: "Frontend & Ferramentas",
        eduTitle: "Educação & Formação",
        degreeSenai: "Técnico em Desenvolvimento de Sistemas",
        durationSenai: "1 ano e meio (Previsão 2026)",
        projectsTitle: "Projetos em Destaque",
        footerText: "Desenvolvido com foco no Backend",
        morpheuTitle: "Morpheu AI Assistant",
        morpheuDesc: "Assistente virtual local inteligente. Focado em produtividade, segurança de dados e conversação fluida utilizando grandes modelos de linguagem (LLMs).",
        morpheuTags: "<span>Python</span><span>IA</span><span>LLM</span>",
        morpheuLink: "Ver Repositório",
        ghostTitle: "GhostGlicth Archive",
        ghostDesc: "Experiência atmosférica de e-commerce. Uma loja virtual altamente estilizada com estética gótica chuvosa e futurista (Cyber Tribal).",
        ghostTags: "<span>React 19</span><span>Vite 8</span><span>Frontend</span><span>E-commerce</span>",
        senaiModalTitle: "Técnico em Desenvolvimento de Sistemas",
        senaiModalContent: `
            <ul class="modal-list">
                <li><strong>Stack Técnica</strong>: Base sólida em PHP e Java com MySQL/PostgreSQL.</li>
                <li><strong>Inovação & IoT</strong>: Projetos de automação com Arduino e conceitos de IA.</li>
                <li><strong>Projeto EpiGuard</strong>: Sistema de visão computacional desenvolvido como TCC para detecção de EPIs via inteligência artificial.</li>
                <li><strong>Impacto Real</strong>: Colaboração de 4 meses com a <strong>Facchini</strong>, evoluindo o projeto EpiGuard em ambiente industrial corporativo.</li>
            </ul>
        `
    },
    en: {
        navHome: "Home",
        navAbout: "About",
        navStack: "Stack",
        navEducation: "Education",
        navProjects: "Projects",
        navContact: "Contact",
        badge: "Hello i am",
        subtitle: "Backend Developer",
        description: "Building robust and scalable systems. Backend specialist focusing on PHP, Java, and now exploring the field of **Artificial Intelligence**.",
        ctaProjects: "Explore Projects",
        ctaCv: "View CV",
        aboutTitle: "About Me",
        aboutText1: "I am a <strong>Junior Backend Developer</strong> with a solid foundation in PHP and Java, currently diving deep into system architecture.",
        aboutText2: "Currently, I am directing my studies towards **Artificial Intelligence**, seeking to integrate intelligent solutions and automation into backend development. I believe in constant innovation and the practical application of new technologies.",
        learningH3: "Currently learning:",
        learningP: "Deepening in **Artificial Intelligence**, Machine Learning, and Computer Vision.",
        stackTitle: "Tech Stack",
        stackBackend: "Backend",
        stackDatabase: "Databases",
        stackFrontend: "Frontend & Tools",
        eduTitle: "Education",
        degreeSenai: "Systems Development Technician",
        durationSenai: "1.5 years (Expected 2026)",
        projectsTitle: "Featured Projects",
        footerText: "Developed with a focus on Backend",
        morpheuTitle: "Morpheu AI Assistant",
        morpheuDesc: "Local intelligent virtual assistant. Focused on productivity, data security, and fluid conversation using Large Language Models (LLMs).",
        morpheuTags: "<span>Python</span><span>AI</span><span>LLM</span>",
        morpheuLink: "View Repository",
        ghostTitle: "GhostGlicth Archive",
        ghostDesc: "Atmospheric e-commerce experience. A highly stylized storefront blending traditional Rainy Gothic aesthetics with a modern Cyber Tribal edge.",
        ghostTags: "<span>React 19</span><span>Vite 8</span><span>Frontend</span><span>E-commerce</span>",
        senaiModalTitle: "Systems Development Technician",
        senaiModalContent: `
            <ul class="modal-list">
                <li><strong>Tech Stack</strong>: Solid foundation in PHP and Java with MySQL/PostgreSQL.</li>
                <li><strong>Innovation & IoT</strong>: Automation projects with Arduino and AI concepts.</li>
                <li><strong>EpiGuard Project</strong>: Computer vision system developed for detecting PPE usage through Artificial Intelligence.</li>
                <li><strong>Real Impact</strong>: 4-month partnership with <strong>Facchini</strong>, evolving the EpiGuard project in a corporate industrial environment.</li>
            </ul>
        `
    }
};

let currentLang = localStorage.getItem('portfolio-lang') || 'en';

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

    // Copy Phone Functionality
    const copyPhoneBtn = document.getElementById('copy-phone');
    if (copyPhoneBtn) {
        copyPhoneBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const phoneNumber = '+55 (17) 99206-5167';
            navigator.clipboard.writeText(phoneNumber).then(() => {
                const message = currentLang === 'pt' ? 'Copiado: ' : 'Copied: ';
                showToast(message + phoneNumber);
            });
        });
    }

    // --- Lógica do Modal ---
    const modal = document.getElementById('cert-modal');
    const modalBody = modal.querySelector('.modal-body');
    const closeBtn = document.querySelector('.close-modal');
    const certCards = document.querySelectorAll('.cert-card');

    certCards.forEach(card => {
        card.addEventListener('click', () => {
            const isSenai = card.id === 'senai-cert';
            
            if (isSenai) {
                const title = translations[currentLang].senaiModalTitle;
                const body = translations[currentLang].senaiModalContent;
                modalBody.innerHTML = `<h2>${title}</h2>${body}`;
                modal.classList.add('active');
            } else {
                // Conteúdo para outras certificações - por enquanto vazio ou genérico
                modalBody.innerHTML = `<h2>Certificação</h2><p>Detalhes em breve...</p>`;
                modal.classList.add('active');
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Fechar ao clicar fora do conteúdo
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    function showToast(message) {
        let toast = document.querySelector('.toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'toast';
            toast.innerHTML = `<i class="fa-solid fa-circle-check"></i><span class="toast-message"></span>`;
            document.body.appendChild(toast);
        }
        const toastMessage = toast.querySelector('.toast-message');
        toastMessage.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // --- Dynamic GitHub Projects ---
    const GITHUB_TOKEN = ''; // INSIRA SEU TOKEN AQUI (Omitido para o commit por segurança)
    const GITHUB_USER = 'arthur-tadeu';

    async function fetchGitHubProjects() {
        console.log("Iniciando busca de projetos no GitHub...");
        const projectsGrid = document.querySelector('.projects-grid');
        if (!projectsGrid) {
            console.error("Grid de projetos não encontrado!");
            return;
        }

        try {
            const response = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=10`, {
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN}`
                }
            });

            console.log("Resposta da API:", response.status);

            if (!response.ok) throw new Error(`Falha ao buscar repositórios: ${response.status}`);

            const repos = await response.json();
            console.log("Repositórios recebidos:", repos.length);
            
            projectsGrid.innerHTML = ''; // Limpar loading

            // Mapeamento de completude (slug exato do GitHub)
            const completionMap = {
                'ghostGlicth_': 18,
                'morpheu-assistent': 25,
            };

            repos.forEach(repo => {
                if (repo.fork) return;

                const percentage = completionMap[repo.name] || 5; // 5% como padrão para mostrar a barra
                
                const card = document.createElement('div');
                card.className = 'project-card reveal';
                
                let tagsHtml = '';
                if (repo.language) {
                    tagsHtml = `<span>${repo.language}</span>`;
                }
                if (repo.topics && repo.topics.length > 0) {
                    tagsHtml += repo.topics.slice(0, 2).map(t => `<span>${t}</span>`).join('');
                }

                card.innerHTML = `
                    <div class="pct-floating-badge">${percentage}%</div>
                    <div class="project-info">
                        <h3>${repo.name.replace(/[-_]/g, ' ')}</h3>
                        <p>${repo.description || 'Nenhuma descrição fornecida.'}</p>
                        
                        <div class="project-progress">
                            <div class="progress-header">
                                <span class="progress-label">Desenvolvimento</span>
                            </div>
                            <div class="progress-container">
                                <div class="progress-bar" style="width: ${percentage}%"></div>
                            </div>
                        </div>

                        <div class="project-tags">
                            ${tagsHtml}
                        </div>
                        <a href="${repo.html_url}" target="_blank" class="project-link">
                            <span>Ver Repositório</span> <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                `;
                
                projectsGrid.appendChild(card);
                
                if (typeof revealObserver !== 'undefined') {
                    revealObserver.observe(card);
                }
            });

        } catch (error) {
            console.error('Erro na integração com GitHub:', error);
            projectsGrid.innerHTML = `<div class="error">Erro ao carregar projetos do GitHub: ${error.message}</div>`;
        }
    }

    fetchGitHubProjects();
});
