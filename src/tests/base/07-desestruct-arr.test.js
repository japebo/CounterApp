import { retornaArreglo } from "../../base/07-desestruct-arr"

describe('Pruebas de desestructuración.', () => {
    test('Debe retornar un string y un número.', () => {
        const arr = retornaArreglo(); //["ABC", 123]

        expect(arr).toEqual(["ABC", 123]);

        const [letras, numeros] = arr; //desestructurando el arreglo

        //Comprobaciones individuales para el string
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');
        
        //Comprobaciones individuales para el número
        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    })
})
