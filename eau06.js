function getToEvenUppercase(args) {
  const errorMessage = checkValidity(args);

  if (errorMessage) {
    return errorMessage;
  }

  const [argText] = args;

  let output = ""
  for (let i = 0; i < argText.length; i++) {
    output += isEven(i) ? argText[i].toUpperCase() : argText[i].toLowerCase()
  }

  return output
}

function isEven(value) {
  return value % 2 === 0
}

function checkValidity(args) {
  if (args.length !== 1) {
    return "Error: not enough or too much argument provided (expecting 1)"
  }

  const ALPHABET_REG = /^[a-zA-Z ]+$/
  if (!ALPHABET_REG.test(args[0])) {
    return "Error: Invalid data provided (expecting A-Z, a-z characters only)"
  }

  return null
}

function getNodeProcessArgs() {
  return process.argv.slice(2)
}

console.log(getToEvenUppercase(getNodeProcessArgs()))