//define functions here

function getIt() {
  alert('Hey!')
}

function frameIt() {
  $('img').addClass('tasty')
}

function pressIt() {
  alert('You pressed G!')
}

function pressIt() {
  $('#typing').on('keydown', function(e) {
    // 'g' corresponds to 71
    if (e.which === 71) {
      alert("You pressed 'g'!")
    }
  })
}


function submitIt() {
  alert('Your form is going to be submitted now.')
}

$(document).ready(function(){

// call functions here

$('p').on("click", getIt);

$('img').on("load", frameIt);

/* $('#typing').on('keypress', function(key) {
  if (key.which == 71){
    pressIt();
  }
}); */

$("form").on("submit", submitIt);
  
});