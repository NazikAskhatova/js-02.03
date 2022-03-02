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

