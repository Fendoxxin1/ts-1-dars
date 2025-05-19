
type phone = {
  brand: string;
  model: string;
  price: number;
};

function maxPrice(arr: phone[]): phone {
  let max: number = 0;
  let index: number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i].price) {
      max = arr[i].price;
      index = i;
    }
  }
  return arr[index];
}

let telefonlar: phone[] = [
  { brand: "Samsung", model: "Samsung s23 ultra", price: 3000 },
  { brand: "Apple", model: "iPhone 16 pro max", price: 2000 },
];

console.log(maxPrice(telefonlar));
