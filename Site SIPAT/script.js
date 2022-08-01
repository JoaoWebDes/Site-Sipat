const hamburger = document.querySelector('.menu .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.menu .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.menu .nav-bar .nav-list ul li a');
const borda = document.querySelector('.borda');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});



menu_item.forEach(item=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
})