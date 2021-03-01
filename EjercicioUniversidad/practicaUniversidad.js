/*
Estadística
Se requiere generar un sistema para realizar estadísticas sobre los egresados en la universidad.

Si tenes alguna duda, consulta por slack!!

1. El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
Sexo (femenino-masculino-nobinario)
Edad (18 o más)
Nota (entre 1 y 10)
2. Se desconoce la cantidad de alumnos que se ingresaran.
3. Se deberán validar los casos resaltados en negrita.
4. El programa deberá informar a través del documento html:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
G. ¿Cuál es la carrera que tiene más alumnos?
*/
/*function probarEjercicio()
{
	var contadorMujeresCursaProgramacion;
	var respuesta;
	var nombreIngresado;
	var carreraIngresada;
	var estadoDeCarreraIngresado;
	var sexoIngresado;
	var edadIngresada;
	var notaIngresada;
    var contadorNoBinario;
    var promedioAlumnosFinalizantes;
    var contadorAlumnosFinalizados;
    var acumuladorAlumnosFinalizados;
    var nombreAlumnoPsicologiaViejo;
    var sexoAlumnoPsicologiaViejo;
    var edadAlumnoPsicologiaViejo;
    var banderaPrimerAlumnoPsicologiaNoBinario;
    var contadorProgramacion;
    var contadorPsicologia;
    var contadorDiseñoGrafico;

    contadorProgramacion=0;
    contadorPsicologia=0;
    contadorDiseñoGrafico=0;
    banderaPrimerAlumnoPsicologiaNoBinario=1;
    contadorNoBinario=0;
	respuesta="si";
	contadorMujeresCursaProgramacion=0;
	contadorAlumnosFinalizados=0;
	acumuladorAlumnosFinalizados=0;

	while(respuesta=="si")
	{

        nombreIngresado=prompt("Ingrese el nombre del alumno");
        while(isNaN(nombreIngresado)==false)
        {
        	nombreIngresado=prompt("ERROR.Ingrese el nombre del alumno");
        }

        carreraIngresada=prompt("Ingrese carrera: programación, psicología, diseño grafico");
        while(isNaN(carreraIngresada)==false || carreraIngresada!="programacion" &&  carreraIngresada!="psicologia" && carreraIngresada!="diseño grafico")
        {
        	carreraIngresada=prompt("ERROR.Ingrese carrera: programación, psicología, diseño gráfico");
        }

		    estadoDeCarreraIngresado=prompt("Ingrese el estado de la carrera: en curso-abandono-finalizado");
        while(isNaN(estadoDeCarreraIngresado)==false || estadoDeCarreraIngresado!="en curso" &&  estadoDeCarreraIngresado!="abandono" && estadoDeCarreraIngresado!="finalizado")
        {
        	estadoDeCarreraIngresado=prompt("ERROR.Ingrese el estado de la carrera: en curso-abandono-finalizado");
        }

        sexoIngresado=prompt("Ingrese el sexo: femenino-masculino-nobinario");
        while(isNaN(sexoIngresado)==false || sexoIngresado!="femenino" && sexoIngresado!="masculino" && sexoIngresado!="nobinario")
        {
        	sexoIngresado=prompt("ERROR.Ingrese el sexo: femenino-masculino-nobinario");
        }

        edadIngresada=prompt("Ingrese la edad: 18 o mas");
        edadIngresada=parseInt(edadIngresada);
        while(isNaN(edadIngresada)==true || edadIngresada<18)
        {
        	edadIngresada=prompt("ERROR.Ingrese la edad: 18 o mas");
        	edadIngresada=parseInt(edadIngresada);
        }

        notaIngresada=prompt("Ingrese la nota entre 1 y 10");
        notaIngresada=parseInt(notaIngresada);
        while(isNaN(notaIngresada)==true || notaIngresada<1 || notaIngresada>10)
        {
        	notaIngresada=prompt("ERROR.Ingrese la nota entre 1 y 10");
        	notaIngresada=parseInt(notaIngresada);
        }

        
        if (sexoIngresado=="nobinario") 
        {
          contadorNoBinario++;
        }
        if (estadoDeCarreraIngresado=="finalizado") 
        {
        	contadorAlumnosFinalizados++;
        	acumuladorAlumnosFinalizados=acumuladorAlumnosFinalizados+notaIngresada;
        }
        
       switch(carreraIngresada)
       {
       	 case "psicologia":
       	 contadorPsicologia++;
       	 if(sexoIngresado=="nobinario")  
         {
       	   if (banderaPrimerAlumnoPsicologiaNoBinario==1 || notaIngresada>notaAlumnoPsicologiaNoBinario) 
       	   {
       	  	nombreAlumnoPsicologiaNoBinario=nombreIngresado;
       	  	notaAlumnoPsicologiaNoBinario=notaIngresada;
            estadoAlumnoPsicologiaNoBinario=estadoDeCarreraIngresado;
       	  	banderaPrimerAlumnoPsicologiaNoBinario=0;
       	   }
         }
         if (contadorPsicologia==1 || edadIngresada>edadAlumnoPsicologiaViejo) 
       	  {
       	  	nombreAlumnoPsicologiaViejo=nombreIngresado;
       	  	sexoAlumnoPsicologiaViejo=sexoIngresado;
       	  	edadAlumnoPsicologiaViejo=edadIngresada;
       	  }
       	 break;

       	 case "programación":
       	 contadorProgramacion++;
       	 if (sexoIngresado=="femenino" && estadoDeCarreraIngresado=="en curso" ) 
          {
        	contadorMujeresCursaProgramacion++;
          }
       	 break;

       	 case "diseño grafico":
       	 contadorDiseñoGrafico++;
       	 break;

       }

		respuesta=prompt("Ingrese si para seguir ingresando alumnos");
	}

	if (contadorProgramacion>contadorPsicologia && contadorProgramacion>contadorDiseñoGrafico) 
	{
        carreraMasAlumno="programación";
	}else
	{
		if (contadorPsicologia>contadorDiseñoGrafico) 
		{
			carreraMasAlumno="psicologia";
		}else
		{
			carreraMasAlumno="diseño grafico";
		}
	}

	
	//A. Cantidad total de alumnos de cada carrera.
    console.log("La cantidad total de alumnos en psicologia es: "+contadorPsicologia);
    console.log("La cantidad total de alumnos en diseño grafico es: "+contadorDiseñoGrafico);
    console.log("La cantidad total de alumnos en programación es: "+contadorProgramacion);
    //B. Cantidad total de mujeres que cursan la carrera de programación
    if (contadorMujeresCursaProgramacion==0) 
    {
        console.log("No hay mujeres que cursan la carrera de programación");
    }else
    {
    	console.log("La cantidad total de mujeres que cursan la carrera de programación es: "+contadorMujeresCursaProgramacion);
    }
    //C. Cantidad de alumnos no binarios.
    if (contadorNoBinario==0) 
    {
        console.log("No hay alumnos no binarios");
    }else
    {
    	console.log("La cantidad de alumnos no binarios es: "+contadorNoBinario);
    }
    //D. Promedio de notas de los alumnos finalizantes.
    if (contadorAlumnosFinalizados==0) 
    {
        console.log("No hay alumnos finalizantes");
    }else
    {
    	promedioAlumnosFinalizantes=acumuladorAlumnosFinalizados/contadorAlumnosFinalizados;
    	console.log("El promedio de alumnos finalizantes es: "+promedioAlumnosFinalizantes);
    }
    //E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
    if (contadorPsicologia==0) 
    {
    	console.log("No hay alumnos en psicología");
    }else
    {
    	console.log("El alumno mas viejo en la carrera de psicología, se llama: " +nombreAlumnoPsicologiaViejo+" ,sexo: "+sexoAlumnoPsicologiaViejo+" y edad: "+edadAlumnoPsicologiaViejo);
    }
    //F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
    if (banderaPrimerAlumnoPsicologiaNoBinario==1) 
    {
    	console.log("No hay alumnos no binario en psicología");
    }else
    {
    	console.log("Nombre: "+nombreAlumnoPsicologiaNoBinario+" nota: "+notaAlumnoPsicologiaNoBinario+" y estado de la carrera del mejor alumno no binario que estudia psicología es: "+estadoAlumnoPsicologiaNoBinario);
    }
    //G. ¿Cuál es la carrera que tiene más alumnos?
    console.log("la carrera que tiene mas alumnos es: "+carreraMasAlumno);
}*/
/*SUPER CHINO CLASE SABADO

2- "super chino" Se pide el ingreso de mercadería de un supermercado , hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)

informar SOLO SI HAY 
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del  mas caro de todos los productos
c) el NOMBRE del  mas barato de los elaborados
d)el tipo de mercadería  que mas aparece
e)el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado
*/
/*function probarEjercicio()
{
	var respuesta;
	var tipo;
	var nombreProducto;
	var importeProducto;
	var procedencia;
	var peso;
	var banderaPrimerComestible;
	var pesoMasPesadoComestible;
	var nombreMasPesadoComestible;
	var contadorLimpieza;
	var contadorComestible;
	var contadorOtros;
	var tipoMasMercaderia;
	var acumuladorLimpieza;
	var acumuladorComestible;
	var acumuladorOtros;
	var banderaPrimerProducto;
	var importeMasCaro;
    var nombreMasCaro;
    var importeMasBaratoElaborado;
    var nombreMasBaratoElaborado;
    var banderaPrimerElaborado;
    var contadorElaborados;
    var contadorProductos;
    var porcentajeElaborados;
    var promedioLimpieza;
	var promedioComestible;
	var promedioOtros;
	var cuenta;
    
    contadorProductos=0;
    contadorElaborados=0;
    banderaPrimerElaborado=1;
    banderaPrimerProducto=1;
    contadorLimpieza=0;
	contadorComestible=0;
	contadorOtros=0;
	respuesta="si";
	banderaPrimerComestible=1;
	acumuladorLimpieza=0;
	acumuladorComestible=0;
	acumuladorOtros=0;

	while(respuesta=="si")
	{
	   contadorProductos++;
       tipo=prompt("Ingrese el tipo : limpieza , comestible , otros ");
       while(isNaN(tipo)==false || tipo!="limpieza" && tipo!="comestible" && tipo!="otros")
       {
          tipo=prompt("ERROR.Ingrese el tipo : limpieza , comestible , otros ");
       } 

       nombreProducto=prompt("Ingrese el nombre del producto");
       while(isNaN(nombreProducto)==false)
       {
          nombreProducto=prompt("ERROR.Ingrese el nombre del producto");
       } 

       importeProducto=prompt("Ingrese el importe del producto:no mayor a 1000");
       importeProducto=parseInt(importeProducto);
       while(isNaN(importeProducto)==true || importeProducto>1000)
       {
          importeProducto=prompt("ERROR.Ingrese el importe del producto: no mayor a 1000");
          importeProducto=parseInt(importeProducto);
       } 
       
       procedencia=prompt("Ingrese la procedencia : importado, nacional, elaborado");
       while(isNaN(procedencia)==false || procedencia!="importado" && procedencia!="nacional" && procedencia!="elaborado")
       {
          procedencia=prompt("ERROR.Ingrese la procedencia : importado, nacional, elaborado");
       } 

       peso=prompt("Ingrese el peso: no mayor a 30 kilos");
       peso=parseInt(peso);
       while(isNaN(peso)==true || peso>30)
       {
          peso=prompt("ERROR.Ingrese el peso: no mayor a 30 kilos");
          peso=parseInt(peso);
       } 
       //b) el NOMBRE del  mas caro de todos los productos
       if (banderaPrimerProducto==1 || importeProducto>importeMasCaro) 
       {
       	 importeMasCaro=importeProducto;
       	 nombreMasCaro=nombreProducto;
       	 banderaPrimerProducto=0;
       }
       //c) el NOMBRE del  mas barato de los elaborados
       
       if (procedencia=="elaborado") 
       {
           contadorElaborados++;//e)el porcentaje de productos elaborados por sobre el total
       	if (banderaPrimerElaborado==1 || importeProducto<importeMasBaratoElaborado) 
       	{
       		importeMasBaratoElaborado=importeProducto;
       		nombreMasBaratoElaborado=nombreProducto;
       		banderaPrimerElaborado=0;
       	}
       }

		

		switch(tipo)
		{
			case "limpieza":
			contadorLimpieza++;
			acumuladorLimpieza=acumuladorLimpieza+peso;
			break;

			case "comestible":
			contadorComestible++;
			acumuladorComestible=acumuladorComestible+peso;
			//a) el NOMBRE del mas pesado de los comestibles
			if (banderaPrimerComestible==1 || peso>pesoMasPesadoComestible) 
			{
              pesoMasPesadoComestible=peso;
              nombreMasPesadoComestible=nombreProducto;
              banderaPrimerComestible=0;
			}
			break;

			case "otros":
			contadorOtros++;
			acumuladorOtros=acumuladorOtros+peso;
			break;
		}
		respuesta=prompt("Ingrese si para continuar");
	}
	// d)el tipo de mercadería  que mas aparece
	if (contadorLimpieza>contadorComestible && contadorLimpieza>contadorOtros) 
	{
        tipoMasMercaderia="limpieza";
	}else
	{
		if (contadorComestible>contadorOtros) 
		{
			tipoMasMercaderia="comestible";
		}else
		{
			tipoMasMercaderia="otros";
		}
	}
	 //e)el porcentaje de productos elaborados por sobre el total
	 cuenta=contadorElaborados*100;
	 porcentajeElaborados=cuenta/contadorProductos;
	 //f) el promedio de pesos por cada tipo ingresado
	 promedioLimpieza=acumuladorLimpieza/contadorLimpieza;
	 promedioComestible=acumuladorComestible/contadorComestible;
	 promedioOtros=acumuladorOtros/contadorOtros;

     //a) el NOMBRE del mas pesado de los comestibles
     console.log("el NOMBRE del mas pesado de los comestibles es: "+nombreMasPesadoComestible);
	 //b) el NOMBRE del  mas caro de todos los productos
	 console.log("El producto mas caro se llama: "+nombreMasCaro);
	 //c) el NOMBRE del  mas barato de los elaborados
	 console.log("El producto mas barato de los elaborados se llama: "+nombreMasBaratoElaborado);
	 //d)el tipo de mercadería  que mas aparece
	 console.log("el tipo de mercadería  que mas aparece es: "+tipoMasMercaderia);
     //e)el porcentaje de productos elaborados por sobre el total
     console.log("el porcentaje de productos elaborados por sobre el total es: "+porcentajeElaborados);
     //f) el promedio de pesos por cada tipo ingresado
     console.log("el promedio de pesos de los productos de limpieza es: "+promedioLimpieza);
     console.log("el promedio de pesos de los productos comestible es: "+promedioComestible);
     console.log("el promedio de pesos de los productos OTROS es: "+promedioOtros);
}*/
/*3- validación :
pedir el ingreso de 10 mascotas 
 validar 
tipo ( gato , perro , pajaro y otros)solo esos cuatro tipo
raza , si es perro (pastor, toy, callejero) y si gato (siamés, turco, Peterbald , generico) y  si es de tipo "otros" o pájaro , pedir solo un texto
edad entre 1 y 20 para gatos y perros ,  para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre ( no se permite solo numero)
mostrar por cada tipo el nombre del  mas viejo , solo si hay de ese tipo
mostrar que raza  de gatos tiene mas animales y el promedio de edad de esta raza
*/
function probarEjercicio()
{
	var contadorMascotas;
	var tipoIngresado;
	var razaIngresada;
	var edadIngresada;
	var nombreIngresado;
	var banderaPrimerGato;
	var banderaPrimerPerro;
	var banderaPrimerPajaro;
	var banderaPrimerOtros;
	var edadGatoMasviejo;
    var nombreGatoMasViejo;
    var edadPerroMasviejo;
    var nombrePerroMasViejo;
    var edadPajaroMasviejo;
    var nombrePajaroMasViejo;
    var edadOtrosMasviejo;
    var nombreOtrosMasViejo;
    var razaMasGatos;
    var contadorSiames;
    var acumuladorEdadSiames;
    var contadorTurco;
    var acumuladorEdadTurco;
    var contadorGenerico;
    var acumuladorEdadGenerico;
    var contadorPeterbald;
    var acumuladorEdadPeterbald;
    var promedio;

    contadorSiames=0;
    acumuladorEdadSiames=0;
    contadorTurco=0;
    acumuladorEdadTurco=0;
    contadorGenerico=0;
    acumuladorEdadGenerico=0;
    contadorPeterbald=0;
    acumuladorEdadPeterbald=0;
	  banderaPrimerGato=1;
    banderaPrimerPerro=1;
	  banderaPrimerPajaro=1;
	  banderaPrimerOtros=1;

	for(contadorMascotas=0;contadorMascotas<10;contadorMascotas++)
	{
        tipoIngresado=prompt("Ingrese su mascota: gato , perro , pajaro y otros");
        while(isNaN(tipoIngresado)==false || tipoIngresado!="gato"&&tipoIngresado!="perro"&&tipoIngresado!="pajaro"&& tipoIngresado!="otros")
        {
        	tipoIngresado=prompt("ERROR.Ingrese su mascota: gato , perro , pajaro y otros");
        }
        nombreIngresado=prompt("Ingrese el nombre de la mascota");
        while(isNaN(nombreIngresado)==false)
        {
        	nombreIngresado=prompt("ERROR.Ingrese el nombre de la mascota");
        }

        switch(tipoIngresado)
        { 
        	
        	case "gato":
        	razaIngresada=prompt("Ingrese la raza: siames, turco, Peterbald o generico");
        	while(isNaN(razaIngresada)==false||razaIngresada!="siames"&&razaIngresada!="turco"&&razaIngresada!="Peterbald"&&razaIngresada!="generico")
        	{
        		razaIngresada=prompt("ERROR.Ingrese la raza: siames, turco, Peterbald o generico");
        	}
        	edadIngresada=prompt("Ingrese la edad ente 1 y 20");
        	edadIngresada=parseInt(edadIngresada);
        	while(isNaN(edadIngresada)==true|| edadIngresada<1|| edadIngresada>20)
        	{
                edadIngresada=prompt("ERROR.Ingrese la edad ente 1 y 20");
        	     edadIngresada=parseInt(edadIngresada);
        	}
        	if (banderaPrimerGato==1 || edadIngresada>edadGatoMasviejo) 
        	{
                 edadGatoMasviejo=edadIngresada;
                 nombreGatoMasViejo=nombreIngresado;
                 banderaPrimerGato=0;
        	}
        	switch(razaIngresada)
        	{
        		case "siames":
        		contadorSiames++;
        		acumuladorEdadSiames=acumuladorEdadSiames+edadIngresada;
        		break;

        		case "turco":
        		contadorTurco++;
        		acumuladorEdadTurco=acumuladorEdadTurco+edadIngresada;
        		break;

        		case "Peterbald":
        		contadorPeterbald++;
        		acumuladorEdadPeterbald=acumuladorEdadPeterbald+edadIngresada;
        		break;

        		case "generico":
        		contadorGenerico++;
        		acumuladorEdadGenerico=acumuladorEdadGenerico+edadIngresada;
        		break;
        	}
        	break;

        	case "perro":
        	razaIngresada=prompt("Ingrese la raza: pastor, toy, callejero");
        	while(isNaN(razaIngresada)==false||razaIngresada!="pastor"&&razaIngresada!="toy"&&razaIngresada!="callejero")
        	{
        		razaIngresada=prompt("ERROR.Ingrese la raza: pastor, toy, callejero");
        	}
        	edadIngresada=prompt("Ingrese la edad ente 1 y 20");
        	edadIngresada=parseInt(edadIngresada);
        	while(isNaN(edadIngresada)==true|| edadIngresada<1|| edadIngresada>20)
        	{
                 edadIngresada=prompt("ERROR.Ingrese la edad ente 1 y 20");
        	     edadIngresada=parseInt(edadIngresada);
        	}
        	if (banderaPrimerPerro==1 || edadIngresada>edadPerroMasviejo) 
        	{
                 edadPerroMasviejo=edadIngresada;
                 nombrePerroMasViejo=nombreIngresado;
                 banderaPrimerPerro=0;
        	}
        	break;


        	case "pajaro":
        	razaIngresada=prompt("Ingrese la raza");
        	while(isNaN(razaIngresada)==false)
        	{
        		razaIngresada=prompt("ERROR.Ingrese la raza");
        	}
        	edadIngresada=prompt("Ingrese la edad ente 1 y 50");
        	edadIngresada=parseInt(edadIngresada);
        	while(isNaN(edadIngresada)==true|| edadIngresada<1|| edadIngresada>50)
        	{
                 edadIngresada=prompt("ERROR.Ingrese la edad ente 1 y 50");
        	     edadIngresada=parseInt(edadIngresada);
        	}
        	if (banderaPrimerPajaro==1 || edadIngresada>edadPajaroMasviejo) 
        	{
                 edadPajaroMasviejo=edadIngresada;
                 nombrePajaroMasViejo=nombreIngresado;
                 banderaPrimerPajaro=0;
        	}
        	break;


        	case "otros":
        	razaIngresada=prompt("Ingrese la raza");
        	while(isNaN(razaIngresada)==false)
        	{
        		razaIngresada=prompt("ERROR.Ingrese la raza");
        	}
        	edadIngresada=prompt("Ingrese la edad ente 1 y 100");
        	edadIngresada=parseInt(edadIngresada);
        	while(isNaN(edadIngresada)==true|| edadIngresada<1|| edadIngresada>100)
        	{
                 edadIngresada=prompt("ERROR.Ingrese la edad ente 1 y 100");
        	     edadIngresada=parseInt(edadIngresada);
        	}
        	if (banderaPrimerOtros==1 || edadIngresada>edadOtrosMasviejo) 
        	{
                 edadOtrosMasviejo=edadIngresada;
                 nombreOtrosMasViejo=nombreIngresado;
                 banderaPrimerOtros=0;
        	}
        	break;

        }
	}
	////mostrar por cada tipo el nombre del  mas viejo , solo si hay de ese tipo
	if (banderaPrimerPajaro==1) 
	{
		console.log("no hay pajaros");
	}else
	{
        console.log("El pajaro mas viejo se llama: "+nombrePajaroMasViejo);
	}
	if (banderaPrimerPerro==1) 
	{
		console.log("no hay perros");
	}else
	{
        console.log("El perro mas viejo se llama: "+nombrePerroMasViejo);
	}
	if (banderaPrimerOtros==1) 
	{
		console.log("no hay otros");
	}else
	{
        console.log("El otro mas viejo se llama: "+nombreOtrosMasViejo);
	}
	if (banderaPrimerGato==1) 
	{
		console.log("no hay gatos");
	}else
	{
        console.log("El gato mas viejo se llama: "+nombreGatoMasViejo);
        //mostrar que raza  de gatos tiene mas animales y el promedio de edad de esta raza
        if (contadorSiames>contadorTurco && contadorSiames>contadorPeterbald && contadorSiames>contadorGenerico) 
        	{
        		razaMasGatos="siames";
        		promedio=acumuladorEdadSiames/contadorSiames;
        	}
        	else
        	{
        		if (contadorTurco>contadorPeterbald && contadorTurco>contadorGenerico) 
        		{
        			razaMasGatos="turco";
        			promedio=acumuladorEdadTurco/contadorTurco;
        		}else
        		{
        			if (contadorPeterbald>contadorGenerico) 
        			{
        				razaMasGatos="Peterbald";
        				promedio=acumuladorEdadPeterbald/contadorPeterbald;
        			}else
        			{
        				razaMasGatos="generico";
        				promedio=acumuladorEdadGenerico/contadorGenerico;
        			}
        		}
        	}
        console.log("la raza de gatos que tiene mas animales es: "+razaMasGatos+"y el promedio de edad de esta raza es: "+promedio);
	}
}