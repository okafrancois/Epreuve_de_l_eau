function getIntervalValues(args) {
  const errorMessage = checkValidity(args);

  if (errorMessage) {
    return errorMessage;
  }

  const startLimit = Number(args[0])
  const endLimit = Number(args[1])

  return getValuesBetween(startLimit, endLimit).join(" ")
}

function getValuesBetween(start, end) {
  const output = []

  for (let i = start; i < end; i++) {
    output.push(i)
  }

  return output
}

function checkValidity(args) {
  if (args.length !== 2) {
    return "Error: not enough or too much argument provided (expecting 2)"
  }

  if (isNaN(Number(args[0])) || isNaN(Number(args[1]))) {
    return "Error: invalid data provided (expecting 2 numbers)"
  }

  return null
}
function getNodeProcessArgs() {
  return process.argv.slice(2)
}

console.log(getIntervalValues(getNodeProcessArgs()))