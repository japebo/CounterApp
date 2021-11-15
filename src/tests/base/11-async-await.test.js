import { getImagen } from "../../base/11-async-await"

describe('Pruebas con Async-Await y Fetch', () => {
    test('getImagen() debe retornar la url de la imagen', async() => {
       const url = await getImagen();
       console.log(url);
       expect(typeof url).toBe('string');
    });
    
});
