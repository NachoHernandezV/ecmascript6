//Objeto
 const obj = {
    nombre: 'Oscar',
    age: 32,
    country: 'MX'
  };
  
  //Separar en variables los elementos del objeto
  //con los 3 ... se englñoba lo demas del objeto
  let { nombre, ...addInfo } = obj;
  console.log(`name: ${nombre}`);
  console.log(`additional information: `, addInfo);
  
  let { country, ...nameAndAge } = obj;
  console.log(`name and age: `, nameAndAge);
  



//objeto
  const person = {
    name: 'Oscar',
    age: 32
  };
  
  //agregamos el objeto de arriba a nuestro
  //nuevo objeto con ...person
  const personInformation = {
    ...person,
    country: 'MX'
  };
  console.log(`personInformation: `, personInformation);
  


//promesa
const helloword = () =>{
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(()=>resolve('Hello World'),3000)
        :reject(new Error('Test Error'))
    });
};

//llamada de la promesa
helloword()
.then(response=>console.log(response))
.catch(error=>console.log(error))
.finally(()=> console.log('Finalizo'))
//se uza finally para indicar que termino el proceso



//Uso de expresiones regulares
 const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
 const fecha='2018-04-28';

 //.test prueba si es correcta la coincidencia
 if(regexData.test(fecha)){
     //exec separa en los bloques de coincidencia
    const match = regexData.exec(fecha);
    const year = match[1];
    const month = match[2];
    const day = match[3];
    console.log('Fecha  -> ', year, month, day);
 }

 