//function getValue() is linked to the button onclick event hence called when the generate grade button is clicked
function getValue() {
    let text;
    let marks = prompt("Please enter your marks:"); //prompts the user to enter the student's marks in the input area.
  
    if (typeof marks !== "number") {
      //if input datatype is not a number it returns the text 'Error..Enter your marks.'
      text = "Please enter your marks.";
    }
    if (marks > 79 && marks <= 100) {
      text = "GRADE A";
    } //displays GRADE A if value of marks is greater than 79;
    else if (marks >= 60 && marks <= 79) {
      text = "GRADE B";
    } //displays GRADE B if value of marks is >= 60 and <= 79;
    else if (marks >= 49 && marks <= 59) {
      text = "GRADE C";
    } //displays GRADE C if value marks >=49 and marks <= 59;
    else if (marks >= 40 && marks <= 49) {
      text = "GRADE C";
    } //displays GRADE D if value marks >=40 && marks <= 49;
    else if (marks < 40 ) {
      text = "GRADE E";
    } //displays GRADE E if value of marks is less than 40;
    else if (marks > 100) {
      text = "Invalid mark!";
    } //displays 'The mark entered was invalid' if value of marks is more than 100;
   
    document.getElementById("results").innerHTML = text; //prints the text in the wep page in the
  }