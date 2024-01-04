 function getThreeDigitCombinations() {
   const DIGITS = "0123456789"
   const combinations = [];

   for (let a = 0; a <= DIGITS.length - 1; a++) {
     for (let b = a+1; b <= DIGITS.length - 1 ; b++) {
       for (let c = b+1; c <= DIGITS.length - 1; c++) {
         combinations.push(`${DIGITS[a]} ${DIGITS[b]} ${DIGITS[c]}`)
       }
     }
   }

   return combinations.join(", ")
 }

 console.log(getThreeDigitCombinations())