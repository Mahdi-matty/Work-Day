function timeNow() {
  var now = dayjs();
  $('#dateTime').text(now.format ('MMM D, YYYY h:mm:ss A'));

}
setInterval(timeNow, 1000);

var elements= document.querySelectorAll('[data-number]');
function compareTime() {
  var justHour= dayjs();
  var thisMoment = (justHour.format('HH'));
  elements.forEach(function(element){
    var dataNumber=(element.getAttribute('data-number'));
    for (var i=0; i<dataNumber.length; i++){
      if (dataNumber<thisMoment){
        element.classList.add('time-block', 'past');
      }else if (dataNumber===thisMoment){
        element.classList.add('time-block', 'present');
      }else {
        element.classList.add('time-block', 'future');
    }
  }
})
}
compareTime();
var textStatus = document.querySelectorAll('textarea');
var buttons=document.querySelectorAll("button");

buttons.forEach(function(button, index){
    button.addEventListener("click", function(){
      var textValue=textStatus[index].value;
      localStorage.setItem("savedTask"+index, textValue);
      textStatus[index].innerHTML= textValue;
      });
    } );
  
function notSureYet() {
 for (var i=0; i<textStatus.length; i++){
  var savedTask = localStorage.getItem('savedTask'+i);
  if (savedTask){
    textStatus[i].value= savedTask;
  }
 }
}
notSureYet();


    
  


// localStorage.setItem("savedTask", textValue);
//   document.querySelector('textarea').innerHTML= textValue;
//   localStorage.getItem('savedTask');
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
