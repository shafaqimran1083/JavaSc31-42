var currentDate = new Date();


var dateString = currentDate.toDateString();


var timeString = currentDate.toLocaleTimeString();


document.write("Current Date: " + dateString + "<br>");
document.write("Current Time: " + timeString);

var currentDate = new Date();


var currentMonth = currentDate.getMonth();


var monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


var currentMonthName = monthNames[currentMonth];


alert("Current Month: " + currentMonthName);

var currentDate = new Date();


var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Get the current day as a number (0 - 6)
var currentDay = currentDate.getDay();

// Get the first three letters of the current day name
var currentDayLetters = dayNames[currentDay];

// Alert the first three letters of the current day
alert("Current Day: " + currentDayLetters);

var currentDate = new Date();


var currentDay = currentDate.getDay();


if (currentDay === 6 || currentDay === 0) {
  
  document.write("It's Fun day");
} else {
  
  document.write("It's not Fun day");
}

var currentDate = new Date();


var currentDay = currentDate.getDate();


if (currentDay < 16) {
  
  document.write("First fifteen days of the month");
} else {
  
  document.write("Last days of the month");
}

var currentDate = new Date();


var millisecondsSince1970 = currentDate.getTime();


var minutesSince1970 = millisecondsSince1970 / (1000 * 60);


var minutesSinceMidnight = minutesSince1970;


document.write("Minutes since midnight, Jan. 1, 1970: " + minutesSinceMidnight);

var currentDate = new Date();


var currentHour = currentDate.getHours();


if (currentHour < 12) {
  
  alert("It's AM");
} else {
  
  alert("It's PM");
}

var laterDate = new Date(2020, 11, 31);


console.log("Later Date:", laterDate);

var startingDate = new Date(2016, 5, 18);

var currentDate = new Date();


var millisecondsPassed = currentDate - startingDate;


var daysPassed = Math.floor(millisecondsPassed / (1000 * 60 * 60 * 24));


alert("Number of days past since 1st Ramadan: " + daysPassed);

var referenceDate = new Date("January 1, 2016");


var beginningOf2016 = new Date("January 1, 2016");


beginningOf2016.setHours(0, 0, 0, 0);


var secondsElapsed = Math.floor((referenceDate - beginningOf2016) / 1000);


document.write("Seconds elapsed since the beginning of 2016: " + secondsElapsed);

var currentDate = new Date();


var currentHours = currentDate.getHours();


currentDate.setHours(currentHours + 1);


document.write("Updated Date: " + currentDate);

var currentDate = new Date();


currentDate.setFullYear(currentDate.getFullYear() - 100);


alert("Date 100 years back: " + currentDate);

var customerName = prompt("Enter Customer Name:");
var currentMonth = prompt("Enter Current Month:");


var unitsConsumed = Math.random() * 200; 
var unitPrice = Math.random() * 15; 


var totalAmount = unitsConsumed * unitPrice;


unitsConsumed = unitsConsumed.toFixed(2);
unitPrice = unitPrice.toFixed(2);
totalAmount = totalAmount.toFixed(2);


document.write("<h2>K-Electric Bill</h2>");
document.write("<p><strong>Customer Name: </strong>" + customerName + "</p>");
document.write("<p><strong>Current Month: </strong>" + currentMonth + "</p>");
document.write("<p><strong>Units Consumed: </strong>" + unitsConsumed + "</p>");
document.write("<p><strong>Unit Price: </strong>" + unitPrice + "</p>");
document.write("<p><strong>Total Amount: </strong>" + totalAmount + "</p>");

var customerName = prompt("Enter Customer Name:");
var currentMonth = prompt("Enter Current Month:");


var unitsConsumed = Math.random() * 200; 
var unitPrice = Math.random() * 15; 
var dueDate = new Date().toLocaleDateString();
var latePaymentSurcharge = totalAmount * 0.1; 
var netAmountPayable = totalAmount; 
var grossAmountPayable = totalAmount + latePaymentSurcharge; 

unitsConsumed = unitsConsumed.toFixed(2);
unitPrice = unitPrice.toFixed(2);
latePaymentSurcharge = latePaymentSurcharge.toFixed(2);
netAmountPayable = netAmountPayable.toFixed(2);
grossAmountPayable = grossAmountPayable.toFixed(2);


