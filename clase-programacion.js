const clasesBloqueadas =
    document.querySelectorAll(".bloqueada");


clasesBloqueadas.forEach(function(clase) {

    clase.addEventListener("click", function(event) {

        event.preventDefault();

        alert(
            "🔒 Completa las clases anteriores " +
            "para desbloquear este contenido."
        );

    });

});