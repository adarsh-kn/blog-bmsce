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

var postAnimation = anime({
    targets: ".post",
    width: '75%',
    height: 'auto',
    easing: 'easeInOutQuad',
    direction: 'normal',
    duration: 1000
});
postAnimation.play();

function search() {
// Declare variables
    var input, filter, posts, a, i, toggleNotFound = true;
    let alreadyDisplayed = [];
    input = document.getElementById("searchPost");
    filter = input.value.toLowerCase();
    posts = document.getElementsByClassName("post");

// Loop through all headings and hide those who don't match the search query
    for (i = 0; i < posts.length; i++) {
        for(let j of ["h1", "h2", "h3", "h4", "h5", "h6"]){
            var tags = posts[i].getElementsByTagName(j);
            for(var tag of tags){
            var headingText = tag.innerHTML.toLowerCase();
                if (alreadyDisplayed.indexOf(posts[i].id) > -1) {
                    continue;
                }
                else if (headingText.indexOf(filter) > -1) {
                    posts[i].style.visibility = "visible";
                    posts[i].style.display = "inline-block";
                    toggleNotFound = false;
                    postAnimation.play();
                    alreadyDisplayed.push(posts[i].id);
                }
                else {
                    posts[i].style.display = "none";
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
                targets: '.no-post .letters-1',
                opacity: noPost.opacityIn,
                scale: noPost.scaleIn,
                duration: noPost.durationIn,
                delay: noPost.delay
              }).add({
                  targets: '.no-post .letters-2',
                  opacity: noPost.opacityIn,
                  scale: noPost.scaleIn,
                  duration: noPost.durationIn,
                  delay: noPost.delay
                }).add({
                    targets: '.no-post .letters-3',
                    opacity: noPost.opacityIn,
                    scale: noPost.scaleIn,
                    duration: noPost.durationIn,
                    delay: noPost.delay
                  }).add({
                      targets: '.no-post .letters-4',
                      opacity: noPost.opacityIn,
                      scale: noPost.scaleIn,
                      duration: noPost.durationIn,
                      delay: noPost.delay
                    }).add({delay: 100});
        }
        else {
            notFound.style.display = 'none';
        }
    }
}
