"use strict"
//Local Storage
//localStorageEjecutar(); //guarda los datos en Aplication file:// del localStorage

const get_localStorage = () => { //Obtener y mostrar en consola el local storage

	if (localStorage.getItem("datos_de_usuario")) { //validar el localStorage

		localStorageEjecutar(); 
	// localStorage.getItem palabra reservada para obtener lo que está guardado en el localStorage.
	let mostrar_usuario = localStorage.getItem("datos_de_usuario");
	//JSON.parse() transformar los valores en formato json
	let mostrar_usuario_json = JSON.parse(localStorage.getItem("datos_de_usuario"));
	console.log(mostrar_usuario);
	console.log(mostrar_usuario_json);

	}else{ console.log('no hay valores en el localStorage'); }	
};

const localStorageEjecutar = () => { // Guarda el contenido de localStorage

	let usuario = {
		user: "ro@gmail.com",
		name: "Ramon Gonsalez",
		password: "123456"
	};

	//Para grabar en el localStorage, usar la siguiente expresion
	/*Para grabar el objeto usuario y poder mostrarlo hay que pasarlo por
	una funcion reservada JSON.stringify( nombreDelObjeto )*/
	localStorage.setItem( "datos_de_usuario", JSON.stringify( usuario ) );
	window.location.href = 'dashboard.html';
};

//Verificar si existe un usuario

if (localStorage.getItem("datos_de_usuario")) {
		window.location.href = 'dashboard.html';}
	document.getElementById('login').addEventListener("click", localStorageEjecutar);

get_localStorage();	