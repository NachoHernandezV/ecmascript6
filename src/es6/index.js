
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




