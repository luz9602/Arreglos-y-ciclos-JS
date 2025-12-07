/* Exercise #2 (sugerencia map())
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/

let arrayNum = [1,2,4,5];

function printOutNumbers(resultArray){
let result=[]

    for (let index = 0; index < arrayNum.length; index++) {
        const element = resultArray[index]; // aqui estamos obteniendo el valor en el arreglo resultArray donde el index equivale a 0
        result.push(element*2); // version declarativa 
        result[index]=element*2  // version imperativa - en el arreglo resultArray en la posicion donde el index equivale a 0 el valor es = a element * 2
    
        
    }
    console.log(result)
}

printOutNumbers(arrayNum);


// --------------------------- metodo map ----------------------

const arrayNumMap=[1,2,4,5]
const mapped = arrayNumMap.map((x) => x * 2);

console.log(mapped);