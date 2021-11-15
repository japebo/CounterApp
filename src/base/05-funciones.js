//La forma preferida de declarar una funcion es utilizando una constante, de esta forma nos aseguramos de que no le asignemos otro valor.
// const saludar = function (nombre) {
//     return `Hola, ${nombre}`;
// }

//console.log( saludar ('Javier') );

//Funcion flecha es la funcion lambda en JS

const saludar = (nombre) => {
  return `Hola, ${nombre}`;
};
// console.log(saludar("Javier"));

//Se puede abreviar aun más si tiene una sola linea de return

const saludar2 = (nombre) => `Hola, ${nombre}`; //los parentesis que encierran los backticks con opcionales, en este caso se pueden omitir. Tienen sentido por ejemplo si la funcion retorna un objeto. Se ponen con el objetivo de encerrar el cuerpo del objeto para dejar claro que es un objeto. Esto se aprecia en el ultimo ejemplo de este script.
// console.log(saludar2("Pepe"));

//Si no tuviera argumentos de entrada la funcion se ponen los paréntesis:

const saludar3 = () => `Hola Mundo!`;
// console.log(saludar3());

export const getUser = () => ({ //se utilizan paréntesis para retornar un objeto
  uid: 'ABC123',
  username: 'El_Papi1502'
});

export const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre
});

// console.log(getUsuarioActivo("Fernando"));
