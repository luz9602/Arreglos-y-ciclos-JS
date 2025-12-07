// Creamos el primer arreglo con los cursos del estudiante 1
let student1Courses = ['Math', 'English', 'Programming'];

// Creamos el segundo arreglo con los cursos del estudiante 2
let student2Courses = ['Geography', 'Spanish', 'Programming'];

// Utilizamos el método filter para recorrer el arreglo de student1Courses
// La función dentro del filter evalúa cada curso de student1Courses
let commonCourses = student1Courses.filter(course => {
  // includes() verifica si el curso actual existe dentro del arreglo student2Courses
  return student2Courses.includes(course);
});

// Si encontramos cursos en común, los mostramos en consola
console.log("Cursos en común:", commonCourses);
