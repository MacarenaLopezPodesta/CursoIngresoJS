/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresado;
	var multiplicarNegativos;
	var sumarPositivos;
	var contador;
    var respuesta;

    contador=0;
    multiplicarNegativos=1;
    sumarPositivos=0;
    respuesta="si";

    while(respuesta=="si")
    {
       contador++;
       numeroIngresado=prompt("Ingrese un numero");
       numeroIngresado=parseInt(numeroIngresado);
       while(isNaN(numeroIngresado)==true)
       {
       	numeroIngresado=prompt("error, ingrese un numero");
        numeroIngresado=parseInt(numeroIngresado);
       }
        if (numeroIngresado<0) 
        {
        	multiplicarNegativos=multiplicarNegativos*numeroIngresado;
        }
        if (numeroIngresado>0)
        {
        	sumarPositivos=sumarPositivos+numeroIngresado;
        }
        respuesta=prompt("si para seguir ingresando numeros");
    }

    txtIdSuma.value=sumarPositivos;
    txtIdProducto.value=multiplicarNegativos;

}//FIN DE LA FUNCIÓN