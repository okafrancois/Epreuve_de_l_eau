function getTwoDigitCombinations() {
  const DIGITS = "0123456789"
  const combinations = [];

  for (let a = 0; a <= DIGITS.length - 1; a++) {
    for (let b = a+1; b <= DIGITS.length - 1 ; b++) {
      combinations.push(`${DIGITS[a]} ${DIGITS[b]}`)
    }
  }

  return combinations.join(", ")
}

console.log(getTwoDigitCombinations())