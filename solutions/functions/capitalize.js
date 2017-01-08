/**
 * Created by moksha on 07/01/17.
 */
function capitalize(str)
{
    var words = str.split(' ');
    var result = [];

    for(var x = 0; x < words.length; x++){
        result.push(words[x].charAt(0).toUpperCase()+words[x].slice(1));
    }
    return result.join(' ');
}
console.log(capitalize("javascript is great"));