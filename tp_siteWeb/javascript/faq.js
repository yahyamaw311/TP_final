// Mawhoub Yahya - Décembre 2022

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach( toggle1=> {
    toggle1.addEventListener('click', () => {
        toggle1.parentNode.classList.toggle('active');
    }) 
})