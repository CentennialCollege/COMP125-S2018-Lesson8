declare namespace objects {
  export class Person {
    /**
     * Creates an instance of Person.
     * @param {string} name
     * @param {number} age
     */
    constructor(name: string, age: number);

    /**
     * This method outputs _name and " says Hello!" to the console
     * @returns {void}
     */
    saysHello(): void;
  }

  export class Student extends Person {
    /**
     * Creates an instance of Student.
     * @param {string} name
     * @param {number} age
     * @param {string} studentID
     */
    constructor(name: string, age: number, studentID: string);

    /**
     * This method outputs _name and " is studying!" to the console
     *
     * @returns {void}
     */
    studies(): void;
  }
}
