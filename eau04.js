function getNextPrimeNumber(args) {
  const errorMessage = checkValidity(args)

  if (errorMessage) {
    return errorMessage
  }

  return findNextPrime(Number(args[0]))
}
function findNextPrime(baseNumber) {
  let current = baseNumber + 1

  while (true) {
    if (isPrimeNumber(current)) {
      return current
    } else {
      current++
    }
  }
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
function isPrimeNumber(value) {
  if (value < 2) {
    return false
  }

  for (let i = 2; i <= Math.sqrt(value); i++) {
    if (value % i === 0) {
      return false
    }
  }

  return true
}
function getNodeProcessArgs() {
  return process.argv.slice(2)
}

console.log(getNextPrimeNumber(getNodeProcessArgs()))