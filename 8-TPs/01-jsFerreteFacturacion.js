/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres
function Sumar () 
{ 
	var precioUno;
	var precioDos;
	var precioTres;
    var suma;

    precioUno= document.getElementById('txtIdPrecioUno').value;
	precioDos= document.getElementById('txtIdPrecioDos').value;
    precioTres= document.getElementById('txtIdPrecioTres').value;

	precioUno= parseInt(precioUno);
    precioDos= parseInt(precioDos);
    precioTres= parseInt(precioTres);
   
    suma=precioUno+precioDos+precioTres

    alert("el resultado es: "+suma);
}

function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
    var suma;
    var promedio;

    precioUno= document.getElementById('txtIdPrecioUno').value;
	precioDos= document.getElementById('txtIdPrecioDos').value;
    precioTres= document.getElementById('txtIdPrecioTres').value;

	precioUno= parseInt(precioUno);
    precioDos= parseInt(precioDos);
    precioTres= parseInt(precioTres);
   
    suma=precioUno+precioDos+precioTres;
    promedio=suma/3

    alert("el resultado es: "+promedio);
}	

function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
    var suma;
    var iva;
    var precioFinal;
   
    precioUno= document.getElementById('txtIdPrecioUno').value;
	precioDos= document.getElementById('txtIdPrecioDos').value;
    precioTres= document.getElementById('txtIdPrecioTres').value;

	precioUno= parseInt(precioUno);
    precioDos= parseInt(precioDos);
    precioTres= parseInt(precioTres);
   
    suma=precioUno+precioDos+precioTres;
    iva=suma*21/100
    precioFinal=suma+iva
   
    alert("el resultado es: "+precioFinal);	
}