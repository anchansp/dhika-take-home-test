export default function arrayTransform(array) {
  const result = array.map((x) => {
    return parseInt(x.join(""), 10);
  });
  return result;
}