document.write("<h2>K-Electric Bill</h2>");
document.write("<p><strong>Customer Name: </strong>" + customerName + "</p>");
document.write("<p><strong>Current Month: </strong>" + currentMonth + "</p>");
document.write("<p><strong>Number of Units: </strong>" + unitsConsumed + "</p>");
document.write("<p><strong>Charges per Unit: </strong>" + unitPrice + "</p>");
document.write("<p><strong>Net Amount Payable (within Due Date): </strong>" + netAmountPayable + "</p>");
document.write("<p><strong>Late Payment Surcharge: </strong>" + latePaymentSurcharge + "</p>");
document.write("<p><strong>Gross Amount Payable (after Due Date): </strong>" + grossAmountPayable + "</p>");
function displayCurrentDateTime() {
    
    var currentDate = new Date();
    
   
    var dateTimeString = currentDate.toLocaleString();
    
    
    document.write("<h2>Current Date & Time</h2>");
    document.write("<p>" + dateTimeString + "</p>");
  }
  
 
  displayCurrentDateTime();
  function greetUser(firstName, lastName) {
   
    var fullName = firstName + " " + lastName;
    
   
    document.write("<h2>Welcome, " + fullName + "!</h2>");
  }
  
  
  var firstName = prompt("Enter your first name:");
  var lastName = prompt("Enter your last name:");
  
  
  greetUser(firstName, lastName);
  function calculate(num1, num2, operator) {
    var result;
    
    
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        document.write("<p>Invalid operator!</p>");
        return; 
    }
    
    
    document.write("<h2>Calculation Result</h2>");
    document.write("<p>" + num1 + " " + operator + " " + num2 + " = " + result + "</p>");
    
    return result;
  }
  
  
  var num1 = parseFloat(prompt("Enter the first number:"));
  var num2 = parseFloat(prompt("Enter the second number:"));
  var operator = prompt("Enter the operator (+, -, *, /):");
  
  
  var result = calculate(num1, num2, operator);
  function countNumbers(start, end) {
    
    document.write("<h2>Counting</h2>");
    
   
    for (var i = start; i <= end; i++) {
      document.write("<p>" + i + "</p>");
    }
  }
  
  
  var start = parseInt(prompt("Enter the start number:"));
  var end = parseInt(prompt("Enter the end number:"));
  
  
  countNumbers(start, end);
  function calculateHypotenuse(base, perpendicular) {
    
    function square(number) {
      return number * number;
    }
    
   
    var baseSquare = square(base);
    var perpendicularSquare = square(perpendicular);
    var hypotenuseSquare = baseSquare + perpendicularSquare;
    var hypotenuse = Math.sqrt(hypotenuseSquare);
    
    
    return hypotenuse;
  }
  
  
  var base = parseFloat(prompt("Enter the base value:"));
  var perpendicular = parseFloat(prompt("Enter the perpendicular value:"));
  
 
  var hypotenuse = calculateHypotenuse(base, perpendicular);
  
  
  document.write("<h2>Computed Hypotenuse</h2>");
  document.write("<p>Base: " + base + "</p>");
  document.write("<p>Perpendicular: " + perpendicular + "</p>");
  document.write("<p>Hypotenuse: " + hypotenuse + "</p>");
  
