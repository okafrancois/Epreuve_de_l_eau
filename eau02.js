function getReversedArgs(args) {
  const errorMessage = checkValidity(args)

  if (errorMessage) {
    return errorMessage
  }

  const output = []

  for (const element of args) {
    output.unshift(element)
  }

  return output.join("\n")
}

function checkValidity(args) {
  if (args.length === 0) {
    return "Error: on argument provided"
  }

  return null
}
function getNodeProcessArgs() {
  return process.argv.slice(2)
}

console.log(getReversedArgs(getNodeProcessArgs()))