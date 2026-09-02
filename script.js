console.log("Hola mundo");

const nombreUsuario = document.getElementById("nombre-y-apellido");
const edadUsuario = document.getElementById("edad")
const emailUsuario = document.getElementById("email");
const contraseniaUsuario = document.getElementById("contrasenia");
const confirmacionContraseniaUsuario = document.getElementById("confirmacion-contrasenia");

const datosUsuario = (event) => {
    event.preventDefault();

    const nombre = nombreUsuario.value;
    const edad = Number(edadUsuario.value);
    const email = emailUsuario.value;
    const contrasenia = contraseniaUsuario.value;
    const confirmacionContrasenia = confirmacionContraseniaUsuario.value;

    const edadAprobada = 18;

    if (contrasenia !== confirmacionContrasenia) {
        alert("Las contraseñas no coinciden");
    } else{
        localStorage.setItem("contraseña", contrasenia);
    }

    if (edad < edadAprobada) {
        alert("Necesitas ser mayor de edad");
    }

    if (edad === edadAprobada) {
        alert("Puedes ingresar pero con supervisión");
    }

    localStorage.setItem("nombreUsuario", nombre);
    localStorage.setItem("emailUsuario", email);

    window.location.href = "bienvenida.html";

    console.log(nombre, email, contrasenia, confirmacionContrasenia);
};

const usuarioLogueado = () => {
    const usuarioLogueadoNombre = localStorage.getItem("nombreUsuario");
    const emailUsuarioLogueado = localStorage.getItem("emailUsuario")
    const contraseñaUsuarioLogueado = localStorage.getItem("contraseña");

    if (emailUsuarioLogueado) {
        window.location.href = "bienvenida.html"
    }

    console.log(usuarioLogueadoNombre, emailUsuarioLogueado, contraseñaUsuarioLogueado)
}

const logout = () => {
    localStorage.clear();
    window.location.href = "index.html";
}

if (window.location.pathname !== "/bienvenida.html") {
    usuarioLogueado();
}