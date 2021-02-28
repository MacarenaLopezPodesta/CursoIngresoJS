/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
*/
function mostrar()
{
	var letraIngresada;
	var numeroIngresado;
	var respuesta;
	var contadorPar;
    var contadorImpar;
    var contadorCeros;
    var promedioPositivos;
    var contadorPositivos;
    var acumuladorPositivos;
    var acumuladorNegativos;
    var numeroMaximo;
    var numeroMinimo;
    var letraMaxima;
    var letraMinima;
    var banderaDelPrimero;

    banderaDelPrimero="es el primero";
	respuesta="si";
    contadorPar=0;
    contadorImpar=0;
    contadorCeros=0;
    contadorPositivos=0;
    acumuladorNegativos=0;
    acumuladorPositivos=0;

    while(respuesta=="si")
    {
        letraIngresada=prompt("Ingrese una letra");

	    numeroIngresado=prompt("Ingrese un numero");
	    numeroIngresado=parseInt(numeroIngresado);	    
	    while(isNaN(numeroIngresado)==true || numeroIngresado>100 || numeroIngresado<-100)
	    {
		  numeroIngresado=prompt("Ingrese un numero entre -100 y 100");
		  numeroIngresado=parseInt(numeroIngresado);
	    }

        if (banderaDelPrimero=="es el primero") 
        {
        	numeroMaximo=numeroIngresado;
        	numeroMaximo=parseInt(numeroMaximo);
        	letraMaxima=letraIngresada;
        	numeroMinimo=numeroIngresado;
        	numeroMinimo=parseInt(numeroMinimo);
        	letraMinima=letraIngresada;

        	banderaDelPrimero="no es el primero";
        }else
        {
        	if (numeroIngresado>numeroMaximo) 
        	{
        		numeroMaximo=numeroIngresado;
        		letraMaxima=letraIngresada;
        	}
        	if (numeroIngresado<numeroMinimo) 
        	{
        		numeroMinimo=numeroIngresado;
        		letraMinima=letraIngresada;
        	}
        }


	    if (numeroIngresado%2==0) 
	    {
	    	contadorPar++;
	    }
	    else
	    {
	    	if (numeroIngresado%2==1) 
	    	{
               contadorImpar++;
	    	}
	    }

	    if (numeroIngresado>0) 
	    {
	    	contadorPositivos++;
	    	acumuladorPositivos=acumuladorPositivos+numeroIngresado;
	    }else
	    {
            if (numeroIngresado<0) 
	        {
	    	  acumuladorNegativos=acumuladorNegativos+numeroIngresado;
	        }else
	        {
	        	contadorCeros++;
	        }
	    }
	    
	    respuesta=prompt("si, para seguir ingresando datos");
    }

	promedioPositivos=acumuladorPositivos/contadorPositivos;
    
    document.write("<br>La cantidad de números pares es: "+contadorPar);
    document.write("<br>La cantidad de números impares es: "+contadorImpar);
    document.write("<br>La cantidad de ceros es: "+contadorCeros);
    document.write("<br>El promedio de todos los números positivos ingresados es de: "+promedioPositivos);
    document.write("<br>La suma de todos los números negativos es de: "+acumuladorNegativos);
    document.write("<br>El número máximo es:"+numeroMaximo);
    document.write(" y la letra del numero maximo es: "+letraMaxima);
    document.write("<br>El numero minimo es: "+numeroMinimo);
    document.write(" y la letra del numero minimo es: "+letraMinima);
}

