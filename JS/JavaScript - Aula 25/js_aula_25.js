//Para algo mais complexo é necessário usar return
const soma=(v1,v2)=>{
    let res=v1+v2
    return res
}
console.log(soma(10,5))

//Para algo menos complexo não é necessário utilizar o return
const nome=n=>{return n}
console.log(nome("Gustavo"))

const add=n=>n+10
console.log(add(10))