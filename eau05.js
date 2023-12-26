function isIncludeInString(args) {
  const errorMessage = checkValidity(args);

  if (errorMessage) {
    return errorMessage;
  }

  const [baseString, toSearchString] = args;

  return isIncluded(baseString.toLowerCase(), toSearchString.toLowerCase());
}

function isIncluded(baseString, toSearchString) {
  let matchIndex = 0;

  for (let i = 0; i < baseString.length; i++) {
    if (baseString[i] === toSearchString[matchIndex]) {
      matchIndex++;
      if (matchIndex === toSearchString.length) {
        return true;
      }
    } else {
      matchIndex = 0;
    }
  }

  return false;
}

function checkValidity(args) {
  if (args.length !== 2) {
    return "Error: not enough or too much argument provided (expecting 2)"
  }

  return null
}
function getNodeProcessArgs() {
  return process.argv.slice(2)
}

console.log(isIncludeInString(getNodeProcessArgs()))