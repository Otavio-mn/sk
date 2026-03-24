// ========== MOBILE MENU TOGGLE ==========
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ========== CONTACT FUNCTION ==========
function handleContact() {
    const email = 'samuel@example.com';
    const subject = 'Contato sobre Samuel Batista Kavalerski';
    const body = 'Olá, gostaria de saber mais sobre Samuel Batista Kavalerski...';
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Alternativa: Mostrar mensagem
    setTimeout(() => {
        alert('Obrigado pelo interesse! Em breve entraremos em contato com você.');
    }, 500);
}

// ========== ANIMAÇÃO DE SCROLL ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar cards de valores
document.querySelectorAll('.valor-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Observar stat cards
document.querySelectorAll('.stat-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// ========== EFEITO DE PARALLAX ==========
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPos = window.scrollY;
    
    if (hero) {
        hero.style.backgroundPosition = `0 ${scrollPos * 0.5}px`;
    }
});

// ========== NAVBAR BACKGROUND AO SCROLL ==========
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
});

// ========== ANIMAÇÃO ЧИСЛА DO TIMELINE ==========
const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.animation = `fadeInUp 0.6s ease-out ${index * 0.2}s forwards`;
});

// ========== CONTADOR SIMPLES (OPCIONAL) ==========
let hasAnimated = false;

function animateCounters() {
    if (hasAnimated) return;
    hasAnimated = true;

    // Se você quiser adicionar números que contam, adicione aqui
    // Exemplo:
    // const counters = document.querySelectorAll('.counter');
    // counters.forEach(counter => {
    //     const target = parseInt(counter.dataset.target);
    //     let current = 0;
    //     const increment = target / 50;
    //     
    //     const updateCounter = () => {
    //         current += increment;
    //         if (current < target) {
    //             counter.textContent = Math.floor(current);
    //             setTimeout(updateCounter, 50);
    //         } else {
    //             counter.textContent = target;
    //         }
    //     };
    //     
    //     updateCounter();
    // });
}

// Ativar contadores quando a seção de stats estiver visível
const statsSection = document.querySelector('.sobre');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    });
    
    statsObserver.observe(statsSection);
}

// ========== SMOOTH SCROLL PARA NAVEGAÇÃO ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========== FEEDBACK VISUAL AO ENVIAR CONTATO ==========
const submitBtn = document.querySelector('.btn-secondary');
if (submitBtn) {
    submitBtn.addEventListener('click', function() {
        const originalText = this.textContent;
        this.textContent = 'Obrigado!';
        this.disabled = true;
        
        setTimeout(() => {
            this.textContent = originalText;
            this.disabled = false;
        }, 2000);
    });
}

// ========== GERAÇÃO DINÂMICA DE ANIMAÇÕES ==========
function createStyleSheet() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    document.head.appendChild(style);
}

createStyleSheet();

// ========== CARREGAMENTO COMPLETO ==========
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website do Samuel Batista Kavalerski carregado com sucesso!');
    
    // Adicione aqui qualquer lógica que precise ser executada após carregar o DOM
    // Exemplo: carregar dados de uma API, atualizar estatísticas, etc.
});

// ========== DARK MODE TOGGLE (OPCIONAL) ==========
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Verificar preferência salva
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}
