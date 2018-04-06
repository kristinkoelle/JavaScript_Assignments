function reverseString(str){
	let revString = " ";
	for ( let i = str.length - 1; i >=0; i--) {
		newString += str[i];
		document.getElementById("reverseText").innerHTML = newString;
		return newString; 
	}
}
	