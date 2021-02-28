/*function mostrar()
{
	var edad;

    edad=parseInt(document.getElementById('txtIdEdad').value);
	
	if (edad>12 && edad<18) 
	{
		alert("es adolescente");
	}

}//FIN DE LA FUNCIÓN

/*function mostrar()
{
	var edad;

    edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if (edad>12 )
	 {
	 	if (edad<18)
	 	{
           alert("es adolescente");
	 	} 
	 }


*/
// function mostrar()
/*1-con if
pedir a una persona que fue de vaciones , la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento
hata 80km/h= lento
hasta 100= buen ritmo
hasta 120= ahi de la ley
mas = eso no se hace
*/
/*{
  var distancia;
  var tiempo;
  var respuesta;
  var velocidad;

  respuesta=prompt("Ingresa si, si fuiste de vacaciones");
  respuesta=parseInt(respuesta);
  distancia=prompt("ingresa que distancia viajaste");
  distancia=parseInt(distancia);
  tiempo=prompt("ingresa que tiempo tardaste");
  tiempo=parseInt(tiempo);

  velocidad=distancia/tiempo;
  
     if (velocidad<61)
      {
     	alert("muy lento");
      }else
      {
     	if (velocidad<81) 
     	{
     		alert("lento");
     	}else
     	{
     		if (velocidad<121) 
     		{
     			alert("ahi de la ley");
     		}else
     		{
     			alert("eso no se hace");
     		}
     	}
      }
   
}*/

/*2- con if
ingresar el nombre y los datos requeridos para calcular el IMC , e informar a la persona si es:
Bajo peso
Peso normal
Preobesidad
Obesidad I
Obesidad II
Obesidad III*/

/*function mostrar()
{
	var nombre;
	var altura;
	var peso;
	var imc;

	nombre=prompt("Ingrese su nombre");
    altura=prompt("Ingrese su altura actual en metros");
    altura=parseFloat(altura);
    peso=prompt("Ingrese su peso actual en kg");
    peso=parseFloat(peso);

    imc=peso/(altura*altura);

    if (imc<18.6) 
    {
    	alert("Bajo peso");
    }else
    {
    	if (imc<25) 
    	{
    		alert("Peso normal");
    	}else
    	{
    		if (imc<30) 
    		{
    			alert("Preobesidad");
    		}else
    		{
    			if (imc<35) 
    			{
    				alert("Obesidad I");
    			}else
    			{
    				if (imc<40) 
    				{
    					alert("Obesidad II");
    				}
    				else
    				{
    					if (imc<50) 
    					{
    						alert("Obesidad III");
    					}
    					else
    					{
    						alert("Obesidad IV");
    					}
    				}
    			}
    		}
    	}
    }


}
*/

/*3-con if
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/
function mostrar()
{
	var precio;
	var aumento;
	var descuento;
	var destinoIngresado;
	var estacionIngresada;
	var precioFinal;

	precio=15000;
    descuento=0;
    aumento=0;


    destinoIngresado=prompt("Ingrese el destino que quiere ir, puede ser bariloche,cataratas, mar del plata o cordoba");
    estacionIngresada=prompt("Ingrese una estacion, puede ser invierno, verano, otoño y primavera");

    if (estacionIngresada== "invierno") 
    {
         if (destinoIngresado=="bariloche") 
         {
         	aumento=20;	
            aumento=parseInt(aumento);
         }else
         {
         	if (destinoIngresado=="mar del plata") 
         	{
         		descuento=20;
                descuento=parseInt(descuento);
         	}
         	else
         	{
         		descuento=10;
                descuento=parseInt(descuento);
         	}
         }
    }else
    {
       if (estacionIngresada=="verano") 
       {
          if (destinoIngresado=="bariloche") 
          {
              descuento=20;
              descuento=parseInt(descuento);
          }else
          {
            if (destinoIngresado=="mar del plata") 
            {
                aumento=20;
                aumento=parseInt(aumento);
            }else
            {
                aumento=10;
                aumento=parseInt(aumento);
            }
          }
       }else
       {
        if (destinoIngresado=="cordoba") 
         {
            aumento=0;
            aumento=parseInt(aumento);
         }else
         {
            aumento=10;
            aumento=parseInt(aumento);
         }
       }
    }
    
        
    
            
    	


     if (aumento!=0) 
       {
           precioFinal=precio+precio*aumento/100;
       }else
       {
       	 if (descuento!=0) 
       	 {
       		precioFinal=precio-precio*descuento/100;
       	 }else
         {
            precioFinal=precio;
         }
       }

       alert("El precio final es de $"+precioFinal);
}







 