class MyClass {
    a: number;
    b: number;

    constructor(a:number, b:number) {
        this.a = a;
        this.b = b;
    }

    // add: Function = function () {
    //     console.log(this.a + this.b)
    // }

    add():void {
        console.log(this.a + this.b);
    }

    substract = ():void => {
        console.log(this.a - this.b)
    }
}

const obj = new MyClass(3, 2);
obj.add();
obj.substract();
