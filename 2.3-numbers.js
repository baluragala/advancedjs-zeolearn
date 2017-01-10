var intNumber=42;
var octalNumber=0o10;
var hexDecimalNumber=0x10;
var a=10;
var b=Number(10);

/*

 > b.
 b.__defineGetter__      b.__defineSetter__      b.__lookupGetter__      b.__lookupSetter__
 b.__proto__             b.constructor           b.hasOwnProperty        b.isPrototypeOf
 b.propertyIsEnumerable  b.toLocaleString        b.toString              b.valueOf

 b.toExponential         b.toFixed               b.toPrecision

 > a.
 a.__defineGetter__      a.__defineSetter__      a.__lookupGetter__      a.__lookupSetter__
 a.__proto__             a.constructor           a.hasOwnProperty        a.isPrototypeOf
 a.propertyIsEnumerable  a.toLocaleString        a.toString              a.valueOf

 a.toExponential         a.toFixed               a.toPrecision

 */
var exponentialNumber1=123e5
var exponentialNumber2=123e-5
var large = 999999999999999;
var extraLarge = 999999999999999;
var infinity=Infinity
typeof infinity

var notANumber=NaN
typeof notANumber

var jsNumber=100;
var hex=jsNumber.toString(16); // "64"
var oct=jsNumber.toString(8);  // "144"
var bin=jsNumber.toString(2);  // "1100100"

var dec=parseInt("64",16);      // 100
var dec=parseInt("144",8);      // 100
var dec=parseInt("1100100",2);  // 100

/* As Objects */

var fiveHundred = 500;
var fiveHundredObject = new Number(500);

typeof fiveHundred
typeof fiveHundredObject

/* Methods */
//Number()
//parseInt
//parseFloat
/*

Number.isFinite
Number.isInteger             Number.isNaN                 Number.isSafeInteger
Number.parseFloat            Number.parseInt              Number.prototype

*/
var numberAsString="100"
var numberFromString=parseInt(numberAsString)
var numberFromString=parseFloat(numberAsString)



/* Properties */

/*

 Number.EPSILON               Number.MAX_SAFE_INTEGER      Number.MAX_VALUE
 Number.MIN_SAFE_INTEGER      Number.MIN_VALUE             Number.NEGATIVE_INFINITY
 Number.NaN                   Number.POSITIVE_INFINITY
 */

var z=10;
z.MIN_VALUE;
