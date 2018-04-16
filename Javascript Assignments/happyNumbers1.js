 function happyNumbers() {
            let resultHappy = document.getElementById("happy-result")
            let userInputValue = parseInt(document.getElementById("happyValue").value)
            resultHappy.innerHTML=""
            for (i = 1; i < userInputValue; i++) {

               (calcHappy(i, i)) 
                 
            }

        }

        function calcHappy(value,value2) {
            let resultHappy = document.getElementById("happy-result")
            let lengthNum = value.toString().length;
            let resultNumbers = 0

            for (let i = 0 ; i < lengthNum; i++) {

                resultNumbers = resultNumbers + parseInt(value.toString().charAt(i)) * parseInt(value.toString().charAt(i))

            }
           
            if (resultNumbers == 4) {
                return false
            } else if (resultNumbers == 1) {
                resultHappy.innerHTML += i +" is a happy number.<br>" 
                return true
            }else{
                calcHappy(resultNumbers, value2);
            }

        }
        
         =happyNumbers()