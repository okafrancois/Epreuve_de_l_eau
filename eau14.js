function getSelectionSorted(args) {
  const errorMessage = checkValidity(args);

  if (errorMessage) {
    return errorMessage;
  }

  return selectionSort(args).join(" ")
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minValueIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minValueIndex]) {
        minValueIndex = j;
      }
    }

    if (minValueIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minValueIndex];
      arr[minValueIndex] = temp;
    }
  }
  return arr;
}

function checkValidity(args) {
  if (args.length < 2) {
    return "Error: not enough argument provided (expecting 2 at least)"
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

console.log(getSelectionSorted(getNodeProcessArgs()))