import React from 'react';
// import { render } from "@testing-library/react";
// import '@testing-library/jest-dom'
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp />', () => {
    test('Debe mostrar el mensaje "Hola mundo, soy Javier"', () => {
        // const nombre = 'Javier';
        // const { getByText } = render(<PrimeraApp nombre={nombre}/>);
        // expect( getByText('Hola Mundo, soy Javier')).toBeInTheDocument();

        const wrapper = shallow(<PrimeraApp nombre='Javier'/>);

        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe mostrar el subtítulo enviado por props', () => {
        const nombre = 'Sandra';
        const subtitulo = 'Esto es un subtítulo';

        const wrapper = shallow(<PrimeraApp nombre={nombre} subtitulo={subtitulo}/>);

        const textoParrafo = wrapper.find('p').text(); //NOTA: el metodo find funciona parecido a como lo hace document.querySelector()

        expect( textoParrafo ).toBe(subtitulo);
    })
    
})
