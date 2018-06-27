let core;
// core module - IIFE
(function(core) {
  // App variables
  let Person;

  /**
   * This function is used for Intialization
   */
  function Start() {
    console.log(
      `%c App Initializing...`,
      "font-weight: bold; font-size: 20px;"
    );

    // constructor notation to declare an object
    Person = function(name, age) {
      this._name = name;
      this._age = age;
    };

    // method declaration and definition
    Person.prototype.saysHello = function() {
      console.log(`${this._name} says Hello!`);
    };

    Main();
  }

  /**
   * This function is the where the main functionality for our
   * web app is happening
   */
  function Main() {
    console.log(`%c App Started...`, "font-weight: bold; font-size: 20px;");

    // object creation also called instantiation
    let person = new Person("Tom", 49);

    person.saysHello();

    console.log(person);
  }

  window.addEventListener("load", Start);
})(core | (core = {}));
