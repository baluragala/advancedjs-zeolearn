/**
 * Created by moksha on 09/01/17.
 */
const ID = 'EMP100';

const Car = {
    make: 'Maruti',
    model: 'Celerio'
};

let car1 = Object.freeze(Car);
let car2 = car1;

car1= {};