function getEndMessage(args) {
  const errorMessage = checkValidity(args);

  if (errorMessage) {
    return errorMessage;
  }

  const [adjective] = args

  return `J’ai terminé l’Épreuve de l’Eau et c’était ${adjective}.`
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

console.log(getEndMessage(getNodeProcessArgs()))