//Desestructuración de arreglos en JS

// const personajes = ['Goku', 'Vegeta', 'Trunks'];
// const [p1, p2, p3] = personajes;
// console.log(p1, p2, p3);

const personajes2 = ["Goku", "Vegeta", "Trunks"];
const [, , p3] = personajes2;
// console.log(p3);

export const retornaArreglo = () => {
  return ["ABC", 123];
};

// const [letras, numeros] = retornaArreglo();
// console.log(letras, numeros);

// const usestate = (valor) => {
//   return [
//     valor,
//     () => {
//       console.log("Hola Mundo");
//     },
//   ];
// };

// const arr = usestate("Goku");
// const [nombre, setNombre] = arr;
// console.log(nombre);
// setNombre();
