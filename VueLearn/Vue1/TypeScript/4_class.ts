class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return `我是${this.name}`
    }

    setName(name: string): void {
        this.name = name;
    }
}

let p = new Person('xuegao')
console.log(p);
p.setName('xuegao2')
console.log(p);

// 继承
class Teacher extends Person {
    constructor(name: string) {
        // 调用父类的方法
        super(name)
    }

}