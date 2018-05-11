window.onload = function(){
	document.getElementById("boton").onclick=function()
	{
	leerjson();	
	}
}


function leerjson()
{
		var cabeceranoticia;
		$.ajax(
		{
			url:'data//primer.json',
			type:'GET',
			dataType:'text',
			success:function(data){
				cabeceranoticia = data.cabecera1;
				alert("La cabecera es: " + cabeceranoticia);
			}	
		})
			function a(data){
				cabeceranoticia = data.cabecera1;
			alert("La cabecera es: " + cabeceranoticia);
			$("#salida").html(cabeceranoticia);
			}

};


