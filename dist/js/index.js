"use strict";
// string, boolean, number
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
x = 25;
console.log(x);
let y = 12;
let z = 12;
// tipos basicos
let firstname = "thalyson";
let age = 21;
const isadmin = true;
// string != string
console.log(typeof firstname);
firstname = "joao";
console.log(firstname);
//obj
const mynumber = [1, 2, 3, 2];
console.log(mynumber[1]);
console.log(mynumber.length);
// tuplas -> tuple
let mytuble;
mytuble = [5, "teste", ["a", "b"]];
console.log(mytuble);
// object literals -> {prop: value}
const user = {
    name: ["thalyson", "nivia"],
    age: 21,
    tra: "ola"
};
console.log(user);
console.log(user.name[0]);
let a = 0;
a = "teste";
a = true;
a = [];
console.log(typeof (a));
//union type
let id = "10";
id = 200;
// id = true
console.log(typeof (id));
const usid = 10;
// tamanho de roupa
var size;
(function (size) {
    size["p"] = "pequeno";
    size["m"] = "medio";
    size["g"] = "grande";
})(size || (size = {}));
const camisa = {
    name: "social",
    size: size.p,
    tamaho: size.g
};
console.log(camisa.tamaho);
// literal type
let teste;
// teste = "outra";
teste = "alguma";
teste = null;
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 2));
function noma(nome) {
    return `hellou ${nome}`;
}
console.log(noma("thalyson"));
function logger(msg) {
    console.log(msg);
}
logger("teste!");
function greetin(name, greet) {
    if (greet) {
        console.log(`ola ${greet} ${name}`);
    }
    else {
        console.log(`ola ${name}`);
    }
}
greetin("jose");
function sumnumber(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumnumber({ n1: 2, n2: 2 }));
function numulti(nums) {
    return nums.n1 * nums.n2;
}
const val = {
    n1: 5,
    n2: 4
};
console.log(numulti(val));
// narrowing
function dos(info) {
    if (typeof info == "number") {
        console.log(`number ${info}`);
        return;
    }
    else if (typeof info == "boolean") {
        console.log(`boolean ${info}`);
        return;
    }
}
dos(5);
dos(true);
// generics
function show(arr) {
    arr.forEach((item) => {
        console.log(`ITEM ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
show(a1);
show(a2);
// class
class userr {
    constructor(name, role, ispad) {
        this.name = name;
        this.role = role;
        this.ispad = ispad;
    }
    so() {
        console.log(`nome do usuario é${this.name}`);
    }
    soinfo(can) {
        if (can) {
            console.log(`role é ${this.role}`);
            return;
        }
        console.log(`sem moral`);
    }
}
const zeca = new userr("zeca", "admin", true);
console.log(zeca);
zeca.so();
zeca.soinfo(true);
class car {
    constructor(brand, wherr) {
        this.brand = brand;
        this.wherr = wherr;
    }
    show() {
        console.log(`a marca do carro é ${this.brand}`);
    }
}
const camaro = new car("camara", 23);
console.log(camaro);
camaro.show();
//herarqui
class supercar extends car {
    constructor(brand, wherr, engine) {
        super(brand, wherr);
        this.engine = engine;
    }
}
const ferrari = new supercar("ferrari", 4, "v8");
console.log(ferrari);
ferrari.show();
//decoreits
function base() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdat = new Date();
            }
        };
    };
}
let person = class person {
    constructor(name) {
        this.name = name;
    }
};
person = __decorate([
    base()
], person);
const sam = new person("sam");
console.log(sam);
