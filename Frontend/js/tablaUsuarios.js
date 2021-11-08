async function tablaUsuarios(){

    const rawResponse = await fetch("https://ipc1202010833.herokuapp.com/usuarios", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const response = await rawResponse.json()
    const arregloUsuarios = response.data;
    console.log(arregloUsuarios)
    let contador = 1;
    let codigoHtml = ``

    for(let i=0; i<arregloUsuarios.length; i++){
        codigoHtml += `
        <tr id="user">
            <td id="contenido">${contador}</td>
            <td>${arregloUsuarios[i].nombre}</td>
            <td>${arregloUsuarios[i].genero}</td>
            <td id="txtEliminar">${arregloUsuarios[i].nickname}</td>
            <td>${arregloUsuarios[i].correo}</td>
            <td>${arregloUsuarios[i].psw}</td>
            <td> <span id="editar"> <a href="adminUsuario.html"><img src="img/editarIcon.png"></a></span>
                 <span id="eliminar"><a href="eliminar.html"><img src="img/eliminarIcon.png" ></a></span></td>
        </tr>`
        contador++;
    }

    $('#table').append(codigoHtml)
}
