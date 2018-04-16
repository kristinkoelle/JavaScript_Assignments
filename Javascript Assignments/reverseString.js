"use strict"; 

let userInputString=document.getElementById("uIString").value;


function reverseString(str){

	let userInputString=document.getElementById("uIString").value;
	let reverseString=("");
	console.log(userInputString.length);
	for (i = userInputString.length - 1; i >=0; i --) {
		reverseString += userInputString[i];
		document.getElementById("reverseString").innerHTML = reverseString;
	}

}


