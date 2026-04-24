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
    nota1 = parseInt( document.getElementById('primeraNota').value);
    nota2 = parseInt(document.getElementById('segundaNota').value);
    nota3 = parseInt( document.getElementById('terceraNota').value);
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


document.getElementById('btnMostrarTodo').addEventListener('click', ()=>{
    let divmt = document.getElementById('mt');
    let tabla = document.createElement('table');
    let primeraFila = document.createElement('tr');

    let thnom= document.createElement('th');
    thnom.textContent = "Nombre";
    primeraFila.appendChild(thnom);

    let thmat = document.createElement('th');
    thmat.textContent = "Materia";
    primeraFila.appendChild(thmat);

    let thnota1= document.createElement('th');
    thnota1.textContent = "Primera Nota";
    primeraFila.appendChild(thnota1);

    let thnota2= document.createElement('th');
    thnota2.textContent = "Segunda Nota";
    primeraFila.appendChild(thnota2);

    let thnota3= document.createElement('th');
    thnota3.textContent = "Tercera Nota";
    primeraFila.appendChild(thnota3);

    let thprom= document.createElement('th');
    thprom.textContent = "Promedio";
    primeraFila.appendChild(thprom);

    tabla.appendChild(primeraFila);
    divmt.appendChild(tabla);
    divmt.style.backgroundColor = 'green';
    divmt.style.border = '3';
    divmt.style.borderStyle = 'solid';

    Calificaciones.forEach(cali => {
        console.log(`${cali.alumno}, ${cali.materia}, ${cali.primeraNota}, ${cali.segundaNota}, ${cali.terceraNota}, ${cali.promedio}`);    
        let Filadetalle = document.createElement('tr');

        let tdnom= document.createElement('td');
        tdnom.textContent = cali.alumno;
        Filadetalle.appendChild(tdnom);

        let tdmat= document.createElement('td');
        tdmat.textContent = cali.materia;
        Filadetalle.appendChild(tdmat);

        let tdnota1= document.createElement('td');
        tdnota1.textContent = cali.primeraNota;
        Filadetalle.appendChild(tdnota1);

        let tdnota2= document.createElement('td');
        tdnota2.textContent = cali.segundaNota;
        Filadetalle.appendChild(tdnota2);

        let tdnota3 = document.createElement('td');
        tdnota3.textContent = cali.terceraNota;
        Filadetalle.appendChild(tdnota3);

        let tdprom= document.createElement('td');
        tdprom.textContent = cali.promedio;
        Filadetalle.appendChild(tdprom);
    })
})