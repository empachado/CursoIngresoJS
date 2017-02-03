/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var sueldo;
	var resultado;
	var porcentaje;
	sueldo = document.getElementById("sueldo").value;
	sueldo = parseInt(sueldo);
	resultado = document.getElementById("resultado").value;
	resultado = parseInt(resultado);
	porcentaje = sueldo * 10 / 100;
	resultado = sueldo + porcentaje;
	document.getElementById("resultado").value = resultado;
}
