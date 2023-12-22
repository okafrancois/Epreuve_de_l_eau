function getFibonacciFromIndex(args) {
  const errorMessage = checkValidity(args)

  if (errorMessage) {
    return errorMessage
  }
  const endPoint = Number(args[0])
  const suite = generateFibonacciToIndex(endPoint)

  return suite[endPoint]
}

function generateFibonacciToIndex(index) {
  const suite = []

  for (let i = 0; i <= index; i++) {
    if (suite.length === 0) {
      suite.push(0)
    } else if (suite.length === 1) {
      suite.push(1)
    } else {
      suite.push(suite[i - 2] + suite[i - 1])
    }
  }

  return suite
}
function checkValidity(args) {
  if (args.length !== 1) {
    return "Error: not enough or too much argument provided (expecting 1)"
  }

  if (isNaN(Number(args[0])) || Number(args[0]) < 0) {
    return -1
  }

  return null
}
function getNodeProcessArgs() {
  return process.argv.slice(2)
}

console.log(getFibonacciFromIndex(getNodeProcessArgs()))