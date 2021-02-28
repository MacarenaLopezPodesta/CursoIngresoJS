/*
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/
function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado =txtIdDestino.value;
	var precio;
	var precioFinal;
	var aumento;
	var descuento;

    aumento=0;
	precio=15000;
	descuento=0;

	switch(destinoIngresado)
	{
		case "Bariloche":
		   switch(estacionIngresada)
		   {
             case "Invierno":
             aumento=20;
             break;

             case "Verano":
             descuento=20;
             break;

             default:
             aumento=10;
             break;
		   }
		     break;
		

		case "Cataratas":
		   switch(estacionIngresada)
		   {
		   	case "Invierno":
		   	descuento=10;
		   	break;

		   	default:
		   	aumento=10;
		   	break
		   }
		    break;

		case "Mar del plata":
		    switch (estacionIngresada)
		    {
             case "Invierno":
             descuento=20;
             break;

             case "Verano":
             aumento=20;
             break;

             default:
             aumento=10;
             break;
		    } 
			break;
			
		case "Cordoba":
		    switch (estacionIngresada)
		    {
             case "Invierno":
             descuento=10;
             break;

             case "Verano":
             aumento=10;
             break;

             default:
             precioFinal=precio;
             break;
		    } 
			break;

	}

	/*switch(destinoIngresado)
	{
		case "Bariloche":
		if (estacionIngresada=="Invierno") 
		{
			aumento=20;
		}else
		{
			if (estacionIngresada=="Verano") 
			{
				descuento=20;
			}else
		    {
			    aumento=10;
		    }
		
		}
			break;
		

		case "Cataratas":
		if (estacionIngresada=="Invierno") 
		{
			descuento=10;
		}else
		{
			aumento=10;
		
		}
			break;

		case "Mar del plata":
		if (estacionIngresada=="Invierno") 
		{
			descuento=20;
		}else
		{
			if (estacionIngresada=="Verano") 
			{
				aumento=20;
			}else
		    {
			    aumento=10;
		    }
		
		}
			break;
			
		case "Cordoba":
		if (estacionIngresada=="Invierno") 
		{
			descuento=10;
		}else
		{
			if (estacionIngresada=="Verano") 
			{
				aumento=10;
			}else
		    {
			    precioFinal=precio;
		    }
		
		}
			break;

	}
    */   
       if (aumento!=0) 
       {
           precioFinal=precio+precio*aumento/100;
       }else
       {
       	if (descuento!=0) 
       	{
       		precioFinal=precio-precio*descuento/100;
       	}
       }

       alert("El precio final es de $"+precioFinal);



}//FIN DE LA FUNCIÓN