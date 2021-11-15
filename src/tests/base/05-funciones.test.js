import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en 05-funciones.js', () => {
    test('getUser debe retornar un objeto.', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        // console.log(user);
        
        expect( user ).toEqual(userTest); //se utiliza toEqual en vez de toBe porque por ejemplo {}==={} retorna falso, indicando que dos objetos aunque sean iguales, en memoria se guardan en lugares distintos, y por tanto {} no es el otro {}. toEqual inspecciona propiedad por propiedad y si en ambos objetos son iguales todas retorna true, indicando que son iguales.
    })

    test('getUsuarioActivo debe retornar un objeto', () => {
        
        const nombre = 'Javier';

        const userTest = {
            uid: "ABC567",
            username: nombre
        }

        expect(userTest).toEqual(getUsuarioActivo(nombre));
    })
    
    
})
