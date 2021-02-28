// MACARENA LOPEZ PODESTA
/* 
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;

	nombre ="nadie";
	edad ="nadie";

	nombre = document.getElementById('txtIdNombre').value;  // Id
	edad = document.getElementById('txtIdEdad').value;      // Id

	alert("Usted se llama "+ nombre + " y tiene " + edad + " años "); 
     

}

/*bis :

Debemos lograr tomar nombre y edad por ID , apellido por prompt ,
y mostrarlos concatenados 
ej.: "Usted se llama José peres y tiene 66 años" 	*/

function mostrar()
{	
	var nombre;
	var edad;
	var apellido

	nombre ="nadie";
	edad ="nadie";
	apellido = "nadie";

	nombre = document.getElementById('txtIdNombre').value;  // Id
	edad = document.getElementById('txtIdEdad').value;      // Id
    apellido = prompt("ingrese su apellido: ","nadie"); 
    
	alert("Usted se llama "+ nombre + apellido " y tiene " + edad + " años ");  

}




