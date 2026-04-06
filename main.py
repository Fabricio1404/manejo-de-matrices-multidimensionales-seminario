def calcular_promedio(materias):
    if not materias:
        return 0
    suma = sum(m[1] for m in materias)
    return suma / len(materias)

def main():
    alumnos = []

    while True:
        print("\n--- SISTEMA DE GESTION DE CALIFICACIONES (PYTHON) ---")
        print("1. Ver alumnos (Ordenados por promedio)")
        print("2. Agregar alumno")
        print("3. Agregar o modificar notas")
        print("4. Ver mejor promedio (Bonus)")
        print("5. Salir")

        opcion = input("Seleccione una opcion: ")

        if opcion == '1':
            if not alumnos:
                print("\nNo hay alumnos registrados todavia.")
            else:
                print("\n--- LISTADO DE ALUMNOS ---")
                alumnos.sort(key=lambda a: calcular_promedio(a[1]), reverse=True)

                for alumno in alumnos:
                    nombre = alumno[0]
                    materias = alumno[1]
                    promedio = calcular_promedio(materias)
                    
                    print(f"\nAlumno: {nombre} | Promedio: {promedio:.2f}")
                    for mat in materias:
                        print(f"  - {mat[0]}: {mat[1]}")

        elif opcion == '2':
            print("\n--- REGISTRAR NUEVO ALUMNO ---")
            nombre_nuevo = input("Nombre del alumno: ").strip()
            
            if not nombre_nuevo:
                print("Error: El nombre no puede estar vacio.")
                continue

            # Validar si existe
            existe = any(a[0].lower() == nombre_nuevo.lower() for a in alumnos)

            if existe:
                print("Aviso: El alumno ya existe. Use la opcion 3.")
            else:
                materia = input("Ingrese la primera materia: ")
                try:
                    nota = int(input(f"Nota de {materia}: "))
                    if 0 <= nota <= 10:
                        # Estructura: [Nombre, [[Materia, Nota]]]
                        alumnos.append([nombre_nuevo, [[materia, nota]]])
                        print("Alumno registrado con exito.")
                    else:
                        print("Error: La nota debe estar entre 0 y 10.")
                except ValueError:
                    print("Error: Debe ingresar un numero entero para la nota.")

        elif opcion == '3':
            print("\n--- GESTION DE MATERIAS Y NOTAS ---")
            nombre_b = input("Nombre del alumno a buscar: ").strip()
            
            # Buscar el alumno en la matriz
            alumno_encontrado = next((a for a in alumnos if a[0].lower() == nombre_b.lower()), None)

            if not alumno_encontrado:
                print("Error: El alumno no esta registrado.")
            else:
                materia_b = input("Nombre de la materia: ")
                try:
                    nota_b = int(input("Nota: "))
                    if 0 <= nota_b <= 10:
                        lista_materias = alumno_encontrado[1]
                        # Buscar si la materia ya existe para ese alumno
                        materia_existe = next((m for m in lista_materias if m[0].lower() == materia_b.lower()), None)

                        if materia_existe:
                            materia_existe[1] = nota_b  # Modificar
                            print("Nota actualizada correctamente.")
                        else:
                            lista_materias.append([materia_b, nota_b])  # Agregar
                            print("Nueva materia agregada al alumno.")
                    else:
                        print("Error: Nota fuera de rango (0-10).")
                except ValueError:
                    print("Error: Entrada de nota invalida.")

        elif opcion == '4':
            if not alumnos:
                print("\nNo hay datos cargados.")
            else:
                # Encontrar el mejor promedio usando la funcion auxiliar
                mejor_alu = max(alumnos, key=lambda a: calcular_promedio(a[1]))
                print(f"\nEl mejor promedio es de {mejor_alu[0]} con {calcular_promedio(mejor_alu[1]):.2f}")

        elif opcion == '5':
            print("Saliendo del sistema...")
            break
        else:
            print("Opcion no valida.")

if __name__ == "__main__":
    main()