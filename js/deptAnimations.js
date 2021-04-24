$('.owl-carousel').owlCarousel({
     loop:true,
     margin:5,
     nav:false,
     autoplay:true,
     autoplayTimeout: 3500,
     autoplayHoverPause: true,
     responsive:{
         0:{
             items:1
         },
         600:{
             items:3
         },
         1000:{
             items:1
         }
     }
 })
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("activeaccordion");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    }
    else {
	      panel.style.maxHeight = panel.scrollHeight + "px";
	}
    });
}

const scrollToTopButton = document.getElementById('js-top');

const scrollFunc = () => {
  let y = window.scrollY;
  
  if (y > 150) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  window.scroll({
  top: 0, 
  left: 0, 
  behavior: 'smooth'
});}

scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}