/**
 * Created by moksha on 08/01/17.
 */

// go and get the milk from a shop
// boil the milk
// mix sugar and coffee powder

var goGetMilk = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(
            function () {
                console.log('I got the milk from shop');
                resolve('Got Milk');
            },
            1000
        )
    });
}


var boilMilk = function (input) {
    return new Promise(function (resolve, reject) {
        setTimeout(
            function () {
                console.log(input);
                console.log('Milk is hot');
                resolve('Milk Boiled');
            },
            2000
        )
    });
}

var mixSugarAndCoffeePowder = function (input) {
    return new Promise(function (resolve, reject) {
        setTimeout(
            function () {
                console.log('Sugar Added');
                console.log('coffee powder Added');
                reject('Bad Coffee!! Yaakkk')
            },
            100
        )
    });
}

goGetMilk()
    .then(boilMilk)
    .then(mixSugarAndCoffeePowder)
    .catch(function (err) {
        console.log(err)
    })
