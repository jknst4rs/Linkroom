/* ===================================
   LINKROOM - JAVASCRIPT PRINCIPAL
   Funciones de la pÃƒÂ¡gina inicial
=================================== */



document.addEventListener("DOMContentLoaded",()=>{


    // ===================================
    // MENÃƒÅ¡ MÃƒâ€œVIL
    // ===================================


    const botonMenu = document.querySelector(".menu-movil");

    const navegacion = document.querySelector(".navegacion");



    if(botonMenu){


        botonMenu.addEventListener("click",()=>{


            navegacion.classList.toggle("activo");


        });


    }





    // ===================================
    // ANIMACIONES AL BAJAR
    // ===================================


    const elementosAnimados = document.querySelectorAll(

        ".tarjeta-funcion, .tarjeta-curso, .tarjeta-flotante, .panel-estudiante"

    );



    const observador = new IntersectionObserver(

        (entradas)=>{


            entradas.forEach(entrada=>{


                if(entrada.isIntersecting){


                    entrada.target.classList.add("mostrar");


                }


            });



        },

        {

            threshold:0.2

        }


    );





    elementosAnimados.forEach(elemento=>{


        elemento.classList.add("oculto");


        observador.observe(elemento);


    });








    // ===================================
    // EFECTO DE BOTONES
    // ===================================



    const botones = document.querySelectorAll(

        ".boton-principal, .boton-secundario, button"

    );



    botones.forEach(boton=>{


        boton.addEventListener("click",function(){


            let efecto = document.createElement("span");


            efecto.className="efecto-click";


            this.appendChild(efecto);




            setTimeout(()=>{


                efecto.remove();


            },600);



        });



    });









    // ===================================
    // CONTADORES DE ESTADÃƒ STICAS
    // ===================================


    const contadores = document.querySelectorAll(

        ".estadisticas h2"

    );



    contadores.forEach(contador=>{


        let objetivo = parseInt(

            contador.innerText

        );


        let actual = 0;



        const aumentar = ()=>{


            if(actual < objetivo){


                actual += Math.ceil(objetivo/50);



                contador.innerText = actual + "+";



                setTimeout(aumentar,30);


            }else{


                contador.innerText = objetivo + "+";


            }


        };



        aumentar();



    });








    // ===================================
    // BOTONES DE CURSOS
    // ===================================


    const botonesCursos = document.querySelectorAll(

        ".tarjeta-curso button"

    );



    botonesCursos.forEach(boton=>{


        boton.addEventListener("click",()=>{


            alert(

            "Ã°Å¸Å¡â‚¬ PrÃƒÂ³ximamente podrÃƒÂ¡s acceder a este curso dentro de LinkRoom."

            );


        });


    });








    // ===================================
    // CAMBIO DEL ENCABEZADO AL BAJAR
    // ===================================


    const encabezado = document.querySelector(".encabezado");



    window.addEventListener("scroll",()=>{


        if(window.scrollY > 50){



            encabezado.style.background =

            "rgba(255,255,255,0.95)";



            encabezado.style.backdropFilter =

            "blur(10px)";



        }else{


            encabezado.style.background =

            "white";



            encabezado.style.backdropFilter =

            "none";


        }


    });





});
document.getElementById("colorButton").addEventListener("click", function () {
cambiarColor();
});

// Función que cambia el color de fondo al hacer clic
function cambiarColor() {
    let colores = ["#3af1d9", "#66cdaa", "#9370db", "#24d800", "#42c53d", "#01acac"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
}
