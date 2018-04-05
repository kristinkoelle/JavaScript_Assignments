// let answer = prompt("who was the last prez");
// let answerAttempts = 0;

// while(answer !== "Obama" || answerAttempts < 3) {
//     console.log("whoops try again dummy");
//     answerAttempts++;
// }


// let randomNumber = Math.floor(Math.random() * 10) + 1;

// do {
//     console.log("The randomNumber is " + randomNumber + ".");
//     randomNumber = Math.floor(Math.random() * 10) + 1;
// } while(randomNumber <= 4 || randomNumber >= 6);

// let counter2 = 1;

// while(counter2 <= 3) {
//     console.log("The counter2 is at " + counter2 + ".");
//     counter2++;    
// }

// let hoursWorked = prompt("How many hours did you work?");
// let payRate = prompt("What is your hourly rate?");
// let standardWorkWeekHours = 40;
// let totalPay;

// if(hoursWorked > standardWorkWeekHours) {
//     let overtimePayRateMultiplier = 1.5;
//     let overtimeHours = hoursWorked - standardWorkWeekHours;
//     let overtimeRate = payRate * overtimePayRateMultiplier;
//     totalPay = (standardWorkWeekHours * payRate) + (overtimeHours * overtimeRate);
// }
// else {
//     totalPay = hoursWorked * payRate;
// }

// document.getElementById("totalPayTest").innerHTML = totalPay;
// let totalPay = document.getElementById("totalPayTest").innerHTML;

// console.log('typeof document.getElementById("totalPayTest")', typeof document.getElementById("totalPayTest"));
// HOISTING Example

// if(true) {
//     let test = "Hello World!";
// }

// console.log(test);