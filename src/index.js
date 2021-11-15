
import React from 'react';
import ReactDOM from 'react-dom'; 
// import PrimeraApp from './PrimeraApp';
import './index.css'
import CounterApp from './CounterApp';

//------------------------------------------------------------------------------------------------------------------
// const saludo = <h1>Hola Mundo</h1>; //esto no es un componente, es JSX, y para que funcione necesitamos de React

// const divRoot = document.querySelector('#root');

// ReactDOM.render(saludo, divRoot);
//------------------------------------------------------------------------------------------------------------------

const divRoot = document.querySelector('#root');

// ReactDOM.render(<PrimeraApp nombre="Javier"/>, divRoot);
ReactDOM.render(<CounterApp />, divRoot); //los valores numéricos se pasan entre llaves