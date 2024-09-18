import arrayTransform from "./arrayHenshin.js";

export default function removesTotal(array, number) {
  const newArray = arrayTransform(array);
  const totalRemoved = [];
  newArray.forEach((x) => {
    if (Math.floor(x / 10) + (x % 10) !== number) {
      totalRemoved.push(x);
    }
  });
  const result = totalRemoved.map((x) => {
    return [Math.floor(x / 10), x % 10];
  });
  return result;
}

// const result = newArray.map((x) => {
//   if ((x % 10) + Math.floor(x / 10) !== number) {
//     return [x % 10, Math.floor(x / 10)];
//   } else {

//   }
// });
