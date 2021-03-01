/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
Curso de ingreso UTN FRA*/
function mostrar()
{
  var respuesta;
  var tipoIngresado;
  var cantidadBolsasIngresadas;
  var precioIngresado;
  var porcentaje;
  var precioTotal;
  var acumuladorPrecioTotal;
  var acumuladorCantidadBolsas;
  var cuenta;
  var precioDescuento;
  var acumuladorArena;
  var acumuladorCemento;
  var acumuladorCal;
  var tipoMasCantidad;
  var tipoMasCaro;
  var banderaPrimerTipo;
  var precioMasCaro;

  acumuladorPrecioTotal=0;
  acumuladorCantidadBolsas=0;
  porcentaje=0;
  acumuladorArena=0;
  acumuladorCemento=0;
  acumuladorCal=0;
  banderaPrimerTipo=1;

  respuesta="si";

  while(respuesta=="si")
  {
    tipoIngresado=prompt("Ingrese el tipo de producto: arena, cal, cemento");
    while(isNaN(tipoIngresado)==false || tipoIngresado!="arena" && tipoIngresado!="cal" && tipoIngresado!="cemento")
    {
      tipoIngresado=prompt("ERROR.Ingrese el tipo de producto: arena, cal, cemento");
    }

    cantidadBolsasIngresadas=prompt("Ingrese la cantidad de bolsas");
    cantidadBolsasIngresadas=parseInt(cantidadBolsasIngresadas);
    while(isNaN(cantidadBolsasIngresadas)==true)
    {
      cantidadBolsasIngresadas=prompt("ERROR.Ingrese la cantidad de bolsas");
      cantidadBolsasIngresadas=parseInt(cantidadBolsasIngresadas);
    }
    acumuladorCantidadBolsas=acumuladorCantidadBolsas+cantidadBolsasIngresadas;

    precioIngresado=prompt("Ingrese el precio por bolsa");
    precioIngresado=parseInt(precioIngresado);
    while(isNaN(precioIngresado)==true || precioIngresado<0)
    {
      precioIngresado=prompt("ERROR.Ingrese el precio por bolsa");
      precioIngresado=parseInt(precioIngresado);
    }

    precioTotal=cantidadBolsasIngresadas*precioIngresado;
    acumuladorPrecioTotal=acumuladorPrecioTotal+precioTotal;

    if (banderaPrimerTipo==1 || precioIngresado>precioMasCaro) 
    {
       precioMasCaro=precioIngresado;
       tipoMasCaro=tipoIngresado;
       banderaPrimerTipo=0;
    }

//d) Informar el tipo con mas cantidad de bolsas.
    switch(tipoIngresado)
    {
      case "arena":
      acumuladorArena=acumuladorArena+cantidadBolsasIngresadas;
      break;

      case "cemento":
      acumuladorCemento=acumuladorCemento+cantidadBolsasIngresadas;
      break;

      case "cal":
      acumuladorCal=acumuladorCal+cantidadBolsasIngresadas;
      break;

    }
    respuesta=prompt("si, para continuar");
  }

  if (acumuladorArena>acumuladorCemento && acumuladorArena>acumuladorCal) 
  {
     tipoMasCantidad="arena";
  }else
  {
    if (acumuladorCemento>acumuladorCal) 
    {
      tipoMasCantidad="cemento";
    }else
    {
      tipoMasCantidad="cal";
    }
  }

  if (acumuladorCantidadBolsas>30) 
    {
      porcentaje=25;
    }else
    {
      if (acumuladorCantidadBolsas>10)
       {
         porcentaje=15;
       }
    }

    cuenta=acumuladorPrecioTotal*porcentaje/100;
    precioDescuento=acumuladorPrecioTotal- cuenta;

  //a) El importe total a pagar , bruto sin descuento y...
  console.log("El importe total a pagar , bruto sin descuento es: "+acumuladorPrecioTotal);
  //b) el importe total a pagar con descuento(solo si corresponde)
  if (acumuladorCantidadBolsas>10) 
  {
    console.log("el importe total a pagar con descuento es: "+precioDescuento);
  }
  //d) Informar el tipo con mas cantidad de bolsas.
  console.log("el tipo con mas cantidad de bolsas es: "+tipoMasCantidad);
  //f) El tipo mas caro
  console.log("el tipo mas caro es: "+tipoMasCaro);
}
