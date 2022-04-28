const profileBg = document.querySelector('.profile-background');
const bgPicture = document.querySelector('#bg-picture');
const bgPicFile = document.querySelector('#bgpic-file');
const bgPictureBtn = document.querySelector('#bgPictureBtn');

const infoImg = document.querySelector('.info-img');
const profilePicture = document.querySelector('.profile-image');
const ppFile = document.querySelector('#pp-file');
const profilePictureBtn = document.querySelector('#profilePictureBtn');

bgPicFile.addEventListener('change', function() {
    const choosedFile = this.files[0];

    if (choosedFile) {
        const reader = new FileReader();

        reader.addEventListener('load', () => {
            bgPicture.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);
    }
});

infoImg.addEventListener('mouseenter', () => {
    profilePictureBtn.style.display = "block";
})

infoImg.addEventListener('mouseleave', () => {
    profilePictureBtn.style.display = "none";
})

ppFile.addEventListener('change', function() {
    const choosedFile = this.files[0];

    if (choosedFile) {
        const reader = new FileReader();

        reader.addEventListener('load', () => {
            profilePicture.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);
    }
});


