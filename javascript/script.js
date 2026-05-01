const NavLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
<<<<<<< HEAD
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

NavLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});
document.getElementById('inspo-image').addEventListener('change', function() {
    const fileName = this.files[0] ? this.files[0].name : 'No file chosen';
    document.getElementById('file-name').textContent = fileName;
});

const CLOUD_NAME = "dwgk36hfs";       // 👈 replace
const UPLOAD_PRESET = "responsas"; // 👈 replace

async function Checkas(e) {
    e.preventDefault();
=======
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
>>>>>>> 90ad71e12518c9203fc4fafab84d4a6c1566cd30
    const x = document.getElementsByClassName('left');
    const y = document.getElementsByClassName('right');
    const msg = document.getElementById('error');
    const insta = document.getElementById('insta-input').value;
<<<<<<< HEAD
=======
    let message = '';
>>>>>>> 90ad71e12518c9203fc4fafab84d4a6c1566cd30
    const fingers = ['Thumb', 'Index', 'Middle', 'Ring', 'Pinky'];

    msg.style.visibility = 'hidden';
    msg.innerHTML = '';

<<<<<<< HEAD
    if (insta === '' || insta.charAt(0) !== '@') {
        msg.style.visibility = 'visible';
        msg.style.color = 'red';
        msg.innerHTML = 'Not a valid name or missing @ symbol';
        return;
    }

    for (let i = 1; i < x.length; i++) {
        if (x[i].getElementsByTagName('select')[0].value === "") {
            msg.style.visibility = 'visible';
            msg.style.color = 'red';
            msg.innerHTML = 'Not all fields filled';
            return;
        }
    }

    for (let i = 1; i < y.length; i++) {
        if (y[i].getElementsByTagName('select')[0].value === "") {
            msg.style.visibility = 'visible';
            msg.style.color = 'red';
            msg.innerHTML = 'Not all fields filled';
            return;
        }
    }

    // handle image upload
    const imageFile = document.getElementById('inspo-image').files[0];
    if (imageFile) {
        msg.style.visibility = 'visible';
        msg.style.color = 'orange';
        msg.innerHTML = 'Uploading image... ⏳';

        try {
            const formData = new FormData();
            formData.append("file", imageFile);
            formData.append("upload_preset", UPLOAD_PRESET);

            const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
                method: "POST",
                body: formData
            });
            const data = await res.json();
              
            console.log(data); // 👈 add this
            // put the image URL into the hidden field
            document.getElementById('image-url').value = data.secure_url;
        } catch (err) {
              
            console.log(err); // 👈 add this
            msg.style.color = 'red';
            msg.innerHTML = 'Image upload failed, try again.';
            return;
        }
    }

    // all good — submit to Formspree
    document.getElementById('presson-form').submit();
}
=======
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






>>>>>>> 90ad71e12518c9203fc4fafab84d4a6c1566cd30
