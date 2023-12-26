function getBubbleSorted(args) {
  const errorMessage = checkValidity(args);

  if (errorMessage) {
    return errorMessage;
  }

  let numbers = args.map(item => Number(item))

  return bubbleSort(numbers)
}

function bubbleSort(arr) {
  let endPoint = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let currentIndex = 0; currentIndex < endPoint - 1; currentIndex++) {
      if (arr[currentIndex] > arr[currentIndex + 1]) {

        let temp = arr[currentIndex];
        arr[currentIndex] = arr[currentIndex + 1];
        arr[currentIndex + 1] = temp;

        swapped = true;
      }
    }
    endPoint--;
  } while (swapped);

  return arr;
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

console.log(getBubbleSorted(getNodeProcessArgs()))