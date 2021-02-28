//Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	//Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10

	var numeroRandom=Math.floor(Math.random() * 10) + 1;
	console.log("el random es: "+numeroRandom);
}//FIN DE LA FUNCIÓN