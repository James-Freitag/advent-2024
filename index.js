import { leftList, rightList } from "./numberList.js";
import { allRedNosedReports } from "./safeReports.js";

// Day Three -------------------------------------------
// in mulTask file

// Day Two Part 1 ------------------>>>>

const checkReports = (row) => {
  const isIncreasing = row[1] > row[0];
  const isDecreasing = row[1] < row[0];

  for (let i = 1; i < row.length; i++) {
    const diff = row[i] - row[i - 1];

    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) return false;

    if (isIncreasing && diff <= 0) return false;
    if (isDecreasing && diff >= 0) return false;
  }
  return true;
};

let safe = 0;
allRedNosedReports.forEach((row) => {
  if (checkReports(row)) safe++;
});
console.log(safe);

// Day Two Part 2 --------------------------------------------
safe = 0;
allRedNosedReports.forEach((row) => {
  if (checkReports(row)) {
    safe++;
    return;
  } else {
    for (let i = 0; i < row.length; i++) {
      const newArr = row.slice(0, i).concat(row.slice(i + 1));
      if (checkReports(newArr)) {
        safe++;
        return;
      }
    }
  }
});
console.log(safe);

// Day One Part 2 ----------------------------------

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

// console.log(addScore());

// Day One Part 1 ----------------------------

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
