function getReversedArgs(args) {
  const errorMessage = checkValidity(args)

  if (errorMessage) {
    return errorMessage
  }

  const output = []

  for (let i = args.length - 1; i >= 0; i--) {
    output.push(args[i])
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