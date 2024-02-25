const numAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos:"));

if (isNaN(numAlumnos) || numAlumnos <= 0) {
    alert("Por favor, ingrese un número válido de alumnos.");
} else {
    let sumaCalificaciones = 0;


    for (let i = 1; i <= numAlumnos; i++) {
        const nombre = prompt(`Ingrese el nombre del alumno ${i}:`);
        const calificacion = parseFloat(prompt(`Ingrese la calificación de ${nombre}:`));

        
        if (isNaN(calificacion) || calificacion < 0 || calificacion > 10) {
            alert("Por favor, ingrese una calificación válida (entre 0 y 10).");
            i--;
        } else {
            sumaCalificaciones += calificacion;

            const mensaje = calificacion >= 6 ? "Aprobado. ¡Felicidades!" : "Reprobado. ¡Debes esforzarte más!";
            console.log(`${nombre}: ${calificacion.toFixed(2)} - ${mensaje}`);
        }
    }

    
    const promedioGeneral = sumaCalificaciones / numAlumnos;

    
    console.log(`Promedio Total General: ${promedioGeneral.toFixed(2)}`);
}
