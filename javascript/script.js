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
function Checkas() {
    const x = document.getElementsByClassName('left');
    const y = document.getElementsByClassName('right');
    const msg = document.getElementById('error');
    const insta = document.getElementById('insta-input').value;
    let message = '';
    const fingers = ['Thumb', 'Index', 'Middle', 'Ring', 'Pinky'];

    msg.style.visibility = 'hidden';
    msg.innerHTML = '';

    if (insta === '' || insta.charAt(0) != '@') {
        msg.style.visibility = 'visible';
        msg.style.color = 'red';
        return msg.innerHTML = 'not valid name or no @ symbol';
    }

    for (let i = 1; i < x.length; i++) {
        let left = x[i].getElementsByTagName('select')[0];

        if (left.value === "") {
            msg.style.visibility = 'visible';
            msg.style.color = 'red';
            return msg.innerHTML = 'not all fields filled';
        }
        message += 'Left ' + fingers[i - 1] + ': ' + left.value + 'mm |';
    }

    message += ' --- '; // separator between hands

    // second loop - all right hand
    for (let i = 1; i < y.length; i++) {
        let right = y[i].getElementsByTagName('select')[0];
        if (right.value === "") {
            msg.style.visibility = 'visible';
            msg.style.color = 'red';
            return msg.innerHTML = 'not all fields filled';
        }
        message += 'Right ' + fingers[i - 1] + ': ' + right.value + 'mm |';
    }


    let params = {
        name: document.getElementById('insta-input').value,
        message: message

    }

    msg.style.visibility = 'visible';
    msg.style.color = 'Green';

    emailjs.send('service_i50ihym', 'template_exagil5', params).then(msg.innerHTML = 'Thank you! Your order is sent I will soon message you on instagram <3');

}






