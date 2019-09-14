
function gpaCalc() {

// Get the number of rows to loop through
var numOfRows = document.getElementById("tbl").rows.length;

// empty array that will store grade values
var storedGrades = [];

// loops through elements in letter grades and stores them in array

for (i=1; i < numOfRows; i++) {

    var letter = "letter"+i;
    var grade = document.getElementById(letter).value;

    storedGrades.push(grade);

}

// Remove any blank values user may have entered
var finalGrades = storedGrades.filter(Boolean);

var numGrades = []

// Change letter grades to numbers
for (i=0; i < finalGrades.length; i++) {

  switch (finalGrades[i]) {
    case "A+":
      numGrades.push(4.0);
      break;

    case "A":
      numGrades.push(4.0);
      break;

    case "A-":
      numGrades.push(3.7);
      break;

    case "B+":
      numGrades.push(3.3);
      break;

    case "B":
      numGrades.push(3.0);
      break;

    case "B-":
      numGrades.push(2.7);
      break;

    case "C+":
      numGrades.push(2.3);
      break;

    case "C":
      numGrades.push(2.0);
      break;

    case "C-":
      numGrades.push(1.7);
      break;

    case "D+":
      numGrades.push(1.3);
      break;

    case "D":
      numGrades.push(1.0);
      break;

    case "F":
      numGrades.push(0);
      break;

  }
}

// empty array that will store weight values
var storedWeights = [];

// loops through elements in grade weightings and stores them in array
for (i=1; i < numOfRows; i++) {

    var weight = "weight"+i;
    var weightValue = document.getElementById(weight).value;

    storedWeights.push(weightValue);
}

// Remove blank values user may have entered
var strWeights = storedWeights.filter(Boolean);

// Convert array of strings to their number equivalent
var finalWeights = strWeights.map(Number);

// function to sum an array
function sum(arr) {

          var s = 0;
          for(var i = 0; i < arr.length; i++) {
      s = s + arr[i];
    }
    return s;
    
}

var sumOfWeights = sum(finalWeights);

var z = 0;

for(var i=0; i< numGrades.length; i++) {
z += numGrades[i]*finalWeights[i];
}

final = (z / sumOfWeights);

document.getElementById("gpa").value = final;

}
