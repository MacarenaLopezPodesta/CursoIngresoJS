/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
/*function mostrar()
{	// declarar variables
   var banderaDelPrimero;
   var numeroMinimo;
   var numeroMaximo;
   var numeroIngresado;
   var contador;
   var respuesta;

   banderaDelPrimero="es el primero"
   contador=0;
   respuesta="si";
   numeroMaximo=0;
   numeroMinimo=0;

   while(respuesta=="si")
   {
   	 contador++;
   	 numeroIngresado=prompt("Ingrese un numero #"+contador);
   	 numeroIngresado=parseInt(numeroIngresado);
     while(isNaN(numeroIngresado)==true)
     {
     	numeroIngresado=prompt("Error,ingrese un numero #"+contador);
   	    numeroIngresado=parseInt(numeroIngresado);
     }
      while(banderaDelPrimero=="es el primero")
     {
        numeroMaximo=numeroIngresado;
        numeroMaximo=parseInt(numeroMaximo);
       	numeroMinimo=numeroIngresado;
       	numeroMinimo=parseInt(numeroMinimo);

       	banderaDelPrimero="no es el primero";
     }
      if (numeroIngresado<numeroMinimo) 
      {
      	numeroMinimo=numeroIngresado;
      }

      if (numeroIngresado>numeroMaximo) 
      {
      	numeroMaximo=numeroIngresado;
      }

     respuesta=prompt("si, para seguir ingresando numeros");

   }

   txtIdMaximo.value=numeroMaximo;
   txtIdMinimo.value=numeroMinimo;
	

	
}//FIN DE LA FUNCIÓN
*/
//while 09 bis( pedir nombre y edad,informar nombre de la persona mas joven y de la mas vieja)
function mostrar()
{
    var nombreIngresado;
    var edadIngresada;
    var nombreMasJoven;
    var nombreMasVieja;
    var respuesta;
    var banderaDelPrimero;
    var edadMasJoven;
    var edadMasVieja;
    
    respuesta="si";
    banderaDelPrimero="es el primero";

    while(respuesta=="si")
    {
      nombreIngresado=prompt("Ingrese su nombre");

      edadIngresada=prompt("Ingrese su edad");
      edadIngresada=parseInt(edadIngresada);
      while(isNaN(edadIngresada)==true)
      {
        edadIngresada=prompt("Error, ingrese su edad");
        edadIngresada=parseInt(edadIngresada);
      }

      if(banderaDelPrimero=="es el primero")
      {
         edadMasVieja=edadIngresada;
         nombreMasVieja=nombreIngresado;
         edadMasJoven=edadIngresada;
         nombreMasJoven=nombreIngresado;

         banderaDelPrimero="no es el primero";
      }else
      {
          if (edadIngresada<edadMasJoven) 
          {
            edadMasJoven=edadIngresada;
            nombreMasJoven=nombreIngresado;
          }
          if(edadIngresada>edadMasVieja)
          {
            edadMasVieja=edadIngresada;
            nombreMasVieja=nombreIngresado;
          }
      }
      
      respuesta=prompt("si, para seguir ingresando datos");
    }
    
    txtIdMaximo.value=nombreMasVieja;
    txtIdMinimo.value=nombreMasJoven;
}
