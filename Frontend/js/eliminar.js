const user = document.getElementById('usuarioEliminar')

async function eliminar(){

    const data = {"nickname": user.value}

    //Petición al servidor con Fetch

    const rawResponse = await fetch("https://ipc1202010833.herokuapp.com/eliminar", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}

    })

    //String a JSON
    const response = await rawResponse.json()
    alert("Usuario eliminado exitosamente")
    window.location.href = "admin.html"
}
