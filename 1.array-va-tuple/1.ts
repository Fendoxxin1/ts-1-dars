function min(arr: number[]): Number {
  let min: number = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

let numArr: number[] = [1, 2, 3, 4, 5, 6, 7];
console.log(min(numArr));
