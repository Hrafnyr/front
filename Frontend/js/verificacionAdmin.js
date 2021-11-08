function verificacionAdmin(){
    const admin = localStorage.getItem("admin")
    
    if (!admin){
        window.location.href = "inicioSesion.html"
    }
}