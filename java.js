const navHamburger = document.querySelector('#navHamburger');

    navHamburger.addEventListener('click', () => {

        navHamburger.parentElement.classList.toggle('active');
})