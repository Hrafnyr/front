async function cargaMasiva2(){
    let archivo = document.getElementById('archivo2').files[0]
    console.log(archivo)

    const reader = new FileReader()

    reader.addEventListener("load", (event)=>{
        console.log(event.target.result)
        const  archivoJSON = JSON.parse(event.target.result)
        enviarInfo2(archivoJSON)
    })

    reader.readAsText(archivo, "UTF-8")
}

async function enviarInfo2(jsonCM){
    console.log(jsonCM.data)
    const rawResponse = await fetch("https://ipc1202010833.herokuapp.com/posteos/cargaMasiva2", {
        method: "POST",
        body: JSON.stringify({ "posts": jsonCM.posts}),
        headers: { "Content-Type": "application/json" }
    })

    console.log(rawResponse)
    const response = await rawResponse.json()
    console.log(response)
    alert('Cargado con éxito')
}
