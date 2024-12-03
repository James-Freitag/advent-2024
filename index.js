import { leftList, rightList } from "./numberList.js";

let leftSort = leftList.sort((a, b) => a - b);
let rightSort = rightList.sort((a, b) => a - b);

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

difference(leftList, rightList);
