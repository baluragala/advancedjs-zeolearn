/**
 * Created by moksha on 07/01/17.
 */
function calculateAge(birthYear) {
    var currentYear = new Date().getFullYear();
    var age = currentYear - birthYear;
    console.log('You are either ' + age + ' or ' + (age - 1));
}

calculateAge(1984);
calculateAge(2014);