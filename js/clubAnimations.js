


$('.owl-carousel').owlCarousel({
     loop:true,
     margin:5,
     nav:false,
     autoplay:true,
     autoplayTimeout: 3500,
     autoplayHoverPause: false,
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

function search() {
// Declare variables
    var input, filter, posts, a, i, toggleNotFound = true;
    input = document.getElementById("searchPost");
    filter = input.value.toLowerCase();
    posts = document.getElementsByClassName("post");
    let alreadyDisplayed = [];

// Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < posts.length; i++) {
        for(let j of ["h3","h5", "h6"]){
            var tags = posts[i].getElementsByTagName(j);
            for(var tag of tags){
                if (alreadyDisplayed.indexOf(posts[i].id) > -1) {
                    continue;
                }
                if (tag.innerHTML.toLowerCase().indexOf(filter) > -1) {
                    posts[i].style.display = "block";
                    /*posts[i].style.position = "static";*/
                    toggleNotFound = false;
                    alreadyDisplayed.push(posts[i].id);
                }
                else {
                    posts[i].style.display = "none";
                }
            }
        }
    }
    var notFound = document.getElementsByClassName("no-post")[0];
    if(toggleNotFound) {
        notFound.style.display = 'inline-block';
        var noPost = {};
        noPost.opacityIn = [0,1];
        noPost.scaleIn = [0.2, 1.2];
        noPost.scaleOut = 3;
        noPost.durationIn = 300;
        noPost.durationOut = 300;
        noPost.delay = 20;
        anime.timeline({loop: false})
             .add({
               targets: '.no-post',
               opacity: noPost.opacityIn,
               scale: noPost.scaleIn,
               duration: noPost.durationIn,
               delay: noPost.delay
             })
             .add({delay: noPost.delay});
    }
    else {
        notFound.style.display = 'none';
    }
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