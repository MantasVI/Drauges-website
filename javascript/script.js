const NavLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // toggle mobile menu visability
    document.body.classList.toggle("show-mobile-menu");
});
// close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// close menu when the nav button is clicked
NavLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());

});

function switchMode(mode) {

    if (mode) {
        document.getElementById('allSection').style.display = 'none';
        document.getElementById('customSection').style.display = 'flex';
        document.getElementById('btnAll').classList.add('active');
        document.getElementById('btnCustom').classList.remove('active');

    }

}