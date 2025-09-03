document.addEventListener('DOMContentLoaded', () => {
    // ===============================
    // 1. Modo Dark/Light
    // ===============================
    const toggleBtn = document.getElementById("toggleTheme");
    const icon = toggleBtn?.querySelector("i");

    toggleBtn?.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        if (document.body.classList.contains("light-mode")) {
            icon?.classList.replace("fa-moon", "fa-sun");
        } else {
            icon?.classList.replace("fa-sun", "fa-moon");
        }
    });

    // ===============================
    // 2. Menú hamburguesa responsive
    // ===============================
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener('click', () => {
            hamburgerMenu.classList.toggle('active');
            mainNav.classList.toggle('active');
        });

        mainNav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    hamburgerMenu.classList.remove('active');
                    mainNav.classList.remove('active');
                }
            });
        });
    }

    // ===============================
    // 3. Animación de barras de progreso
    // ===============================
    const skillsSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.progress-bar');

    const animateProgressBars = () => {
        progressBars.forEach(bar => {
            const progress = bar.dataset.progress;
            bar.style.width = `${progress}%`;
        });
    };

    if (skillsSection) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateProgressBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(skillsSection);
    }

    // ===============================
    // 4. Validación de formulario en tiempo real
    // ===============================
    const contactForm = document.getElementById('contactForm');
    const formInputsConfig = [
        { element: document.getElementById('inpt-nombreUsuario'), required: true, type: 'text', message: 'Por favor, ingresa tu nombre.' },
        { element: document.getElementById('inpt-correoUsuario'), required: true, type: 'email', message: 'Por favor, ingresa un correo válido.' },
        { element: document.getElementById('inpt-asunto'), required: false, type: 'text', message: '' },
        { element: document.getElementById('inpt-descripcion'), required: true, type: 'textarea', message: 'Por favor, escribe un mensaje.' }
    ];

    const showError = (input, message) => {
        const formGroup = input.closest('.form-group');
        if (formGroup) {
            formGroup.classList.add('error');
            const span = formGroup.querySelector('.error-message');
            if (span) span.textContent = message;
        }
    };

    const clearError = (input) => {
        const formGroup = input.closest('.form-group');
        if (formGroup) {
            formGroup.classList.remove('error');
            const span = formGroup.querySelector('.error-message');
            if (span) span.textContent = '';
        }
    };

    const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());

    const validateField = config => {
        const input = config.element;
        if (!input) return true;
        clearError(input);

        if (config.required && input.value.trim() === '') {
            showError(input, config.message);
            return false;
        }

        if (config.type === 'email' && input.value.trim() && !validateEmail(input.value)) {
            showError(input, 'El formato del correo electrónico no es válido.');
            return false;
        }

        return true;
    };

    formInputsConfig.forEach(config => {
        if (config.element) {
            config.element.addEventListener('input', () => validateField(config));
            config.element.addEventListener('blur', () => validateField(config));
        }
    });

    contactForm?.addEventListener('submit', event => {
        event.preventDefault();
        let allValid = true;
        formInputsConfig.forEach(config => {
            if (!validateField(config)) allValid = false;
        });

        if (allValid) {
            fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    alert('¡Formulario enviado con éxito!');
                    contactForm.reset();
                    formInputsConfig.forEach(c => clearError(c.element));
                } else alert('Error al enviar el formulario.');
            })
            .catch(() => alert('Error de conexión.'));
        } else {
            alert('Corrige los errores antes de enviar.');
        }
    });

    // ===============================
    // 5. Interacción de cards de proyectos
    // ===============================
    document.querySelectorAll('.card_project').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 12px 25px rgba(0,0,0,0.4)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
        });
    });

    // ===============================
    // 6. Scroll suave
    // ===============================
    document.querySelectorAll('.main-nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            const offset = target.getBoundingClientRect().top + window.pageYOffset - (document.getElementById('header')?.offsetHeight || 0) - 20;
            window.scrollTo({ top: offset, behavior: "smooth" });
        });
    });

    // ===============================
    // 7. Carrusel de referencias
    // ===============================
    const carousel = document.querySelector('.carousel-slides');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-button');
    const nextBtn = document.querySelector('.next-button');
    const indicators = document.querySelectorAll('.indicator');

    if (carousel && slides.length > 0) {
        let currentIndex = 0;
        const totalSlides = slides.length;
        let autoplayInterval;

        const showSlide = index => {
            currentIndex = (index + totalSlides) % totalSlides;
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
            indicators.forEach((ind, i) => ind.classList.toggle('active', i === currentIndex));
        };

        prevBtn?.addEventListener('click', () => { showSlide(currentIndex - 1); resetAutoplay(); });
        nextBtn?.addEventListener('click', () => { showSlide(currentIndex + 1); resetAutoplay(); });
        indicators.forEach((ind, i) => ind.addEventListener('click', () => { showSlide(i); resetAutoplay(); }));

        const startAutoplay = () => autoplayInterval = setInterval(() => showSlide(currentIndex + 1), 5000);
        const stopAutoplay = () => clearInterval(autoplayInterval);
        const resetAutoplay = () => { stopAutoplay(); setTimeout(startAutoplay, 10000); };

        carousel.addEventListener('mouseenter', stopAutoplay);
        carousel.addEventListener('mouseleave', startAutoplay);

        showSlide(0);
        startAutoplay();
    }
});
