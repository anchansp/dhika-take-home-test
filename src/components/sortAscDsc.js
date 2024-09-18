import arrayTransform from "./arrayHenshin";

export function sortAsc(array) {
  arrayTransform(array);
  const arrayAsc = arrayTransform(array)
    .slice()
    .sort((a, b) => a - b);

  const mapAsc = arrayAsc.map((x) => [Math.floor(x / 10), x % 10]);
  return mapAsc;
}

export function sortDesc(array) {
  arrayTransform(array);
  const arrayDesc = arrayTransform(array)
    .slice()
    .sort((a, b) => b - a);

  const mapDesc = arrayDesc.map((x) => [Math.floor(x / 10), x % 10]);
  return mapDesc;
}

// let transformedArray;
// for (i = 0; i < array.length; i++) {
//   array.map((x) => parseInt(x.join("")));
//   transformedArray.push(x);

// const array = [
//   [3, 4],
//   [1, 2],
//   [1, 6],
// ];

// const result = array.map((innerArray) => {
//   return parseInt(innerArray.join(""), 10);
// });

// console.log(result); // Output: [34, 12, 16]
