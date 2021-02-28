/*Enunciado:
al presionar el botón repetir hasta que utilizamos 'BREAK'.
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
    	if (contador==5) 
    	{
    		break;
    	}
    }
}//FIN DE LA FUNCIÓN