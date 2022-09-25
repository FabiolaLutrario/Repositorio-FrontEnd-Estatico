
let usuario = document.querySelector("#usuario");
let password = document.querySelector("#password");
let botonInicioSesion = document.querySelector("#botonInicioSesion");
let logoCerrarSesion = document.querySelector("#logoCerrarSesion");
let logoIniciarSesion = document.querySelector("#logoIniciarSesion");
let form = document.querySelector("#form");
let usuarioContraseñaIncorrectos = document.querySelector("#usuarioContraseñaIncorrectos");
let botonCerrarModalSesion = document.querySelector("#botonCerrarModalSesion");
let botonEditarExperiencia = document.querySelector("#botonEditarExperiencia");
let botonEliminarExperiencia = document.querySelector("#botonEliminarExperiencia");
let botonAgregarEducacion = document.querySelector("#botonAgregarEducacion");
let botonEliminarEducacion = document.querySelector("#botonEliminarEducacion");
let botonAgregarHabilidad = document.querySelector("#botonAgregarHabilidad");
let botonEditarHabilidad = document.querySelector("#botonEditarHabilidad");
let botonEliminarHabilidad = document.querySelector("#botonEliminarHabilidad");
let botonAgregarIdioma = document.querySelector("#botonAgregarIdioma");
let botonEditarIdioma = document.querySelector("#botonEditarIdioma");
let botonEliminarIdioma = document.querySelector("#botonEliminarIdioma");
let botonAgregarProyecto = document.querySelector("#botonAgregarProyecto");
let botonEditarProyecto = document.querySelector("#botonEditarProyecto");
let botonEliminarProyecto = document.querySelector("#botonEliminarProyecto");
let opcionCerrarSesion = document.querySelector("#opcionCerrarSesion");

    function cerrarModal(){
    let habilitarCierre=false;

    if (form.usuario.value=="usuario" && form.password.value=="1234"){
        habilitarCierre=true;
    }
        if(habilitarCierre==true){
            botonInicioSesion.setAttribute("data-bs-dismiss","modal");
        } else{
            habilitarCierre=false;
            botonInicioSesion.removeAttribute("data-bs-dismiss","modal");
        }
}

function validar(){
    let deshabilitar=true;

    if (usuario.value=="usuario" && password.value=="1234"){
        deshabilitar=false;
    }else{
        usuarioContraseñaIncorrectos.style.display="flex";
    }

    if(deshabilitar==false){
        logoIniciarSesion.style.disabled=true;
        logoIniciarSesion.style.display="none";
        logoCerrarSesion.disabled=false;
        logoCerrarSesion.style.display="inline";
        botonBanner.disabled=false;
        botonBanner.style.display="inline";
        botonFotoPerfil.disabled=false;
        botonFotoPerfil.style.display="inline";
        botonNombreyApellido.disabled=false;
        botonNombreyApellido.style.display="inline";
        botonTitulo.disabled=false;
        botonTitulo.style.display="inline";
        botonAgregarExperiencia.style.display="inline";
        botonAgregarExperiencia.disabled=false;
        botonEditarExperiencia.style.display="inline";
        botonEditarExperiencia.disabled=false;
        botonEliminarExperiencia.style.display="inline";
        botonEliminarExperiencia.disabled=false;
        botonAgregarEducacion.style.display="inline";
        botonAgregarEducacion.disabled=false;
        botonEditarEducacion.style.display="inline";
        botonEditarEducacion.disabled=false;
        botonEliminarEducacion.style.display="inline";
        botonEliminarEducacion.disabled=false;
        botonAgregarHabilidad.style.display="inline";
        botonAgregarHabilidad.disabled=false;
        botonEditarHabilidad.style.display="inline";
        botonEditarHabilidad.disabled=false;
        botonEliminarHabilidad.style.display="inline";
        botonEliminarHabilidad.disabled=false;
        botonAgregarIdioma.style.display="inline";
        botonAgregarIdioma.disabled=false;
        botonEditarIdioma.style.display="inline";
        botonEditarIdioma.disabled=false;
        botonEliminarIdioma.style.display="inline";
        botonEliminarIdioma.disabled=false;
        botonAgregarProyecto.style.display="inline";
        botonAgregarProyecto.disabled=false;
        botonEditarProyecto.style.display="inline";
        botonEditarProyecto.disabled=false;
        botonEliminarProyecto.style.display="inline";
        botonEliminarProyecto.disabled=false;
    }
}

function esconderMensajeUsuarioIncorrecto(){
    usuarioContraseñaIncorrectos.style.display="none";
    usuario.value="";
    password.value="";
}

function cerrarSesion(){
    location.reload();
}

form.addEventListener('keyup', cerrarModal)
botonInicioSesion.addEventListener('click',validar)
opcionCerrarSesion.addEventListener('click',cerrarSesion)
botonCerrarModalSesion.addEventListener('click',esconderMensajeUsuarioIncorrecto)