/* Start: Solicita nombre del estudiante */
let nalumno 

function esAlfabeto(input) {
    let letras = /^[A-Za-z]+$/;
    return letras.test(input);
}

do {
    nalumno= prompt("Por favor ingrese su nombre");

    if (esAlfabeto(nalumno)) {
        alert('Hola '+ nalumno);
    } else {
        alert('Por favor vuelva a ingresar su nombre o del alumno');
    }
    
} while (!esAlfabeto(nalumno));

/* Start: Solicita nombre de la materia */
let nmateria 

function esMateria(input) {
    let programacion = 'Programacion';
    return input.toLowerCase() === programacion.toLowerCase();
}

do {
    nmateria = prompt("Por favor ingrese el nombre de la materia");
    
    if (esMateria(nmateria)) {
        alert('El nombre ' + nmateria + ' es correcto');
    } else {
        alert('Incorrecto, por favor vuelva a ingresar la materia');
    }
    
} while (!esMateria(nmateria)); 

/* Start: Solicita la primera nota */
let pnota

function esEntreCero(input) {
    let rangoNota = input >=0 && input <=10;
    return rangoNota;
}

do {
    pnota = parseFloat(prompt("Por favor ingrese la primera nota"));

    if (esEntreCero(pnota)) {
        alert('Su primera nota es ' + pnota );
    } else {
        alert('Por favor ingrese un valor entre 0 y 10');
    }
} while (!esEntreCero(pnota));

/* Start: Solicita la segunda nota */
let snota 

do {
    snota = parseFloat(prompt("Por favor ingrese la segunda nota"));

    if (esEntreCero(snota)) {
        alert('Su segunda nota es ' + snota );
    } else {
        alert('Por favor ingrese un valor entre 0 y 10');
    }
} while (!esEntreCero(snota));

/* Start: Solicita la tercera nota */
let tnota

do {
    tnota = parseFloat(prompt("Por favor ingrese la tercera nota"));

    if (esEntreCero(tnota)) {
        alert('Su tercera nota es ' + tnota );
    } else {
        alert('Por favor ingrese un valor entre 0 y 10');
    } 
} while (!esEntreCero(tnota));

/* Imprime el promedio */
let apromedio;

function esCorrectoPromedio(input) {
    return input >=7 && input <=10;
}

do {
    apromedio = (pnota + snota + tnota) / 3;
    if (esCorrectoPromedio(apromedio)) {
        alert( nalumno + ' , ¡felicidades! Has aprobado con un promedio de ' + apromedio );
    } else {
        alert( nalumno + ' gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es ' + apromedio);
    } 
} while (!esCorrectoPromedio(apromedio));
