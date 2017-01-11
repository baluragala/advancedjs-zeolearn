/**
 * Created by moksha on 10/01/17.
 */

//var p = new Proxy(target, handler);

console.log(p.a, p.b); // 1, undefined
console.log('c' in p, p.c); // false, 37

const dog = { name: 'Snippy', age: 6 };
const dogProxy = new Proxy(dog, {
    get(target, name) {
        return target[name].toUpperCase();
    },
    set(target, name, value) {
        if(typeof value === 'string') {
            target[name] = value.trim().toUpperCase();
        }
    }
});
dogProxy.name = 'Jumper';



