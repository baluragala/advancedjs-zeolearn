/**
 * Created by moksha on 07/01/17.
 */
function wordCombinations(input) {
    var temp = [];
    for (var x = 0, y = 1; x < input.length; x++, y++) {
        temp[x] = input.substring(x, y);
    }
    var combinations = [];
    var temp = "";
    var slent = Math.pow(2, temp.length);

    for (var i = 0; i < slent; i++) {
        temp = "";
        for (var j = 0; j < temp.length; j++) {
            if ((i & Math.pow(2, j))) {
                temp += temp[j];
            }
        }
        if (temp !== "") {
            combinations.push(temp);
        }
    }
    console.log(combinations.join("\n"));
}