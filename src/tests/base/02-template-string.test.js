import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => {
    
    test('getSaludo debe retornar Hola Javier.', () => {
        const nombre = 'Javier';

        const saludo = getSaludo(nombre);
        
        expect( saludo ).toBe( 'Hola ' + nombre );
    })
    
    //Si nombre no se especifica como argumento, entonces como valor por defecto debe coger Pepe
    test('getSaludo debe retornar Hola Pepe, en caso de que la función se llame sin argumentos.', () => {
        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola Pepe' );
    })
    

})
