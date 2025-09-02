const toggleBtn = document.getElementById("toggleTheme");
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    // Cambiar icono entre luna y sol
    if (document.body.classList.contains("light-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. Menú hamburguesa responsive
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav'); // Tu nav actual

    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener('click', () => {
            hamburgerMenu.classList.toggle('active');
            mainNav.classList.toggle('active');
        });

        // Cerrar el menú al hacer clic en un enlace (en modo móvil)
        mainNav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) { // Coincide con tu breakpoint CSS
                    hamburgerMenu.classList.remove('active');
                    mainNav.classList.remove('active');
                }
            });
        });
    }

    // 2. Barras de progreso animadas (Habilidades)
    const skillsSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.progress-bar');

    const animateProgressBars = () => {
        progressBars.forEach(bar => {
            const progress = bar.dataset.progress; // Obtiene el valor de 'data-progress'
            bar.style.width = `${progress}%`; // Establece el ancho para animar
        });
    };

    // Usamos Intersection Observer para animar cuando la sección de habilidades es visible
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.unobserve(entry.target); // Deja de observar una vez animado
            }
        });
    }, {
        threshold: 0.5 // La animación se dispara cuando el 50% de la sección es visible
    });

    if (skillsSection) {
        observer.observe(skillsSection);
    }

    // 3. Validación de formulario en tiempo real
    const contactForm = document.getElementById('contactForm'); // Tu id de formulario
    const nameInput = document.getElementById('inpt-nombreUsuario');
    const emailInput = document.getElementById('inpt-correoUsuario');
    const subjectInput = document.getElementById('inpt-asunto');
    const messageInput = document.getElementById('inpt-descripcion');

    // Array de configuraciones de los campos del formulario
    const formInputsConfig = [
        { element: nameInput, required: true, type: 'text', message: 'Por favor, ingresa tu nombre.' },
        { element: emailInput, required: true, type: 'email', message: 'Por favor, ingresa un correo electrónico válido.' },
        { element: subjectInput, required: false, type: 'text', message: '' }, // No requerido en la validación JS
        { element: messageInput, required: true, type: 'textarea', message: 'Por favor, escribe un mensaje.' }
    ];

    const showError = (inputElement, message) => {
        const formGroup = inputElement.closest('.form-group'); // Encuentra el ancestro '.form-group'
        if (formGroup) {
            formGroup.classList.add('error'); // Añade la clase 'error'
            const errorMessageSpan = formGroup.querySelector('.error-message');
            if (errorMessageSpan) {
                errorMessageSpan.textContent = message; // Muestra el mensaje
            }
        }
    };

    const clearError = (inputElement) => {
        const formGroup = inputElement.closest('.form-group');
        if (formGroup) {
            formGroup.classList.remove('error'); // Quita la clase 'error'
            const errorMessageSpan = formGroup.querySelector('.error-message');
            if (errorMessageSpan) {
                errorMessageSpan.textContent = ''; // Limpia el mensaje
            }
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validateField = (inputConfig) => {
        const inputElement = inputConfig.element;
        const isRequired = inputConfig.required;
        const inputType = inputConfig.type;
        const defaultMessage = inputConfig.message;

        clearError(inputElement); // Limpia cualquier error previo

        if (isRequired && inputElement.value.trim() === '') {
            showError(inputElement, defaultMessage);
            return false;
        }

        if (inputType === 'email' && inputElement.value.trim() !== '' && !validateEmail(inputElement.value)) {
            showError(inputElement, 'El formato del correo electrónico no es válido.');
            return false;
        }
        return true; // La validación pasó
    };

    // Añadir event listeners para validación en tiempo real (input y blur)
    formInputsConfig.forEach(config => {
        if (config.element) { // Asegurarse de que el elemento exista
            config.element.addEventListener('input', () => validateField(config));
            config.element.addEventListener('blur', () => validateField(config));
        }
    });

    // Event listener para el envío del formulario
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita recargar la página

            let allFieldsValid = true;
            formInputsConfig.forEach(config => {
                if (!validateField(config)) {
                    allFieldsValid = false;
                }
            });

            if (allFieldsValid) {
                fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: { 'Accept': 'application/json' }
                })
                    .then(response => {
                        if (response.ok) {
                            alert('¡Formulario enviado con éxito! Nos pondremos en contacto contigo pronto.');
                            contactForm.reset(); // Limpiar formulario
                            formInputsConfig.forEach(config => clearError(config.element)); // Limpiar mensajes de error
                        } else {
                            alert('Hubo un problema al enviar el formulario. Inténtalo de nuevo.');
                        }
                    })
                    .catch(() => {
                        alert('Error de conexión. Inténtalo más tarde.');
                    });
            } else {
                alert('Por favor, corrige los errores en el formulario antes de enviar.');
            }
        });
    }

    // 4. Manipulación del DOM y Event Listeners - Cards interactivas de Proyectos
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        // Evento al pasar el ratón por encima
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)'; // Ligeramente más grande y arriba
            card.style.boxShadow = '0 12px 25px rgba(0, 0, 0, 0.4)'; // Sombra más pronunciada
        });

        // Evento al quitar el ratón
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)'; // Volver al estado original
            card.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)'; // Volver a la sombra original
        });

        // Opcional: Evento al hacer click (simulando ir a un proyecto)
        card.addEventListener('click', () => {
            const link = card.querySelector('a');
            if (link && link.href) {
                // Puedes abrir el enlace directamente o mostrar un modal con más detalles
                // window.open(link.href, link.target || '_self'); // Abrir enlace
                console.log(`Clic en tarjeta de proyecto: ${link.href}`);
            }
        });
    });

    // 5. Scroll suave para los enlaces de navegación
    document.querySelectorAll('.main-nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calcular la posición para tener en cuenta el header fijo
                const headerOffset = document.getElementById('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset - 20; // 20px de margen extra

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});

// Código para el carrusel de referencias
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel-slides');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const indicators = document.querySelectorAll('.indicator');

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Función para mostrar un slide específico
    function showSlide(index) {
        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        // Mover el carrusel
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Actualizar indicadores
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === currentIndex);
        });
    }

    // Event listeners para los botones
    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    // Event listeners para los indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Inicializar el carrusel
    showSlide(0);

    // Opcional: Autoplay
    let autoplayInterval;

    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            showSlide(currentIndex + 1);
        }, 5000); // Cambiar cada 5 segundos
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    // Iniciar autoplay
    startAutoplay();

    // Detener autoplay al interactuar con el carrusel
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    prevButton.addEventListener('click', () => {
        stopAutoplay();
        setTimeout(startAutoplay, 10000); // Reiniciar después de 10 segundos
    });
    nextButton.addEventListener('click', () => {
        stopAutoplay();
        setTimeout(startAutoplay, 10000); // Reiniciar después de 10 segundos
    });
});