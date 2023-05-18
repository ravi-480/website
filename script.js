let searchbtn=document.querySelector('#search-btn')
let searchbar=document.querySelector('.search')
let formbtn=document.querySelector('#login-btn')
let loginform=document.querySelector('.login-form-cont')
let closeform=document.querySelector('#formclose')
let menuebar=document.querySelector("#menuebar");
let navbar=document.querySelector(".navbar");
let videobtn=document.querySelectorAll(".vid-btn");


window.onscroll=()=>{
    searchbtn.classList.remove('fa-times')
searchbar.classList.remove('active');
    menuebar.classList.remove('fa-times')
navbar.classList.remove('active');
loginform.classList.remove('active');
}

searchbtn.addEventListener("click" ,()=>{
searchbtn.classList.toggle('fa-times')
searchbar.classList.toggle('active');
})
formbtn.addEventListener("click" ,()=>{
loginform.classList.add('active')

})
closeform.addEventListener("click" ,()=>{

loginform.classList.remove('active');
})
menuebar.addEventListener("click",()=>{
    menuebar.classList.toggle('fa-times')
    navbar.classList.toggle('active');
})

videobtn.forEach(btn=>{
    btn.addEventListener("click",()=>{
        document.querySelector(".control  .active").classList.remove('active');
        btn.classList.add('active')
        let src=btn.getAttribute('data-src');
        document.querySelector("#video-slider").src=src;
    })
})

var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
breakpoints:{
    640:{
        slidesPerView:1
    },
    768:{
        slidesPerView:2,
    },
    1024:{
        slidesPerView:3,
    },
},

    
});