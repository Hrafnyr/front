const txtname       = document.getElementById('txtname')
const txtgen        = document.getElementById('texgen')
const txtnickname   = document.getElementById('txtnickname')
const txtemail      = document.getElementById('txtemail')
const txtpsw        = document.getElementById('txtpsw')

async function registro(){

    const data = {"nombre": txtname.value, "gen": txtgen.value, "nickname": txtnickname.value, "correo": txtemail.value, "passs": txtpsw.value}

    //Petición al servidor con Fetch

    const rawResponse = await fetch("https://ipc1202010833.herokuapp.com/usuario", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}

    })

    //String a JSON
    const response = await rawResponse.json()


    if (rawResponse.status == 200){
        // localStorage para almacenar la informacion
        localStorage.setItem("usuario", JSON.stringify(response.data))
        alert(`Perfil creado exitosamente`)
        window.location.href = "inicioSesion.html"
    } 

}