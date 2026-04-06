# Sistema de Gestión de Calificaciones (JavaScript & Python)

Este proyecto consiste en un sistema de gestión de alumnos y sus calificaciones, desarrollado en JavaScript (Node.js) y Python. Permite cargar, modificar y visualizar información académica utilizando estructuras de datos dinámicas (matrices multidimensionales).

---

## Objetivo

El objetivo principal es aplicar el manejo de estructuras complejas (listas/matrices anidadas), junto con la interacción por consola, validaciones y procesamiento de datos.

---

## Estructura de Datos

El sistema utiliza una matriz principal de alumnos, donde cada alumno contiene una lista de materias con sus respectivas notas:

```
[
  ['NombreAlumno', [
      ['Materia1', Nota],
      ['Materia2', Nota]
  ]]
]
```

Ejemplo:

```
[
  ['Juan', [['Matemática', 8], ['Lengua', 7]]],
  ['Ana', [['Historia', 9], ['Biología', 10]]]
]
```

---

## Funcionalidades

El sistema incluye las siguientes funcionalidades:

### 1. Carga dinámica
- Todos los datos se ingresan por consola.
- No existen datos precargados.

### 2. Visualización de datos
- Muestra todos los alumnos registrados.
- Lista sus materias junto con las notas.

### 3. Gestión de alumnos
- Permite agregar nuevos alumnos.
- Valida que no se repitan nombres.

### 4. Gestión de notas
- Agregar nuevas materias a un alumno.
- Modificar la nota de una materia existente.

### 5. Cálculo de promedios (Bonus)
- Calcula automáticamente el promedio de cada alumno.

### 6. Ordenamiento (Bonus)
- Muestra los alumnos ordenados de mayor a menor promedio.

### 7. Mejor promedio (Bonus)
- Identifica al alumno con mejor rendimiento académico.

---

## Estructura del Proyecto

```
MANEJO-DE-MATRICES-MULTIDIMENSIONALES-SEMINARIO/
│
├── node_modules/
├── .gitignore
├── main.js
├── main.py
├── package.json
├── package-lock.json
└── README.md
```

---

## Instrucciones de Ejecución

---

## 1. Versión JavaScript (Node.js)

### Requisitos
- Tener instalado Node.js (versión LTS recomendada).
- Tener acceso a una terminal.

---

### Instalación de dependencias

1. Abrir la terminal en la carpeta del proyecto.
2. Ejecutar:

```bash
npm install
```

Esto instalará automáticamente las dependencias definidas en `package.json` (incluyendo readline-sync).

---

### Ejecución del programa

Ejecutar el siguiente comando:

```bash
node main.js
```

---

### Uso del sistema

- El programa se ejecuta en consola.
- Se mostrará un menú interactivo.
- Seguir las instrucciones para:
  - Agregar alumnos
  - Cargar o modificar notas
  - Visualizar datos
  - Ver promedios

---

## 2. Versión Python

### Requisitos
- Tener instalado Python 3.

---

### Ejecución del programa

1. Abrir la terminal en la carpeta del proyecto.
2. Ejecutar:

```bash
python main.py
```

---

### Uso del sistema

- Funciona completamente por consola.
- Permite realizar las mismas operaciones que la versión en JavaScript.
- Seguir las instrucciones en pantalla.

---

## Tecnologías utilizadas

- JavaScript (Node.js)
- Python 3
- Librería readline-sync

---

## Consideraciones

- Los nombres de alumnos no deben repetirse.
- Las notas deben ser numéricas.
- El sistema no posee interfaz gráfica, funciona únicamente en consola.

---

## Autor

Trabajo práctico realizado por:  
Fabricio Dario NIcolas Augusto