/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numeroIngresado;
	var contador;
	var acumulador;
	var promedio;
	var respuesta;

	contador=0;
	acumulador=0;
	respuesta="si";

	while(respuesta=="si")
	{
		contador++;
		numeroIngresado=prompt("Ingrese un numero #"+contador);
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("Error, ingrese un numero #"+contador);
		    numeroIngresado=parseInt(numeroIngresado);
		}
        respuesta=prompt("si para continuar ingresando numeros");
		acumulador=acumulador+numeroIngresado;
	}

   promedio=acumulador/contador;

   txtIdSuma.value=acumulador;
   txtIdPromedio.value=promedio;
}//FIN DE LA FUNCIÓN