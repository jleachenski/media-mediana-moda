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

for (let i = 0; i < numeros.length; i++) {
  for (let j = i + 1; j < numeros.length; j++) {
    if (numeros[i] > numeros[j]) {
      let aux = numeros[i];
      numeros[i] = numeros[j];
      numeros[j] = aux;
    }
  }
}

console.log(numeros);
if (numeros.length % 2 != 0) {
    console.log("É impar")
  let indiceMediana = Math.floor(numeros.length / 2);
  console.log(numeros[indiceMediana]);
} else {
    console.log("É par")
    let indiceMediana1 = numeros.length / 2;
    let indiceMediana2 = indiceMediana1 - 1;

    console.log((numeros[indiceMediana1] + numeros[indiceMediana2]) / 2);
}