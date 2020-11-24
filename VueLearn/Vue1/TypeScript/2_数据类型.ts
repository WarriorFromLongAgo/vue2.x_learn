// string
let str: string = '123'
console.log(str)
str = '456'
console.log(str)

// 数组
// 第一种
let arr1: number[] = [1, 11, 3]
console.log(arr1)
// 第二种 泛型
let arr2: Array<number> = [11, 22, 33]
console.log(arr2)
// 第三种 any 任意类型
let arr3: any[] = [1, '2', '2', true]
console.log(arr3)

// 枚举
enum Flag {
    success = 1,
    error = 2
}
let succ: Flag = Flag.success
console.log(succ);
let err: Flag = Flag.error
console.error(err);

console.log(Flag[0]);
console.log(Flag[1]);


// 有默认值 的枚举
// 如果有其中一个被赋值，那么后续的都会跟着他变大
enum Car {
    bmw,
    honda,
    jeep = 3,
    changcheng
}
console.log(Car);

// 任意类型
let oBox: any = document.getElementById('box')

// undefined
let unum: number;
// 会直接报错
// console.log(unum);
let unum2: undefined;
console.log(unum2);

// null
let _null: null = null;


// 联合
let unum3: number | undefined

// void 无返回值
function get(): string {
    return '131'
}
function get2(): void {
    console.log('我没有返回值');
}

// never 代表从来不会出现的值
// let a: never;
// a = (() => {
//     throw new Error('这是一个错误')
// })()

// boolean类型
let Flagg: boolean = true;
console.log(Flagg);
Flagg = false;
console.log(Flagg);
// 无法赋值, 因为是强类型
// Flagg = '131';

// 数字类型
let num: number = 123
console.log(num);
num = 456
console.log(456);

let str2: string = '123'
console.log(str2);
str2 = '456'
console.log(str2);

// ts 中的 或
let some_var: number | string | boolean | undefined = 123;
some_var = true
some_var = '123'
some_var = undefined


// 接口对象
// 使用接口来定义对象的类型
interface IPerson {
    name: string;
    age: number;
    sex: string
}

let obj: IPerson = {
    name: 'asd',
    age: 20,
    sex: '男'
}

// 报错
// let obj2: IPerson = {}

// ? 可选项
interface IPerson2 {
    name?: string;
    age?: number;
    sex?: string
}

let person2: IPerson2 = {}


// 接口的继承
interface IA1 {
    name: string;
    age: number;
    sex: string
}

interface IA2 extends IA1 {
    id: string;
}
let IA2: IA2 = {
    id: 'id',
    name: 'asd',
    age: 20,
    sex: '男'
}

// 继承多个
interface IB1 {
    id: string;
}
interface IB2 {
    name: string;
}
interface IB3 {
    age: number;
}
interface IB4 extends IB1, IB2, IB3 {
    sex: string;
}
let Ib4Obj: IB4 = {
    id: 'id',
    name: 'name',
    age: 12,
    sex: '男'
}

// ts 中的 与
let person: IB1 & IB2 & IB3 & IB4 = {
    id: 'id',
    name: 'name',
    age: 12,
    sex: '男'
}


interface IPerson3 {
    // key 值不确定
    [propName: string]: any;
}
let person3: IPerson3 = {
    name: 'sadd'
}
let person33: IPerson3 = {
    id: 'sadd'
}

// 接口实现
interface IPerson4 {
    name: string;
    age: number;
    getName(): string;
    getAge(): number;
}
class Person4Impl implements IPerson4 {
    name: string;
    age: number;
    constructor(
        name: string,
        age: number
    ) {
        this.name = name;
        this.age = age;
    }
    getName(): string {
        return this.name;
    }
    getAge(): number {
        return this.age;
    }
}

// 类型断言
function getLength(str: string | number): number {
    if ((str as string).length) {
        // 两种类型的断言
        // return (<string>str).length;
        return (str as string).length;
    } else {
        return str.toString().length;
    }
}

// 非空断言
function arrsetNull(arg?: string): number {
    return arg!.length;
    // 相当于 return arg && arg.length
}

// 泛型
function t<T>(arg: T): void {

}
t<number>(123);
// 会报错
// t<number>('123');

