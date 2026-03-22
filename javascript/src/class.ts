import random from "random";

const fun = function (): Promise<string> {
    return new Promise(function (a, b) {
        setTimeout(function () {
            if (random.int(1, 10) > 5) {
                a("Promise Resolved");
                console.log("A Log after Resolve() called");
            } else b("Promise Rejected");
        }, 1000);
    });
};

fun()
    .then(function (data) {
        console.log("1. ", data);
    })
    .catch(function (err) {
        console.log(err);
    });

// --------------------------------------------------------------------

class MyClass {
    a: number;
    b: number;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    // add: Function = function () {
    //     console.log(this.a + this.b)
    // }

    add(): void {
        console.log(this.a + this.b);
    }

    substract = (): void => {
        console.log(this.a - this.b);
    };
}

const obj = new MyClass(3, 2);
obj.add();
obj.substract();
