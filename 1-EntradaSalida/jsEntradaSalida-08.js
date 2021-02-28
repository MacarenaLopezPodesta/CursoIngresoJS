/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
/*function SacarResto()
{
	var resto;

	resto=10%2;
	console.log("el resto es: "+ resto);
	resto=50%2;
	console.log("el resto es: "+ resto);
	resto=10%10;
	console.log("el resto es: "+ resto);
	resto=8%2;
	console.log("el resto es: "+ resto);
	resto=3%5;
	console.log("el resto es: "+ resto);
}
*/
/*Ingresar dos numeros por id
Se pide:
mostrar por console.log:
a) La suma de los dos numeros
b) El promedio de los numeros.
c) El modulo de los numeros (el primero en modulo del segundo)
*/
//txtIdNumeroDividendo
//txtIdNumeroDivisor

var numeroUno;
var numeroDos;
var suma;
var promedio;
var moduloNumero;

numeroUno=document.getElementById('txtIdNumeroDividendo').value;
numeroUno=parseInt(numeroUno);
numeroDos=document.getElementById('txtIdNumeroDivisor').value;
numeroDos=parseInt(numeroDos);

suma=