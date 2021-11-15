import React from 'react';
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe('Pruebas en <CounterApp />', () => {
    // let wrapper; //de esta forma el inconveniente que tiene es q al ser undefined, visual studio no reconocería sus atributos y métodos propios. Un workaround es el de la próxima línea.
    let wrapper = shallow(<CounterApp />);

    beforeEach( () => {

        wrapper = shallow(<CounterApp />); //se declara de forma global a todas las pruebas para no declararlo dentro de cada prueba una y otra vez.

    });

    test('Debe mostrar <CounterApp /> correctamente (hacer match con el snapshot) y sus valores por defecto', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe mostrar el valor por defecto de 100', () => {
        const wrapper = shallow(<CounterApp value={100}/>);
        
        const h2Text = wrapper.find('h2').text().trim(); //el método trim() se utiliza para quitar los espacios en blanco antes y después del valor del contador (estos espacios fueron definidos en el HTML dentro del Fragment)

        expect(h2Text).toBe('100');
    })
    
    test('Debe incrementar con el botón +1', () => {
        
        // const btn1 = wrapper.find('button').at(0);
        // console.log(btn1.html());

        wrapper.find('button').at(0).simulate('click');
        const h2Text = wrapper.find('h2').text().trim(); //comprobando que el valor se incrmentó en 1

        expect(h2Text).toBe('6');
    })

    test('Debe decrementar con el botón -1', () => {
        
        // const btn1 = wrapper.find('button').at(0);
        // console.log(btn1.html());

        wrapper.find('button').at(1).simulate('click');
        const h2Text = wrapper.find('h2').text().trim(); //comprobando que el valor se incrmentó en 1

        expect(h2Text).toBe('4');
    })
    
    test('Debe colocar el valor por defecto con el botón reset', () => {
        const wrapper = shallow(<CounterApp value={105}/>);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click'); //simulando la opresión del botón +1 par de veces para que luego se note el efecto del botón de reset.
        wrapper.find('button').at(2).simulate('click'); //el botón en la posición 2 es el botón de reset.
        
        const h2Text = wrapper.find('h2').text().trim(); 
        // console.log(h2Text);

        expect(h2Text).toBe('105');
    })
    
})
