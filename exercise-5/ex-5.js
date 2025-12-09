// Inicializamos el arreglo
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//  Imprimir todas las personas de la lista
console.log(people);

//  Remover "Dani" del array
people.splice(people.indexOf("Dani"), 1);
console.log(people);

//  Remover "Juan" del array
people.splice(people.indexOf("Juan"), 1);
console.log(people);

// Mover "Luis" al frente del array
// Primero lo removemos
let luis = people.splice(people.indexOf("Luis"), 1)[0];
// Luego lo añadimos al inicio
people.unshift(luis);
console.log(people);

//  Agregar tu nombre al final del array
people.push("Luz"); // Cambia el nombre si quieres
console.log(people);

//  Iterar e interrumpir después de imprimir "Maria"
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Maria") {
    break; // Rompe el ciclo después de imprimir "Maria"
  }
}

//  Mostrar el índice de "Maria"
console.log("Index de Maria:", people.indexOf("Maria"));

// Mostrar el arreglo final
console.log("Arreglo final:", people);