let count = 0;
const merge = (leftArr, rightArr) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  let isRightLargerThanLeft = false;
  console.log("rightArr: ", rightArr);
  console.log("leftArr: ", leftArr);
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftNum = leftArr[leftIndex];
    const rightNum = rightArr[rightIndex];

    if (leftNum < rightNum) {
      result.push(leftNum);
      leftIndex++;
    } else {
      result.push(rightNum);
      rightIndex++;
      if (leftArr.length !== 0) {
        isRightLargerThanLeft = true;
      }
    }
  }
  if (isRightLargerThanLeft) {
    count++;
  }
  return [
    ...result,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex),
  ];
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const middle = Math.ceil(arr.length / 2);
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

//console.log(mergeSort([1,9,3,19,2,39,4,333,89,98]))

console.log(mergeSort([6, 5, 4, 3, 2, 1]));
console.log(count);
