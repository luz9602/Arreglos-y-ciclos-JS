/*Exercise #1 (sugerencia: join())
Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  //your code here
}
printOutString();
Complete the function to print out the string: This is a sentence.
*/

// --------------- FORMA IMPERATIVA -----------------

let array = ["This", "is", "a", "sentence."];
function printOutString() {
  // your code 
  // ++index = incrementa la variable antes de que se use index
  // index++ = incrementa la variable DESPUES de usar index 
  let result = ''

  for (let index = 0; index < array.length; index++) {
    const element = array[index]; 
    result = result + element + " " 
  }
  console.log(result) // Thisisasentence

  return result


}
printOutString();
 

// tengo un agregador para mi enunciado 
// por cada string en mi arreglo 
// voy a concatenar ese string a mi agregador mas 1 espacio 
// imprimo el agregador 





// syntax de un for loop
// for (initialization; condition; increment) 
// { Esto se ejecuta cada vez que la condition se cumple }


// --------------------------------------- INVERTIR ARREGLO --------------------------------------------


let invArray = ["This", "is", "a", "sentence."];
function invPrintOutString() {
  // your code 
  // ++index = incrementa la variable antes de que se use index
  // index++ = incrementa la variable DESPUES de usar index 
  let result = ''

  for (let index = invArray.length -1; index >= 0; index--) {
    const element = array[index]; 
    result = result + element + " " 
  }
  console.log(result) // Thisisasentence

  return result


}
invPrintOutString();



// --------------- FORMA DECARATIVA -----------------

let array2 = ["This", "is", "a", "sentence."];
console.log(array2.join(' '))