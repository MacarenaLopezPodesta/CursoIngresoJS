/*Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/
function mostrar()
{
	var respuesta;
    var nombreIngresado;
    var edadIngresada;
    var sexoIngresado;
    var estadoCivilIngresado;
    var temperaturaIngresada;
    var nombreMasTemperatura;
    var temperaturaMayor;
    var banderaPrimerPersona;
    var contadorMayorEdadViudos;
    var contadorHombresSolterosViudos;
    var contadorMas60ConMas38Temperatura;
    var contadorHombresSolteros;
    var acumuladorEdadHombresSolteros;
    var promedioEdadHombresSolteros;

    respuesta="si";
    banderaPrimerPersona=1;
    contadorMayorEdadViudos=0;
    contadorHombresSolterosViudos=0;
    contadorMas60ConMas38Temperatura=0;
    contadorHombresSolteros=0;
    acumuladorEdadHombresSolteros=0;

    while(respuesta=="si")
    {
        nombreIngresado=prompt("Ingrese su nombre");
        while(isNaN(nombreIngresado)==false)
        {
            nombreIngresado=prompt("ERROR.Ingrese su nombre");
        }

        edadIngresada=prompt("Ingrese su edad");
        edadIngresada=parseInt(edadIngresada);
        while(isNaN(edadIngresada)==true)
        {
            edadIngresada=prompt("ERROR.Ingrese su edad");
            edadIngresada=parseInt(edadIngresada);
        }

        sexoIngresado=prompt("Ingrese su sexo: f o m");
        while(isNaN(sexoIngresado)==false || sexoIngresado!="f" && sexoIngresado!="m")
        {
            sexoIngresado=prompt("ERROR.Ingrese su sexo: f o m");
        }

        estadoCivilIngresado=prompt("Ingrese su estado civil: soltero, casado o viudo");
        while(isNaN(estadoCivilIngresado)==false || estadoCivilIngresado!="soltero" && estadoCivilIngresado!="casado" && estadoCivilIngresado!="viudo")
        {
            estadoCivilIngresado=prompt("ERROR.Ingrese su estado civil: soltero, casado o viudo");
        }

        temperaturaIngresada=prompt("Ingrese su temperatura corporal");
        temperaturaIngresada=parseInt(temperaturaIngresada);
        while(isNaN(temperaturaIngresada)==true)
        {
            temperaturaIngresada=prompt("ERROR.Ingrese su temperatura corporal");
            temperaturaIngresada=parseInt(temperaturaIngresada);
        }

        if (banderaPrimerPersona==1 || temperaturaIngresada>temperaturaMayor) 
        {
            temperaturaMayor=temperaturaIngresada;
            nombreMasTemperatura=nombreIngresado;
            banderaPrimerPersona=0;
        }
        if (edadIngresada>17 && estadoCivilIngresado=="viudo") 
        {
            contadorMayorEdadViudos++;
        }

        if (sexoIngresado=="m" && estadoCivilIngresado!="casado") 
        {
            contadorHombresSolterosViudos++;
        }

        if (edadIngresada>60 && temperaturaIngresada>38) 
        {
            contadorMas60ConMas38Temperatura++;
        }
        if (sexoIngresado=="m" && estadoCivilIngresado=="soltero" ) 
        {
            contadorHombresSolteros++;
            acumuladorEdadHombresSolteros=acumuladorEdadHombresSolteros+edadIngresada;
        }

        respuesta=prompt("Ingrese si para continuar")
    }
    promedioEdadHombresSolteros=acumuladorEdadHombresSolteros/contadorHombresSolteros;

    //a) El nombre de la persona con mas temperatura.
    console.log("La persona con mas temperatura se llama: "+nombreMasTemperatura);
    //b) Cuantos mayores de edad estan viudos
    if (contadorMayorEdadViudos==0) 
    {
        console.log("No hay mayores de edad viudos");
    }else
    {
        console.log("La cantidad de personas mayores de edad viudas son: "+contadorMayorEdadViudos);
    }
    //c) La cantidad de hombres que hay solteros o viudos.
    if (contadorHombresSolterosViudos==0) 
    {
        console.log("No hay hombres solteros o viudos");
    }else
    {
        console.log("La cantidad de hombres solteros o viudos es : "+contadorHombresSolterosViudos);
    }
    //d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
    if (contadorMas60ConMas38Temperatura==0) 
    {
        console.log("No hay personas de la tercera edad mas de 60 años que tienen mas de 38 de temperatura");
    }else
    {
        console.log("La cantidad de personas de la tercera edad mas de 60 años que tienen mas de 38 de temperatura es : "+contadorMas60ConMas38Temperatura);
    }
    //e) El promedio de edad entre los hombres solteros
    if (contadorHombresSolteros==0) 
    {
        console.log("No hay hombres solteros");
    }else
    {
        console.log("La promedio de edad de los hombres solteros es : "+promedioEdadHombresSolteros);
    }
}
