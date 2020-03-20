console.log("SFE homework #10");


document.addEventListener('keydown', function(event){
  let keyButton = null;
  keyButton = document.getElementById(event.code);
  keyButton.classList.add('active');
  setTimeout(function(){ keyButton.classList.remove('active'); }, 150);

  let audio = null;
  audio = document.getElementById(`${event.code}-audio`);
  audio.currentTime = 0;
  audio.play();
});