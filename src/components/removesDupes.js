import arrayTransform from "./arrayHenshin";

export default function removeDupes(array) {
  //step 1
  const newArray = arrayTransform(array);
  const sortSpec = newArray.map((x) => {
    if (Math.floor(x / 10) < x % 10) {
      return [Math.floor(x / 10), x % 10];
    } else {
      return [x % 10, Math.floor(x / 10)];
    }
  });

  //step 2
  const newSortedArray = arrayTransform(sortSpec);
  newSortedArray;
  const dupesRemoved = newSortedArray.filter(
    (e, i, arr) => arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1] //(element, index, array)
  );

  const result = dupesRemoved.map((x) => {
    return [x % 10, Math.floor(x / 10)];
  });
  return result;
}

console.log(
  removeDupes([
    [3, 4],
    [4, 1],
    [2, 3],
    [3, 2],
    [1, 1],
  ])
);

// function removeDupes(array) {
//     //step 1
//     const newArray = arrayTransform(array);
//     const sortSpec = newArray.map((x) => {
//       if (Math.floor(x / 10) < x % 10) {
//         return [Math.floor(x / 10), x % 10];
//       } else {
//         return [x % 10, Math.floor(x / 10)];
//       }
//     });

//     //step 2
//     const newSortedArray = arrayTransform(sortSpec);
//     const dupesRemoved = newSortedArray.filter(
//       (e, i, arr) => arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1] //(element, index, array)
//     );

//     const result = dupesRemoved.map((x) => {
//       return [x % 10, Math.floor(x / 10)];
//     });
//     return result;
//   }
