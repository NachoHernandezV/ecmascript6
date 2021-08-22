//GENERADORES
function* helloWorld(){
    if(true){
        yield 'hello, ';
    }
    if(true){
        yield 'World';
    }
}

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
