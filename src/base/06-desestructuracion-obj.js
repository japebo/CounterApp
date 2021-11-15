//Desestructuración de objetos o asignación desestructurante

const persona = {
    nombre: 'Javier',
    edad: 25,
    password: '12345'
};

console.log(persona.nombre, persona.edad, persona.password);

//Usando la desestructuración de objetos:
const { nombre, edad, password } = persona;
console.log(nombre, edad, password);

//Para renombrar las constantes:
const {nombre:nombreNuevo, edad: edadNueva, password: passwordNuevo} = persona;
console.log(`Este mensaje utiliza constantes renombradas: ${nombreNuevo}, ${edadNueva}, ${passwordNuevo}`);

//Usado en funciones...
const retornaPersona = (usuario) => {
    const {edad, nombre, password} = usuario;

    console.log(nombre, edad, password);
}

retornaPersona(persona);

//...principalmente en el propio argumento de la funcion
const retornaPersona2 = ({nombre, edad, password}) => {
    console.log(`Me llamo ${nombre}, tengo ${edad} años y mi contraseña es: ${password}.`);
};

retornaPersona2(persona);

const usecontext = ({ password, nombre, edad, rango = 'Capitán'}) => { //nota que hay un valor por defecto para el atributo rango que no esta presente en el objeto, si este estuviera en el objeto, entoces cogería su valor, y no el valor por defecto.
    return {
            nombreClave: password,
            años: edad
    }
};

const avenger = usecontext( persona );
console.log(avenger);