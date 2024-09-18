import arrayTransform from "./arrayHenshin.js";

export default function countDoubles(array) {
  const newArray = arrayTransform(array);
  let doubles = 0;
  newArray.forEach((x) => {
    if (x % 10 === Math.floor(x / 10)) {
      doubles++;
    }
  });
  return doubles;
}
