/**
 * JLM Motors - Scripts de Front-End
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. Configuração Centralizada do WhatsApp
    // ==========================================
    const whatsappConfig = {
        url: "https://wa.me/5541997763386?text=Ol%C3%A1%20JLM%20Motors," // Link direto do WhatsApp
    };

    function initWhatsAppButtons() {
        const whatsappUrl = whatsappConfig.url;
        
        const whatsappButtons = document.querySelectorAll('.btn-whatsapp-dynamic');
        whatsappButtons.forEach(btn => {
            btn.setAttribute('href', whatsappUrl);
            btn.setAttribute('target', '_blank');
            btn.setAttribute('rel', 'noopener noreferrer');
        });
    }

    // ==========================================
    // 2. Mudança no Header ao Rolar (Scroll Navbar)
    // ==========================================
    const mainNav = document.getElementById('mainNav');
    
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            mainNav.classList.add('navbar-scrolled');
        } else {
            mainNav.classList.remove('navbar-scrolled');
        }
    }

    // ==========================================
    // 3. Fechamento Automático do Menu Mobile
    // ==========================================
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navbarContent');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
                bsCollapse.hide();
            }
        });
    });

    // ==========================================
    // 4. Animações de Scroll com IntersectionObserver
    // ==========================================
    const scrollElements = document.querySelectorAll('.js-scroll');

    const elementInView = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: Desobservar após animar
                observer.unobserve(entry.target);
            }
        });
    };

    const scrollObserver = new IntersectionObserver(elementInView, {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    });

    scrollElements.forEach(el => scrollObserver.observe(el));

    // Inicialização
    initWhatsAppButtons();
    window.addEventListener('scroll', handleNavbarScroll);
});