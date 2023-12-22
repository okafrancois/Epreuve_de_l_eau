 function getThreeDigitCombinations() {
  const options = "0123456789"

   const combinations = [];

   for (let a = 0; a <= options.length - 1; a++) {
     for (let b = a+1; b <= options.length - 1 ; b++) {
       for (let c = b+1; c <= options.length - 1; c++) {
        combinations.push(`${options[a]} ${options[b]} ${options[c]}`)
       }
     }
   }

   return combinations.join(", ")
 }

 console.log(getThreeDigitCombinations())