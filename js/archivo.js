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


document.getElementById('btnAgregar').addEventListener('click', ()=>{
    let nom, mat, nota1, nota2, nota3, prom;
    nom = document.getElementById('nom').value;
    mat = document.getElementById('materia').value;
    nota1 = document.getElementById('primeraNota').value;
    nota2 = document.getElementById('segundaNota').value;
    nota3 = document.getElementById('terceraNota').value;
    prom = (nota1 + nota2 + nota3) / 3;

    let unAlumno = {
            alumno: nom,
            materia: mat,
            primeraNota: nota1,
            segundaNota: nota2,
            terceraNota: nota3,
            promedio: prom   
    }

    Calificaciones.push(unAlumno);
    document.getElementById('nom').value = "";
    document.getElementById('materia').value = "";
    console.log(Calificaciones);
})