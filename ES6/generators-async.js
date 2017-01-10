/**
 * Created by moksha on 10/01/17.
 */

//https://jsonplaceholder.typicode.com/




var goGetMilk = function () {
    console.log('getting milk')
    return new Promise(function (resolve, reject) {
        setTimeout(
            function () {
                console.log('I got the milk from shop');
                console.dir(resolve);
                resolve('Got Milk');
            },
            1000
        )
    });
}


var boilMilk = function (input) {
    console.log('boiling milk')
    return new Promise(function (resolve, reject) {
        setTimeout(
            function () {
                console.log(input);
                console.dir(resolve);
                console.log('Milk is hot');
                resolve('Milk Boiled');
            },
            2000
        )
    });
}

var mixSugarAndCoffeePowder = function (input) {
    console.log('final steps')
    return new Promise(function (resolve, reject) {
        setTimeout(
            function () {
                console.log(input)
                console.log('Sugar Added');
                console.log('coffee powder Added');
                reject('Bad Coffee!! Yaakkk')
            },
            100
        )
    });
}

function* makeCoffee() {
    let getMilk = yield goGetMilk();
    let boiledMilk = yield boilMilk(getMilk);
    let coffee = yield mixSugarAndCoffeePowder(boiledMilk);
}
