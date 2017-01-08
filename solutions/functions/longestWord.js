/**
 * Created by moksha on 07/01/17.
 */

function longestWord(input)
{
    var words = input.match(/\w[a-z]{0,}/gi);
    var result = words[0];

    for(var x = 1 ; x < words.length ; x++)
    {
        if(result.length < words[x].length)
        {
            result = words[x];
        }
    }
    return result;
}
console.log(longestWord('I Love Javascript'));

