// core module - IIFE
(function () {
  // App variables
  let person;
  let student;
  let newPerson;


  /**
   * This function is used for Intialization
   */
  function Start() {
    console.log(
      `%c App Initializing...`,
      "font-weight: bold; font-size: 20px;"
    );

    // object creation also called instantiation
    person = new objects.Person("Tom", 49);

    student = new objects.Student("Carol", 20, "123456789");

    Main();
  }

  /**
   * This function is the where the main functionality for our
   * web app is happening
   */
  function Main() {
    console.log(`%c App Started...`, "font-weight: bold; font-size: 20px;");

    person.saysHello();
    console.log(person);


    student.studies();
    student.saysHello();
    console.log(student);
  }

  window.addEventListener("load", Start);
})();
