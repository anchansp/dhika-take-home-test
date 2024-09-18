export default function removeDominoes(array) {
  const newMap = new Map();
  const result = [];

  // step 1
  for (const arr of array) {
    const sorted = arr
      .slice()
      .sort((a, b) => a - b)
      .toString();
    newMap.set(sorted, (newMap.get(sorted) || 0) + 1);
  }

  // step 2
  for (const arr of array) {
    const sorted = arr
      .slice()
      .sort((a, b) => a - b)
      .toString();
    if (newMap.get(sorted) === 1) {
      result.push(arr);
    }
  }

  return result;
}
