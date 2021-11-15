import { getHeroeById, getHeroeByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Héroes', () => {
    test('Debe retornar el héroe correspondiente al id proporcionado', () => {
        
        const id = 1;
        const heroe = getHeroeById(id);

        // console.log(heroe);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);

    })

    test('Debe retornar undefined si héroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById(id);

        // console.log(heroe);

        expect(heroe).toEqual(undefined);

    })

    test('Debe retornar un arreglo con los héroes de DC', () => {
        
        const owner = 'DC';
        const hs = getHeroeByOwner(owner);

        // console.log(hs);

        const expectedHs = heroes.filter(h => h.owner === owner);

        expect(hs).toEqual(expectedHs);

    })

    test('Debe retornar un arreglo con los héroes de Marvel', () => {
        
        const owner = 'Marvel';
        const hs = getHeroeByOwner(owner);
        const len = hs.length; 
        // console.log(hs);

        const expectedHs = heroes.filter(h => h.owner === owner);
        const expectedLen = expectedHs.length;
        expect(len).toBe(expectedLen);
    })


})
