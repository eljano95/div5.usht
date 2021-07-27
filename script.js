"use scrict";

// 1 - Kerkesa :
// Jepet nje array me gjatesi N dhe i perbere nga
// numra te plote. Shkruani nje funksion i cili e merr
// si parameter kete array dhe e modifikon duke i
// dyfishuar vlerat. Nese vlera paraardhese dhe
// pasardhese te vleres qe po dyfishohet jane te
// barabarta, te ndryshohet vlera pasardhese me
// 0. Array perfundimtar, duhet te kete te gjitha 0
// ne fillim.
// Array i dhene eshte :
// [0 2 5 4 1 0 3 3 6 7]

const nums = [0, 2, 5, 4, 1, 0, 3, 3, 6, 7];
const zeros = [];
const nonZeros = [];

const findDouble = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let prevValue, nextValue;
    arr[i] *= 2;
    if (i > 0) {
      prevValue = arr[i - 1];
      nextValue = arr[i + 1];
      if (prevValue === nextValue) {
        arr[i + 1] = 0;
      }
    }
    if (arr[i] === 0) {
      zeros.push(arr[i]);
    } else {
      nonZeros.push(arr[i]);
    }
  }
  arr = zeros.concat(nonZeros);
  return arr;
};
console.log(findDouble(nums));
// 2 - Kerkesa :
// Jepet nje matrice me N dhe M dimensione ku
// vlerat e matrices jane 1 ose 0. Te gjendet
// nen-matrica katrore me dimensionet me te
// medha ku vlerat te jene te gjitha 1. Funksioni
// duhet te ktheje indeksin fillestar te kesaj
// nen-matrice.
// Matrica e dhene eshte :
const matrix = [
  [0, 1, 0, 1, 1],
  [1, 1, 1, 1, 0],
  [1, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 0, 1, 1],
  [0, 1, 0, 1, 0],
];

const findMaxSubmatrix = function (arr) {
  let subMatrix = [];
  let maxSubValue, max_i, maax_j;
  // Create multidimensional sub array and fill it with 0s
  for (let i = 0; i < arr.length; i++) {
    subMatrix[i] = [];
    for (let j = 0; j < arr[i].length; j++) {
      subMatrix[i][j] = 0;
    }
  }
  // Populate the first colomn of the sub array from matrix array
  for (i = 0; i < arr.length; i++) {
    subMatrix[i][0] = arr[i][0];
  }
  // Populate the first row of the sub array from matrix array
  for (i = 0; i < arr[i].length; i++) {
    subMatrix[0][i] = arr[0][i];
  }
  // Populate the rest of the sub array from matrix array
  for (i = 1; i < arr.length; i++) {
    for (j = 1; j < arr[i].length; j++) {
      // if the coming value from the matrix array is 1 then find the minimum value from the left, up, left-up element + 1
      if (arr[i][j] === 1) {
        subMatrix[i][j] =
          Math.min(
            subMatrix[i][j - 1],
            Math.min(subMatrix[i - 1][j], subMatrix[i - 1][j - 1])
          ) + 1;
      }
      // if not add 0
      else {
        subMatrix[i][j] = 0;
      }
    }
  }
  // Find the maximum value of the sub array, and indexes of maximum value
  maxSubValue = subMatrix[0][0];
  max_i = 0;
  max_j = 0;

  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      if (maxSubValue < subMatrix[i][j]) {
        maxSubValue = subMatrix[i][j];
        max_i = i;
        max_j = j;
      }
    }
  }
  for (i = max_i; i > max_i - maxSubValue; i--) {
    for (j = max_j; j > max_j - maxSubValue; j--) {
      console.log(arr[i][j]);
    }
    console.log("");
  }
};
findMaxSubmatrix(matrix);

// 3 - Kerkesa :
// Jepet nje array me gjatesi N dhe i perbere nga
// numra te plote. Gjeni numrin qe perseritet me
// shume ne kete array me kompleksitetin O(n) .
// Array i dhene eshte :
// [2,4,4,5,2,3,3,4,5,6,6,6,1]

const values = [2, 4, 4, 5, 2, 3, 3, 4, 5, 6, 6, 6, 1];

const mostFrequent = function (arr) {
  arr.sort();
  let maxCount = 1;
  let res = arr[0];
  let currCount = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) currCount++;
    else {
      if (currCount > maxCount) {
        maxCount = currCount;
        res = arr[i - 1];
      }
      currCount = 1;
    }
  }
  if (currCount > maxCount) {
    maxCount = currCount;
    res = arr[arr.length - 1];
  }
  return res;
};

console.log(mostFrequent(values));

// 4- Kerkesa:
// Jepet nje array e renditur me gjatesi N dhe e
// perbere me string. Te gjendet indeksi qe ka
// vleren ‘Paul’, Te zgjidhet ne menyren me
// eficente.
// Array i dhene eshte:
// [‘Annie’, ‘Bernard’, ‘Daniel’, ‘Jack’, ‘Noel’,’Paul’,
// ‘Stela’, ‘Tom’]

const friends = [
  "Annie",
  "Bernard",
  "Daniel",
  "Jack",
  "Noel",
  "Paul",
  "Stela",
  "Tom",
];

// Metoda 1 (me eficente)
const findPaul = function (arr) {
  return arr.indexOf("Paul");
};
console.log(findPaul(friends));

// Metoda 2
const findPaul1 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if ("Paul" === arr[i]) return i;
  }
};
console.log(findPaul1(friends));

// 5 - Kerkesa :
// Jepet nje peme ku cdo nyje ka nje numer te
// fundem por te papercaktuar bijesh. Ne
// strukture te nyjes nuk ruhet referenca e
// prindit te nyjes. jepet nje vlere X qe i perket
// nje nyje te cfaredoshme ne peme. Nese
// vlerat jane unike ne peme, gjeni vleren e
// prindit te nyjes me vleren X.
// Specifikime :
// 1 - Ndertoni strukturen per te perfaqesuar nje
// peme te tille.
// 2 - Ndertoni funksionin rekursiv per te gjetur
// vleren e prindit.
