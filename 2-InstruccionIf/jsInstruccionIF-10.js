function mostrar()
{
    var numeroRandom=Math.floor(Math.random() * 10) + 1;
	console.log("el random es: "+numeroRandom);

    if (numeroRandom>8) 
    {
    	alert("EXCELENTE");
    }
    else
    {
        if (numeroRandom>3) 
        {
        	alert("APROBÓ");
        }else
        {
            alert("Vamos, la proxima se puede")
        }
    }
}//FIN DE LA FUNCIÓN