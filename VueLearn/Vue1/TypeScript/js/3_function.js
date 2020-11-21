"use strict";
// 函数的定义
function run() {
    return 'string';
}
console.log(run());
// 函数表达式
var fun2 = function () {
    return 123;
};
console.log(fun2());
// 函数的传参
function getInfo(name, age) {
    return name + " ------ " + age;
}
console.log(getInfo('namsjda', 12));
// 方法的可选参数
function getInfo2(name, age) {
    return age ? name + " ------ " + age : name + " ------ \u5E74\u9F84\u4FDD\u5BC6";
}
console.log(getInfo2('namsjda', 12));
console.log(getInfo2('namsjda'));
// 错误写法
// function getInfo2(name?: string, age: number) {
//     return `${name} ------ ${age}`
// }
