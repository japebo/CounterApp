import { getHeroeByIdAsync } from "../../base/09-promises";
import heroes from "../../data/heroes";

describe('Prueba con promesas', () => {
    test('getHeroeByIdAsync debe retornar un Héroe async', (done) => {
        const id = 1;

        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done(); //el callback done() se utiliza para indicarle a Jest que ya terminamos y que ya no estamos esprando más resultados de tareas asíncronas 
                // console.log(heroe); 
            });
    });

    test('Debe obtener un error si no existe un Héroe con el id proporcionado', (done) => {
        const id = 10;

        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe(`No se pudo encontrar al héroe con id: ${id}`);
                done();
            });
    });
});
