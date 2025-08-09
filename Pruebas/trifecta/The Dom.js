// El html de un sitio web puede ser visto como un arbol

// desde el elemento raiz html, se crean dos ramas pricipales, head y body

// DOM significa object model

// En javascript podemos acceder a cualquiera de estos elementos con el objeto document

// el dom
console.log(document)

// querySelector(), podemos selecionar cualquier cosa de html con querySelector()

// Selecionado por el nombre
document.querySelector("p");

// Seleccionado por el nombre de clase
document.querySelector(".class-name");

// Seleccionado por el nombre id
document.querySelector("#id-name");


// tambien podemos acceder a el contenido de esas etiquetas con

document.querySelector("#id-name").innerHTML;

// imprimira lo que tiene dentro o podemos cambiar el contenido

document.querySelector("#id-name").innerHTML = "culo";


// con getElementById() y getElementByclassName()

// el class name nos regresa todas las incidencias que tengan ese nombre de clase,
// sio queremos seleccionar una sera con [indice] porque al usarlo con varias regresa un HTML colection(un array de elementos)

// innerText, contenido de texto renderizado dentro del elemento
// src, la fuente del elemento, osea imagen o link

// con ambos elementos al asiganrle el igual podemos cambiar sus valores