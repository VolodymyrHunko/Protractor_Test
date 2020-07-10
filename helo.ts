
//hello.ts
class Greeter {
    greeting: string;
    constructor() {
        this.greeting = "World";
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
 
let greeter = new Greeter();
console.log(greeter.greet());