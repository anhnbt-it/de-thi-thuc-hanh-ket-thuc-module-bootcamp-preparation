class Animal {
  constructor(name, weight) {

    this.name = name || "";
    this.weight = weight || 0;

    this.getName = function () {
      return this.name;
    };

    this.setName = function (value) {
      this.name = value;
    };

    this.getWeight = function () {
      return this.weight;
    };

    this.setWeight = function (value) {
      this.weight = value;
    };

    this.toString = function () {
      return `Name: ${this.getName()}, Weight: ${this.getWeight()}`;
    };

  }
}