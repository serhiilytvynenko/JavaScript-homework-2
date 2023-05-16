"use strict";
function getObj() {
  return this;
}

function Country(title, capital, population, area) {
  this.title = title;
  this.capital = capital;
  this.population = population;
  this.area = area;

  this.getCountry = getObj;
}

const country1 = new Country("Poland", "Warsaw", "38 million", "312,7 km^2");
const country2 = new Country("Germany", "Berlin", "84 million", "357,6 km^2");

function getKeys(obj) {
  for (let key in obj) {
    if (typeof obj[key] !== 'function') {
          console.log(`${key} : ${obj.getCountry()[key]}`);
    }
  }
}
getKeys(country1);
getKeys(country2)
