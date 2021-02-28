/*
Enunciado:
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
*/
/*
function mostrar()
{
    var numeroIngresado;
	var contador;
	var contadorDivisores;
    
    contadorDivisores=0;
	numeroIngresado=prompt("ingrese numero a verificar");
	numeroIngresado=parseInt(numeroIngresado);

	for(contador=numeroIngresado-1;contador>1;contador--)
	{
		if(numeroIngresado%contador==0)
		{
			contadorDivisores++;
		}
	}

	if (contadorDivisores>0) 
	{
        console.log("No es primo");
	}else
	{
		console.log("Es primo");
	}
}//FIN DE LA FUNCIÓN*/
//For 9 bis( pedir 10 numeros , informar el mayor de los negativos y el menor de los pares)
/*function mostrar()
{
   var numeroIngresado;
   var contador;
   var mayorNumeroNegativo;
   var menorNumeroPar;
   var banderaDelPrimerNumeroPar;
   var banderaDelPrimerNumeroNegativo;

   contador=0;
   banderaDelPrimerNumeroPar=1;
   banderaDelPrimerNumeroNegativo=1;
   
   for (contador=0;contador<10;contador++) 
   {

   	 numeroIngresado=prompt("Ingrese un numero");
     numeroIngresado=parseInt(numeroIngresado);
    
     while(isNaN(numeroIngresado)==true)
    {
   	  numeroIngresado=prompt("Error. Ingrese un numero");
      numeroIngresado=parseInt(numeroIngresado);
    }
   	 if (numeroIngresado%2==0) 
   	 {
         if (banderaDelPrimerNumeroPar==1)
         {
         	menorNumeroPar=numeroIngresado;
         	banderaDelPrimerNumeroPar=0;
         }else
         {
         	if (numeroIngresado<menorNumeroPar) 
         	{
         		menorNumeroPar=numeroIngresado;
         	}
         }
   	 }

   	 if (numeroIngresado<0) 
   	 {
   	 	if (banderaDelPrimerNumeroNegativo==1) 
   	 	{
   	 		mayorNumeroNegativo=numeroIngresado;
   	 		banderaDelPrimerNumeroNegativo=0;
   	 	}else
   	 	{
   	 		if (numeroIngresado>mayorNumeroNegativo) 
   	 		{
   	 			mayorNumeroNegativo=numeroIngresado;
   	 		}
   	 	}

   	 }
   }
   if (banderaDelPrimerNumeroNegativo==1) 
   {
   	 console.log("no hay numeros negativos");
   }
   else
   {
   	 console.log("el mayor de los negativos es: "+mayorNumeroNegativo);
   }
   if (banderaDelPrimerNumeroPar==1) 
   {
   	 console.log("no hay numeros pares");
   }else
   {
   	  console.log("el menor de los numeros par es: "+menorNumeroPar);
   }
   
}*/
//For 10 (a 5 personas nombre , sexo ,edad(validar que solo sean hombres no mayores a 12 y que las mujeres sean mayores de edad), altura(rangos que quiera))
/*function mostrar()
{
    var contadorPersonas;
    var nombreIngresado;
    var sexoIngresado;
    var edadIngresada;
    var alturaIngresada;

    contadorPersonas=0;

    for (contadorPersonas=0;contadorPersonas<5;contadorPersonas++) 
    {
    	nombreIngresado=prompt("Ingrese su nombre ");
    	while(isNaN(nombreIngresado)==false)
    	{
           nombreIngresado=prompt("ERROR. Ingrese su nombre #");
    	}

    	sexoIngresado=prompt("Ingrese f o m segun su sexo");
    	while(isNaN(sexoIngresado)==false || sexoIngresado!="m" && sexoIngresado!= "f")
    	{
           sexoIngresado=prompt("ERROR. Ingrese f o m segun su sexo");
    	}

    	edadIngresada=prompt("Ingrese su edad");
    	edadIngresada=parseInt(edadIngresada);
    	while(isNaN(edadIngresada)==true||(sexoIngresado!="m"||edadIngresada>12) && (sexoIngresado!="f"||edadIngresada<18))
    	{
           edadIngresada=prompt("ERROR. Ingrese su edad");
           edadIngresada=parseInt(edadIngresada);
    	}

    	alturaIngresada=prompt("Ingrese su altura");
    	alturaIngresada=parseFloat(alturaIngresada);
    	while(isNaN(alturaIngresada)==true || alturaIngresada<1)
    	{
           alturaIngresada=prompt("ERROR. Ingrese su altura");
           alturaIngresada=parseFloat(alturaIngresada);
    	}

    	console.log("nombre: "+nombreIngresado );
    	console.log("sexo: "+sexoIngresado);
    	console.log("edad: "+edadIngresada);
        console.log("altura: "+alturaIngresada)
    }
}*/
//For 11 (a 5 personas nombre , sexo ,edad(validar que solo sean hombres no mayores a 12 y que las mujeres sean ADOLESCENTES), altura(rangos que quiera)) ... informar el sexo y nombre de la persona mas alta
//For 12 (lo anterior mas..--de las mujeres el nombre de la mas joven ,--de los hombre el nombre del mas bajito , ... solo si los hay
//For 13 ( o anterior mas ...el promedio de edad entre los hombre ,el promedio de edad entre las mujeres, la cantidad de personas que miden mas de 1,60 metros, y el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts
function mostrar()
{
	var contadorPersonas;
    var nombreIngresado;
    var sexoIngresado;
    var edadIngresada;
    var alturaIngresada;
    var sexoPersonaMasAlta;
    var nombrePersonaMasAlta;
    var banderaDePrimerPersona;
    var alturaMasAlta;
    var nombreMujerMasJoven;
    var nombreHombreMasBajo;
    var banderaPrimerHombre;
    var banderaPrimerMujer;
    var edadMujerMasJoven;
    var alturaHombreMasBajo;
    var acumuladorEdadHombre;
    var contadorEdadHombre;
    var acumuladorEdadMujer;
    var contadorEdadMujer;
    var promedioEdadMujer;
    var promedioEdadHombre;
    var contadorPersonasMas160cm;
    var contadorMujerMas160cm;
    var porcentajeMujeresMas160cm;
    var cuenta;

    contadorPersonas=0;
    banderaDePrimerPersona=1;
    banderaPrimerMujer=1;
    banderaPrimerHombre=1;
    acumuladorEdadHombre=0;
    contadorEdadHombre=0;
    acumuladorEdadMujer=0;
    contadorEdadMujer=0;
    contadorPersonasMas160cm=0;
    contadorMujerMas160cm=0;
    porcentajeMujeresMas160cm=0;

    for (contadorPersonas=0;contadorPersonas<5;contadorPersonas++) 
    {
    	nombreIngresado=prompt("Ingrese su nombre ");
    	while(isNaN(nombreIngresado)==false)
    	{
           nombreIngresado=prompt("ERROR. Ingrese su nombre #");
    	}

      sexoIngresado=prompt("Ingrese f o m segun su sexo");
      while(isNaN(sexoIngresado)==false || sexoIngresado!="m" && sexoIngresado!= "f")
      {
           sexoIngresado=prompt("ERROR. Ingrese f o m segun su sexo");
      }

    	edadIngresada=prompt("Ingrese su edad");
    	edadIngresada=parseInt(edadIngresada);
    	while(isNaN(edadIngresada)==true||(sexoIngresado!="m"||edadIngresada>13) && (sexoIngresado!="f"||edadIngresada>17||edadIngresada<12))
    	{
           edadIngresada=prompt("ERROR. Ingrese su edad");
           edadIngresada=parseInt(edadIngresada);
    	}

    	alturaIngresada=prompt("Ingrese su altura");
    	while(isNaN(alturaIngresada)==true || alturaIngresada<1)
    	{
           alturaIngresada=prompt("ERROR. Ingrese su altura");
    	}
      alturaIngresada=parseFloat(alturaIngresada);

       //la cantidad de personas que miden mas de 1,60 metros, y el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts
      if (alturaIngresada>1.6) 
      {
        contadorPersonasMas160cm++;
      }

        //informar el sexo y nombre de la persona mas alta
        if (banderaDePrimerPersona==1 || (alturaIngresada>alturaMasAlta)) 
        {
           alturaMasAlta=alturaIngresada;
           sexoPersonaMasAlta=sexoIngresado;
           nombrePersonaMasAlta=nombreIngresado;
           banderaDePrimerPersona=0;
        }
        //de las mujeres el nombre de la mas joven 
        if (sexoIngresado=="f") 
        {
          if (alturaIngresada>1.6) 
          {
             contadorMujerMas160cm++;
          }
          contadorEdadMujer++;
          acumuladorEdadMujer=acumuladorEdadMujer+edadIngresada;
          if (banderaPrimerMujer==1 || (edadIngresada<edadMujerMasJoven)) 
          {
            edadMujerMasJoven=edadIngresada;
            nombreMujerMasJoven=nombreIngresado;
            banderaPrimerMujer=0;
          }
        }else//de los hombre el nombre del mas bajito
        {
            contadorEdadHombre++;
            acumuladorEdadHombre=acumuladorEdadHombre+edadIngresada;
            if (banderaPrimerHombre==1 || alturaIngresada<alturaHombreMasBajo) 
            {
               alturaHombreMasBajo=alturaIngresada;
               nombreHombreMasBajo=nombreIngresado;
               banderaPrimerHombre=0;
            }
        }        
    }
    //el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts
    cuenta=contadorMujerMas160cm*100;
    porcentajeMujeresMas160cm=cuenta/contadorPersonasMas160cm;
    //el promedio de edad entre los hombre ,el promedio de edad entre las mujeres
    promedioEdadMujer=acumuladorEdadMujer/contadorEdadMujer;
    promedioEdadHombre=acumuladorEdadHombre/contadorEdadHombre;

    console.log("El sexo de la persona mas alta es: "+sexoPersonaMasAlta);
    console.log("El nombre de la persona mas alta es :"+nombrePersonaMasAlta);
    if (banderaPrimerMujer==1) 
    {
      console.log("No hay mujeres");
    }else
    {
      console.log("La mujer mas joven se llama: "+nombreMujerMasJoven);
      console.log("El promedio de edad entre las mujeres es: "+promedioEdadMujer);
      console.log("el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts es: "+porcentajeMujeresMas160cm+"%");
  
    }
    if (banderaPrimerHombre==1) 
    {
      console.log("No hay hombres");
    }else
    {
      console.log("El hombre mas bajito se llama: "+nombreHombreMasBajo);
      console.log("El promedio de edad entre los hombres es: "+promedioEdadHombre);
    }
    console.log("la cantidad de personas que mide 1.60metros es: "+contadorPersonasMas160cm);

}
