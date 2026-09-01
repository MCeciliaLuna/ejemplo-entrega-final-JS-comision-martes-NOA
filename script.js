console.log("Hola mundo");

const nombreUsuario = document.getElementById("nombre-y-apellido");
const emailUsuario = document.getElementById("email");
const contraseniaUsuario = document.getElementById("contrasenia");
const confirmacionContraseniaUsuario = document.getElementById("confirmacion-contrasenia");

const datosUsuario = () => {
    const nombre = nombreUsuario.value;
    const email = emailUsuario.value;
    const contrasenia = contraseniaUsuario.value;
    const confirmacionContrasenia = confirmacionContraseniaUsuario.value;
    
    console.log(nombre, email, contrasenia, confirmacionContrasenia);

}

console.log(nombreUsuario, emailUsuario, contraseniaUsuario, confirmacionContraseniaUsuario)