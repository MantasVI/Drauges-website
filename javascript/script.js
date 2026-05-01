//functionality for phone
const NavLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

NavLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});
//file name printer
document.getElementById('inspo-image').addEventListener('change', function() {
    const fileName = this.files[0] ? this.files[0].name : 'No file chosen';
    document.getElementById('file-name').textContent = fileName;
});
//for gmail bot for images and messages
const CLOUD_NAME = "dwgk36hfs";      
const UPLOAD_PRESET = "responsas"; 

async function Checkas(e) {
    e.preventDefault();
    const x = document.getElementsByClassName('left');
    const y = document.getElementsByClassName('right');
    const msg = document.getElementById('error');
    const insta = document.getElementById('insta-input').value;
    const fingers = ['Thumb', 'Index', 'Middle', 'Ring', 'Pinky'];

    msg.style.visibility = 'hidden';
    msg.innerHTML = '';

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
              
    
            
            // put the image URL into the hidden field
            document.getElementById('image-url').value = data.secure_url;
        } catch (err) {
              
         
            msg.style.color = 'red';
            msg.innerHTML = 'Image upload failed, try again.';
            return;
        }
    }

    // all good — submit to Formspree
    document.getElementById('presson-form').submit();
}
