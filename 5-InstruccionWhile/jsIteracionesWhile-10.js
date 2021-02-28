/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	var sumaNegativos;
	var sumaPositivos;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCero;
	var contadorPares;
	var promedioPositivos;
	var promedioNegativos;
	var difencia;
	var numeroIngresado;
	var respuesta;

	contadorPositivos=0;
	contadorNegativos=0;
	contadorCero=0;
	contadorPares=0;
	respuesta="si";
	sumaPositivos=0;
      sumaNegativos=0;

	while(respuesta=="si")
	{
           numeroIngresado=prompt("Ingrese un numero");
           numeroIngresado=parseInt(numeroIngresado);
           while(isNaN(numeroIngresado)==true)
           {
      	     numeroIngresado=prompt("Error, ingrese un numero");
             numeroIngresado=parseInt(numeroIngresado);
           }
           if (numeroIngresado>0) 
           {
         	    sumaPositivos=sumaPositivos+numeroIngresado;
       	      contadorPositivos++;
       	      promedioPositivos=sumaPositivos/contadorPositivos;
           }else
           {
       	    if (numeroIngresado<0) 
       	    {
       		        sumaNegativos=sumaNegativos+numeroIngresado;
                  contadorNegativos++;
                  promedioNegativos=sumaNegativos/contadorNegativos;

       	     }else
       	     {
       		        contadorCero++;
       	     }
           }
           if (numeroIngresado%2==0) 
          {
              contadorPares++;
          }
           respuesta=prompt("si, para seguir ingresando numeros");

	}

      

      difencia=sumaPositivos/sumaNegativos;

	    document.write("<br>la suma de los positivos es: "+sumaPositivos);
	    document.write("<br>la cantidad de numeros positivos es: "+contadorPositivos);
      document.write("<br>el promedio de los positivos es: "+promedioPositivos);
      document.write("<br>la suma de los numeros negativos es: "+sumaNegativos);
      document.write("<br>la cantidad de numeros negativos es: "+contadorNegativos);
      document.write("<br>el promedio de los numeros negativos es: "+promedioNegativos);
      document.write("<br>la cantidad de ceros es :"+contadorCero);
      document.write("<br>la difencia entre los positivos y negativos: "+difencia);
      document.write("<br>la cantidad de numeros pares es: "+contadorPares);
}