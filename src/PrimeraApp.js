import React from 'react';
import PropTypes from 'prop-types'

const PrimeraApp = ( { nombre, subtitulo } ) => { //usando desestructuración
    
    return ( //a continuación se utiliza un Fragment para poder devolver más de una lía de código HTML
    <> 
      <h1> Hola mundo, soy {nombre}. </h1>
      {/* <p>Esta es mi primera aplicación en React</p> */}
      <p>{subtitulo}</p>
    </>
    );
};

PrimeraApp.propTypes = {
  nombre: PropTypes.string.isRequired
};

PrimeraApp.defaultProps = {
  subtitulo: 'Soy un subtítulo'
};

export default PrimeraApp;