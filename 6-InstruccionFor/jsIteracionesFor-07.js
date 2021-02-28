/*
Enunciado:
al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.
*/
/*function mostrar()
{

	var contador;
    var numeroIngresado;
    var contadorDivisores;

    numeroIngresado=prompt("Ingrese un numero");
    numeroIngresado=parseInt(numeroIngresado);
    contadorDivisores=0;

    for (contador=0; contador<numeroIngresado; contador++) 
    {
    	if (numeroIngresado%contador==0 ) 
    	{
    		contadorDivisores++;
    		console.log("Numero divisor: "+contador);
    	}
    }
    console.log("la cantidad de numeros divisores encontrados es: "+contadorDivisores);



}//FIN DE LA FUNCI
*/
/*Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados        
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes.*/
function mostrar()
{   
    var contadorPaises;
    var continenteIngresado;
    var nombreDelPaisIngresado;
    var cantidadHabitantesIngresado;
    var nivelDePobresaIngresado;
    var temperaturaMinimaIngresada;
    var contadorTemperaturasPares;
    var contadorTemperaturasImparesEuropa;
    var contadorPaisesMas40Grados;
    var contadorPaisesAmericaMenos0Grados;
    var promedioHabitantes;
    var acumuladorHabitantes;
    var contadorHabitantes;
    var promedioPaisesMas40Grados;
    var acumuladorPaisesMas40Grados;
    var banderaPrimerTemperatura;
    var temperaturaMinima;
    var nombrePaisMinimo;
    var acumuladorHabitantesEuropa;
    var acumuladorHabitantesAsia;
    var acumuladorHabitantesAmerica;
    var acumuladorHabitantesAfrica;
    var acumuladorHabitantesOceania;
    var banderaPrimerPais;
    var continenteMasCantidad;

    contadorTemperaturasPares=0;
    contadorTemperaturasImparesEuropa=0;
    contadorPaisesMas40Grados=0;
    contadorPaisesAmericaMenos0Grados=0;
    acumuladorHabitantes=0;
    contadorHabitantes=0;
    promedioPaisesMas40Grados=0;
    acumuladorPaisesMas40Grados=0;
    banderaPrimerTemperatura=1;
    acumuladorHabitantesEuropa=0;
    acumuladorHabitantesAsia=0;
    acumuladorHabitantesAmerica=0;
    acumuladorHabitantesAfrica=0;
    acumuladorHabitantesOceania=0;
    banderaPrimerPais=1;

    for(contadorPaises=0;contadorPaises<5;contadorPaises++)
    {
        continenteIngresado=prompt("Ingrese un continente: america , asia , europa ,africa y oceania");
        while(isNaN(continenteIngresado)==false||continenteIngresado!="america"&& continenteIngresado!="asia"&& continenteIngresado!="europa"&& continenteIngresado!="oceania" && continenteIngresado!="africa")
        {
             continenteIngresado=prompt("ERROR.Ingrese un continente: america , asia , europa ,africa y oceania");
        }

        nombreDelPaisIngresado=prompt("Ingrese el nombre del pais");
        while(isNaN(nombreDelPaisIngresado)==false)
        {
            nombreDelPaisIngresado=prompt("ERROR.Ingrese el nombre del pais");
        }

        cantidadHabitantesIngresado=prompt("Ingrese la cantidad de habitantes entre 1 y 7000 millones");
        cantidadHabitantesIngresado=parseInt(cantidadHabitantesIngresado);
        while(isNaN(cantidadHabitantesIngresado)==true || cantidadHabitantesIngresado>7000 || cantidadHabitantesIngresado<1)
        {
            cantidadHabitantesIngresado=prompt("ERROR.Ingrese la cantidad de habitantes entre 1 y 7000 millones");
            cantidadHabitantesIngresado=parseInt(cantidadHabitantesIngresado);
        }
        acumuladorHabitantes=acumuladorHabitantes+cantidadHabitantesIngresado;
        contadorHabitantes++;
        //(pobre, rico , muy rico) en europa no hay paises pobre(validar)
        if (continenteIngresado=="europa") 
        {
           nivelDePobresaIngresado=prompt("Ingrese el nivel de pobresa: rico, muy rico");
           while(isNaN(nivelDePobresaIngresado)==false || nivelDePobresaIngresado!="rico" &&nivelDePobresaIngresado!="muy rico")
          {
            nivelDePobresaIngresado=prompt("ERROR.Ingrese el nivel de pobresa: rico, muy rico");
          } 
        }else
        {
            nivelDePobresaIngresado=prompt("Ingrese el nivel de pobresa: pobre, rico, muy rico");
            while(isNaN(nivelDePobresaIngresado)==false || nivelDePobresaIngresado!="pobre" && nivelDePobresaIngresado!="rico" &&nivelDePobresaIngresado!="muy rico")
          {
            nivelDePobresaIngresado=prompt("ERROR.Ingrese el nivel de pobresa: pobre, rico, muy rico");
          } 
        }
        //El nombre del pais con menos habitantes
        if (banderaPrimerPais==1 || cantidadHabitantesIngresado<cantidadMenosHabitantes) 
        {
            paisMenosHabitantes=nombreDelPaisIngresado;
            cantidadMenosHabitantes=cantidadHabitantesIngresado;
            banderaPrimerPais=0;
        }
        //la temperaruta mínima que se registra en su territorio(entre -50 y 50
        temperaturaMinimaIngresada=prompt("Ingrese la temperaruta mínima que se registra en su territorio entre -50 y 50");
        while(isNaN(temperaturaMinimaIngresada)==true || temperaturaMinimaIngresada<-50 || temperaturaMinimaIngresada>50)
        {
             temperaturaMinimaIngresada=prompt("ERROR.Ingrese la temperaruta mínima que se registra en su territorio entre -50 y 50");
        }
        temperaturaMinimaIngresada=parseFloat(temperaturaMinimaIngresada);
       
         if (temperaturaMinimaIngresada%2==0) 
         {
            contadorTemperaturasPares++;//a)La cantidad de temperaturas pares.
         } else
         {
            if (continenteIngresado=="europa") 
            {
               contadorTemperaturasImparesEuropa++;//b)la cantidad de temperaturas impares de europa
            }
          }
        //d)la cantidad de paises que superan los 40 grados.
        if (temperaturaMinimaIngresada>40) 
        {
           contadorPaisesMas40Grados++;
           acumuladorPaisesMas40Grados=acumuladorPaisesMas40Grados+cantidadHabitantesIngresado;
        }

        //e)la cantidad de paises de america que tienen menos de 0 grados .
        if (continenteIngresado=="america" && temperaturaMinimaIngresada<0) 
        {
            contadorPaisesAmericaMenos0Grados++;
        }

        //H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
        if (banderaPrimerTemperatura==1 || temperaturaMinimaIngresada<temperaturaMinima) 
        {
            temperaturaMinima=temperaturaMinimaIngresada;
            nombrePaisMinimo=nombreDelPaisIngresado;
            banderaPrimerTemperatura=0;
        }

        //i) que continente tiene mas habitantes.
        switch(continenteIngresado)
        {
            case "europa":
            acumuladorHabitantesEuropa=acumuladorHabitantesEuropa+cantidadHabitantesIngresado;
            break;

            case "asia":
            acumuladorHabitantesAsia=acumuladorHabitantesAsia+cantidadHabitantesIngresado;
            break;

            case "america":
            acumuladorHabitantesAmerica=acumuladorHabitantesAmerica+cantidadHabitantesIngresado;
            break;

            case "oceania":
            acumuladorHabitantesOceania=acumuladorHabitantesOceania+cantidadHabitantesIngresado;
            break;

            case "africa":
            acumuladorHabitantesAfrica=acumuladorHabitantesAfrica+cantidadHabitantesIngresado;
            break;
        }
             
    }
    if (acumuladorHabitantesEuropa>acumuladorHabitantesAfrica && acumuladorHabitantesEuropa>acumuladorHabitantesOceania && acumuladorHabitantesEuropa>acumuladorHabitantesAsia && acumuladorHabitantesEuropa>acumuladorHabitantesAmerica) 
    {
       continenteMasCantidad="europa";
    }else
    {
        if (acumuladorHabitantesAfrica>acumuladorHabitantesOceania && acumuladorHabitantesAfrica>acumuladorHabitantesAsia && acumuladorHabitantesAfrica>acumuladorHabitantesAmerica) 
        {
           continenteMasCantidad="africa"; 
        }else
        {
            if (acumuladorHabitantesOceania>acumuladorHabitantesAsia && cumuladorHabitantesOceania>acumuladorHabitantesAmerica) 
            {
                      continenteMasCantidad="oceania";
            }else
            {
               if (acumuladorHabitantesAmerica>acumuladorHabitantesAsia) 
               {
                   continenteMasCantidad="america";
               }else
               {
                   continenteMasCantidad="asia";
                }
            }
        }
    }

     //f)el promedio de habitantes entre los paises ingresados
     promedioHabitantes=acumuladorHabitantes/contadorHabitantes;
     //g)el promedio de habitantes entre los paises que superan los 40 grados
     promedioPaisesMas40Grados=acumuladorPaisesMas40Grados/contadorPaisesMas40Grados;
     
     console.log("La cantidad de temperaturas pares es: "+contadorTemperaturasPares);
     console.log("la cantidad de temperaturas impares de europa es: "+contadorTemperaturasImparesEuropa);
     console.log("El nombre del pais con menos habitantes es: "+paisMenosHabitantes);
     console.log("la cantidad de paises que superan los 40 grados es: "+contadorPaisesMas40Grados);
     console.log("la cantidad de paises de america que tienen menos de 0 grados es: "+contadorPaisesAmericaMenos0Grados);
     console.log("el promedio de habitantes entre los paises ingresados es: "+promedioHabitantes);
     console.log("el promedio de habitantes entre los paises que superan los 40 grados es: "+promedioPaisesMas40Grados);        
     console.log("la temperatura mínima ingresada es "+temperaturaMinima+", y nombre del pais que registro esa temperatura es "+nombrePaisMinimo); 
     console.log("El continente que tiene mas habitantes es "+continenteMasCantidad);
}