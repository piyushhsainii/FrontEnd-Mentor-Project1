const arrowLink = document.querySelector('.arrow-link');
const innerDrop1 = document.querySelector('.inner-drop-1');

arrowLink.addEventListener('mouseenter', () => {
  innerDrop1.classList.add('show');
});

arrowLink.addEventListener('mouseleave', () => {
  innerDrop1.classList.remove('show');
});



function Toggle(){
    const image = document.querySelector('.image');
    const ham = document.querySelector('.ham-down');
    const dis =document.querySelector('.ham-down1') // Keep the selector as .image
    if (image.src.endsWith('icon-hamburger.svg')){
        image.src = './images/icon-close.svg';
        ham.classList.remove('block');
        ham.classList.add('ham-down1');
        // dis.classList.add('ham-down');
    } else {
        image.src = './images/icon-hamburger.svg';
        ham.classList.add('block');
        dis.classList.remove('ham-down1');


    }
}
