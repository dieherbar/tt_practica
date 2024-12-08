
const inputNombre = document.getElementById("nombre");
const inputEmail = document.getElementById("mail");
const enviarBtn = document.getElementById("enviar");
const mensaje = document.getElementById("mensaje");

function validarEmail(email){
    const modeloEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return modeloEmail.test(email);
}

enviarBtn.addEventListener("click",(algo) => {
    algo.preventDefault();
    const valorEmail = inputEmail.value;
    let valorNombre = inputNombre.value;

    if (!valorEmail){
        mensaje.innerHTML="<span>El campo email esta vacio</span>"
    }else if(!validarEmail(valorEmail)){
        mensaje.innerHTML="<span>Email no tiene un  formato valido</span>"
    }
    console.log(valorNombre, valorEmail);
})

function borrarMensaje(){
    mensaje.innerHTML = "<span></span>"
}