//Local Storage
//localStorageEjecutar(); //guarda los datos en Aplication file:// del localStorage
get_localStorage();


function get_localStorage(){ //Obtener y mostrar en consola el local storage

	if (localStorage.getItem("datos_de_usuario")) { //validar el localStorage

		localStorageEjecutar(); 
	// localStorage.getItem palabra reservada para obtener lo que está guardado en el localStorage.
	var mostrar_usuario = localStorage.getItem("datos_de_usuario");
	//JSON.parse() transformar los valores en formato json
	var mostrar_usuario_json = JSON.parse(localStorage.getItem("datos_de_usuario"));
	console.log(mostrar_usuario);
	console.log(mostrar_usuario_json);

	}else{
		console.log('no hay valores en el localStorage');
	}

	
}

function localStorageEjecutar(){ // Guarda el contenido de localStorage

	let usuario = {
		user: "ro@gmail.com",
		name: "Ramon Gonsalez",
		password: "123456"
	};


	//let usuariodeEjemplo = "ga@gmail.com"

	//Para grabar en el localStorage, usar la siguiente expresion
	/*Para grabar el objeto usuario y poder mostrarlo hay que pasarlo por
	una funcion reservada JSON.stringify( nombreDelObjeto )*/
	localStorage.setItem( "datos_de_usuario", JSON.stringify( usuario ) );
	window.location.href = 'dasboard.html';
}
	
