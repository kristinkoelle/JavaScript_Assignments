"use strict"; 

function palindromeTest(){

	function reverseString(str){
		let userInputString=document.getElementById("uIString").value;
		let reverseString=("");
		console.log(userInputString.length);
		for (i = userInputString.length - 1; i >=0; i --) {
			reverseString += userInputString[i];}
		return reverseString;
		}
	let completeString =reverseString();
	let userInputString=document.getElementById("uIString").value;
	if (userInputString ===completeString){
		document.getElementById("resultPalidrome").innerHTML = ("Yes");	}
	else{
		document.getElementById("resultPalidrome").innerHTML = ("No");	}
}