function calculateAreaWithValueArguments(width, height) {
    var area = width * height;
    return area;
  }
  
  
  function calculateAreaWithVariableArguments() {
    var width = arguments[0];
    var height = arguments[1];
    var area = width * height;
    return area;
  }
  
  
  var areaWithValueArguments = calculateAreaWithValueArguments(5, 10);
  document.write("<h2>Area using value arguments</h2>");
  document.write("<p>Width: 5</p>");
  document.write("<p>Height: 10</p>");
  document.write("<p>Area: " + areaWithValueArguments + "</p>");
  
  
  var width = 7;
  var height = 12;
  var areaWithVariableArguments = calculateAreaWithVariableArguments(width, height);
  document.write("<h2>Area using variable arguments</h2>");
  document.write("<p>Width: " + width + "</p>");
  document.write("<p>Height: " + height + "</p>");
  document.write("<p>Area: " + areaWithVariableArguments + "</p>");
  function checkPalindrome(str) {
    
    var sanitizedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    
    var reversedStr = sanitizedStr.split('').reverse().join('');
  
    
    if (sanitizedStr === reversedStr) {
      return true;
    } else {
      return false;
    }
  }
  

  var userInput = prompt("Enter a string:");
  
  
  var isPalindrome = checkPalindrome(userInput);
  
  if (isPalindrome) {
    document.write("<h2>" + userInput + " is a palindrome!</h2>");
  } else {
    document.write("<h2>" + userInput + " is not a palindrome.</h2>");
  }
  function capitalizeWords(str) {
    var words = str.split(" ");
    var capitalizedWords = [];
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      capitalizedWords.push(capitalizedWord);
    }
  
    var capitalizedString = capitalizedWords.join(" ");
    return capitalizedString;
  }
  
  
  var inputString = "the quick brown fox";
  var capitalizedString = capitalizeWords(inputString);
  
  document.write("<h2>Original String:</h2>");
  document.write("<p>" + inputString + "</p>");
  
  document.write("<h2>Capitalized String:</h2>");
  document.write("<p>" + capitalizedString + "</p>");
  function findLongestWord(str) {
    var words = str.split(" ");
    var longestWord = "";
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }
  
  
  var inputString = "Web Development Tutorial";
  var longestWord = findLongestWord(inputString);
  
  document.write("<h2>Original String:</h2>");
  document.write("<p>" + inputString + "</p>");
  
  document.write("<h2>Longest Word:</h2>");
  document.write("<p>" + longestWord + "</p>");
  function countOccurrences(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) === letter) {
        count++;
      }
    }
    return count;
  }
  
  
  var inputString = 'JSResourceS.com';
  var targetLetter = 'o';
  
  var occurrences = countOccurrences(inputString, targetLetter);
  
  document.write("<h2>Original String:</h2>");
  document.write("<p>" + inputString + "</p>");
  
  document.write("<h2>Occurrences of '" + targetLetter + "':</h2>");
  document.write("<p>" + occurrences + "</p>");
  
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.write("The circumference is " + circumference);
  }
  
  
  function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    document.write("The area is " + area);
  }
  
  
  var radius = 5;
  
  document.write("<h2>Circle Properties:</h2>");
  
  document.write("<h3>Circumference:</h3>");
  calcCircumference(radius);
  
  document.write("<h3>Area:</h3>");
  calcArea(radius);
  function power(a, b) {
    var result = Math.pow(a, b);
    return result;
  }
  
  
  var base = 2;
  var exponent = 3;
  
  var powerValue = power(base, exponent);
  
  document.write("<h2>Power Calculation:</h2>");
  document.write("<p>" + base + " raised to the power " + exponent + " is " + powerValue + "</p>");
  function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
 
  var inputYear = prompt("Enter a year:");
  
  if (isLeapYear(inputYear)) {
    document.write("<p>" + inputYear + " is a leap year.</p>");
  } else {
    document.write("<p>" + inputYear + " is not a leap year.</p>");
  }
  function calculateTriangleArea(a, b, c) {
    var s = (a + b + c) / 2;
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
  }
  
  
  var sideA = 5;
  var sideB = 6;
  var sideC = 7;
  
  var triangleArea = calculateTriangleArea(sideA, sideB, sideC);
  
  document.write("<h2>Triangle Area Calculation:</h2>");
  document.write("<p>The area of the triangle with sides " + sideA + ", " + sideB + ", " + sideC + " is " + triangleArea + "</p>");
  function calculateAverage(subject1, subject2, subject3) {
    var totalMarks = subject1 + subject2 + subject3;
    var average = totalMarks / 3;
    return average;
  }
  
  function calculatePercentage(subject1, subject2, subject3) {
    var totalMarks = subject1 + subject2 + subject3;
    var totalMarksPossible = 300; // Assuming each subject has a maximum of 100 marks
    var percentage = (totalMarks / totalMarksPossible) * 100;
    return percentage;
  }
  
  function mainFunction() {
    var subject1Marks = parseFloat(prompt("Enter marks for subject 1:"));
    var subject2Marks = parseFloat(prompt("Enter marks for subject 2:"));
    var subject3Marks = parseFloat(prompt("Enter marks for subject 3:"));
  
    var average = calculateAverage(subject1Marks, subject2Marks, subject3Marks);
    var percentage = calculatePercentage(subject1Marks, subject2Marks, subject3Marks);
  
    document.write("<h2>Student Marks Calculation:</h2>");
    document.write("<p>Subject 1 Marks: " + subject1Marks + "</p>");
    document.write("<p>Subject 2 Marks: " + subject2Marks + "</p>");
    document.write("<p>Subject 3 Marks: " + subject3Marks + "</p>");
    document.write("<p>Average Marks: " + average.toFixed(2) + "</p>");
    document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
  }
  
  
  mainFunction();
  function customIndexOf(string, searchChar) {
    for (var i = 0; i < string.length; i++) {
      if (string[i] === searchChar) {
        return i;
      }
    }
    return -1; 
  }
  
  
  var word = "Hello";
  var searchChar = "o";
  var index = customIndexOf(word, searchChar);
  
  if (index !== -1) {
    document.write("Character '" + searchChar + "' found at index " + index + " in the word '" + word + "'.");
  } else {
    document.write("Character '" + searchChar + "' not found in the word '" + word + "'.");
  }
  function removeVowels(sentence) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var newSentence = '';
  
    for (var i = 0; i < sentence.length; i++) {
      var currentChar = sentence[i].toLowerCase();
      if (vowels.indexOf(currentChar) === -1) {
        newSentence += sentence[i];
      }
    }
  
    return newSentence;
  }
  
 
  var sentence = "Hello, how are you today?";
  var result = removeVowels(sentence);
  
  document.write("Original sentence: " + sentence + "<br>");
  document.write("Sentence without vowels: " + result);
  function countSuccessiveVowels(text) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var count = 0;
  
    
    text = text.toLowerCase();
  
    for (var i = 0; i < text.length - 1; i++) {
      var currentChar = text[i];
      var nextChar = text[i + 1];
  
     
      if (vowels.indexOf(currentChar) !== -1 && vowels.indexOf(nextChar) !== -1) {
       
        count++;
      }
    }
  
    return count;
  }
  
  
  var sentence = "Pleases read this application and give me gratuity";
  var result = countSuccessiveVowels(sentence);
  
  document.write("Number of occurrences of successive vowels: " + result);
  
