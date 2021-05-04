import {Greeter} from "./Greeter"
import {JavaScriptGreeter} from "./JavaScriptGreeter"
import {LoudGreeter} from "./LoudGreeter"
import {HtmlGreeter} from "./HtmlGreeter"

describe ("Parent Greeter", () => {
   
    test("Greeting 'hi", () => {
        const greeter = new Greeter("hi");
        expect(greeter.greeting).toBe("hi");
    })

    test("Greeting 'hello, ' works", () => {
        const greeter = new Greeter("hello");
        expect(greeter.greet("")).toBe("hello, ");
    })

    test("Greeting 'hello, joe' works", () => {
        const greeter = new Greeter("hello");
        expect(greeter.greet("Joe")).toBe("hello, Joe");
    })
});

describe ("JavaScriptGreeter", () => {
   
    test("Greeting 'console.log(hi, anneliese)", () => {
        const javascriptGreeter = new JavaScriptGreeter("hey");
        expect(javascriptGreeter.greet("Anneliese")).toBe("console.log('hey, Anneliese!')");
    })
});

describe ("JavaScriptGreeter", () => {
   
    test("Greeting 'console.log(hey, anneliese)", () => {
        const javascriptGreeter = new JavaScriptGreeter("hey");
        expect(javascriptGreeter.greet("Anneliese")).toBe("console.log('hey, Anneliese!')");
    })
});

describe ("LoudGreeter", () => {
   
    test("one exclamation point", () => {
        let loudGreeter = new LoudGreeter("welcome");
        expect(loudGreeter.greet("Katie")).toBe('welcome, Katie!');
    })

    test("two exclamation points", () => {
        let loudGreeter = new LoudGreeter("welcome");
        loudGreeter.addVolume();
        expect(loudGreeter.greet("Katie")).toBe('welcome, Katie!!');
    })
});

describe ("HtmlGreeter", () => {
   
    test("h1 tags", () => {
        let htmlGreeter = new HtmlGreeter("welcome", "h1");
        expect(htmlGreeter.greet("Katie")).toBe('<h1>welcome, Katie</h1>');
    })
});