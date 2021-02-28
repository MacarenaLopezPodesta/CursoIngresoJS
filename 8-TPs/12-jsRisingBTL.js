/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
 	var sueldoBruto;
 	var numeroDeLegajo;
 	var nacionalidad;m

 	while(edadIngresada<18 || edadIngresada>90 || isNaN(edadIngresada)==true)
 	{
 		edadIngresada=prompt("EDAD:Ingrese su edad");
 		edadIngresada=parseInt(edadIngresada);
 	}
 	while(sexoIngresado!="M" && sexoIngresado!="F")
    {
        sexoIngresado=prompt("SEXO:Ingrese M para masculino y F para femenino");
    }
    while(estadoCivilIngresado<1 || estadoCivilIngresado>4 || isNaN(estadoCivilIngresado)==true)
    {
    	estadoCivilIngresado=prompt("ESTADO CIVIL:Ingrese 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos ");
        estadoCivilIngresado=parseInt(estadoCivilIngresado);
    }
    while(sueldoBruto<8000 || isNaN(sueldoBruto)==true)
    {
         sueldoBruto=prompt("SUELDO BRUTO:Ingrese su sueldo bruto, no menor a 8000.");
         sueldoBruto=parseInt(sueldoBruto);
    }
    while(numeroDeLegajo<1000 || numeroDeLegajo>10000 || isNaN(numeroDeLegajo)==true)
    {
    	numeroDeLegajo=prompt("NUMERO DE LEGAJO:");
    	numeroDeLegajo=parseInt(numeroDeLegajo);
    }
    while(nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N")
    {
    	nacionalidad=prompt("NACIONALIDAD:Ingrese “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.")
    }
    
    txtIdEdad.value=edadIngresada;
    txtIdSexo.value =sexoIngresado;
    txtIdEstadoCivil.value=estadoCivilIngresado;
    txtIdSueldo.value=sueldoBruto;
    txtIdLegajo.value=numeroDeLegajo;
    txtIdNacionalidad.value=nacionalidad;

}
