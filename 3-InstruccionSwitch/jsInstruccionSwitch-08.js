/*
Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
			alert("FRIO");
			break;

		case "Cataratas":
			alert("CALOR");
			break;

		case "Mar del plata":
			alert("CALOR");
			break;

		case "Ushuaia":
			alert("FRIO");
			break;

	}

}//FIN DE LA FUNCIÓN