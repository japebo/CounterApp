// import { heroes } from './data/heroes'; // en el caso de que 'heroes' fuera una exportacion individual
import heroes from '../data/heroes'; // en el caso de que heroes fuera una exportacion por defecto declarada en el fichero 'heroes.js'
//cuando se combinan exportaciones individuales con exportaciones por defecto, se usa la siguiente notación:
// import heroes, {owners} from './data/heroes
//lo anterior suponiendo que en el archivo 'heroes.js' exista una exportacion individual como: default const owners = ['DC', 'Marvel'];

// console.log(heroes);

//use of the prototype find function of the arrays
// console.log(heroes.find( heroe => heroe.name === 'Batman' ));

//use of the prototype filter function of the arrays
// console.log(heroes.filter( heroe => heroe.owner === 'DC' ));

export const getHeroeById = (id) => heroes.find( heroe => heroe.id === id );

// console.log(getHeroeById(3));

export const getHeroeByOwner = (owner) => heroes.filter( heroe => heroe.owner === owner);

// console.log(getHeroeByOwner('Marvel'));