const init = () => {
    setHamburguerListener();
}

const setHamburguerListener = () => {
    const hamburgerIcon = document.querySelector(".nav-icon .icon.hamburguer");
    const hamburgerMenu = document.querySelector(".navbar-menu");

    hamburgerIcon.addEventListener('click', () => {
        hamburgerIcon.parentElement.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });
}
