let numeros = [2, 1, 3, 2, 6, 1, 7, 10, 10, 12];

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