/**
 * Created by moksha on 08/01/17.
 */

/*
    /pattern/modifiers;
    pattern - expression
    modifiers - i, g, m (multi line)
*/

// patterns

var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");

var str = "Is this all there is?";
var patt1 = /[h]/g;

var str = "Do you know if this is all there is?";
var patt1 = /[is]/gi;

var str = "Is this all there is?";
var patt1 = /[a-h]/g;

var str = "I SCREAM FOR ICE CREAM!";
var patt1 = /[A-E]/g;


var myRe = /ab*/g;
var str = 'abbcdefabh';
var myArray;
while ((myArray = myRe.exec(str)) !== null) {
    var msg = 'Found ' + myArray[0] + '. ';
    msg += 'Next match starts at ' + myRe.lastIndex;
    console.log(msg);
}


// Match "quick brown" followed by "jumps", ignoring characters in between
// Remember "brown" and "jumps"
// Ignore case
var re = /quick\s(brown).+?(jumps)/ig;
var result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');