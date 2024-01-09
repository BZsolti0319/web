function sumOfOddCubedNumbers(arr) {
    if (!arr.every((num) => typeof num === 'number' && !isNaN(num) && typeof num !== 'boolean')) {
      return undefined;
    }
    return arr
      .filter((num) => num % 2 !== 0)
      .reduce((sum, num) => sum + Math.pow(num, 3), 0);
  }
  console.log(sumOfOddCubedNumbers([1, 2, 3, 4, 5]));
  console.log(sumOfOddCubedNumbers([5, 'c', 6, true]));
  