let numeros = [1, 1, 3, 2, 2, 3, 3]
let repeticao = {}

for (let i = 0; i < numeros.length; i++) {
    if(repeticao[numeros[i]]) {
        repeticao[numeros[i]]++
    } else {
        repeticao[numeros[i]] = 1
    }
}

let array = Object.entries(repeticao)

let moda
let quantidadeAparicoes = 0

for(let i = 0; i < array.length; i++) {
    if(array[i][1] > quantidadeAparicoes) {
        quantidadeAparicoes = array[i][1]
        moda = array[i][0]
    }
}

console.log(moda)