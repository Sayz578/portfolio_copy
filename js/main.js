const burger = document.querySelector(".burger")
const nav = document.querySelector(".nav")

burger.addEventListener("click", function () {
    burger.classList.toggle("active")
    nav.classList.toggle("active")
    document.body.classList.toggle("hedden")
})

$(document).ready(function () {
    $('.portfolio-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots:true,
        prevArrow: "<button type='button' class='slick-prev slider-left'> <img src = './images/Arrow-left.svg'alt = 'arow' /></button>",
        nextArrow: "<button type='button' class='slick-next slider-right'> <img src = './images/Arrow-right.svg' alt = 'arow' /></button>",
        responsive: [
            {
                breakpoint: 1161,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 801,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    $('.testimonial-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true,
        prevArrow: "<button type='button' class='slick-prev slider-left'> <img src = './images/Arrow-left.svg'alt = 'arow' /></button>",
        nextArrow: "<button type='button' class='slick-next slider-right'> <img src = './images/Arrow-right.svg' alt = 'arow' /></button>",
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    autoplay: true,
                }
            }
        ]
    })
    let slider = $('.testimonial-slider')
    let totalslider = slider.children().length
    // console.log(totalslider);
    let sliderNumber = $('.last-number')

    slider.on('afterChange', function(e, slick, currentSlide){
        let number = (currentSlide + 1).toString().padStart(2, '0')
        sliderNumber.text(`/${number}`)       
    })
});

const year = new Date().getFullYear()
document.querySelector(".yaer").textContent = year

// header fixed

const headerTop = document.querySelector(".header-top")
const btnUp = document.querySelector(".arrow-up")

window.addEventListener("scroll", function(){
    if(window.scrollY > 1){
        headerTop.classList.add("active")
    } else {
        headerTop.classList.remove("active")
    }
})

const links = document.querySelectorAll(".link")
// console.log(links);
for (let i = 0; i < links.length; i++) {
    const element = links[i];
    // console.log(element);
    element.addEventListener("click", function(){
        for (let i = 0; i < links.length; i++) {
            const link = links[i];
            link.classList.remove("active")
        }
        
        element.classList.add("active")
    })
    
}

// button up
window.addEventListener("scroll", function(){
    if(this.window.scrollY > 300){
        btnUp.classList.add("active")
    } else {
        btnUp.classList.remove("active")
    }

})


btnUp.addEventListener("click", function () {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})