/**
 * Created by moksha on 08/01/17.
 */

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.print = function () {
  console.log(JSON.stringify(this));
};

var john = new Person("john",22);
var james = new Person("james",25);

john.newProp = "newProp";


