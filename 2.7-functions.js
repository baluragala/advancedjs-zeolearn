/**
 * Created by moksha on 07/01/17.
 */

function square(number) {
    return number * number;
}

function myFunc(theObject) {
    theObject.make = "Toyota";
}

var mycar = {make: "Honda", model: "Accord", year: 1998};
var x, y;

x = mycar.make; // x gets the value "Honda"

myFunc(mycar);
y = mycar.make;
console.log(x,y);

function factorial(n){
    if ((n === 0) || (n === 1))
        return 1;
    else
        return (n * factorial(n - 1));
}




(function () {
    
})();