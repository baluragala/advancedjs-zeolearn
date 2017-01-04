/**
 * Created by moksha on 03/01/17.
 */
function Counter() {
    this.observers = [];
    this.count = 0;
}

Counter.prototype.increment = function (amount) {
    this.count += amount || 1;
    this.notify({ count: this.count });
};

Counter.prototype.addObserver = function (observer) {
    this.observers.push(observer);
};

Counter.prototype.notify = function (data) {
    this.observers.forEach(function (observer) {
        observer.call(null, data);
    });
};

// Create a new instance.
var counter = new Counter();

// Add an observer.
counter.addObserver(function () {
    $("#myOutput").html("Count: " + counter.count);
});

$("#myButton").on("click", function () {
    counter.increment();
});
