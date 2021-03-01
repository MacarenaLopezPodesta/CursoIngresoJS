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
/*function mostrar()
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
             //e)la cantidad de paises de america que tienen menos de 0 grados .
             if ( temperaturaMinimaIngresada<0) 
             {
                contadorPaisesAmericaMenos0Grados++;
             }
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
}*/
/*Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano
*/
function mostrar()
{
    var respuesta;
    var tipoIngresado;
    var pelajeIngresado;
    var edadIngresada;
    var nombreIngresado;
    var razaIngresada;
    var pesoIngresado;
    var estadoClinico;
    var temperarutaCorporalIngresada;
    var perroMasPesado;
    var nombrePerroMasPesado;
    var contadorEnfermos;
    var nombreUltimoOtraCosa;
    var temperaturaMinima;
    var nombreTemperaturaMinima;
    var benderaPrimerSinPelo;
    var contadorPerro;
    var contadorGato;
    var contadorOtraCosa;
    var acumuladorTempPerro;
    var acumuladorTempGato;
    var acumuladorTempOtraCosa;
    var promedioGato;
    var promedioPerro;
    var promedioOtraCosa;
    var tipoPromedioMayor;
    var sumaGatosYPerros;
    var sumaTodo;
    var porcentajePerroGato;
    var contadorInternado;
    var contadorAdopcion;
    var estadoClinicoMenor;
    var acumuladorPesoTotal;
    var promedioPesoTotal;
    var pesoGatoSinPeloLiviano;
    var nombreGatoSinPeloLiviano
    var banderaPrimerGatoSinPelo;
    var razaGatoSinPeloLiviano;
    var porcentajeEnfermos;


    respuesta="si";
    contadorEnfermos=0;
    benderaPrimerSinPelo=1;
    contadorPerro=0;
    contadorGato=0;
    contadorOtraCosa=0;
    acumuladorTempPerro=0;
    acumuladorTempGato=0;
    acumuladorTempOtraCosa=0;
    contadorInternado=0;
    contadorAdopcion=0;
    acumuladorPesoTotal=0;
    banderaPrimerGatoSinPelo=1;



    while(respuesta=="si")
    {
        tipoIngresado=prompt("Ingrese el tipo de mascota: perro, gato, otra cosa");
        while(isNaN(tipoIngresado)==false || tipoIngresado!="perro" && tipoIngresado!="gato" && tipoIngresado!="otra cosa")
        {
            tipoIngresado=prompt("ERROR.Ingrese el tipo de mascota: perro, gato, otra cosa");
        }

        pelajeIngresado=prompt("Ingrese el tipo de pelaje: corto, largo , sin pelo");
        while(isNaN(pelajeIngresado)==false || pelajeIngresado!="corto" && pelajeIngresado!="largo" && pelajeIngresado!="sin pelo")
        {
            pelajeIngresado=prompt("ERROR.Ingrese el tipo de pelaje: corto, largo , sin pelo");
        }

        edadIngresada=prompt("Ingrese la edad");
        edadIngresada=parseInt(edadIngresada);
        while(isNaN(edadIngresada)==true || edadIngresada<0)
        {
            edadIngresada=prompt("ERROR.Ingrese la edad");
            edadIngresada=parseInt(edadIngresada);
        }

        nombreIngresado=prompt("Ingrese el nombre");
        while(isNaN(nombreIngresado)==false)
        {
            nombreIngresado=prompt("ERROR.Ingrese el nombre");
        }

        razaIngresada=prompt("Ingrese la raza");
        while(isNaN(razaIngresada)==false)
        {
            razaIngresada=prompt("ERROR.Ingrese la raza");
        }

        pesoIngresado=prompt("Ingrese el peso");
        while(isNaN(pesoIngresado)==true || pesoIngresado<0)
        {
            pesoIngresado=prompt("ERROR.Ingrese el peso");
        }
        pesoIngresado=parseFloat(pesoIngresado);

        estadoClinico=prompt("Ingrese el estado clinico: enfermo,internado o adopcion");
        while(isNaN(estadoClinico)==false || estadoClinico!="enfermo" && estadoClinico!="internado" && estadoClinico!="adopcion")
        {
            estadoClinico=prompt("ERROR.Ingrese el estado clinico: enfermo,internado o adopcion");
        }

        temperarutaCorporalIngresada=prompt("Ingrese la temperatura corporal");
        while(isNaN(temperarutaCorporalIngresada)==true || temperarutaCorporalIngresada<0)
        {
            temperarutaCorporalIngresada=prompt("ERROR.Ingrese la temperatura corporal");
        }
        temperarutaCorporalIngresada=parseFloat(temperarutaCorporalIngresada);

        //H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
        acumuladorPesoTotal=acumuladorPesoTotal+pesoIngresado;

        //e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
        switch(tipoIngresado)
        {
            case "perro":
            contadorPerro++;
            acumuladorTempPerro=acumuladorTempPerro+temperarutaCorporalIngresada;
            //a)El perro mas pesado
            if (contadorPerro==1 || pesoIngresado>perroMasPesado) 
            {
                perroMasPesado=pesoIngresado;
                nombrePerroMasPesado=nombreIngresado;
            }
            break;

            case "gato":
            contadorGato++;
            acumuladorTempGato=acumuladorTempGato+temperarutaCorporalIngresada;
            //i)El nombre y raza del gato sin pelos mas liviano
            if (razaIngresada=="sin pelo") 
            {
                if (banderaPrimerGatoSinPelo==1 || pesoIngresado<pesoGatoSinPeloLiviano) 
                {
                    pesoGatoSinPeloLiviano=pelajeIngresado;
                    nombreGatoSinPeloLiviano=nombreIngresado;
                    razaGatoSinPeloLiviano=razaIngresada;
                    banderaPrimerGatoSinPelo=0;
                }
            }
            break;

            case "otra cosa":
            contadorOtraCosa++;
            acumuladorTempOtraCosa=acumuladorTempOtraCosa+temperarutaCorporalIngresada;
            //c)El nombre de la ultima mascota de tipo "otra cosa"
            nombreUltimoOtraCosa=nombreIngresado;      
            break;
        }
        
        //b)El porcentaje de enfermos sobre el total de mascotas
        //g)Que estado clinico tiene la menor cantidad de mascotas
        if (estadoClinico=="enfermo") 
        {
            contadorEnfermos++;
        }else
        {
            if (estadoClinico=="internado") 
            {
                contadorInternado++;
            }else
            {
                contadorAdopcion++;
            }
        }
        
        //d)El animal sin pelo con menor temperatura corporal
        if (pelajeIngresado=="sin pelo" ) 
        {
            if (benderaPrimerSinPelo==1 || temperarutaCorporalIngresada<temperaturaMinima) 
            {
                temperaturaMinima=temperarutaCorporalIngresada;
                nombreTemperaturaMinima=nombreIngresado;
                benderaPrimerSinPelo=0;
            }
            
        }
        

        respuesta=prompt("ingrese si para continuar");
    }
    ////g)Que estado clinico tiene la menor cantidad de mascotas
    if (contadorEnfermos<contadorAdopcion && contadorEnfermos<contadorInternado) 
    {
        estadoClinicoMenor="enfermo";
    }else
    {
        if (contadorAdopcion<contadorInternado) 
        {
            estadoClinicoMenor="adopcion";
        }else
        {
           estadoClinicoMenor="internado";
        }
    }
    //f)Sumando gatos y perros que porcentaje del total de mascotas son?
    sumaGatosYPerros=contadorPerro+contadorGato;
    sumaTodo=contadorPerro+contadorGato+contadorOtraCosa;
    porcentajePerroGato=(sumaGatosYPerros*100)/sumaTodo;
    //H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
    promedioPesoTotal=acumuladorPesoTotal/sumaTodo;
    //b)El porcentaje de enfermos sobre el total de mascotas
    porcentajeEnfermos=(contadorEnfermos*100)/sumaTodo;
    //e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
    promedioGato=acumuladorTempGato/contadorGato;
    promedioPerro=acumuladorTempPerro/contadorPerro;
    promedioOtraCosa=acumuladorTempOtraCosa/contadorOtraCosa;

    if (promedioGato>promedioPerro && promedioGato>promedioOtraCosa) 
    {
         tipoPromedioMayor="gato";
    }else
    {
        if (promedioPerro>promedioOtraCosa) 
        {
            tipoPromedioMayor="perro";
        }else
        {
            tipoPromedioMayor="otra cosa";
        }
    }

    ////a)El perro mas pesado
    if (contadorPerro==0) 
    {
        console.log("no hay perros");
    }else
    {
        console.log("El perro mas pesado se llama: "+nombrePerroMasPesado);
    }
    //c)El nombre de la ultima mascota de tipo "otra cosa"
    console.log("El nombre de la ultima mascota de tipo (otra cosa) es: "+nombreUltimoOtraCosa);

    //d)El animal sin pelo con menor temperatura corporal
    if (benderaPrimerSinPelo==1) 
    {
        console.log("no hay sin pelo");
    }else
    {
        console.log("El animal sin pelo con menor temperatura corporal se llama: "+nombreTemperaturaMinima);
    }
    //e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
    console.log("El tipo de mascota que tiene el mayor promedio de temperatura corporal es: "+tipoPromedioMayor);
    ////f)Sumando gatos y perros que porcentaje del total de mascotas son?
    if (contadorPerro==0 && contadorGato==0) 
    {
        console.log("no hay perros ni gatos");
    }else
    {
        console.log("Sumando gatos y perros el porcentaje del total de mascotas es: "+porcentajePerroGato);
    }
    //g)Que estado clinico tiene la menor cantidad de mascotas
    console.log("el estado clinico que tiene la menor cantidad de mascotas es: "+estadoClinicoMenor);
    //H)Cual es el promedio de kilos de peso de tomando todas las mascotas
    console.log("el promedio de kilos de peso tomando todas las mascotas es: "+promedioPesoTotal);
     //i)El nombre y raza del gato sin pelos mas liviano
     if (banderaPrimerGatoSinPelo==1) 
     {
        console.log("No hay gatos sin pelos");
     }else
     {
        console.log("el gato sin pelos mas liviano se llama: "+nombreGatoSinPeloLiviano+" y la raza es : "+razaGatoSinPeloLiviano);
     }
     //b)El porcentaje de enfermos sobre el total de mascotas
     if (contadorEnfermos==0) 
     {
        console.log("no hay enfermos");
     }else
     {
        console.log("El porcentaje de enfermos sobre el total de mascotas es: "+porcentajeEnfermos);
     }
     

    
}
