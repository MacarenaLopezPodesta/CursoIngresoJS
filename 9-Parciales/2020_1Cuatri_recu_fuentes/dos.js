/*
Enunciado:
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro
*/
function mostrar()
{
  var respuesta;
  var tipoIngresado;
  var cantidadBolsasIngresadas;
  var precioPorBolsasIngresadas;
  var precioBruto;
  var acumuladorPrecioBruto;
  var acumuladorCantidadBolsas;
  var acumuladorCantidadArena;
  var acumuladorCantidadCemento;
  var acumuladorCantidadCal;
  var acumuladorPrecioArena;
  var acumuladorPrecioCemento;
  var acumuladorPrecioCal;
  var tipoMasCantidasBolsas;
  var tipoMasCaro;
  var descuento;
  var porcentaje;
  var precioConDescuento;

  respuesta="si";
  acumuladorPrecioBruto=0;
  acumuladorCantidadBolsas=0;
  acumuladorCantidadArena=0;
  acumuladorCantidadCemento=0;
  acumuladorCantidadCal=0;
  acumuladorPrecioArena=0;
  acumuladorPrecioCemento=0;
  acumuladorPrecioCal=0;

  while(respuesta=="si")
  {
  	tipoIngresado=prompt("Ingrese el tipo de producto, puede ser arena, cal y cemento");
  	while(isNaN(tipoIngresado)==false || tipoIngresado!="arena" && tipoIngresado!="cal" && tipoIngresado!="cemento")
  	{
  		tipoIngresado=prompt("ERROR.Ingrese el tipo de producto, puede ser arena, cal y cemento");
  	}

  	cantidadBolsasIngresadas=prompt("Ingrese la cantidad de bolsas");
  	cantidadBolsasIngresadas=parseInt(cantidadBolsasIngresadas);
  	while(isNaN(cantidadBolsasIngresadas)==true)
  	{
  		cantidadBolsasIngresadas=prompt("ERROR.Ingrese la cantidad de bolsas");
  		cantidadBolsasIngresadas=parseInt(cantidadBolsasIngresadas);
  	}
  	acumuladorCantidadBolsas=acumuladorCantidadBolsas+cantidadBolsasIngresadas;

  	precioPorBolsasIngresadas=prompt("Ingrese el precio por bolsa");
  	precioPorBolsasIngresadas=parseInt(precioPorBolsasIngresadas);
  	while(isNaN(precioPorBolsasIngresadas)==true || precioPorBolsasIngresadas<1)
  	{
  		precioPorBolsasIngresadas=prompt("ERROR.Ingrese el precio por bolsa");
  		precioPorBolsasIngresadas=parseInt(precioPorBolsasIngresadas);
  	}
  	//a) El importe total a pagar , bruto sin descuento y...
    precioBruto=cantidadBolsasIngresadas*precioPorBolsasIngresadas;
    acumuladorPrecioBruto=acumuladorPrecioBruto+precioBruto;

    //d) Informar el tipo con mas cantidad de bolsas. //f) El tipo mas caro
  	switch(tipoIngresado)
  	{
  		case "arena":
  		acumuladorCantidadArena=acumuladorCantidadArena+cantidadBolsasIngresadas;
  		acumuladorPrecioArena=acumuladorPrecioArena+precioPorBolsasIngresadas;
  		break;

  		case "cal":
  		acumuladorCantidadCal=acumuladorCantidadCal+cantidadBolsasIngresadas;
  		acumuladorPrecioCal=acumuladorCantidadCal+precioPorBolsasIngresadas;
  		break;

  		case "cemento":
  		acumuladorCantidadCemento=acumuladorCantidadCemento+cantidadBolsasIngresadas;
  		acumuladorPrecioCemento=acumuladorPrecioCemento+precioPorBolsasIngresadas;
  		break;
  	}
     respuesta=prompt("si, para seguir comprando");
  }
  if (acumuladorCantidadCal>acumuladorCantidadCemento && acumuladorCantidadCal>acumuladorCantidadArena) 
  {
      tipoMasCantidasBolsas="cal";
  }else
  {
  	if (acumuladorCantidadCemento>acumuladorCantidadArena) 
  	{
  		tipoMasCantidasBolsas="cemento";
  	}else
  	{
  		tipoMasCantidasBolsas="arena";
  	}
  }

  //b) el importe total a pagar con descuento(solo si corresponde)
  if (acumuladorCantidadBolsas>30) 
  {
  	 pocentaje=25;
  }else
  {
  	if (acumuladorCantidadBolsas>10) 
  	{
  		porcentaje=15;
  	}else
  	{
  		porcentaje=0;
  	}
  }
  //f) El tipo mas caro
  if (acumuladorPrecioCemento>acumuladorPrecioArena && acumuladorPrecioCemento>acumuladorPrecioCal) 
  {
      tipoMasCaro="cemento";
  }else
  {
  	if (acumuladorPrecioArena>acumuladorPrecioCal) 
  	{
  		tipoMasCaro="arena";
  	}else
  	{
  		tipoMasCaro="cal";
  	}
  }
  descuento=acumuladorPrecioBruto*porcentaje/100;
  precioConDescuento=acumuladorPrecioBruto- descuento;

  console.log("El importe total a pagar , bruto sin descuento es "+acumuladorPrecioBruto);
  console.log("el importe total a pagar con descuento es "+precioConDescuento);
  console.log("el tipo con mas cantidad de bolsas es "+tipoMasCantidasBolsas);
  console.log("el tipo mas caro es "+tipoMasCaro);
}
