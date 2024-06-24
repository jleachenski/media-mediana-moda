let numeros = [1, 1, 3, 2]
let soma = 0

for(let i = 0; i < numeros.length; i++) {
    soma += numeros[i]
}

console.log("A média é: ", soma / numeros.length)