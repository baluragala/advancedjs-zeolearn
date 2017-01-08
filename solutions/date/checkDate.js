/**
 * Created by moksha on 07/01/17.
 */
var checkDate = function(input) {
    if ( Object.prototype.toString.call(input) === "[object Date]" )
        return true;
    return false;
};

var checkDate1 = function(input) {
    if ( !((new Date(input).getDay()).toString() === 'NaN') )
        return true;
    return false;
};

/*

 > toString.call(10)
 '[object Number]'
 > toString.call({})
 '[object Object]'
 > toString.apply({})
 '[object Object]'
 > toString.apply(true)
 '[object Boolean]'
 > toString.apply({})
 '[object Object]'
 > toString.apply([])
 '[object Array]'
 > toString.call([])

 */