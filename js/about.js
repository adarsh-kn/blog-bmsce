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

var myVar;

        function myFunction() {

            function progress(){
              var percent = document.querySelector('.percent');
              var progress = document.querySelector('.progress');
              var text = document.querySelector('.text');
              var count = 4;
              var per = 16;
              var loading = setInterval(animate, 20);
              function animate(){
                if(count == 100 && per == 400){
                  percent.classList.add("text-blink");
                  text.style.display = "block";
                  clearInterval(loading);
                }else{
                  per = per + 4;
                  count = count + 1;
                  progress.style.width = per + 'px';
                  percent.textContent = count + '%';
                }
              }
            }
            progress();
            myVar = setTimeout(showPage, 2700);
        }

        function showPage() {
          document.getElementById("loader").style.display = "none";
          document.getElementById("myDiv").style.display = "block";
        }