let arrays= ['Haz crecer tu empresa ahora',  'La mejor publicidad a tu alcance', 'El mejor lugar para tus diseños',];
var animation= new TimelineMax({ repeat: -1, repeatDelay: 0.6 })
const subtitle= document.querySelector("#sub-title");
function my_array(){
    for(let i=0; i<arrays.length; i++){
        let layer= document.createElement('div');
        layer.classList.add('sub');
        layer.innerHTML= arrays[i];
        
        subtitle.appendChild(layer)
    }    
}
function animatetext(){
    let layers = document.querySelectorAll('.sub div')
    layers.forEach(function(element, index){
        animation.fromTo(element, {opacity:0,  x:30}, { opacity:1, x:0, duration:2, repeat:1, yoyo: true, yoyoEase: true, repeatDelay: 1.5})
        gsap.set('.sub', {visibility: 'visible'});

    });
}

my_array()
animatetext()

let image= document.querySelector('.image')
var times= new TimelineMax({ repeat: -1, repeatDelay: 0.6 });
images= ['img/undraw.svg', 'img/undraw2.svg', 'img/undraw3.svg'];
const  new_image= document.querySelector('.hero')

function create_images(){
    images.forEach(element => {
    let overflow= document.createElement('img');
    overflow.classList.add('image');
    overflow.src= element;
    new_image.appendChild(overflow);
    })
}
function imageanimation(){
    image_holder= document.querySelectorAll('.image');
    image_holder.forEach(function(element, index){
        times.fromTo(element, {x:50, opacity:0} ,{ opacity:1, x:0, duration:2, repeat:1, yoyo: true, yoyoEase: true, repeatDelay: 1.5});
        
    })
}
create_images()
imageanimation()

function my_function1(){
    if((window.pageYOffset) >= 20){
        gsap.to('.navbar', {duration: 0.5, y: -100});

    }if(window.pageYOffset < 20){
        gsap.to('.navbar', {duration: 0.5, y: 0});
}
}
function my_function2(){
    if((window.pageYOffset) >= 100){
        gsap.to('#image1', {duration: 1, x: 0, opacity:1, scale:1});

    }if(window.pageYOffset < 100){
        gsap.to('#image1', {duration: 1, x: -100, opacity:0, scale:0});
}
}
function my_function3(){
    if((window.pageYOffset) >= 500){
        gsap.to('#image2', {duration: 1, x: 0, opacity:1});

    }if(window.pageYOffset < 500){
        gsap.to('#image2', {duration: 1, x: -100, opacity:0});
}
}
function my_function4(){
    if((window.pageYOffset) >= 1000){
        gsap.to('#image3', {duration: 1, x: 0, opacity:1});

    }if(window.pageYOffset < 1000){
        gsap.to('#image3', {duration: 1, x: 100, opacity:0});
}
}


window.addEventListener('scroll', my_function1);
window,addEventListener('scroll', my_function2);
window.addEventListener('scroll', my_function3);
window.addEventListener('scroll', my_function4);

