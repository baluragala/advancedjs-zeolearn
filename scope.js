/**
 * Created by moksha on 10/01/17.
 */

function loop() {
    for (var i = 1; i <= 10; i++) {
        setTimeout(function () {
            console.log(i)
        }, 100)
    }
}


var person= {
    name:'Zeo',
    print : function(){
        console.log(this)
    }
}