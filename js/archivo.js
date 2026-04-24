let Calificaciones = [
    {
        alumno: "José",
        materia: "Matemáticas",
        primeraNota: 5,
        segundaNota: 7,
        terceraNota: 7,
        promedio: 9
    },
];

let nom, mat, nota1, nota2, nota3, prom;
let unAlumno = {
        alumno: nom,
        materia: mat,
        primeraNota: nota1,
        segundaNota: nota2,
        terceraNota: nota3,
        promedio: prom   
}

document.getElementById('Rojo').addEventListener('mouseover', ()=>{
    let cuerpo = document.getElementById('micuerpo');
    cuerpo.style.backgroundColor = 'red';
});

document.getElementById('Azul').addEventListener('mouseover', ()=>{
    let cuerpo = document.getElementById('micuerpo');
    cuerpo.style.backgroundColor = 'blue';
});

document.getElementById('Amarillo').addEventListener('mouseover', ()=>{
    let cuerpo = document.getElementById('micuerpo');
    cuerpo.style.backgroundColor = 'yellow';
});
