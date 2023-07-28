// string, boolean, number

let x:number = 10;

x = 25;

console.log(x);

let y = 12;

let z:number = 12;


// tipos basicos
let firstname:string = "thalyson";
let age:number = 21;
const isadmin:boolean = true;

// string != string

console.log(typeof firstname);

firstname = "joao";

console.log(firstname);

//obj

const mynumber:number[] = [1,2,3,2]

console.log(mynumber[1])
console.log(mynumber.length)


// tuplas -> tuple
let mytuble: [number, string, string[]];

mytuble = [5, "teste", ["a", "b"]]

console.log(mytuble)

// object literals -> {prop: value}

const user: {name: string[], age: number, tra:string} ={
    name: ["thalyson","nivia"],
    age: 21,
    tra: "ola"
}

console.log(user)

console.log(user.name[0])



let a:any = 0;

a = "teste"

a = true

a = []
console.log(typeof(a));

//union type

let id: string | number ="10"
id = 200

// id = true
console.log(typeof(id));

type myid = number | string

const usid: myid = 10


// tamanho de roupa

enum size {
    p = "pequeno",
    m = "medio",
    g = "grande"
}

const camisa = {
    name: "social",
    size: size.p,
    tamaho: size.g
}

console.log(camisa.tamaho);

// literal type

let teste: "alguma" | null

// teste = "outra";
teste = "alguma"
teste = null

function sum (a:number, b:number) {
    return a+ b
}

console.log(sum(2,2))


function noma (nome:string): string{
    return `hellou ${nome}`
}

console.log(noma("thalyson"))

function logger(msg: string): void{
    console.log(msg);
}

logger("teste!");

function greetin (name: string, greet?: string){
    if(greet){
    console.log(`ola ${greet} ${name}`);
}else{
    console.log(`ola ${name}`);
}}

greetin("jose");


// interface

interface Mathfunctionparams{
    n1: number,
    n2: number
}

function sumnumber(nums: Mathfunctionparams){
    return nums.n1 + nums.n2
}

console.log(sumnumber({n1:2, n2:2}))


function numulti(nums: Mathfunctionparams) {
    return nums.n1 * nums.n2
}

const val:Mathfunctionparams ={
    n1:5,
    n2:4
}

console.log(numulti(val))


// narrowing

function dos(info: number | boolean){
    if(typeof info == "number"){
        console.log(`number ${info}`)
        return
    } else if(typeof info == "boolean"){
        console.log(`boolean ${info}`)
        return
    }
}

dos(5)

dos(true)

// generics


function show <t>(arr: t[]) {
    arr.forEach((item) =>{
        console.log(`ITEM ${item}`)
    })
}

const a1= [1,2,3]
const a2 = ["a", "b", "c"]

show(a1)
show(a2)




// class

class userr {
    name
    role
    ispad

    constructor(name: string, role:string, ispad:boolean){
        this.name = name
        this.role = role
        this.ispad = ispad
    }

    so(){
        console.log(`nome do usuario é${this.name}`)
    }

    soinfo(can: boolean){
        if(can){
            console.log(`role é ${this.role}`)
            return
        }
        console.log(`sem moral`)
    }
}

const zeca = new  userr("zeca", "admin", true)


console.log(zeca)

zeca.so()
zeca.soinfo(true)


// interface e class

interface vl {
    brand: string
    show() :void
}

class car implements vl{
    brand
    wherr

    constructor(brand: string, wherr:number){
        this.brand = brand
        this.wherr = wherr
    }

    show(): void {
        console.log(`a marca do carro é ${this.brand}`)
    }
}

const camaro = new car ("camara", 23)

console.log(camaro)

camaro.show()

//herarqui

class supercar extends car {
    engine

    constructor(brand: string, wherr:number, engine: string){
        super(brand, wherr)
        this.engine = engine
    }
}

const ferrari = new supercar ("ferrari", 4, "v8")

console.log(ferrari)
ferrari.show()



//decoreits

function base(){
    return function <b extends {new (...args: any[]): {}} > ( constructor: b){
        return class extends constructor{
            id = Math.random();
            createdat = new Date();
        }
    }
}


@base()

class person{
    name

    constructor(name: string){
        this.name = name
    }
}

const sam = new person("sam")

console.log(sam)



