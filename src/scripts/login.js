document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Capturar los valores del formulario
        const correo = form.querySelector('input[type="email"]').value.trim();
        const contraseña = form.querySelector('input[type="password"]').value.trim();

        // Validaciones
        if (!correo || !contraseña) {
            alert("Por favor ingrese su correo y contraseña.");
            return;
        }

        // Obtener usuarios de localStorage
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        // Verificar si el correo existe
        const usuario = usuarios.find(u => u.correo === correo);

        if (!usuario) {
            alert("Correo electrónico no registrado.");
            return;
        }

        // Verificar si la contraseña coincide
        if (usuario.contraseña !== contraseña) {
            alert("Contraseña incorrecta.");
            return;
        }

        // Si las credenciales son correctas, mostrar mensaje de éxito
        alert("Inicio de sesión exitoso.");
        sessionStorage.setItem("usuario", JSON.stringify(usuario));
        // Aquí puedes redirigir a otra página, por ejemplo:
         window.location.href = "/blogs"; 
    });
});
