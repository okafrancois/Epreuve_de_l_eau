function containNumberOnly(args) {
  const errorMessage = checkValidity(args);

  if (errorMessage) {
    return errorMessage;
  }

  const [values] = args;

  for (const item of values) {
    if (isNaN(Number(item))) {
      return false
    }
  }

  return true
}

function checkValidity(args) {
  if (args.length !== 1) {
    return "Error: not enough or too much argument provided (expecting 1)"
  }

  return null
}
function getNodeProcessArgs() {
  return process.argv.slice(2)
}

console.log(containNumberOnly(getNodeProcessArgs()))