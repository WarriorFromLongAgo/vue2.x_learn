// 函数的定义
function run(): string {
    return 'string'
}
console.log(run());

// 函数表达式
let fun2 = function (): number {
    return 123
}
console.log(fun2());

// 函数的传参
function getInfo(name: string, age: number): string {
    return `${name} ------ ${age}`
}
console.log(getInfo('namsjda', 12));

// 方法的可选参数
function getInfo2(name: string, age?: number) {
    return age ? `${name} ------ ${age}` : `${name} ------ 年龄保密`
}
console.log(getInfo2('namsjda', 12));
console.log(getInfo2('namsjda'));

// 错误写法
// function getInfo2(name?: string, age: number) {
//     return `${name} ------ ${age}`
// }

