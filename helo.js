//hello.ts
var Greeter = /** @class */ (function () {
    function Greeter() {
        this.greeting = "World";
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter();
console.log(greeter.greet());
