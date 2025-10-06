// document.addEventListener('DOMContentLoaded', function(){
    // Inicializando o Swiper
    // if (document.querySelector('.swiper-container')){
    //     const swiper = new Swiper('.swiper-container',{
    //         loop:true,
    //         autoplay:{
    //             delay:3000,
    //             disableOnInteraciton: false,
    //         },
    //         effect: 'slide',
    //         pagination: {
    //             el: '.swiper-container',
    //             clickable: true,
    //         },
    //         speed:600,
    //     });
    // }

    // const swiper = new Swiper('.swiper-container',{
    //     loop: true,
    //     autoplay: {
    //         delay: 4000,
    //         disableOnInteraction: false,
    //     },
    //     effect: 'slide',
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //     },
    //     speed: 600,
    // });

    // Menu Responsivo
//     const menuToggle = document.getElementById('menu-toggle');
//     const navLinks = document.getElementById('nav-links');

//     if (menuToggle && navLinks) {
//         menuToggle.addEventListener('click', () => {
//             navLinks.classList.toggle('active');
//         });
//     }
// });

// Abaixo o código correto

document.addEventListener('DOMContentLoaded', function(){
    // Inicializando o Swiper (somente se existir na página)
    if (document.querySelector('.swiper-container')) {
        const swiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            effect: 'slide',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            speed: 600,
        });
    }

    // Menu hambúrguer
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});


