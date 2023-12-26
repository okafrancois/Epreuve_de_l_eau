function getToCamelCase(args) {
  const errorMessage = checkValidity(args);

  if (errorMessage) {
    return errorMessage;
  }

  const [argText] = args;
  const words = argText.split(" ")
  const formattedWords = []

  words.forEach(word => {
    formattedWords.push(formatToCamelCase(word))
  })

  return formattedWords.join(" ")
}

function formatToCamelCase(text) {
  const wordLetters = text.split("")

  const formattedWord = wordLetters.map((letter, index) => {
    return index === 0 ? letter.toUpperCase() : letter.toLowerCase()
  })

  return formattedWord.join("")
}

function checkValidity(args) {
  if (args.length !== 1) {
    return "Error: not enough or too much argument provided (expecting 1)"
  }

  const alphabetLetterReg = /^[a-zA-Z ]+$/

  if (!alphabetLetterReg.test(args[0])) {
    return "Error: Invalid data provided (expecting A-Z, a-z characters only)"
  }

  return null
}
function getNodeProcessArgs() {
  return process.argv.slice(2)
}

console.log(getToCamelCase(getNodeProcessArgs()))