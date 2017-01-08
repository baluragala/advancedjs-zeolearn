/**
 * Created by moksha on 07/01/17.
 */

function sayHello(name) {
    console.log(this);
}

//closure
function addCreator(x) {
    return function (y) {
        return x+y;
    }
}

function requestCreator() {
    var baseHeader={'X-Custom-Token':'qw21234dxsc'};
    return function (header) {
        return Object.assign({},baseHeader,header)
    }
}