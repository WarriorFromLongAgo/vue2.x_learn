"use strict";
// string
var str = '123';
console.log(str);
str = '456';
console.log(str);
// 数组
// 第一种
var arr1 = [1, 11, 3];
console.log(arr1);
// 第二种 泛型
var arr2 = [11, 22, 33];
console.log(arr2);
// 第三种 any 任意类型
var arr3 = [1, '2', '2', true];
console.log(arr3);
// 枚举
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 2] = "error";
})(Flag || (Flag = {}));
var succ = Flag.success;
console.log(succ);
var err = Flag.error;
console.error(err);
// 有默认值 的枚举
// 如果有其中一个被赋值，那么后续的都会跟着他变大
var Car;
(function (Car) {
    Car[Car["bmw"] = 0] = "bmw";
    Car[Car["honda"] = 1] = "honda";
    Car[Car["jeep"] = 3] = "jeep";
    Car[Car["changcheng"] = 4] = "changcheng";
})(Car || (Car = {}));
console.log(Car);
// 任意类型
var oBox = document.getElementById('box');
// undefined
var unum;
// 会直接报错
// console.log(unum);
var unum2;
console.log(unum2);
// 联合
var unum3;
// void 无返回值
function get() {
    return '131';
}
function get2() {
    console.log('我没有返回值');
}
// never 代表从来不会出现的值
// let a: never;
// a = (() => {
//     throw new Error('这是一个错误')
// })()
// boolean类型
var Flagg = true;
console.log(Flagg);
Flagg = false;
console.log(Flagg);
// 无法赋值, 因为是强类型
// Flagg = '131';
// 数字类型
var num = 123;
console.log(num);
num = 456;
console.log(456);
var str2 = '123';
console.log(str2);
str2 = '456';
console.log(str2);
