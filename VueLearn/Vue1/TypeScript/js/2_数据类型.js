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
console.log('enum = ' + Flag[1]);
console.log('enum = ' + Flag[2]);
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
// null
var _null = null;
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
// ts 中的 或
var some_var = 123;
some_var = true;
some_var = '123';
some_var = undefined;
var obj = {
    name: 'asd',
    age: 20,
    sex: '男'
};
var person2 = {};
var IA2 = {
    id: 'id',
    name: 'asd',
    age: 20,
    sex: '男'
};
var Ib4Obj = {
    id: 'id',
    name: 'name',
    age: 12,
    sex: '男'
};
// ts 中的 与
var person = {
    id: 'id',
    name: 'name',
    age: 12,
    sex: '男'
};
var person3 = {
    name: 'sadd'
};
var person33 = {
    id: 'sadd'
};
var Person4Impl = /** @class */ (function () {
    function Person4Impl(name, age) {
        this.name = name;
        this.age = age;
    }
    Person4Impl.prototype.getName = function () {
        return this.name;
    };
    Person4Impl.prototype.getAge = function () {
        return this.age;
    };
    return Person4Impl;
}());
// 类型断言
function getLength(str) {
    if (str.length) {
        // 两种类型的断言
        // return (<string>str).length;
        return str.length;
    }
    else {
        return str.toString().length;
    }
}
// 非空断言
function arrsetNull(arg) {
    return arg.length;
    // 相当于 return arg && arg.length
}
// 泛型
function t(arg) {
}
t(123);
// 会报错
// t<number>('123');
