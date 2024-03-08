let btn = document.querySelector('#btn')
let sidebar = document.querySelector('.sidebar')

btn.onclick = function () {
    sidebar.classList.toggle('active');
}


// SLIDER
// $(document).ready(function(){
//     $('.slider').slick({
//         slidesToShow: 10,
//         slidesToScroll: 1,
//         arrows: false,
//         variableWidth: true,
//         preArrow: "<div></div>"
//     })
//   });
