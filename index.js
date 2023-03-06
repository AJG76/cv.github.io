 var contenido = document.querySelector('#contenido')
let url = 'https://randomuser.me/api/' //url de API 
    fetch(url)                          //accedo a la API metodo GET por defecto
    .then(response => response.json())  // respuesta que trae en formato JSON
    .then(data =>{
        console.log(data)
        contenido.innerHTML = `
        <img src="${data.results['0'].picture.large}" width="200px" class="img-fluid rounded-circle">
        <p class="m-5">${data.results['0'].name.title}: ${data.results['0'].name.first} ${data.results['0'].name.last}</p> `
})


// evento en boton enviar msg
document.getElementById('enviar').onclick = function (){
    console.log('Campturamos el evento clik');
    document.getElementById('msg').innerHTML = "El mensaje fue enviado con exito !!";
    document.getElementById('msg').style.backgroundColor ="#cfe2ff";
    document.getElementById('msg').style.textAlign ="center";
}