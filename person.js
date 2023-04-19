class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `Hello, my name is ${this.name}`;
  }

  run() {
    return `${this.name} runs from the cops!`
  }
}

module.exports = {
  Person,
};