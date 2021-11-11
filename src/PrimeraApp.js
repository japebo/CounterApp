import React from 'react';

const PrimeraApp = ( { nombre = 'Valor por defecto' } ) => { //usando desestructuración
    
    const saludo = 'Hola Mundo';
    return ( //a continuación se utiliza un Fragment para poder devolver más de una lía de código HTML
    <> 
      <h1> {saludo}, soy {nombre}. </h1>
      <p>Esta es mi primera aplicación en React</p>
    </>
    );
};

export default PrimeraApp;