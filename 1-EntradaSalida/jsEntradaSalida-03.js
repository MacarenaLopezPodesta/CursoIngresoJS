/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/

function mostrar()
{
	var descripcionProducto;
	var precio;
	var aumento;
    var precioConAumento;

    precio=document.getElementById('txtIdNombre').value;
    precio=parseInt(precio);

    aumento=precio*30/100;
    precioConAumento=precio+aumento;

    alert("el precio es : "+precio+" y el precio total: "+precioConAumento);

}


