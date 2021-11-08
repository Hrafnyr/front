async function cargaMasiva(){
    let archivo = document.getElementById('archivo1').files[0]
    console.log(archivo)

    const reader = new FileReader()

    reader.addEventListener("load", (event)=>{
        console.log(event.target.result)
        const  archivoJSON = JSON.parse(event.target.result)
        enviarInfo(archivoJSON)
    })

    reader.readAsText(archivo, "UTF-8")
}

async function enviarInfo(jsonCM){
    console.log(jsonCM.data)
    const rawResponse = await fetch("https://ipc1202010833.herokuapp.com/usuarios/cargaMasiva", {
        method: "POST",
        body: JSON.stringify({ "usuarios": jsonCM.usuarios}),
        headers: { "Content-Type": "application/json" }
    })

    console.log(rawResponse)
    const response = await rawResponse.json()
    console.log(response)
    alert('Cargado con éxito')
}
