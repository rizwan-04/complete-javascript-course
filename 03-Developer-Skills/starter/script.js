// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

function calcTempApm(temps) {
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
  }
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] < min) min = temps[i];
  }
  const tempAmp = max - min;
  console.log(
    `Max Temperature: ${max} | Min Temperature: ${min} \nThe Temperature Amplitude is: ${tempAmp}`
  );
}
const temperature2 = [2, 6, 9, -4, -4];
const temperatureConcat = temperature.concat(temperature2);
console.log(temperatureConcat);
calcTempApm(temperatureConcat);
*/
/*
function measureKelvin() {
  const measurement = {
    type: "temp",
    unit: "celsius",
    //value: Number(prompt(`Enter Degrees in Celsuis `)),
    value: 10
  };
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
}
console.log(measureKelvin());
*/

// Adding Bug to use Debugger
// There is a bug in the Code find and fix
/*
function calcTempApm(temp1, temp2) {
  const temps = temp1.concat(temp2);
  let max = 0;
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
  }
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] < min) min = temps[i];
  }
  const tempAmp = max - min;
  console.log(
    `Max Temperature: ${max} | Min Temperature: ${min} \nThe Temperature Amplitude is: ${tempAmp}`
  );
}
calcTempApm([1, 2, 3], [4, 5, 6]);
*/

// Coding Challenge 01
// function printForecast(arr) {
//   let arrString = "";
//   for (let i = 0; i < arr.length; i++) {
//     arrString = arrString + `${arr[i]} C in ${i + 1} days ...`;
//   }
//   return arrString;
// }
// console.log(printForecast([17, 21, 23]));
