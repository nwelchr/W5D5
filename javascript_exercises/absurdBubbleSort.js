const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// absurdBubbleSort(arr, sortCompletionCallback)

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}? (yes/no)`, function (answer) {
    if (answer === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    // NR: askIfGreaterThan doesn't return anything.
    askIfGreaterThan(arr[i], arr[i + 1], (swap) => {
      // NR: take a look at this. They're the ones doing the comparing.
      // what comes into this function?
      // do the swapping here?
      if (swap) {
        madeAnySwaps = true;
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        console.log(arr);
      }

      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);

    });

    // none of this waits for answer
    // all this code is good in the wrong spot.
  } else {
    outerBubbleSortLoop(madeAnySwaps);
  }
}


function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps=false) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }

  outerBubbleSortLoop(true);
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([5, 4, 3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
