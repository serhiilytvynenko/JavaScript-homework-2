"use strict";
/**
 * @param {number} years
 * @param {number} sonAge
 * @param {number} fatherAge
 * @returns {number} year when father was/will be twofold older than son
 */

const ageDifference = () => {
  let years = 0;
  let fatherAge = Number(prompt("Enter father age"));
  let sonAge = Number(prompt("Enter son age"));
  if (fatherAge - sonAge < 15 || sonAge <= 0) {
    return "You entered wrong information";
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

console.log(ageDifference());
