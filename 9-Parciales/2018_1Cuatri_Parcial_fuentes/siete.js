/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/
function mostrar()
{
    var notasIngresadas;
    var sexoIngresado;
    var promedioNotas;
    var contadorNotas;
    var acumuladorNotas;
    var notaMasBaja;
    var sexoNotaMasBaja;
    var contadorVaronesNotas6;
    var banderaDelPrimero;
    var contador;

    contador=0;
    contadorNotas=0;
    acumuladorNotas=0;
    contadorVaronesNotas6=0;
    banderaDelPrimero="es el primero";

    while(contador<5)
    {
    	contador++;
    	notasIngresadas=prompt("Ingrese la nota #"+contador);
    	notasIngresadas=parseInt(notasIngresadas);
    	while(isNaN(notasIngresadas)==true || notasIngresadas>10 || notasIngresadas<0)
    	{
    		notasIngresadas=prompt("Error, ingrese la nota");
    	    notasIngresadas=parseInt(notasIngresadas);
    	}
    	sexoIngresado=prompt("Ingrese f o m segun el sexo");
    	while(sexoIngresado!="f" && sexoIngresado!="m")
    	{
    		sexoIngresado=prompt("Error, ingrese f o m segun el sexo")
    	}
    	contadorNotas++;
    	acumuladorNotas=acumuladorNotas+notasIngresadas;
    	if (banderaDelPrimero=="es el primero") 
    	{
           notaMasBaja=notasIngresadas;
           notaMasBaja=parseInt(notaMasBaja);
           sexoNotaMasBaja=sexoIngresado;

           banderaDelPrimero="no es el primero";
    	}else
    	{
    		if (notasIngresadas<notaMasBaja) 
    		{
    			notaMasBaja=notasIngresadas;
    			sexoNotaMasBaja=sexoIngresado;
    		}
    	}
    	if(sexoIngresado=="m" && notasIngresadas>5)
    	{
    		contadorVaronesNotas6++;
    	}
    }
    promedioNotas=acumuladorNotas/contadorNotas;
    alert("El promedio de las notas totales es: "+promedioNotas);
    alert("La nota más baja es " + notaMasBaja+"y el sexo de esa persona es "+sexoNotaMasBaja);
    alert("La cantidad de varones que su nota haya sido mayor o igual a 6 es "+contadorVaronesNotas6);

}
