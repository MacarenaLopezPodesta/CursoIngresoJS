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
    var fabricanteIngresado;
    var contadorAlcohol;
    var precioBaratoAlcohol;
    var cantidadBaratoALcohol;
    var fabricanteBaratoAlcohol;
    var contadorBarbijo;
    var acumuladorBarbijo;
    var contadorJabon;
    var acumuladorJabon;
    var acumuladorAlcohol;
    var tipoMasUnidades;
    var promedio;

    contadorAlcohol=0;
    contadorBarbijo=0;
    acumuladorBarbijo=0;
    contadorJabon=0;
    acumuladorJabon=0;
    acumuladorAlcohol=0;


    for(contadorProductos=0;contadorProductos<5;contadorProductos++)
    {
        tipoIngresado=prompt("Ingrese el tipo de producto: barbijo , jabon o alcohol");
        while(isNaN(tipoIngresado)==false || tipoIngresado!="barbijo" && tipoIngresado!="jabon" && tipoIngresado!="alcohol")
        {
            tipoIngresado=prompt("ERROR.Ingrese el tipo de producto: barbijo , jabon o alcohol");
        }

        precioIngresado=prompt("Ingrese el precio del producto: entre 100 y 300");
        while(isNaN(precioIngresado)==true || precioIngresado<100 || precioIngresado>300)
        {
            precioIngresado=prompt("ERROR.Ingrese el precio del producto: entre 100 y 300");
        }
        precioIngresado=parseFloat(precioIngresado);

        cantidadIngresada=prompt("Ingrese la cantidad: no puede ser 0 o negativo y no debe superar las 1000 unidades");
        cantidadIngresada=parseInt(cantidadIngresada);
        while(isNaN(cantidadIngresada)==true || cantidadIngresada<1 || cantidadIngresada>1000)
        {
            cantidadIngresada=prompt("ERROR.Ingrese la cantidad: no puede ser 0 o negativo y no debe superar las 1000 unidades");
            cantidadIngresada=parseInt(cantidadIngresada);
        }

        marcaIngresada=prompt("Ingrese la marca");
        while(isNaN(marcaIngresada)==false)
        {
            marcaIngresada=prompt("ERROR.Ingrese la marca");
        }

        fabricanteIngresado=prompt("Ingrese el fabricante");
        while(isNaN(fabricanteIngresado)==false)
        {
            fabricanteIngresado=prompt("ERROR.Ingrese el fabricanteIngresado");
        }
        //b) Del tipo con mas unidades, el promedio por compra
        //c) Cuántas unidades de jabones hay en total
        switch(tipoIngresado)
        {
            case "alcohol":
            //a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
            contadorAlcohol++;
            acumuladorAlcohol=acumuladorAlcohol+cantidadIngresada;
            if (contadorAlcohol==1 || precioIngresado<precioBaratoAlcohol) 
            {
                precioBaratoAlcohol=precioIngresado;
                cantidadBaratoALcohol=cantidadIngresada;
                fabricanteBaratoAlcohol=fabricanteIngresado;
            }

            break;

            case "jabon":
            contadorJabon++;
            acumuladorJabon=acumuladorJabon+cantidadIngresada;
            break;

            case "barbijo":
            contadorBarbijo++;
            acumuladorBarbijo=acumuladorBarbijo+cantidadIngresada;
            break;
        }
    }  

    if (acumuladorAlcohol>acumuladorBarbijo && acumuladorAlcohol>acumuladorJabon) 
    {
        tipoMasUnidades="alcohol";
        promedio=acumuladorAlcohol/contadorAlcohol;
    }else
    {
        if (acumuladorBarbijo>acumuladorJabon) 
        {
            tipoMasUnidades="barbijo";
            promedio=acumuladorBarbijo/contadorBarbijo;
        }else
        {
            tipoMasUnidades="jabon";
            promedio=acumuladorJabon/contadorJabon;
        }
    }



    //a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
    if (contadorAlcohol==0) 
    {
        console.log("No hay alcohol");
    }else
    {
        console.log("Del más barato de los alcohol, la cantidad de unidades es "+cantidadBaratoALcohol+" y el fabricante es "+fabricanteBaratoAlcohol)
    }
    //b) Del tipo con mas unidades, el promedio por compra
    console.log("el tipo con mas unidades es "+tipoMasUnidades+" y el promedio por compra es: "+promedio);
    // Cuántas unidades de jabones hay en total
    if (contadorJabon==0) 
    {
        console.log("No hay jabones");
    }else
    {
        console.log("La cantidad de jabones que hay en total es: "+acumuladorJabon);
    }
}