function convertToMeters(kilometers) {
    return kilometers * 1000;
  }
  
 
  function convertToFeet(kilometers) {
    return kilometers * 3280.84;
  }
  
  
  function convertToInches(kilometers) {
    return kilometers * 39370.08;
  }
  
  
  function convertToCentimeters(kilometers) {
    return kilometers * 100000;
  }
  
  
  function printDistances(kilometers) {
    var meters = convertToMeters(kilometers);
    var feet = convertToFeet(kilometers);
    var inches = convertToInches(kilometers);
    var centimeters = convertToCentimeters(kilometers);
  
    console.log("Distance in meters: " + meters + " m");
    console.log("Distance in feet: " + feet + " ft");
    console.log("Distance in inches: " + inches + " in");
    console.log("Distance in centimeters: " + centimeters + " cm");
  }
  
 
  var distanceInKilometers = parseFloat(prompt("Enter the distance between two cities in kilometers:"));
  printDistances(distanceInKilometers);
  function calculateOvertimePay(hoursWorked) {
    var normalHours = 40;
    var overtimeRate = 12.00;
    var overtimeHours = hoursWorked - normalHours;
    var overtimePay = 0;
  
    if (overtimeHours > 0) {
      overtimePay = overtimeHours * overtimeRate;
    }
  
    return overtimePay;
  }
  
  
  var hoursWorked = parseFloat(prompt("Enter the number of hours worked by the employee:"));
  var overtimePay = calculateOvertimePay(hoursWorked);
  console.log("Overtime Pay: Rs. " + overtimePay.toFixed(2));
  function calculateCurrencyNotes(amount) {
    var denomination100 = Math.floor(amount / 100);
    var denomination50 = Math.floor((amount % 100) / 50);
    var denomination10 = Math.floor(((amount % 100) % 50) / 10);
  
    console.log("Number of 100 rupee notes: " + denomination100);
    console.log("Number of 50 rupee notes: " + denomination50);
    console.log("Number of 10 rupee notes: " + denomination10);
  }
  
  
  var amount = parseInt(prompt("Enter the amount to be withdrawn (in hundreds):"));
  calculateCurrencyNotes(amount);