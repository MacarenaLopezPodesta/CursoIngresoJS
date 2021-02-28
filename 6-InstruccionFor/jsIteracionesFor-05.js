/*
Enunciado:
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
*/
function mostrar()
{
    var contador;
    var repeticiones;

    repeticiones=prompt("Ingrese repeticiones");
    repeticiones=parseInt(repeticiones);

    for (contador=0; contador<repeticiones; contador++) 
    {
    	console.log(contador);
    	if (contador==9) 
    	{
    		break;
    	}
    }


}//FIN DE LA FUNCIÓN