/**
 * Created by moksha on 08/01/17.
 */

// go and get the milk from a shop
// boil the milk
// mix sugar and coffee powder

function goGetMilk() {
    setTimeout(
        function () {
            console.log('I got the milk from shop')
        },
        1000
    )
}

function boilMilk() {
    setTimeout(
        function () {
            console.log('Milk is hot')
        },
        2000
    )
}

function mixSugarAndCoffeePowder() {
    setTimeout(
        function () {
            console.log('Sugar Added');
            console.log('coffee powder Added');
        },
        100
    )
}

goGetMilk();
boilMilk();
mixSugarAndCoffeePowder();