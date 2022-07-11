const hamburger =document.querySelector('.hamburger');
const mobileNav =document.querySelector('.mobile-nav')
const nav_content =document.querySelectorAll('.content-container-nav')


function hamburger_toggle(){
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('active');
}

hamburger.addEventListener('click',hamburger_toggle)

for (let index = 0; index < nav_content.length; index++) {
    nav_content[index].addEventListener('click',function(){
        this.classList.toggle('is-active');
    });
}
















