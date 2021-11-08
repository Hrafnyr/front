async function mostrarPublicaciones(){

    const rawResponse = await fetch("https://ipc1202010833.herokuapp.com/posteos", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const response = await rawResponse.json()
    const arregloPublicaciones = response.data;
    console.log(arregloPublicaciones)
    const fecha = new Date();
    const mostraFecha = fecha.toLocaleDateString();

    let codigoHtml = ``

    for(let i=0; i<arregloPublicaciones.length; i++){
        codigoHtml += `\n
        <div id="like">
            <button id="boton">
            <span id="icon"><img src="img/like1.png"></span>
            </button>
            <input type = "text" id = "cont" value="0" readonly></input>
        </div>
        <script>
            let likebt = document.querySelector('#boton');   
            let cont = document.querySelector('#cont');

            likebt.addEventListener('click',()=>{
                cont.value = parseInt(cont.value)+1;
            })
        </script>
        <div class="col-lg-6">
        <div class="card mb-4">
        <iframe src="${arregloPublicaciones[i].url}" width = "800px" height="500px" frameborder="5" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="card-body">
        <h5 class="card-title">${arregloPublicaciones[i].tipo}</h5>
        <p class="card-text">Categoria: ${arregloPublicaciones[i].categoria}</p>
        <p class="card-text">${mostraFecha}</p>
        <a href="${arregloPublicaciones[i].url}" class="btn btn-primary">Ver</a>
        </div>
        </div>
        </div>`
    }

    $('#publicaciones').append(codigoHtml)
}
