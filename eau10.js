function getStringIndex(args) {
  const errorMessage = checkValidity(args);

  if (errorMessage) {
    return errorMessage;
  }

  const [baseString, toSearchString] = args;

  return getFirstIndex(baseString.toLowerCase(), toSearchString.toLowerCase());
}

function getFirstIndex(baseString, toSearchString) {
  let matchIndex = 0;

  for (let i = 0; i < baseString.length; i++) {
    if (baseString[i] === toSearchString[matchIndex]) {
      matchIndex++;
      if (matchIndex === toSearchString.length) {
        return i - (toSearchString.length - 1);
      }
    } else {
      matchIndex = 0
    }
  }

  return -1;
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

console.log(getStringIndex(getNodeProcessArgs()))