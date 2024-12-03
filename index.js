import { leftList, rightList } from "./numberList.js";

// Part Three -------------------------------------------
// in mulTask file
// Part Two ----------------------------------

const similarityScore = (arr1, arr2) => {
  const result = [];

  for (const num1 of arr1) {
    let count = 0;

    for (const num2 of arr2) {
      if (num1 === num2) {
        count++;
      }
    }

    if (count > 0) {
      result.push(num1 * count);
    }
  }
  return result;
};

const addScore = () => {
  const scores = similarityScore(leftList, rightList);
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum;
};

console.log(addScore());

// Part One ----------------------------

//sort lists
// let leftSort = leftList.sort((a, b) => a - b);
// let rightSort = rightList.sort((a, b) => a - b);

const difference = (arr1, arr2) => {
  let arrDiff = [];
  for (let i = 0; i < arr1.length; i++) {
    arrDiff.push(Math.abs(arr1[i] - arr2[i]));
  }
  let sum = 0;
  for (let i = 0; i < arrDiff.length; i++) {
    sum += arrDiff[i];
  }
  console.log(sum);
};

// difference(leftList, rightList);
