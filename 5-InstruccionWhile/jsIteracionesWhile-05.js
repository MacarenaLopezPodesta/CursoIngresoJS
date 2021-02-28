/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;

	while( sexoIngresado!="f" && sexoIngresado!="m")
	{
       sexoIngresado=prompt("Ingrese f para femenino o m para masculino")
	}

	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN