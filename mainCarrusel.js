let imagenes = ['CafePlaya.PNG','LOGO.PNG','FondoVideo.PNG']
let cont=0;

function carrusel (contenedor){

    contenedor.addEventListener('click', function (e) {
        let atras=contenedor.querySelector('.atras');
        let adelante =contenedor.querySelector('.adelante');
        let img = contenedor.querySelector('img');
        let puntero=e.target;
       
        if(puntero==atras){
            if(cont>0){
                img.src=imagenes [cont-1];
                cont--;

            } else{
                img.src=imagenes[(imagenes.length)-1];
                cont=(imagenes.length)-1;
            }
        } else  if(puntero==adelante){
            if(cont<((imagenes.length)-1)){
                img.src=imagenes [cont+1];
                cont++;

            } else{
                img.src=imagenes[0];
                cont=0;
            }
    }
});}


document.addEventListener("DOMContentLoaded", function () {
    let contenedor = document.querySelector('.containerImg');
        carrusel(contenedor);
})