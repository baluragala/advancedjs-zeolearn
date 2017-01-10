/**
 * Created by moksha on 10/01/17.
 */
function timer() {
    let d=new Date();
    postMessage(d);
    setTimeout("timer()",1000);
}

timer();