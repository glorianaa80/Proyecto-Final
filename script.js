// Se le solicita al usario que ingrese los datos que se le solicitan.
let pregunta = prompt('¿Desea hacer una compra? o si desea salir presione Q o q');

// Se declaran los array que vamos a utilizar para llamar datos que ocuparemas.
let tc = [0.30, 0.20, 0.10, 0];
let m = 2000;
let s = 5000;
let f = 4000;



while(pregunta != 'Q' && pregunta != 'q'){
    let nombre = prompt('Ingrese su nombre y apellido');
    let ID = prompt('Ingrese su ID ');
    let tipoCliente = prompt('¿Que tipo de cliente eres?');
    let mate = prompt('Ingrese la cantidad de libros de matematicas que lleva');
    let sociales = prompt('Ingrese la cantidad de libros de sociales que lleva');
    let fisica = prompt('Ingrese la cantidad de libros de fisica que lleva');  
    
    
    // Declaro como se van a llamar los datos de la array.
    let valor = tc[tipoCliente - 1];

    // Operaciones que vamos a usar.
    let a =parseInt(mate) * m;
    let b = parseInt(sociales) * s;
    let c = parseInt(fisica) * f;
    let sb = parseInt(a) + parseInt(b) + parseInt(c);
    let d = parseInt(sb) * valor;
    let t = parseInt(sb) - parseInt(d);

    console.log(`Nombre: ${nombre}`);
    console.log(`Libros de matematicas: ${mate} * ${m} = ${a}`);
    console.log(`Libros de sociales: ${sociales} * ${s} = ${b}`);
    console.log(`Libros de fisica: ${fisica} * ${f} = ${c}`);
    console.log(`Cantidad de Libros: ${ parseInt(mate) + parseInt(sociales) + parseInt(fisica)}`);
    console.log(`Subtotal: ${sb}`);
    console.log(`Descuento: ${d}`);
    console.log(`Total: ${t}`);

    pregunta = prompt('¿Desea hacer una compra? o si desea salir presione Q o q');
}
