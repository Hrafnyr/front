const txtNickname = document.getElementById('txtNickname')
const txtPassword = document.getElementById('txtPassword')

async function login(){

    //Inicio como admin
    if(txtNickname.value == "admin" & txtPassword.value =="admin@ipc1"){
        alert(`Bienvenido Administrador`)
        localStorage.setItem("admin", "1")
        window.location.href = "admin.html"
    }
    else{
        const data = {"nickname": txtNickname.value, "psw": txtPassword.value}

        //Petición al servidor con Fetch

        const rawResponse = await fetch("https://ipc1202010833.herokuapp.com/login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}

        })

        //String a JSON
        const response = await rawResponse.json()
        console.log(response)

        if (rawResponse.status == 200){
            // localStorage para almacenar la informacion
            localStorage.setItem("usuario", JSON.stringify(response.data))
            alert(`Bienvenido ${response.data.nombre}`)
            window.location.href = "principal.html"
        }
        else {
            alert(`${response.mensaje}`)
        }
    }
}