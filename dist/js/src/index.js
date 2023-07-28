"use strict";
// string, boolean, number
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
class variaveis {
    constructor(nome, status, idade) {
        this.nome = nome,
            this.status = status,
            this.idade = idade;
    }
    nomedousuario() {
        console.log(`nome do usuario ${this.nome}`);
    }
}
const junior = new variaveis("junio", "adm", 21);
console.log(junior.idade);
junior.nomedousuario();
