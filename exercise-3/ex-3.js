// Exercise #3 (sugerencia reduce())
// Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
// Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.

 
const array = [1,2,3,4];

function add(arrayNumbers){
    let agregador=0
    let agregadorProduct = 1

    for (let index = 0; index < arrayNumbers.length; index++) {
        const numero = array[index]
        agregador = agregador + numero
        agregadorProduct = agregadorProduct * numero
    }
    console.log(agregador)
    console.log(agregadorProduct)

}

add(array)


// tengo un agregador para la suma 
// por cada numero en mi arreglo 
// voy a sumar ese numero a mi agregador 
// voy a multiplicar ese numero a mi agregador
// imprimo el agregador 



// ----------

const array2 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array2.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);