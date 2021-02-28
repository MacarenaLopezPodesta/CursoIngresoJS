function mostrar()
{
	var edad;

    edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

     
     if (edad>17) 
     {
        alert("es mayor");
     }
     else
     {
     	if (edad<13) 
        {
     	     alert("es niño");
        }else
        {
             alert("es adolescente");
        }
     }
      
}//FIN DE LA FUNCIÓN