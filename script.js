console.log("Hola mundo");

const nombreUsuario = document.getElementById("nombre-y-apellido");
const edadUsuario = document.getElementById("edad");
const emailUsuario = document.getElementById("email");
const contraseniaUsuario = document.getElementById("contrasenia");
const confirmacionContraseniaUsuario = document.getElementById("confirmacion-contrasenia");

const registro = async (event) => {
    event.preventDefault();

    const nombre = nombreUsuario.value;
    const edad = Number(edadUsuario.value);
    const email = emailUsuario.value;
    const contrasenia = contraseniaUsuario.value;
    const confirmacionContrasenia = confirmacionContraseniaUsuario.value;


    const url = "https://jsonplaceholder.typicode.com/users";
    const respuesta = await fetch(url);
    const users = await respuesta.json();

    const usuariosRegistrados = users.map(
        function(usuario) {
            return usuario.email
        }
    )


    const emailEncontrado = usuariosRegistrados.filter(
        function (emailUserRegistrado) {
            return emailUserRegistrado === email
        }
    );


    if (emailEncontrado.length > 0) {
        alert("Ingrese otro mail");
        console.error(emailEncontrado, "El email ingresado ya está registrado.")
        return
    }


    const edadAprobada = 18;

    if (contrasenia !== confirmacionContrasenia) {
        alert("Las contraseñas no coinciden");
        console.error("Las contraseñas deben ser iguales.")
        return;
    }

    if (edad < edadAprobada) {
        alert("Necesitas ser mayor de edad");
        console.error("El usuario registró una edad menor a la aceptada.")
        return;
    }

    if (edad === edadAprobada) {
        alert("Puedes ingresar pero con supervisión");
        console.warn("El usuario necesita configurar una supervisión");
    }

    localStorage.setItem("emailUsuario", email);

    window.location.href = "bienvenida.html";
};

const usuarioLogueado = () => {
    const emailUsuarioLogueado = localStorage.getItem("emailUsuario")

    if (emailUsuarioLogueado) {
        window.location.href = "bienvenida.html"
    }
}


if (window.location.pathname !== "/bienvenida.html") {
    usuarioLogueado();
}

const logout = () => {
    localStorage.clear();
    window.location.href = "index.html";
}
