const txtname       = document.getElementById('textoNombre')
const txtgen        = document.getElementById('textogen')
const txtnickname   = document.getElementById('textoNickname')
const txtemail      = document.getElementById('textoCorreo')
const txtpsw        = document.getElementById('textoPass')

async function mostrarDatos(){

    const data = {"nombre": txtname.value, "gen": txtgen.value, "nickname": txtnickname.value, "correo": txtemail.value, "passs": txtpsw.value}

    //Petición al servidor con Fetch

    const rawResponse = await fetch("https://ipc1202010833.herokuapp.com/actualizarUsuario", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}

    })

    //String a JSON
    const response = await rawResponse.json()


    if (rawResponse.status == 200){
        // localStorage para almacenar la informacion
        localStorage.setItem("usuario", JSON.stringify(response.data))
        alert(`Perfil actualizado exitosamente`)
        window.location.href = "principal.html"
    } 

}