async function like(){
    const likebtt = document.querySelector(".boton");
    let likeIcon = document.querySelector("#icon");
    let contador = document.querySelector("#cont");

    //Estodo de boton
    let clicked = false;

    likebtt.addEventListener("click", () =>{
        if(!clicked){
            clicked=true;
            likeIcon.innerHTML = `<img src="img/like2.png">`;
            contador.textContent++;
        }else{
            clicked = false;
            likeIcon.innerHTML = `<img src="img/like1.png">`;
            contador.textContent--;
        }
    })
}