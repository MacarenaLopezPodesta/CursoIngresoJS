
/*
Enunciado:
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.
*/
function mostrar()
{
	var contador;
    var numeroIngresado;
    var contadorPares;

    numeroIngresado=prompt("Ingrese un numero");
    numeroIngresado=parseInt(numeroIngresado);
    contadorPares=0;

    for (contador=0; contador<numeroIngresado; contador++) 
    {
    	if (contador%2==0 ) 
    	{
    		contadorPares++;
    		console.log("Numero par: "+contador);
    	}
    }
    console.log("la cantidad de numeros pares encontrados es: "+contadorPares);



}//FIN DE LA FUNCIÓN