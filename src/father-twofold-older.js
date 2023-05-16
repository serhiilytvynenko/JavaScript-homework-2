"use strict";
/**
 * @param {number} years
 * @param {number} sonAge
 * @param {number} fatherAge
 * @returns {number} year when father was/will be twofold older than son
 */

const ageDifference = (fatherAge, sonAge) => {
  let years = 0;
  if (
    fatherAge - sonAge < 15 ||
    sonAge < 0 ||
    typeof fatherAge !== "number" ||
    typeof sonAge !== "number" ||
    Number.isNaN(fatherAge) ||
    Number.isNaN(sonAge)
  ) {
    return "You entered wrong information";
  }
  if(fatherAge / sonAge === 2){
    return years;
  }
  if (fatherAge / sonAge > 2) {
    while (fatherAge / sonAge !== 2) {
      fatherAge++;
      sonAge++;
      years++;
    }
    return `After ${years} years father will be twofold older then son`;
  }
  while (fatherAge / sonAge !== 2) {
    fatherAge--;
    sonAge--;
    years++;
  }
  return `${years} years ago father was twofold older then son`;
};

console.log(ageDifference(20, 0));




//============================================================================

// const ageDifference = (fatherAge, sonAge, years = 0) => {
//   if (
//     fatherAge - sonAge < 15 ||
//     sonAge < 0 ||
//     typeof fatherAge !== "number" ||
//     typeof sonAge !== "number" ||
//     Number.isNaN(fatherAge) ||
//     Number.isNaN(sonAge)
//   ) {
//     return "You entered wrong information";
//   }
  
//   if (fatherAge / sonAge === 2) {
//     return years;
//   }
  
//   if (fatherAge / sonAge > 2) {
//     return ageDifference(fatherAge + 1, sonAge + 1, years + 1);
//   }
  
//   return ageDifference(fatherAge - 1, sonAge - 1, years + 1);
// };

// console.log(ageDifference(26, 10));

// Нашел только такой вариант сделать код короче, но рекурсию еще не учили вроде



