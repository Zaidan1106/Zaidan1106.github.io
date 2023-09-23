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
