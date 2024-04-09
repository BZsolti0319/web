// 1. feladat Sum of array singles
function sumOfArraySingles(arr) {
    let sum = 0;
    arr.sort((a, b) => {
      return a - b;
    });
    for (let i = 0; i < arr.length; i += 2) {
      if (arr[i] !== arr[i + 1]) {
        sum += arr[i];
        i--;
      }
    }
    return sum;
};

console.log('1. feladat\n')
console.log(sumOfArraySingles([4, 5, 7, 5, 4, 8]), 15)
console.log(sumOfArraySingles([9, 10, 19, 13, 19, 13]), 19)
console.log(sumOfArraySingles([16, 0, 11, 4, 8, 16, 0, 11]), 12)
console.log(sumOfArraySingles([5, 17, 18, 11, 13, 18, 11, 13]), 22)
console.log(sumOfArraySingles([5, 10, 19, 13, 10, 13]), 24)


// 2. feladat Sort Arrays (Ignoring Case)
const sortArraysIgnoringCase = (names) => {
    return names.sort((a, b) => {
     const szoA = a.toUpperCase();
     const szoB = b.toUpperCase();
     
    if (szoA < szoB) {
      return -1;
    }
    
    if (szoA > szoB) {
      return 1;
    }
    return 0;
    })
};

console.log('\n2. feladat\n')
console.log(sortArraysIgnoringCase(["Hello", "there", "I'm", "fine"]), ["fine", "Hello", "I'm", "there"])
console.log(sortArraysIgnoringCase(["C", "d", "a", "B"]), ["a", "B", "C", "d"])
console.log(sortArraysIgnoringCase(["CodeWars"]), ["CodeWars"])
console.log(sortArraysIgnoringCase([]), [])


// 3. feladat Insert dashes
function insertDash(num) {
    var dashedNumber = '';
    var numArray = num.toString().split('');
    for(var n = 0; n < numArray.length; n++){
        dashedNumber += numArray[n];
        if(numArray[n] % 2 && (numArray[n+1] && numArray[n+1] % 2 )){
            dashedNumber += '-';
        }
    } 
    return dashedNumber;
};

console.log('\n3. feladat\n')
console.log(insertDash(454793), '4547-9-3')
console.log(insertDash(123456), '123456')
console.log(insertDash(1003567), '1003-567')
console.log(insertDash(13570), '1-3-5-70')
console.log(insertDash(0), '0')