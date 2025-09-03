<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email'] ?? '');
    $password = trim($_POST['password'] ?? '');

    // Validar campos vacíos
    if (empty($email)) {
        header('Location: login.php?error=email');
        exit();
    }

    if (empty($password)) {
        header('Location: login.php?error=password');
        exit();
    }

    // Validar longitud mínima de contraseña
    if (strlen($password) < 5) {
        header('Location: login.php?error=shortpass');
        exit();
    }

    // Todo correcto: iniciar sesión sin validar contra usuarios
    $_SESSION['logueado'] = true;
    $_SESSION['usuario'] = $email;

    // Redirigir a la página protegida
    header('Location: index.php');
    exit();
} else {
    // Si entran directo a este archivo
    header('Location: login.php');
    exit();
}
