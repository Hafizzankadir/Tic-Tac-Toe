


// Change Music

var a = 1;
function myFunction() {
  var audio = document.getElementById('music1');
  if (a==1) {
    document.getElementById("music1").src = "https://www.youtube.com/embed/Gb33Qnbw520?rel=0&autoplay=1";

    a = 2;
  }
  else {
    
    document.getElementById("music1").src = "https://www.youtube.com/embed/tdESE94vQwg?rel=0&autoplay=1";
    a = 1;
  }
  audio.load();
}


// changeAudio();
// function myFunction() {
//     document.getElementById("music1").src = "https://www.youtube.com/embed/Gb33Qnbw520?rel=0&autoplay=1";
//   }

  