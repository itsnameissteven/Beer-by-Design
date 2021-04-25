export const convertToPounds = (value) => {
  const num = value * 2.2046226218;
  return num.toFixed(1);
}