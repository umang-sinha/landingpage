var image = document.querySelector('.image');

function toggle(e){
    var source = e.getAttribute('data-image');
    image.src = source;
}