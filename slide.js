let image_array = ["img/image.jpg", "img/image1.jpg", "img/image2.jpg", "img/image3.jpg", "img/image4.jpg", "img/image5.jpg", "img/image6.jpg", "img/image7.jpg", "img/image8.jpg"];
let comment_arrays = ["Poster para publicitar Corto", "Publicidad para clases dirigidas", "Publicidad para San Valentin", "Poster Publicitario para promover negocio", "Poster Publicitario para corto de cine", "Publicidad para servicio de transporte", "Publicidad para servicio de taxi", "Creacion de contenido para clases personalizadas", "Campaña publicitaria para empresa de moda"]
const work = document.querySelector('.work-section');

function create_new_images(){
    for(let i=0; i<image_array.length; i++){
        let layer= document.createElement('div');
        layer.classList.add('slide');
        let new_photo= document.createElement('img');
        new_photo.classList.add('image-work');
        let new_comments=  document.createElement('p');
        new_comments.innerHTML= comment_arrays[i];
        new_photo.src= image_array[i];
        layer.appendChild(new_photo);
        layer.appendChild(new_comments);
        work.appendChild(layer);
    }
}
function show_3_images(){
    let varios_divs= document.querySelectorAll('.slide');
    varios_divs.forEach(function(element, index){
        if(index>2){
            element.style.display= "none"
        }
    })
}
create_new_images()
show_3_images()
function my_left_button(){
    let quantity_elements = document.querySelectorAll('.image-work');
    var nombres = quantity_elements[0].src.split("/");
    for(let j = nombres.length - 1; j >=0 ; j--){
        console.log(j)
    }
    

    if(quantity_elements[0].src==image_array[0]){
        console.log("es igual")
    }
}
let button_left= document.querySelector('#icon-left');

button_left.addEventListener('click', my_left_button)