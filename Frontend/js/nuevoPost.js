
const txturl   = document.getElementById('url')
const txttipo    = document.getElementById('tipo')
const txtcategoria      = document.getElementById('categoria')

async function nuevoPost(){

    const data = {"url": txturl.value, "tipo": txttipo.value, "categoria": txtcategoria.value}

    //Petición al servidor con Fetch

    const rawResponse = await fetch("https://ipc1202010833.herokuapp.com/post", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}

    })

    //String a JSON
    const response = await rawResponse.json()


    if (rawResponse.status == 200){
        // localStorage para almacenar la informacion
        localStorage.setItem("usuarioPost", JSON.stringify(response.data))
        alert(`Publicación creada exitosamente`)
        window.location.href = "principal.html"
    } 

}