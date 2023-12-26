function getAbsoluteMinimum(args) {
  const errorMessage = checkValidity(args);

  if (errorMessage) {
    return errorMessage;
  }

  const numbers = args.map(item => Number(item))

  return getMinimumDiffBetweenItems(numbers)
}

function getMinimumDiffBetweenItems(numbers) {
  let output;

  numbers.forEach(number => {
    for (const testNumber of numbers) {
      if (number === testNumber) {
        continue
      }

      const operationResult = getDifBetween(number, testNumber)

      if (output === undefined || output === operationResult) {
        output = operationResult
      }
    }
  })

  return output
}
function getDifBetween(a, b) {
  return a > b ? a - b : b - a
}

function checkValidity(args) {
  if (args.length < 2) {
    return "Error: not enough argument provided (expecting 2 at least)"
  }

  if (!containNumberOnly(args)) {
    return "Error: invalid data provided (expecting numbers only array)"
  }

  return null
}

function containNumberOnly(args) {
  for (const item of args) {
    if (isNaN(Number(item))) {
      return false
    }
  }

  return true
}

function getNodeProcessArgs() {
  return process.argv.slice(2)
}

console.log(getAbsoluteMinimum(getNodeProcessArgs()))