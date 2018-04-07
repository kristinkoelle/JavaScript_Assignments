"use string"; 

let userInputString=document.getElementById("uIString").value;



function capitalizeFirstLetter(string) {
	let userInputString=document.getElementById("uIString").value;
	let stringToArray = userInputString.split(" ");
	console.log(stringToArray);
	let len=(stringToArray.length)
	for(let i=0; i < len; i++){
		let word=stringToArray.slice(i);
		console.log(word);
		changeLowerToUpper(word);
		console.log(word);


		console.log(stringToArray);
		return stringToArray;
	}

    document.getElementById("capitalizeFirst").innerHTML = capitalizeFirst;
}
function changeLowerToUpper (word) {
	return word.charAt(0).toUpperCase();
}