//Declaracion de variables
let enterButton = document.getElementById("enter"); /*para el boton Agregar*/
let input = document.getElementById("input");
let ul = document.querySelector("ul");/*lista desordenada de li (ul)*/
let item = document.getElementsByTagName("li"); /* getElementByTagName: devuelve la lista de los li descendientes*/

// Retorna el valor tipeado (tareas) y la lista de elementos Li
function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

//Funcion para crear tareas
function createListElement() {
    let li = document.createElement("li"); /*crea el elemento li*/
	li.appendChild(document.createTextNode(input.value));  /* li: sus hijos en parentesis inputvalue, todas las tareas tipeadas*/ 
	ul.appendChild(li); /*ul elemento padre de li*/ 
	input.value = ""; 

    
  //Funcion para eliminar tareas
    function removeItem(e) {
        e.target.parentElement.removeChild(e.target); /*remueve los elementos hijos de Li*/
    }

	li.onclick = removeItem;
}

//Funciones para ingresar tareas mediante el click (agregar),y  con el boton enter
function addListAfterClick(){
	if (inputLength() > 0) {
		createListElement();   /* permite ingresar tareas a la lista mediante el click*/ 
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { 
		createListElement();
	} 
}    /*Permite ingresar tareas mediante el enter*/



enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

