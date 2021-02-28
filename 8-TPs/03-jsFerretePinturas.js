/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	//txtIdTemperatura
	var temperaturaFahrenheit;
	var temperaturaCentígrados;
	var cuenta;

    temperaturaFahrenheit= document.getElementById('txtIdTemperatura').value;
    temperaturaFahrenheit= parseInt(temperaturaFahrenheit);

    cuenta=temperaturaFahrenheit-32;
    temperaturaCentígrados=cuenta*5/9;
    alert("temperatura en centígrados: "+temperaturaCentígrados);
}

function CentigradosFahrenheit () 
{
	var temperaturaCentígrados;
	var temperaturaFahrenheit;
	var cuenta;

	temperaturaCentígrados=document.getElementById('txtIdTemperatura').value;
	temperaturaCentígrados=parseInt(temperaturaCentígrados);

    cuenta=temperaturaCentígrados*9/5;
	temperaturaFahrenheit=cuenta+32;
    alert("temperatura en Fahrenheit: "+temperaturaFahrenheit);
}

	

