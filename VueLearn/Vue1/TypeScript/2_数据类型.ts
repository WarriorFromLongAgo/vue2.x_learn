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










