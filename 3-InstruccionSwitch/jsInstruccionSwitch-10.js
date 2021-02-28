function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado =txtIdDestino.value;

	switch(estacionIngresada)
	{
		case "Invierno":
		      switch(destinoIngresado)
		      {
                case "Bariloche":
                alert("se viaja");
                break;

                default:
                alert("No se viaja");
                break;
		      }
	    break;

	    case "Verano":
	         switch(destinoIngresado)
	         {
	         	case "Mar del plata":
	         	case "Cataratas":
	         	alert("se viaja");
	         	break;

	         	default:
	         	alert("No se viaja");
	         	break;
	         }
	    break;

	    case "Otoño":
        alert("se viaja");
		break;

		case "Primavera":
		     switch(destinoIngresado)
		     {
		     	case "Bariloche":
		     	alert("No se viaja");
		     	break;

		     	default:
		     	alert("se viaja");
		     	break;
		     }
		break;

	}

	/*switch(estacionIngresada)
	{
		case "Invierno":
		if (destinoIngresado=="Bariloche") 
		{
			alert("se viaja");
		}else
		{
			alert("No se viaja");
		}
	    break;

	    case "Verano":
	    if (destinoIngresado== "Mar del plata" || destinoIngresado== "Cataratas") 
	    {
             alert("se viaja");
	    }else
		{
			alert("No se viaja");
		}
	    break;

	    case "Otoño":
        alert("se viaja");
		break;

		case "Primavera":
		if (destinoIngresado=="Bariloche") 
		{
			alert("No se viaja");
		}else
		{
			alert("se viaja");
		}
		break;
    


	}
   */
}//FIN DE LA FUNCIÓN