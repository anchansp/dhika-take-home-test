import arrayTransform from "./arrayHenshin";

export default function flipArray(array) {
  const newArray = arrayTransform(array);
  const result = newArray.map((x) => {
    return [x % 10, Math.floor(x / 10)];
  });
  return result;
}
