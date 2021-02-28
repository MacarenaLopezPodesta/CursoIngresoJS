/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
    var contadorProductos;
    var tipoIngresado;
    var precioIngresado;
    var cantidadIngresada;
    var marcaIngresada;
    var fabricanteIngresada;
    var banderaDelPrimerAlcohol;
    var cantidadAlcoholMasBarato;
    var fabricanteAlcoholMasBarato;
    var precioAlcoholMasBarato;
    var tipoMasCantidad;
    var acumuladorJabon;
    var acumuladorBarbijo;
    var acumuladorAlcohol;
    var contadorJabon;
    var contadorBarbijo;
    var contadorAlcohol;
    var promedio;
  
    banderaDelPrimerAlcohol="es el primer alcohol";
    acumuladorJabon=0;
    acumuladorBarbijo=0;
    acumuladorAlcohol=0;
    contadorJabon=0;
    contadorBarbijo=0;
    contadorAlcohol=0;

    for(contadorProductos=0;contadorProductos<1;contadorProductos++)
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
             
        //b) Del tipo con mas unidades, el promedio por compra
        switch(tipoIngresado)
        {
            case "alcohol":
            //a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
            if (banderaDelPrimerAlcohol=="es el primer alcohol" || (precioIngresado<precioAlcoholMasBarato))
            {
               precioAlcoholMasBarato=precioIngresado;
               cantidadAlcoholMasBarato=cantidadIngresada;
               fabricanteAlcoholMasBarato=fabricanteIngresada;
               banderaDelPrimerAlcohol="no es el primer alcohol";
            }
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
    if (acumuladorAlcohol>acumuladorJabon && acumuladorAlcohol>acumuladorBarbijo) 
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
    //a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
    console.log("Del más barato de los alcohol, la cantidad de unidades es "+cantidadAlcoholMasBarato+" y el fabricante es "+fabricanteAlcoholMasBarato);
    //b) Del tipo con mas unidades, el promedio por compra
    console.log("El tipo con mas unidades es "+tipoMasCantidad+ " y el promedio por compra es "+promedio);
    //c) Cuántas unidades de jabones hay en total
    console.log("Las unidades de jabones hay en total es de "+acumuladorJabon);    
}

