/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
//txtIdLargo
//txtIdAncho
//txtIdRadio

function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetro;
    var alambre;

    largo= document.getElementById('txtIdLargo').value;
    largo= parseInt(largo);
    ancho= document.getElementById('txtIdAncho').value;
    ancho= parseInt(ancho);

    perimetro=largo+largo+ancho+ancho;
    alambre=perimetro*3;

    alert("se debera comprar: "+alambre);

}
function Circulo () 
{
	var radio;
	var multiplicacion;
	var perimetro;
	var alambre;

	radio= document.getElementById('txtIdRadio').value;
	radio= parseInt(radio);

	multiplicacion=2*radio;
	perimetro=multiplicacion*3.14;
	alambre=perimetro*3;

	alert("se debera comprar: "+alambre);
}
function Materiales () 
{
    var largo;
    var ancho;
    var area;
    var bolsasCal;
    var bolsasCemento;

    largo= document.getElementById('txtIdLargo').value;
    largo= parseInt(largo);
    ancho= document.getElementById('txtIdAncho').value;
    ancho= parseInt(ancho);

    area=largo*ancho;
    bolsasCal=area*3;
    bolsasCemento=area*2;

    alert("bolsas de cal: "+bolsasCal+" y bolsas de cemento: "+bolsasCemento);
	
}