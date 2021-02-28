/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{ 
	var sueldo;
	var aumento;
    var resultado

	sueldo= document.getElementById('txtIdSueldo').value;
	sueldo= parseInt(sueldo);
    
    aumento=sueldo*10/100;
    resultado=sueldo+aumento
    document.getElementById('txtIdResultado').value+resultado;


}

// 9 bis
/*function mostrarAumento()
{
	var importe;
	var aumento;
    var resultado;
    var porcentaje;

	importe= document.getElementById('txtIdImporte').value;
	importe= parseInt(importe);
    
    porcentaje= prompt("ingrese el porcentaje:");
    porcentaje= parseInt(porcentaje);
   
    aumento= importe * porcentaje/100;
   
    resultado= importe + aumento;
    document.getElementById('txtIdResultado').value+resultado;

}
*/