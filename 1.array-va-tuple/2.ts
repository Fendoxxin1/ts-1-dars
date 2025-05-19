function matn(arr: string[]): string {
  let temp: string = "";
  for (let i = 0; i < arr.length; i++) {
    temp += arr[i] + ",";
  }
  return temp;
}

let arr: string[] = ["ali", "vali", "guli"];
console.log(matn(arr));
