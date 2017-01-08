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