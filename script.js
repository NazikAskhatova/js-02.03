document.querySelectorAll('.accordion').forEach(accordion => {
const header = accordion.querySelector('.accordion__header');

header.addEventListener('click', function(){
    accordion.classList.toggle('accordion--open');
    
})
});