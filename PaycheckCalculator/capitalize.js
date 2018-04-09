"use strict"; 

function capitalizeFirstLetter(){
	let userInputString=document.getElementById("uIString").value;
	let userInputArray=userInputString.split("");
	console.log(userInputArray);
	let len=userInputArray.length
	let finalArray=[];
	for (let i=0; i< len; i++) {
		let singleWord=userInputArray.shift();
		let capWord=singleWord.charAt(0).toUpperCase()+singleWord.slice(1);
		console.log(capWord);
		finalArray.push(capWord);
		console.log(finalArray);
	}
	finalArray=finalArray.join(" ");
	document.getElementById("capitalizeFirstLetter").innerHTML = finalArray;
	return finalArray;
}

