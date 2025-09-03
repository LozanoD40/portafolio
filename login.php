<?php
$error = '';
if (isset($_GET['error'])) {
    if ($_GET['error'] === 'email') {
        $error = 'Por favor, ingresa un correo válido.';
    } elseif ($_GET['error'] === 'password') {
        $error = 'Por favor, ingresa una contraseña válida.';
    } elseif ($_GET['error'] === 'shortpass') {
        $error = 'La contraseña debe tener al menos 5 caracteres.';
    }
}
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Iniciar Sesión</title>
    <link rel="stylesheet" href="assets/CSS/styles_css/styles.css">
    <link rel="stylesheet" href="assets/CSS/styles_css/login.css">
</head>

<body class="login-body">
    <div class="login-container">
        <h2>Iniciar Sesión</h2>
        <?php if ($error): ?>
            <div class="error-message"><?php echo $error; ?></div>
        <?php endif; ?>
        <form action="procesar_login.php" method="post">
            <div class="form-group">
                <label for="email">Correo:</label>
                <input type="email" name="email" id="email" required>
            </div>
            <div class="form-group">
                <label for="password">Contraseña:</label>
                <input type="password" name="password" id="password" required>
            </div>
            <button type="submit">Entrar</button>
        </form>
    </div>
</body>

</html>