//create a function that converts binary to decimal
function convert(binary) {
  // get the array, and flip it
  let binaryArr = [...binary];

  const status = binaryArr.filter((n) => {
    return n > 1;
  });

  if (status.length === 0) {
    let flippedArr = [];
    for (let i = binaryArr.length - 1; i >= 0; i--) {
      flippedArr.push(binaryArr[i]);
    }

    let decimalArr = flippedArr.map((n, i) => {
      return n * Math.pow(2, i);
    });

    let sum = decimalArr.reduce((sum, x) => sum + x);

    return sum;
  } else {
    return "Input is not Binary";
  }
}

export default convert;
