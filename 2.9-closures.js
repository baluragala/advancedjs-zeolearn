/**
 * Created by moksha on 08/01/17.
 */

var outerFunction = function(){
    var outer="I am outer";
    var innerFunction = function(){
        var inner="I am inner";
        return outer + " , " + inner;
    };
    return innerFunction;
};
console.dir(outerFunction);



//private methods
var counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        value: function() {
            return privateCounter;
        }
    };
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1