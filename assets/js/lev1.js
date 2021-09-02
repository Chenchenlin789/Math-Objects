//lev1.1: Math.PI & toFixed
console.log("test");
const PI = Math.PI;
console.log(PI);
let roundedPI = Math.PI.toFixed(2);
console.log(roundedPI);

//lev1.2: Math.round()
let array = [3.14, 193.4464, 0.8596433607, -2.940629089];

array.forEach((elt) => {
  console.log(Math.round(elt));
});

//lev1.3: Math.random(), Math.floor()
let randomNum = Math.random();
let randomNum1_10 = Math.floor(randomNum * 10) + 1;
let randomNum1_100 = Math.floor(randomNum * 100) + 1;
console.log(randomNum1_10, randomNum1_100);

//lev1_4: Math.min Math.max

let numbers = [
  393, 205, 479, 47, 376, 267, 385, 2, 190, 383, 286, 462, 115, 138, 331, 409,
  427, 245, 224, 276, 483, 55, 147, 177, 208, 347, 135, 282, 33, 270, 475, 426,
  476, 453, 474, 351, 219, 358, 354, 410, 240, 139, 371, 356, 277, 202, 264,
  204, 447, 488,
];

console.log(
  Math.min(
    393,
    205,
    479,
    47,
    376,
    267,
    385,
    2,
    190,
    383,
    286,
    462,
    115,
    138,
    331,
    409,
    427,
    245,
    224,
    276,
    483,
    55,
    147,
    177,
    208,
    347,
    135,
    282,
    33,
    270,
    475,
    426,
    476,
    453,
    474,
    351,
    219,
    358,
    354,
    410,
    240,
    139,
    371,
    356,
    277,
    202,
    264,
    204,
    447,
    488
  )
);
console.log(Math.max(numbers));
