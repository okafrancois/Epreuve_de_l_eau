function getTwoDigitCombinations() {
  const options = "0123456789"

  const combinations = [];

  for (let a = 0; a <= options.length - 1; a++) {
    for (let b = a; b <= options.length - 1 ; b++) {
      combinations.push(`${options[a]} ${options[b]}`)
    }
  }

  return combinations.join(", ")
}

console.log(getTwoDigitCombinations())