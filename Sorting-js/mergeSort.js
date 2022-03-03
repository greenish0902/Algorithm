class MergeSort {
  mergeSplitFunc(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const leftArr = this.mergeSplitFunc(arr.slice(0, mid));
    const rightArr = this.mergeSplitFunc(arr.slice(mid));
    return this.mergeFunc(leftArr, rightArr);
  }

  mergeFunc(leftArr, rightArr) {
    let mergedArr = [];
    let leftPoint = 0;
    let rightPoint = 0;
    while (leftArr.length > leftPoint && rightArr.length > rightPoint) {
      if (leftArr[leftPoint] > rightArr[rightPoint]) {
        mergedArr.push(rightArr[rightPoint]);
        rightPoint++;
      } else {
        mergedArr.push(leftArr[leftPoint]);
        leftPoint++;
      }
    }
    while (leftArr.length > leftPoint) {
      mergedArr.push(leftArr[leftPoint]);
      leftPoint++;
    }
    while (rightArr.length > rightPoint) {
      mergedArr.push(rightArr[rightPoint]);
      rightPoint++;
    }
    return mergedArr;
  }
}

// test
const getRandom = (min, max) => {
  // return (min <= X < max)
  return parseInt(Math.random() * (max - min) + min);
};

let data = [];
for (let index = 0; index < 100; index++) {
  data.push(getRandom(1, 100));
}
console.log("----- MergeSort: before -----");
console.log(data);

console.log("----- MergeSort: after -----");
const mergeSort = new MergeSort();
const result = mergeSort.mergeSplitFunc(data);
console.log(result);
