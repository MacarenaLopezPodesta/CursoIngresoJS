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
	var nombreIngresado;
	var edadIngresada;
	var sexoIngresado;
	var estadoCivilIngresado;
    var temperaturaCorporalIngresada;
    var respuesta;
    var contadorMayorEdadViudos;
    var contadorHombresViudosOSolteros;
    var contadorPersonasMas60ConMasDe38;
    var promedioEdadHombresSolteros;
    var contadorHombresSolteros;
    var acumuladorEdadHombresSolteros;
    var banderaPrimerTemperatura;
    var nombreMayorTemperatura;
    var temperaturaMayor;

    respuesta="si";
    contadorMayorEdadViudos=0;
    contadorHombresViudosOSolteros=0;
    contadorPersonasMas60ConMasDe38=0;
    contadorHombresSolteros=0;
    acumuladorEdadHombresSolteros=0;
    banderaPrimerTemperatura="es la primera";

    while(respuesta=="si")
    {
    	nombreIngresado=prompt("Ingrese su nombre");
    	while(isNaN(nombreIngresado)==false)
    	{
    		nombreIngresado=prompt("ERROR. Ingrese su nombre");
    	}

    	edadIngresada=prompt("Ingrese su edad");
    	edadIngresada=parseInt(edadIngresada);
    	while(isNaN(edadIngresada)==true)
    	{
    		edadIngresada=prompt("ERROR. Ingrese su edad");
    		edadIngresada=parseInt(edadIngresada);
    	}

    	sexoIngresado=prompt("Ingrese f o m segun su sexo");
    	while(isNaN(sexoIngresado)==false || sexoIngresado!="f" && sexoIngresado!="m")
    	{
    		sexoIngresado=prompt("ERROR. Ingrese f o m segun su sexo");
    	}

    	estadoCivilIngresado=prompt("Ingrese soltero, casado o viudo segun su estado civil");
    	while(isNaN(estadoCivilIngresado)==false || estadoCivilIngresado!="soltero" && estadoCivilIngresado!="casado" && estadoCivilIngresado!="viudo")
    	{
    		estadoCivilIngresado=prompt("ERROR. Ingrese soltero, casado o viudo segun su estado civil");
    	}

    	temperaturaCorporalIngresada=prompt("Ingrese su temperatura corporal");
    	temperaturaCorporalIngresada=parseFloat(temperaturaCorporalIngresada);
    	while(isNaN(temperaturaCorporalIngresada)==true)
    	{
    		temperaturaCorporalIngresada=prompt("ERROR. Ingrese su temperatura corporal");
    		temperaturaCorporalIngresada=parseFloat(temperaturaCorporalIngresada);
    	}
    	//a) El nombre de la persona con mas temperatura.
    	if (banderaPrimerTemperatura=="es la primera") 
    	{
    	   temperaturaMayor=temperaturaCorporalIngresada;
           nombreMayorTemperatura=nombreIngresado;
           banderaPrimerTemperatura="no es la primera"
    	}else
    	{
    		if (temperaturaCorporalIngresada>temperaturaMayor) 
    		{
    			temperaturaMayor=temperaturaCorporalIngresada;
    			nombreMayorTemperatura=nombreIngresado;
    		}
    	}
        //b) Cuantos mayores de edad estan viudos
    	if (edadIngresada>18 && estadoCivilIngresado=="viudo") 
    	{
    		contadorMayorEdadViudos++;
    	}
    	//c) La cantidad de hombres que hay solteros o viudos.
    	if (sexoIngresado=="m" && estadoCivilIngresado!="casado") 
    	{
            contadorHombresViudosOSolteros++;
    	}
    	//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
        if (edadIngresada>60 && temperaturaCorporalIngresada>38) 
        {
        	contadorPersonasMas60ConMasDe38++;
        }
        //e) El promedio de edad entre los hombres solteros.
        if (sexoIngresado=="m" && estadoCivilIngresado=="soltero" ) 
        {
        	contadorHombresSolteros++;
        	acumuladorEdadHombresSolteros=acumuladorEdadHombresSolteros+edadIngresada;
        }
        respuesta=prompt("si, para continuar");
    }

    promedioEdadHombresSolteros=acumuladorEdadHombresSolteros/contadorHombresSolteros;

    console.log("El nombre de la persona con mas temperatura es "+nombreMayorTemperatura);
    console.log("la cantidad de mayores de edad viudos es "+contadorMayorEdadViudos);
    console.log("La cantidad de hombres que hay solteros o viudos es "+contadorHombresViudosOSolteros);
    console.log("la cantidad de personas de la tercera edad( mas de 60 años) que tienen mas de 38 de temperatura es "+contadorPersonasMas60ConMasDe38);
    console.log("El promedio de edad entre los hombres solteros es "+promedioEdadHombresSolteros);
}
