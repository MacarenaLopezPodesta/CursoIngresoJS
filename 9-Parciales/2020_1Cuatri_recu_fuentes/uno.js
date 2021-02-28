/*
Enunciado:
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/
function mostrar()
{
   var tipoIngresado;
   var precioIngresado;
   var cantidadIngresada;
   var marcaIngresada;
   var fabricanteIngresada;
   var contadorProductos;
   var banderaDelPrimerJabon;
   var precioJabonMasCaro;
   var cantidadJabonMasCaro;
   var fabricanteJabonMasCaro;
   var banderaDelPrimerJabon;
   var acumuladorAlcohol;
   var contadorAlcohol;
   var acumuladorJabon;
   var contadorJabon;
   var acumuladorBarbijo;
   var contadorBarbijo;
   var tipoMasCantidad;

   banderaDelPrimerJabon=1;

   for(contadorProductos=0;contadorProductos<5;contadorProductos++)
   {
   	    tipoIngresado=prompt("Ingrese el tipo producto #"+contadorProductos);
        while(isNaN(tipoIngresado)==false||tipoIngresado!="barbijo" && tipoIngresado!="jabon" && tipoIngresado!="alcohol")
        {
            tipoIngresado=prompt("Error. Ingrese el tipo de producto");
        }

        precioIngresado=prompt("Ingrese el precio");
        precioIngresado=parseInt(precioIngresado);
        while(isNaN(precioIngresado)==true || precioIngresado<100 || precioIngresado>300)
        {
           precioIngresado=prompt("Error. Ingrese el precio");
           precioIngresado=parseInt(precioIngresado); 
        }

        cantidadIngresada=prompt("Ingrese la cantidad de unidades");
        cantidadIngresada=parseInt(cantidadIngresada);
        while(isNaN(cantidadIngresada)==true || cantidadIngresada<1 || cantidadIngresada>1000)
        {
           cantidadIngresada=prompt("Error. Ingrese la cantidad de unidades");
           cantidadIngresada=parseInt(cantidadIngresada); 
        }

        marcaIngresada=prompt("Ingrese la marca");
        while(isNaN(marcaIngresada)==false)
        {
            marcaIngresada=prompt("Error. Ingrese la marca");
        }

        fabricanteIngresada=prompt("Ingrese el fabricante");
        while(isNaN(fabricanteIngresada)==false)
        {
            fabricanteIngresada=prompt("Error. Ingrese el fabricante");
        } 
        //a) Del más caro de los jabones, la cantidad de unidades y el fabricante
        if (tipoIngresado=="jabon") 
        {
            if (banderaDelPrimerJabon==1) 
            {
               precioJabonMasCaro=precioIngresado;
               cantidadJabonMasCaro=cantidadIngresada;
               fabricanteJabonMasCaro=fabricanteIngresada;
               banderaDelPrimerJabon=0;
            }else
            {
                if (precioIngresado>precioJabonMasCaro) 
                {
                   precioJabonMasCaro=precioIngresado;
                   cantidadJabonMasCaro=cantidadIngresada;
                   fabricanteJabonMasCaro=fabricanteIngresada;
                }
            }
        } 
        //b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
        switch(tipoIngresado)
        {
            case "alcohol":
            acumuladorAlcohol=acumuladorAlcohol+cantidadIngresada;
            contadorAlcohol++;
            break;

            case "jabon":
            acumuladorJabon=acumuladorJabon+cantidadIngresada; //c) Cuántas unidades de jabones hay en total
            contadorJabon++;
            break;

            case "barbijo":
            acumuladorBarbijo=acumuladorBarbijo+cantidadIngresada;
            contadorBarbijo++;
            break;
        }             
   }
   if (acumuladorAlcohol>acumuladorJabon || acumuladorAlcohol>acumuladorBarbijo) 
    {
        tipoMasCantidad="alcohol";
        promedio=acumuladorAlcohol/contadorAlcohol;
    }else
    {
        if (acumuladorBarbijo>acumuladorJabon) 
        {
            tipoMasCantidad="barbijo";
            promedio=acumuladorBarbijo/contadorBarbijo;
        }else
        {
            tipoMasCantidad="jabon";
            promedio=acumuladorJabon/contadorJabon;
        }
    }

    //a) Del más caro de los jabones, la cantidad de unidades y el fabricante
     console.log("Del más caro de los jabones, la cantidad de unidades es "+cantidadJabonMasCaro+" y el fabricante es "+fabricanteJabonMasCaro);
    //b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
    console.log("El tipo con mas unidades es "+tipoMasCantidad+ " y el promedio por compra es "+promedio);
    //c) Cuántas unidades de Barbijos se compraron en total
    console.log("Las unidades de Barbijos que hay en total es de "+acumuladorBarbijo);
}
