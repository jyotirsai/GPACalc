
function gpaCalc() {


var grade1 = document.getElementById("letter1").value; // unneccesary

var numOfRows = document.getElementById("tbl").rows.length; // Get the number of rows to loop through
var storedGrades = []; // empty array that will store grade values



// loops through elements in letter grades and stores them in array

for (i=1; i < numOfRows; i++) {

    var letter = "letter"+i;
    var grade = document.getElementById(letter).value;

    storedGrades.push(grade);

}


var finalGrades = storedGrades.filter(Boolean); // Remove blank values, all grade values


var gradesLength = finalGrades.length


var numGrades = []

// Change letter grades to numbers

for (i=0; i < gradesLength; i++) {

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

  console.log(numGrades);

}


var storedWeights = []; // empty array that will store weight values


// loops through elements in grade weightings and stores them in array

for (i=1; i < numOfRows; i++) {

    var weight = "weight"+i;
    var weightValue = document.getElementById(weight).value;

    storedWeights.push(weightValue);



}

var strWeights = storedWeights.filter(Boolean); // Remove blank values, contains all weights as string

var finalWeights = strWeights.map(Number); // Convert array of strings to numbers


console.log(finalWeights);


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
