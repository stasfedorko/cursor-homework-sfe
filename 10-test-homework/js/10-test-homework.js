console.log("SFE homework #10");


let soundBtn = document.getElementsByClassName("js-btn-toggle");
// let soundBtn = document.getElementsById("button");

// console.dir(soundBtn); 

soundBtn.onclick = function() {
  console.log('click1');
}

soundBtn.getEventListeners('click', function() {
  console.log('click2');
});




// function toggleFunc() {
//   let element = document.getElementsByClassName("js-btn-toggle");
//   element.classList.toggle("active");
// }
