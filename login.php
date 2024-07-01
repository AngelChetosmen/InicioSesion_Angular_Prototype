<?php
// Recibir los datos del formulario
$email = $_POST['email'];
$password = $_POST['password'];

// Validación básica (simulada)
if ($email == 'usuario@example.com' && $password == 'contraseña123') {
    // Iniciar sesión exitosa
    // Aquí agregarías la lógica para enviar el correo electrónico de notificación

    // Ejemplo de envío de correo (requiere un servidor de correo configurado correctamente)
    $to = $email;
    $subject = 'Inicio de sesión exitoso';
    $message = 'Hola, has iniciado sesión correctamente.';
    $headers = 'From: tu_email@example.com' . "\r\n" .
        'Reply-To: tu_email@example.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    // Envío del correo
    if (mail($to, $subject, $message, $headers)) {
        // Redirigir al usuario o mostrar mensaje de éxito
        echo 'Inicio de sesión exitoso. Se ha enviado un correo de notificación.';
    } else {
        // Mostrar mensaje si falla el envío del correo
        echo 'Inicio de sesión exitoso, pero error al enviar el correo de notificación.';
    }
} else {
    // Mostrar mensaje de error si las credenciales no son válidas
    echo 'Inicio de sesión fallido. Por favor, verifica tus credenciales.';
}
?>
