"use strict";
function rate(winRate, loseRate) {
  if (
    typeof winRate !== "number" ||
    typeof loseRate !== "number" ||
    winRate < 0 ||
    loseRate < 0
  ) {
    console.log("Enter wrong information");
  } else if (winRate >= loseRate) {
    if (winRate - loseRate >= 0 && winRate - loseRate <= 2) {
      return winRate + 2;
    } else if (winRate - loseRate > 2 && winRate - loseRate < 20) {
      return winRate + 1;
    } else if (winRate - loseRate >= 20) {
      return winRate;
    }
  } else if (winRate < loseRate && winRate !== 0) {
    return (loseRate - winRate + 5) / 3;
  } else {
    return loseRate;
  }
}
console.log(rate(0, 5));
