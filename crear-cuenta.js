<<<<<<< HEAD
const formulario = document.getElementById("formularioRegistro");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const confirmarPassword = document.getElementById("confirmarPassword");

const mensajeError = document.getElementById("mensajeError");


formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    mensajeError.textContent = "";


    // Comprobar que las contraseñas coincidan

    if (password.value !== confirmarPassword.value) {

        mensajeError.textContent =
            "Las contraseñas no coinciden.";

        return;
    }


    // Comprobar longitud de contraseña

    if (password.value.length < 8) {

        mensajeError.textContent =
            "La contraseña debe tener al menos 8 caracteres.";

        return;
    }


    // Si todo está correcto

    alert(
        "¡Cuenta creada correctamente, " +
        nombre.value +
        "!"
    );


    // Limpiar formulario

    formulario.reset();

=======
const formulario = document.getElementById("formularioRegistro");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const confirmarPassword = document.getElementById("confirmarPassword");

const mensajeError = document.getElementById("mensajeError");


formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    mensajeError.textContent = "";


    // Comprobar que las contraseñas coincidan

    if (password.value !== confirmarPassword.value) {

        mensajeError.textContent =
            "Las contraseñas no coinciden.";

        return;
    }


    // Comprobar longitud de contraseña

    if (password.value.length < 8) {

        mensajeError.textContent =
            "La contraseña debe tener al menos 8 caracteres.";

        return;
    }


    // Si todo está correcto

    alert(
        "¡Cuenta creada correctamente, " +
        nombre.value +
        "!"
    );


    // Limpiar formulario

    formulario.reset();

>>>>>>> origin/main
});