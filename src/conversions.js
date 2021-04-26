export const convertToPounds = (value) => {
  const num = value * 2.2046226218;
  return num.toFixed(1);
}

export const celsiusToFahrenheit = (value) =>  value * 9/5 + 32;

export const literToGallon = (value) => {
  const num = value * .264172;
  return num.toFixed(1);
}
