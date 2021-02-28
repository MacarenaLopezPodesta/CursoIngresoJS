/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var descripcionProducto;
	var precio;
	var aumento;
    var precioConAumento;

	descripcionProducto=prompt("ingrese descripcion del producto: ");

    precio=document.getElementById('txtIdNombre').value;
    precio=parseInt(precio);

    aumento=precio*30/100;
    precioConAumento=precio+aumento;

    alert("la descripcion de producto es: "+descripcionProducto+"y el precio total: "+precioConAumento);

}
