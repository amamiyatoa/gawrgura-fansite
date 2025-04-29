document.addEventListener('DOMContentLoaded', () => {

    const imghover = document.getElementById('getimg');
    imghover.addEventListener('mouseover', () => {
        if(imghover.className != 'hoverIMG') {
            imghover.classList.add('hoverIMG');
            alert('hello');
        }
    });
    imghover.addEventListener('mouseout', () => {
        if(imghover.className == 'hoverIMG') {
            imghover.classList.remove('hoverIMG');
        }
    });
})