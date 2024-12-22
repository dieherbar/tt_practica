
const inputNombre = document.getElementById("nombre");
const inputEmail = document.getElementById("mail");
const inputMensaje = document.getElementById("formTextarea");
const enviarBtn = document.getElementById("enviar");
const alerta = document.getElementById("mensajeEmail");
const alertaNombre = document.getElementById("mensajeNombre");
const alertaTexto = document.getElementById("mensajeTexto");

function validarEmail(email) {
    const modeloEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return modeloEmail.test(email);
}

function validarNombre(nombre) {
    const modeloNombre = /^[a-zA-Z ]{3,16}$/;
    return modeloNombre.test(nombre);
}

function validarMensaje(mens) {
    const modeloMensaje = /^[a-zA-Z ]{15,250}$/;
    return modeloMensaje.test(mens);
}

enviarBtn.addEventListener("click", (algo) => {
    algo.preventDefault();
    const valorEmail = inputEmail.value;
    let valorNombre = inputNombre.value;
    let valorMensaje = inputMensaje.value;

    let isValid = true;

    if (!valorEmail) {
        alerta.innerHTML = "<span>El campo email esta vacio</span>"
        isValid = false;
    } else if (!validarEmail(valorEmail)) {
        alerta.innerHTML = "<span>Email no tiene un  formato valido</span>"
        isValid = false;
    } else {
        alerta.innerHTML = "";
    }
    console.log(valorNombre, valorEmail);

    if (!valorNombre) {
        alertaNombre.innerHTML = "<span>El campo nombre esta vacio</span>"
        isValid = false;
    } else {
        alertaNombre.innerHTML = "";
    }

    if (!valorMensaje) {
        alertaTexto.innerHTML = "<span>El campo mensaje esta vacio</span>"
        isValid = false;
    } else if (!validarMensaje(valorMensaje)) {
        alertaTexto.innerHTML = "<span>El mensaje debe tener entre 15 y 250 caracteres</span>"
        isValid = false;
    } else {
        alertaTexto.innerHTML = "";
    }

    if (isValid) {
        // Submit the form or perform the desired action
        document.getElementById("xpwagzjg").submit();
    }
})

function borrarMensaje() {
    alerta.innerHTML = "<span></span>"
}
function borrarMensajeNombre() {
    alertaNombre.innerHTML = "<span></span>"
}
function borrarMensajeTexto() {
    alertaTexto.innerHTML = "<span></span>"
}
