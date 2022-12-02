//FUNCIONES..............................
//..........................................
//.....................................

function hello (name) {
    return `Hola ${name}`
    }
    
console.log(hello('jaume'));
console.log(hello('marta'));
console.log(hello('pedro'));

//FUNCIONES CON MAS PARAMETROS..........
// function add(x,y){
//     return x+y;
// }

console.log(add(1,2));

//PARAMETROS POR DEFECTO........
function add(x=20,y=0){
    return x+y;
}
//asiganr un valor por defecto por si no se le asigna ninguno
console.log(add()); //RESULTADO 20

//OBJETOS........................................
//...............................................
//...............................................
//...............................................


const user= {
    name:'jaume', //propiedad y valor
    lastName : 'Rivilla',
    age : 24,
    adress: {
        pais: 'España',
        ciudad: 'Valencia',
        calle : 'Soroya',
    },

    amigos: ['Carlos','Agustin','Tomas','Javi'],
    active: true,
    enviarCorreo: function(){ //metodo
        return 'enviando email';
    }
}

console.log(user.adress.ciudad);
console.log(user.amigos);
console.log(user.enviarCorreo());

//Si el nombre de la propiedad es igual al nombre de la variable
//se puede asignar de la siguiente forma:
const nombre = 'ordenador';
const precio = 2000;

const nuevoProducto = {
    nombre,
    precio,
}

console.log(nuevoProducto)


//MANIPULACIÓN DEL DOM...............................................
//...............................................
//...............................................

//creación de html
const titulo = document.createElement('h1');
const button = document.createElement('button');
const frase = document.createElement('p');

titulo.innerText = 'Hola mundo';
button.innerText = 'click';
frase.innerText = 'Hola jaume, después del boton';
button.className = 'B1';

//Escuchando eventos
button.addEventListener('click',function(){
    return document.body.append(frase);
})


document.body.append(titulo);
document.body.append(button);

//inerHTML
const usuario1 = {
    nombre:'jaume',
    edad : 20,
}

function printInfo(usuario1){
    return `<h1>Hola ${usuario1}</h1>`;
}

console.log(printInfo(usuario1))

document.body.innerHTML = printInfo(usuario1.nombre)

//FUNCIONES ANONIMAS......................................
//...................................................
//----------------------------------------------------

const button1 = document.createElement('buton');
button1.innerText = 'click me';

button1.addEventListener('click',function(){
    alert('clicked')
})

document.body.append(button1);


//FUNCIONES TIPO FLECHA.....................................
//..................................................
//,,....................................................

const add1 = (x,y) => {
    return x+y;
}

const showText = () => 'Hola Mundo'
const showNumber = () => 22;
const showObject = () => ({name:'jaume'})

console.log(showText());
console.log(showNumber());
console.log(showObject());

//RETURN EN FUNCIONES......................................
//....................................................
//...........................................

const button2 = document.createElement('buton');
button2.innerText = 'click me';

const isAuthorized = false; 

button2.addEventListener('click',function(){

    if(isAuthorized){
        return alert('esta autorizado'); //el return acaba la función
    } 
    alert('no esta autorizaado');
})

document.body.append(button2);

//STRINGS LITERALS ..................................
//.................................................
//.............................................
const background = 'yellow';
const color = 'white';
const isAuthorized1 = true; 

const button3 = document.createElement('buton');
button3.innerText = 'click me';
button3.style = `background: ${background}; color: ${color}`;
button3.style = `background: ${isAuthorized1 ? 'blue': 'red'};color: ${color};`


button3.addEventListener('click',function(){

    if(isAuthorized1){
        return alert('esta autorizado'); //el return acaba la función
    } 
    alert('no esta autorizaado');
})

document.body.append(button3);

//ARRAY METHODS..........................................
//..................................................
//......................................................

const nombres = ['jaume','javi','marta'];
const nuevosNombresArr = ['Agus','Tomas','Raul'];

const nuevosnombres = nombres.map(function(name){
    return `Hola ${name}`;
}); //.map crea una nuevo array con la modificación que queramos
//pero .map no cambia el array original


const nombreEncontrado = nombres.find(function(name){
    if (name === 'marta'){
        return name
    }
})

//.find() encuentra lo que le pide la función  y lo devuelve


const nombreFiltrado = nombres.filter(function(name){
    if (name === 'marta'){
        return name
    }
})
//.filter() devuelve un nuevo array del elemento o elementos filtrados


console.log(nombres);
console.log(nuevosnombres);
console.log(nombreEncontrado);
console.log(nombreFiltrado);
console.log(nombres.concat(nuevosNombresArr)); //.concat() concatena dos arrays

//SPREAD OPERATOR..........................................................
//--------------------------------------------------------
//.....................................................

// const nombres = ['jaume','javi','marta'];
// const nuevosNombresArr = ['Agus','Tomas','Raul'];

// console.log([...nombres, ...nuevosNombresArr]);

// const user = {
//     nombre: 'jaume',
//     apellido: 'Rivilla'
// }

// const direccion = {
//     calle: 'soroya',
//     ciudad: 'Valencia'
// }

// const usuarioInfo = {
//     ...user,
//     ...direccion
// }

// console.log(user);
// console.log(direccion);
// console.log(usuarioInfo);

//ECMASCRIPT MODULES..............................
//..............................................
//.........................................

// import {suma} from './add.js'

// console.log(suma(10,20));

//OPTONIAL CHANGES .....................................
//..................................................
//..............................................

// const persona = {
//     nombre : 'jaume',
//     direccion: {
//         ciudad: 'Valencia',
//     },
//     ubicacion:{}

// }

// // if(persona.ubicacion){
// //     console.log(persona.ubicacion.ciudad);
// // }

// console.log(persona.ubicacion?.ciudad); 
//esto quiere decir que valide si existe la propiedad ubicacion para que no salte un error

//ASYNC/AWAIT..........................................................
//.......................................................
//....................................................
// const ul = document.createElement('ul');

// fetch('https://jsonplaceholder.typicode.com/posts') //permite colocar una url de 
// //devuelve una promesa
// //una promesa permite al navegador seguir ejectutando otras cosas
//     .then(function(response){
//         return response.json()//convierte la respuesta en json);
//     }).then(function(data){
//         console.log(data);
//         data.forEach((post) => {
//             const li = document.createElement('li');
//             li.innerText = post.title
//             ul.append(li)
//         });
//         document.body.append(ul);
//     })

//otra forma de cargar datos
const ul = document.createElement('ul');

async function cargarData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
    data.forEach((post) => {
        const li = document.createElement('li');
        li.innerText = post.title
        ul.append(li)
    });
    document.body.append(ul);
}

cargarData();
console.log('hola');
//Primero se muestra hola