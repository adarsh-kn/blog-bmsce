function search() {
// Declare variables
    var input, filter, posts, a, i, toggleNotFound = true;
    input = document.getElementById("searchPost");
    filter = input.value.toLowerCase();
    posts = document.getElementsByClassName("accordion");
    panels = document.getElementsByClassName("panel");

// Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < posts.length; i++) {
        for(let j of ["strong"]){
            var tags = posts[i].getElementsByTagName(j);
            for(var tag of tags){
                if (tag.innerHTML.toLowerCase().indexOf(filter) > -1) {
                    posts[i].style.visibility = "visible";
                    posts[i].style.display = "inline-block";
                    panels[i].style.visibility = "visible";
                    panels[i].style.display = "inline-block";
                    toggleNotFound = false;
                }
                else {
                    posts[i].style.display = "none";
                    panels[i].style.display = "none";
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
