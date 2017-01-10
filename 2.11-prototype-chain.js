/**
 * Created by moksha on 09/01/17.
 */

var Animal = function (name) {
    this.name = name;
    this.shout = function () {

        console.log(this);
    }
}

Animal.prototype.eats = function () {
    return this.name + " is eating"
}

var Chordate = function (name) {
    this.name = name;
}
Chordate.prototype = new Animal();
Chordate.prototype.hasSpine = true;

var Mammal = function (name) {
    this.name = name;
}
Mammal.prototype = new Chordate();
Mammal.prototype.hasHair = true;

var m = new Mammal('Foo');