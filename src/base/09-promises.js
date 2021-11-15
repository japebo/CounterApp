import { getHeroeById } from './08-imp-exp';

// const promesa = new Promise ( (resolve, reject) => {
//     setTimeout( () => {
//         const p1 = getHeroeById(6);
//         if (p1) {
//             resolve (p1);
//         }
//         else {
//             reject('No se encontró un héroe con el ID buscado');
//         }
//     }, 2000);
// });

// promesa.then( (heroe) => {
//     console.log('heroe', heroe)
// })

// promesa.then(console.log);
// promesa.catch(console.warn);


//a continuacion una prueba para ver que diferencia puede tener hacer esto, frente a hacer una promesa.
// const func = () => {
//     setTimeout(() => {
//         const p1 = getHeroeById(2);
//         console.log(p1);        
//     }, 2000);    
// }
// func();
// Se llega a la conclusion de que el resultado es el mismo, pues en pantalla se imprime primeramente Hola Javi y luego el objeto que devuelve la funcioon getHeroeById()

// console.log('Hola Javi');

export const getHeroeByIdAsync = ( id ) => {
    return new Promise ( (resolve, reject) => {

        setTimeout(() => {
            const p1 = getHeroeById (id);
            if (p1) {
                resolve(p1);
            }
            else{
                reject(`No se pudo encontrar al héroe con id: ${id}`)
            }
        }, 1500);
    } );
}