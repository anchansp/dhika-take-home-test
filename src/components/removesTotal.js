import arrayTransform from "./arrayHenshin";

export default function removesTotal(array, number) {
  const newArray = arrayTransform(array);
  const totalRemoved = [];
  newArray.forEach((x) => {
    if ((x % 10) + Math.floor(x / 10) !== number) {
      totalRemoved.push(x);
    }
  });
  const result = totalRemoved.map((x) => {
    return [x % 10, Math.floor(x / 10)];
  });
  return result;
}

console.log(
  removesTotal(
    [
      [1, 2],
      [2, 2],
      [2, 1],
      [1, 3],
    ],
    4
  )
);

// const result = newArray.map((x) => {
//   if ((x % 10) + Math.floor(x / 10) !== number) {
//     return [x % 10, Math.floor(x / 10)];
//   } else {

//   }
// });
