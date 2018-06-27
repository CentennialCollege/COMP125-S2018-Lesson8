(function (objects) {

  let Student = (function () {
    function Student(name, age, studentID) {
      objects.Person.call(this, name, age);
      this._studentID = studentID;
    }

    // prototypal inheritance
    Student.prototype = Object.create(objects.Person.prototype);
    Student.prototype.constructor = Student; // fix constructor

    Student.prototype.studies = function () {
      console.log(`${this._name} is studying!`);
    }

    return Student;
  })();

  objects.Student = Student;
})(objects || (objects = {}));
