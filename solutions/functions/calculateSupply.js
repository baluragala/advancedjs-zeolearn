/**
 * Created by moksha on 07/01/17.
 */
function calculateSupply(age, numPerDay) {
    var maxAge = 100;
    var totalNeeded = (numPerDay * 365) * (maxAge - age);
    var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
    console.log(message);
}

calculateSupply(28, 36);