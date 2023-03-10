//Break
let n = 0
let max = 1000


while(n < max){
    console.log("CFB Cursos - " + n)
    if(n > 10){
        break
    }
    n++
}
console.log("\n")


//Continue
let number = 0
let máximo = 100
let pares = 0

for(let count = number;count < máximo; count++){
        if(count % 2 != 0){
            continue
    }
    pares++
}
console.log(`De 0 a 100 há ${pares} números pares.`)
console.log("Fim do programa.")