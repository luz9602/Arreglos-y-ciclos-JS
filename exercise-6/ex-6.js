
function bubbleSort(arr) {
  let len = arr.length;

  // Bucle para recorrer todo el arreglo
  for (let i = 0; i < len; i++) {
    // Segundo bucle para comparar elementos adyacentes
    for (let j = 0; j < len - 1; j++) {
      // Si el elemento actual es mayor que el siguiente, los intercambiamos
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  
  return arr;
}

// Ejemplo de uso:
let numbers = [3, 6, 12, 5, 100, 1];
console.log(bubbleSort(numbers)); // Resultado: [1, 3, 5, 6, 12, 100]

// no estoy segura si funciona bien :(