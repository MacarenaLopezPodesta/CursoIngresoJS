/*Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
    var promedio;

    contador=0;
    acumulador=0;

    while(contador<5)
    {   
    	contador++;
    	numeroIngresado=prompt("Ingrese un numero #"+contador);
    	numeroIngresado=parseInt(numeroIngresado);
    	while(isNaN(numeroIngresado)==true)
    	{
    		numeroIngresado=prompt("Error, ingrese un numero #"+contador);
    		numeroIngresado=parseInt(numeroIngresado);
    	}
    	acumulador=acumulador+numeroIngresado;
    }
    
    promedio=acumulador/contador;

    txtIdSuma.value=acumulador;
    txtIdPromedio.value=promedio;
}//FIN DE LA FUNCIÓN