document.querySelectorAll('.accordion').forEach(accordion => {
// const header = accordion.querySelector('.accordion__header');

const parent = accordion.closest('.accordions')

accordion.querySelector('.accordion__header').addEventListener('click', function() {
    if (parent && parent.classList.contains('accordions--toggle')) {
        parent.querySelectorAll('.accordion').forEach(accordion => {
            accordion.classList.remove("accordion--open")
        })
    }
    accordion.classList.add('accordion--open');
})
});

document.querySelectorAll('[data-modal]').forEach(trigger => {
trigger.addEventListener('click', function() {
// console.log(trigger.dataset);
trigger.addEventListener('click', function() {
    document.getElementById(trigger.dataset.modal).classList.add('modal--open')
});
})
document.querySelectorAll('.modal').forEach(modal => {
    modal.querySelector('.modal__window').addEventListener('click', function() {
modal.classList.remove('modal--open')
    })
})
    
})