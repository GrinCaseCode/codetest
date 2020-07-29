$(document).ready(function(){
  $('.eating-slider').slick({
   
      dots: false,
  arrows: true,
  accessibility: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
  centerMode: true,
  //asNavFor:'',
  appendDots:$('.dots'),
  
  nextArrow:$('.eating-next'),
  prevArrow:$('.eating-prev'),
  
  
  responsive: [{
    breakpoint: 768,
    settings: {}
    
  }]
  
  });
});
















var header = document.getElementsByClassName("news-menu");
var btns = header.getElementsByClassName("news-menu__items");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



var header = document.getElementsByClassName("main-links");
var btns = header.getElementsByClassName("main-item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("actives");
    current[0].className = current[0].className.replace(" actives", "");
    this.className += " actives";
  });
}


// slider 

