var numberOfDrums = document.querySelectorAll(".drum").length;
// alert(numberOfDrums);
for (var i=0; i<numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var key = this.innerHTML;
    playSound(key);
    buttonAnimation(key);
  });
}
document.addEventListener("keypress", function(event){
  var key = event.key;
  playSound(key);
  buttonAnimation(key);
});
// for (var i=0; i<numberOfDrums; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", playSound);
// }
function buttonAnimation(key){
  var buttonPressed = document.querySelector("." + key);
  buttonPressed.classList.add("pressed");
  setTimeout(function() {
    buttonPressed.classList.remove("pressed");
  }, 100);
  
}

function playSound(key) {
  switch (key) {
    case 'w':
      console.log(key);
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;

    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
      
    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;

    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
      
    case "j":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
      
    case "k":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
      
    case "l":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;


    default:
      break;
  }
//   var audio = new Audio('sounds/tom-1.mp3');
//   audio.play();
}