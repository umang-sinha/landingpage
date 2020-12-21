var image = document.querySelector('.image');
var bar = document.querySelector('.bar');
var sideBar = document.querySelector('.side-bar');

//renamed toggle function to toggleImage
function toggleImage(e){
    var source = e.getAttribute('data-image');
    image.src = source;
}

bar.addEventListener('click', function(){
    sideBar.classList.toggle('side-bar-js');
});