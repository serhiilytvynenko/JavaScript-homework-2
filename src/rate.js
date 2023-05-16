"use strict";
function rate(winRate, loseRate) {
  let diffRate = winRate - loseRate;
  if (
    Number.isNaN(diffRate) ||
    typeof winRate !== "number" ||
    typeof loseRate !== "number" ||
    winRate < 0 ||
    loseRate < 0
  ) {
    return "Entered wrong information";
  }
  if (diffRate >= 0 && diffRate <= 2) {
    return (winRate += 2);
  }
  if (diffRate > 2 && diffRate < 20) {
    return (winRate += 1);
  }
  if (diffRate >= 20) {
    return winRate;
  }
  if (diffRate < 0 && winRate !== 0) {
    return winRate + Math.round((Math.abs(diffRate) + 5) / 3);
  }
  loseRate;
}
console.log(rate(-100, 35));
