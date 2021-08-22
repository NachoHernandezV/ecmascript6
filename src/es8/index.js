//Objeto
const data = {
    frontend:'Oscar',
    backend:'Isabel',
    design:'Ana',
}
 const entries = Object.entries(data); //Convertir de objeto a array

 console.log(entries);
 console.log(`La longitud del array es: ${entries.length}`);
 









 //Objeto
const data = {
    frontend:'Oscar',
    backend:'Isabel',
    design:'Ana',
}
//toma solo los valores del objeto y los convierte en Array
const values = Object.values(data); 
console.log(values);
console.log(`La longitud del array es: ${values.length}`);





//Poner al inicio y final caracteres en cade na de texto
const string ='hello';
// se añade al inicio la palabra 'AA '
console.log(string.padStart(7,'AA')) 
// Se añade al final la palabra '-Z'
console.log(string.padEnd(12,'-Z')) 





function resolveAfter2Seconds(x) {
    //Esta promesa tarda 2.5 segundos en resolverse
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2500);
    });
  }
  

  async function add2(x) {
    // estas 3 llamadas a la funcion se ejecutan una acabando la otra
    const p_a =  await resolveAfter2Seconds(20);
    const p_b =  await  resolveAfter2Seconds(30);
    const p_c =  await resolveAfter2Seconds(35);
    return x + p_a + p_b;
  }
  
  add2(10).then(v => {
    console.log(v);  //Va tardar 7.5 seg
  });






