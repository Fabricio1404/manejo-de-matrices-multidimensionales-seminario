const readline = require('readline-sync');

function main() {
    let alumnos = [];

    let salir = false;

    while (!salir) {
        console.log("\n--- SISTEMA DE GESTION DE CALIFICACIONES ---");
        console.log("1. Ver alumnos");
        console.log("2. Agregar alumno");
        console.log("3. Agregar o modificar notas");
        console.log("4. Ver mejor promedio");
        console.log("5. Salir");

        let opcion = readline.question("Seleccione una opcion: ");

        switch (opcion) {
            case '1':
                if (alumnos.length === 0) {
                    console.log("\nNo hay alumnos registrados todavia.");
                } else {
                    console.log("\n--- LISTADO DE ALUMNOS ---");
                    // Ordenamos por promedio antes de mostrar
                    alumnos.sort((a, b) => {
                        let promA = a[1].reduce((sum, m) => sum + m[1], 0) / a[1].length;
                        let promB = b[1].reduce((sum, m) => sum + m[1], 0) / b[1].length;
                        return promB - promA;
                    });

                    alumnos.forEach(alumno => {
                        let suma = 0;
                        alumno[1].forEach(m => suma += m[1]);
                        let promedio = (suma / alumno[1].length).toFixed(2);

                        console.log(`\nAlumno: ${alumno[0]} | Promedio: ${promedio}`);
                        alumno[1].forEach(m => {
                            console.log(`  - ${m[0]}: ${m[1]}`);
                        });
                    });
                }
                break;

            case '2':
                console.log("\n--- REGISTRAR NUEVO ALUMNO ---");
                let nombreNuevo = readline.question("Nombre del alumno: ");
                
                // Validacion: No permitir nombres vacios ni duplicados
                if (!nombreNuevo) {
                    console.log("Error: El nombre no puede estar vacio.");
                    break;
                }

                let existe = alumnos.find(a => a[0].toLowerCase() === nombreNuevo.toLowerCase());

                if (existe) {
                    console.log("Aviso: El alumno ya existe. Use la opcion 3 para agregar materias.");
                } else {
                    let mat = readline.question("Ingrese la primera materia: ");
                    let nota = parseInt(readline.question(`Nota de ${mat}: `));
                    
                    if (!isNaN(nota) && nota >= 0 && nota <= 10) {
                        // Estructura: [Nombre, [[Materia, Nota]]]
                        alumnos.push([nombreNuevo, [[mat, nota]]]);
                        console.log("Alumno registrado con exito.");
                    } else {
                        console.log("Error: La nota debe ser un numero entre 0 y 10.");
                    }
                }
                break;

            case '3':
                console.log("\n--- GESTION DE MATERIAS Y NOTAS ---");
                let nombreB = readline.question("Nombre del alumno a buscar: ");
                let alu = alumnos.find(a => a[0].toLowerCase() === nombreB.toLowerCase());

                if (!alu) {
                    console.log("Error: El alumno no esta registrado.");
                } else {
                    let materiaB = readline.question("Nombre de la materia: ");
                    let notaB = parseInt(readline.question("Nota: "));

                    if (!isNaN(notaB) && notaB >= 0 && notaB <= 10) {
                        let listaMaterias = alu[1];
                        let matExiste = listaMaterias.find(m => m[0].toLowerCase() === materiaB.toLowerCase());

                        if (matExiste) {
                            matExiste[1] = notaB; // Modifica nota
                            console.log("Nota actualizada correctamente.");
                        } else {
                            listaMaterias.push([materiaB, notaB]); // Agrega materia nueva
                            console.log("Nueva materia agregada al alumno.");
                        }
                    } else {
                        console.log("Error: Nota no valida.");
                    }
                }
                break;

            case '4':
                if (alumnos.length === 0) {
                    console.log("\nNo hay datos para calcular el mejor promedio.");
                } else {
                    let mejorAlu = alumnos[0];
                    let maxProm = 0;

                    alumnos.forEach(a => {
                        let prom = a[1].reduce((sum, m) => sum + m[1], 0) / a[1].length;
                        if (prom > maxProm) {
                            maxProm = prom;
                            mejorAlu = a;
                        }
                    });
                    console.log(`\nEl mejor promedio actual es de ${mejorAlu[0]} con ${maxProm.toFixed(2)}`);
                }
                break;

            case '5':
                console.log("Saliendo del sistema...");
                salir = true;
                break;

            default:
                console.log("Opcion no valida.");
        }
    }
}

main();