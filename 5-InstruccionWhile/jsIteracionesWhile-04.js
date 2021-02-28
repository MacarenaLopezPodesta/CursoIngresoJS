/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
/*function mostrar()
{
	var numeroIngresado;

	while(isNaN(numeroIngresado)==true || numeroIngresado<0 || numeroIngresado>9)
	{
		numeroIngresado=prompt("Escriba un numero entre el 0 y el 9");
		numeroIngresado=parseInt(numeroIngresado);
	}
	console.log(numeroIngresado);
	
}//FIN DE LA FUNCIÓN
*/
/*WHILE

1. Ingresar 5 numeros, y determinar la cantidad de numeros que son mayores que 10 y menores 20 (incluisive en ambos casos)*/
/*function mostrar()
{
	var numeroIngresado;
	var contador;
	var contadorEntre10Y20;

	contador=0;
    contadorEntre10Y20=0;

	while(contador<5)
	{
		contador++;
		numeroIngresado=prompt("Ingrese un numero #"+contador);
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("Ingrese un numero #"+contador);
		    numeroIngresado=parseInt(numeroIngresado);
		}
        
        if (numeroIngresado>9 && numeroIngresado<21) 
        {
        	contadorEntre10Y20++;
        }
	}
    
    document.write("La cantidad de numeros mayor que 10 y menores que 20 es: " + contadorEntre10Y20);
}*/
/*Ingresar 5 numeros, y determinar la cantidad de numeros que son mayores que 10 y menores 20 (incluisive en ambos casos)
2. Mismo ejercicio, pero no se cuantos numeros se ingresan. (Lo decide el usuario). Mostrar tambien el promedio de los numeros que cumplen la condicion.
*/
function mostrar()
{
	var numeroIngresado;
	var contador;
	var contadorEntre10Y20;
	var respuesta;
	var acumuladorEntre10y20;
	var promedio;

	contador=0;
    contadorEntre10Y20=0;
    respuesta="si";
    acumuladorEntre10y20=0;

	while(respuesta=="si")
	{
		contador++;
		numeroIngresado=prompt("Ingrese un numero #"+contador);
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("Ingrese un numero #"+contador);
		    numeroIngresado=parseInt(numeroIngresado);
		}
        
        if (numeroIngresado>9 && numeroIngresado<21) 
        {
        	contadorEntre10Y20++;
        	acumuladorEntre10y20=acumuladorEntre10y20+numeroIngresado;
        }
        respuesta= prompt("si,para seguir ingresando numeros");
	}

    promedio=acumuladorEntre10y20/contadorEntre10Y20;
    document.write("La cantidad de numeros mayores que 10 y menores que 20 es: " + contadorEntre10Y20);
    document.write("El promedio de numeros mayores que 10 y menores que 20 es: " + promedio);
}
