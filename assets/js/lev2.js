//lev2.1
const PI = Math.PI;
function roundTo(zahl, genauigkeit) {
  return zahl.toFixed(genauigkeit);
}

function toPow(zahl, exponent) {
  return Math.pow(zahl, exponent);
}
console.log(roundTo(Math.PI, 5)); // 3.14159;
console.log(roundTo(Math.E, 5)); // 2.71828;
console.log(toPow(5, 2)); // 25;
console.log(toPow(5, 4)); // 25;
