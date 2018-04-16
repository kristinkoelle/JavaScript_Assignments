"use strict"; 


function fibonacciNumber(){
	let userInputString=document.getElementById("uIString").value;
	testFibonacci(1);
	console.log(testFibonacci(userInputString));
}
function testFibonacci(num){
	let temp = 0;
	let a = 0;
	let b = 1;
	for (let i = 2; i <= num; i ++) {
		temp = a + b;
		a = b;
		b = temp;		
		console.log(temp);
	}
	window.onload = fibonacciNumber();
	return temp;
}
