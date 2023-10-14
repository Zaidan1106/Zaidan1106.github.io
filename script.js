//Toggle class active untuk hamburger menu
const hmBtn = document.querySelector('#hamburger');
const navItem = document.querySelector('nav .navbar-items');

hmBtn.addEventListener('click', (e) => {
    navItem.classList.toggle('slide');
    e.preventDefault();
});

//klik di luar elemen
document.addEventListener('click', function(e){
    if (!hmBtn.contains(e.target) && !navItem.contains(e.target)){
        navItem.classList.remove('slide');
    }
});

window.onclick = (e) => {
    if (e.target === navItem) {
        navItem.classList.toggle('slide');
        e.preventDefault();
      }
};

// alert
function closeAlert() {
    document.getElementById("f-info").style.display = "none";

}
function closeWarningAlert() {
    document.getElementById("f-warn").style.display = "none";
}

// google script
const scriptURL = 'https://script.google.com/macros/s/AKfycbyg9SEIXMjusGX85tsNBJbspY2VT3-BcDD0rCUD8Im59kMF_-WV_pRnwryWRpOK5CTbTw/exec';
const form = document.forms['zaidan-contact-form'];
const btnKirim = document.querySelector('.btn-form-kirim');
const btnLoading = document.querySelector('.btn-form-loading');
const myAlert = document.querySelector('.flash p');
const myAlert1 = document.querySelector('.js-flash-close');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // ketika tombol submit diklik
    // tampilkan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle('active');
    btnKirim.classList.toggle('active');
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
         // tampilkan tombol kirim, hilangkan tombol loading
        btnLoading.classList.toggle('active');
        btnKirim.classList.toggle('active');
        // tampilkan alert
        myAlert.classList.toggle('active');
        myAlert1.classList.toggle('active');
        // reset form
        form.reset();
        console.log('Succes!', response)
    })
    .catch((error) => console.error('Error!', error.message));
});


// image slider
let currentSlideIndex = 0;
const cardOrgs = document.querySelectorAll(".card-org");

function showSlide(index) {
    cardOrgs.forEach((cardOrg) => {
        cardOrg.classList.remove("active");
    });
    cardOrgs[index].classList.add("active");
}

function slideLeft() {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = cardOrgs.length - 1;
    }
    showSlide(currentSlideIndex);
}

function slideRight() {
    currentSlideIndex++;
    if (currentSlideIndex >= cardOrgs.length) {
        currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
}

// Menampilkan slide pertama saat halaman dimuat
showSlide(currentSlideIndex);

