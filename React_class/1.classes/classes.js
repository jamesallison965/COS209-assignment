// Classes
// A class is a blueprint for creating objects with properties and methods.

class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  displayInfo() {
    return `${this.brand} was made in ${this.year}`;
  }
}
