function mostrar()

{
	var edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
    //if (edad==15)
    //	alert("niña bonita");
    if (edad>17) 
    {
    	alert("es mayor");
    }
  }