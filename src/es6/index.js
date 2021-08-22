
//ANTES DE ECMASCRIPT 6
function newFunction (name, age, country){
    var name = name || 'oscar'; //Asignar valor por defecto
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}


//ECMASCRIPT 6, forma de asignar valor por defecto
function newFunction2(name='oscar', age=32, country='mx'){
    console.log(name,age,country);
}

newFunction2();
newFunction2('Ricardo',17,'Salvador');





let hello ="Hello";
let world ="World";

//antes de ECMASCRIPT 6
let FraseCompleta = hello + ' ' + world;
console.log(FraseCompleta);

//ECMASCRIPT 6
let FraseCompleta2 = `${hello} ${world}`;
console.log(FraseCompleta2);



//antes SALTOS DE LINEA CON \n
let parrafo = "linea 1 \n" + "Otra linea 2.";

//ECMASCRIPT 6, con esas comillas y enter
let parrafo2 =`Linea 3
linea 4`;

console.log(parrafo);
console.log(parrafo2);



//Declaramos un objeto
let person = {
    'nombre':'oscar',
    'age':32,
    'country':'mx'
}

//Acceder al objeto de forma tradicional
console.log(person.nombre,person.age,person.country);

//ECMASCRIPT 6,  asignamos a variables el objeto
let {nombre,age,country}=person;

console.log(nombre,age,country);




//arrays
let team1 = ['oscar','julian','Ricardo'];
let team2 = ['Valeria','Yesica','Camila'];

//ECMASCRIPT6 Union de arrays
let education = ['David',...team1,...team2];

console.log(education);



//creamos 2 bloques de codigo
{
    var globalVar='Global VAR';
}
{
    let globalLet='Global Let';
    console.log(globalLet);
}
console.log(globalVar);
//console.log(globalLet);  Marcaria error por q no es global



let nombre ='Nacho';
let age = 32;

//EcmaScrip 5
obj={name:nombre,age:age};

//ecmaScript 6
obj2 = {nombre,age};

console.log(obj);
console.log(obj2);

//Objeto
const names = [
    {nombre:'Oscar', age:32},
    {nombre:'Yesica',age:27}
]

//ecma5 funcion tradicional
let listOfNames = names.map(function(item){
    console.log(item.name)
});

//Arrow function case 1
let listOfNames2 = names.map(item => console.log(item.name));

//Arrow function case 2 solo es un ejemplo
// Se esperan 3 parametros
const listOfNames3 = (nombre, age, country) => {
    //CODIGO DE LA FUNCION
}

//Arrow function case 3 solo es un ejemplo
// Se espera solo 1 parametro
const listOfNames4 = nombre => {
    //CODIGO DE LA FUNCION
}

//Arrow function simplificada 
// num es el parametro q recibe y regresa num*num
const square = num => num*num;

const cuadrado=square(100);
console.log(cuadrado);



class calculator{
    constructor(){
        this.valueA=0;
        this.valueB=0;
    }

    sum(valueA,valueB){
        this.valueA=valueA;
        this.valueB=valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();

console.log(calc.sum(10,5));


