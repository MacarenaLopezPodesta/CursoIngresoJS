/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
/*function mostrarAumento()
{
	var importe;
	var descuento;
    var resultado;

	importe= document.getElementById('txtIdImporte').value;
	importe= parseInt(importe);
    
    descuento= importe * 25/100;
    resultado= importe - descuento
    document.getElementById('txtIdResultado').value+resultado;

}*/
// 10 bis
/*function mostrarAumento()
{
	var importe;
	var descuento;
    var resultado;
    var porcentaje;

	importe= document.getElementById('txtIdImporte').value;
	importe= parseInt(importe);
    
    porcentaje= prompt("ingrese el porcentaje:");
    porcentaje= parseInt(porcentaje);
    
    descuento= importe * porcentaje/100;
   
    resultado= importe - descuento;
    document.getElementById('txtIdResultado').value+resultado;

}*/

//2- en el ejercicio 10 de entrada y salida , se debe pedir el nombre del producto , tambien se debe pedir el porcentaje de descuento al usuario, mostar el mensaje "usted compro un XXXXXX con XX % de descuento, el precio final es XXXX"


function mostrarAumento()
{
    var nombreProducto;
    var importe;
    var porcentaje;
    var descuento;
    var precioFinal;
    var mensaje;
    
    nombreProducto= prompt("ingrese nombre del producto: ");

    importe= document.getElementById('txtIdImporte').value;
    importe= parseInt(importe);
    
    porcentaje= prompt("ingrese el porcentaje:");
    porcentaje= parseInt(porcentaje);
    
    descuento= importe * porcentaje/100;
   
    precioFinal= importe - descuento;

    mensaje"usted compro un "+nombreProducto+" con "+porcentaje+"% de descuento, el precio final es $"+precioFinal;
    document.getElementById('txtIdResultado').value=mensaje;


}