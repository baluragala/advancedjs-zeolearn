/**
 * Created by moksha on 01/01/17.
 */

const chunk = function (array, chunkSize) {
    if (!chunkSize || chunkSize == 0)
        return array;
    let copy = array.slice(0);
    let result = [];
    let start = 0;
    while (true) {
        let temp = copy.splice(start, chunkSize);
        if (temp.length > 0)
            result.push(temp);
        else
            return result;
    }
};

const last = function (array) {
    return array[array.length - 1];
};


const drop = function (array, len = 1) {
    return array.splice(len)
};

const join = function (array, separator = ',') {
    let result = '';
    for (let i = 0; i < array.length; i++)
        result += array[i] + separator;
    return result.substr(0, result.length - 1);
};

const union = function (...params) {
    let result = [];
    for (let ele of params)
        if (Array.isArray(ele))
            for (let e of ele)
                result.push(e)
        else
            result.push(ele);
    return result;
};
