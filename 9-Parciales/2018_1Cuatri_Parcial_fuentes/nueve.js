/*
   Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.

*/
function mostrar()
{
   var marcaIngresada;
   var marcaMasPesada;
   var pesoIngresado;
   var temperaturasAlmacenamiento;
   var respuesta;
   var promedioPeso;
   var pesoMaximo;
   var pesoMinimo;
   var banderaDelPrimero;
   var contadorTemperaturaPares;
   var contadorMenosDe0Grados;
   var contadorPeso;
   var acumulador;


   respuesta="si";
   banderaDelPrimero="es el primero";
   contadorTemperaturaPares=0;
   contadorMenosDe0Grados=0;
   contadorPeso=0;
   acumulador=0;

   while(respuesta=="si")
   {
        marcaIngresada=prompt("Ingresa la marca del producto");

        pesoIngresado=prompt("Ingrese el peso");
        pesoIngresado=parseInt(pesoIngresado);
        while(isNaN(pesoIngresado)==true || pesoIngresado<1 || pesoIngresado>100 )
        {
            pesoIngresado=prompt("Error, ingrese el peso");
            pesoIngresado=parseInt(pesoIngresado);
        }
        contadorPeso++;
        acumulador=acumulador+ pesoIngresado;

        temperaturasAlmacenamiento=prompt("Ingrese la temperatura de almacenamiento");
        while(isNaN(temperaturasAlmacenamiento)==true || temperaturasAlmacenamiento<-30 || temperaturasAlmacenamiento>30)
        {
            temperaturasAlmacenamiento=prompt("Error, ingrese la temperatura de almacenamiento");
            temperaturasAlmacenamiento=parseInt(temperaturasAlmacenamiento);
        }


        if (temperaturasAlmacenamiento%2==0) 
        {
          contadorTemperaturaPares++;
        }
        if (temperaturasAlmacenamiento<0) 
        {
          contadorMenosDe0Grados++;
        }
        if(banderaDelPrimero=="es el primero")
        {
         pesoMaximo=pesoIngresado;
         pesoMaximo=parseInt(pesoMaximo);
         marcaMasPesada=marcaIngresada;
         pesoMinimo=pesoIngresado;
         pesoMinimo=parseInt(pesoMinimo);

       	 banderaDelPrimero="no es el primero";
        }else
        {
           if (pesoIngresado<pesoMinimo) 
           {
            pesoMinimo=pesoIngresado;
           }
           if (pesoIngresado>pesoMaximo) 
           {
            pesoMaximo=pesoIngresado;
            marcaMasPesada=marcaIngresada;
           }    
        } 
           
      
      respuesta=prompt("si, para seguir agregando datos");
   }
  
  promedioPeso=acumulador/contadorPeso;

    document.write("<br>La cantidad de temperaturas pares es: "+contadorTemperaturaPares);
	  document.write("<br>La marca del producto más pesado es: "+marcaMasPesada);
    document.write("<br>La cantidad de productos que se conservan a menos de 0 grados es de: "+contadorMenosDe0Grados);
    document.write("<br>El promedio del peso de todos los productos es de: "+promedioPeso);
    document.write("<br>El peso máximo es: "+pesoMaximo);
    document.write("<br>El peso minimo es: "+pesoMinimo);
} 
