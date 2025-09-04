<?php
session_start();
if (!isset($_SESSION['logueado']) || $_SESSION['logueado'] !== true) {
    header('Location: login.php');
    exit();
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="assets/CSS/styles_css/styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

  <title>Mi Portafolio</title>
</head>
<body>
  <header id="header">
    <h1>Portafolio</h1>
    <button class="hamburger-menu" aria-label="Abrir menú" aria-expanded="false" aria-controls="main-nav">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav class="main-nav"> <!-- CLASE main-nav es importante -->
      <a class="nav-link" href="#home" aria-label="Inicio"><i class="fas fa-home"></i>Acerca de</a>
      <a class="nav-link" href="#skills" aria-label="Habilidades"><i class="fas fa-hammer"></i> Habilidades</a>
      <a class="nav-link" href="#proyect" aria-label="Proyectos"><i class="fas fa-code"></i> Proyectos</a>
      <a class="nav-link" href="#reference" aria-label="Referencias"><i class="fas fa-user"></i> Referencias</a>
      <a class="nav-link" href="#contact" aria-label="Contacto"><i class="fas fa-envelope"></i> Contacto</a>

      <button id="toggleTheme" class="theme-btn" aria-label="Cambiar tema"><i class="fas fa-moon"></i> </button>

      <a href="logout.php" title="Cerrar sesión" aria-label="Cerrar sesión">
        <i class="fas fa-sign-out-alt"></i>
      </a>
    </nav>
  </header>
  <main id="main-content">
    <section id="home">
      <div class="contenido" id="home_contenido">
        <h2 class="titulo">Acerca de mi</h2>
        <div id="contenido_home">
          <img src="assets/imagenes/foto de perfil.jpg" alt="Foto de perfil" id="imagen_home">
          <p>¡Hola! Soy <b>Diego Agustin Lozano Mora</b>, un programador en formación apasionado por crear soluciones
            prácticas y creativas con código.
            Me interesa el desarrollo web y disfruto transformar ideas en proyectos funcionales.
            <br>Actualmente me estoy especializando en HTML, CSS y JavaScript, mientras exploro frameworks modernos y
            buenas prácticas de programación.
            Mi objetivo es crecer como desarrollador fullstack y aportar a proyectos que generen impacto positivo. Soy
            curioso, autodidacta y me motiva aprender algo nuevo cada día.
          </p>
        </div>
      </div>
    </section>
    <section id="skills" class="skills-section">
      <div class="contenido">
        <h2 class="titulo">Mis Habilidades</h2>
        <div class="skills-grid">
          <div class="skill-item">
            <h3>HTML</h3>
            <div class="progress-bar-container">
              <div class="progress-bar html" data-progress="90"></div>
            </div>
          </div>
          <div class="skill-item">
            <h3>CSS</h3>
            <div class="progress-bar-container">
              <div class="progress-bar html" data-progress="85"></div>
            </div>
          </div>
          <div class="skill-item">
            <h3>JavaScript</h3>
            <div class="progress-bar-container">
              <div class="progress-bar html" data-progress="70"></div>
            </div>
          </div>
          <div class="skill-item">
            <h3>Node-JS</h3>
            <div class="progress-bar-container">
              <div class="progress-bar html" data-progress="60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="proyect">
      <div class="contenido">
        <h2 class="titulo">Proyectos</h2>
        <div class="projects-container">
      <div class="card_project">
        <a href="https://lozanod40.github.io/landing-page/" target="_blank">
          <div class="card_content">
            <img src="assets/imagenes/foto_proyecto1_landing-page.jpg" alt="Imagen de una Landing Page">
            <p>Una página de presentación personal</p>
            <p><b>HTML + CSS</b></p>
          </div>
        </a>
      </div>
      <div class="card_project">
        <a href="https://lozanod40.github.io/Reloj-digital-en-vivo/" target="_blank">
          <div class="card_content">
            <img src="assets/imagenes/foto_proyecto2_reloj-digital.jpg" alt="Imagen de un Reloj Digital">
            <p>Una página de un reloj digital en vivo</p>
            <p><b>HTML + CSS + JavaScript</b></p>
          </div>
        </a>
      </div>
      <div class="card_project">
        <a href="https://lozanod40.github.io/Calculadora-basica/" target="_blank">
          <div class="card_content">
            <img src="assets/imagenes/foto_proyecto3_calculadora-basica.jpg" alt="Imagen de una calculadora">
            <p>Una página de una calculadora</p>
            <p><b>HTML + CSS + JavaScript</b></p>
          </div>
        </a>
      </div>
      <div class="card_project">
        <a href="https://lozanod40.github.io/Galeria-de-foto/" target="_blank">
          <div class="card_content">
            <img src="assets/imagenes/foto_proyecto4_galeria-de-foto.jpg" alt="Imagen de una galería de fotos">
            <p>Una página de una galería de fotos</p>
            <p><b>HTML + CSS + JavaScript</b></p>
          </div>
        </a>
        </div>
        </div>
        </div>
    </section>
    <section id="reference">
      <div class="contenido">
        <h2 class="titulo">Referencias</h2>
        <div class="carousel-container">
          <button class="carousel-button prev-button">&lt;</button>
          <button class="carousel-button next-button">&gt;</button>
          <!-- Contenedor de slides -->
          <div class="carousel-slides">
            <div class="referencia slide">
              <h3>María López - Profesora de Programación Web</h3>
              <div class="referecia_cuerpo">
                <img src="assets/imagenes/foto_referencia_1.jpg" alt="Foto de María López">
                <p>"Tuve la oportunidad de guiarlo en varios proyectos académicos, y siempre mostró gran interés por
                  aprender nuevas tecnologías. Su capacidad para resolver problemas y su constancia destacan sobre la
                  media de los estudiantes."</p>
              </div>
            </div>
            <div class="referencia slide">
              <h3>Carlos Méndez - Compañero de equipo en un hackathon</h3>
              <div class="referecia_cuerpo">
                <img src="assets/imagenes/foto_referencias_2.jpg" alt="Foto de Carlos Méndez">
                <p>"Trabajamos juntos en un hackathon y demostró liderazgo, creatividad y compromiso. Su habilidad para
                  organizar las ideas del grupo y transformar conceptos en código funcional fue clave para terminar el
                  proyecto a tiempo."</p>
              </div>
            </div>
            <div class="referencia slide">
              <h3>Ana Torres - Supervisora en prácticas profesionales</h3>
              <div class="referecia_cuerpo">
                <img src="assets/imagenes/foto_referencia_3.jpg" alt="Foto de Ana Torres">
                <p>"Durante sus prácticas en la empresa, siempre cumplió con las tareas asignadas de manera eficiente y
                  con atención al detalle. Su iniciativa para mejorar procesos técnicos lo hace un candidato valioso
                  para cualquier equipo de desarrollo."</p>
              </div>
            </div>
            <div class="referencia slide">
              <h3>José Ramírez - Amigo y colaborador en proyectos personales</h3>
              <div class="referecia_cuerpo">
                <img src="assets/imagenes/foto_referencia_4.jpg" alt="Foto de José Ramírez">
                <p>"He colaborado con él en varios proyectos independientes, y puedo decir que siempre está dispuesto a
                  investigar y aprender lo necesario para llevar las ideas a la realidad. Su entusiasmo contagia a
                  quienes lo rodean."</p>
              </div>
            </div>
            <div class="referencia slide">
              <h3>Mario Fernández - Mentor en desarrollo personal</h3>
              <div class="referecia_cuerpo">
                <img src="assets/imagenes/foto_referencia_5.jpg" alt="Foto de Mario Fernández">
                <p>"Es una persona proactiva, con gran disposición para aprender y mejorar constantemente. Su actitud
                  positiva y capacidad para adaptarse a diferentes entornos lo convierten en alguien confiable y con
                  mucho potencial."</p>
              </div>
            </div>
          </div>
          <!-- Indicadores de posición -->
          <div class="carousel-indicators">
            <span class="indicator active" data-index="0"></span>
            <span class="indicator" data-index="1"></span>
            <span class="indicator" data-index="2"></span>
            <span class="indicator" data-index="3"></span>
            <span class="indicator" data-index="4"></span>
          </div>
        </div>
      </div>
    </section>
    <section id="contact">
      <div class="contenido">
        <h2 class="titulo">Contacto</h2>
        <form id="contactForm" class="formulario" action="https://formspree.io/f/xzzaagrg" method="POST">
          <div class="form-group">
            <label for="inpt-nombreUsuario">Nombre:</label>
            <input type="text" name="nombreUsuario" class="formulario_input_nm" id="inpt-nombreUsuario" required />
            <span class="error-message"></span>
          </div>
          <div class="form-group">
            <label for="inpt-correoUsuario">Email:</label>
            <input type="email" name="email" class="formulario_input_nm" id="inpt-correoUsuario" required />
            <span class="error-message"></span>
          </div>
          <div class="form-group">
            <label for="inpt-asunto">Asunto</label>
            <input type="text" name="asunto" class="formulario_input_nm" id="inpt-asunto" />
            <span class="error-message"></span>
          </div>
          <div class="form-group">
            <label for="inpt-descripcion">Mensaje:</label>
            <textarea name="mensaje" id="inpt-descripcion" class="formulario_input_ta" required></textarea>
            <span class="error-message"></span>
          </div>
          <button type="submit" class="formulario_enviar">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  </main>
  <footer id="footer-content">
    <div class="footer" id="footer">
      <ul class="footer_lu">
        <li><a href="https://www.facebook.com/notengofacebook" aria-label="Facebook"><i class="fab fa-facebook"></i></a></li>
        <li><a href="https://www.instagram.com/notengo" aria-label="Instagram"><i class="fab fa-instagram"></i></a></li>
        <li><a href="https://github.com/LozanoD40" aria-label="GitHub"><i class="fab fa-github"></i></a></li>
        <li><a href="https://www.twitter.com/notengotwitter" aria-label="Twitter"><i class="fab fa-twitter"></i></a></li>
        <li><a href="https://www.linkedin.com/in/diego-agustin-lozano-mora-170459382/" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a></li>
        <li><a href="https://wa.me/593963108812" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a></li>
      </ul>
      <hr>
      <p class="footer_p">Diego Lozano © 2025</p>
    </div>
  </footer>
  <script src="assets/javascript/javascript.js"></script>
</body>
</html>