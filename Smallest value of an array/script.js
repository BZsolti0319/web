function min(arr, returnType) {
    if (returnType === 'value') {
      return Math.min(...arr);
    } else if (returnType === 'index') {
      return arr.indexOf(Math.min(...arr));
    } else {
      console.error('Hibás adatok.');
      return undefined;
    }
  }
  console.log(min([1, 2, 3, 4, 5], 'value'));
  console.log(min([1, 2, 3, 4, 5], 'index'));