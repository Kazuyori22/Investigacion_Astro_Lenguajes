document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Capturar valores de los inputs
        const nombre = form.querySelector('input[type="text"]').value.trim();
        const correo = form.querySelector('input[type="email"]').value.trim();
        const contraseña = form.querySelectorAll('input[type="password"]')[0].value.trim();
        const confirmarContraseña = form.querySelectorAll('input[type="password"]')[1].value.trim();
        const fechaNacimiento = form.querySelector('input[type="date"]').value.trim();

        // Validaciones
        if (!nombre || !correo || !contraseña || !confirmarContraseña || !fechaNacimiento) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        if (contraseña !== confirmarContraseña) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        // Crear objeto usuario
        const usuario = { nombre, correo, contraseña, fechaNacimiento };

        // Obtener usuarios previos de localStorage
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        // Verificar si el correo ya está registrado
        if (usuarios.some(u => u.correo === correo)) {
            alert("Este correo ya está registrado.");
            return;
        }

        // Agregar usuario a la lista y guardar en localStorage
        usuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        console.log("Usuarios guardados en localStorage:", usuarios);


         window.location.href = "/gracias";
        form.reset(); // Limpiar el formulario
    });
});
