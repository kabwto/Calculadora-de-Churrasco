function calculo() {
	var ling1 = document.getElementById('ling1').value;
	var cost = document.getElementById('cost').value;
	var pic = document.getElementById('pic').value;
	var frang = document.getElementById('frang').value;
	var oc1 = document.getElementById('oc1').value;
	var oc2 = document.getElementById('oc2').value;
	var oc3 = document.getElementById('oc3').value;
	var oc4 = document.getElementById('oc4').value;
	var vin = document.getElementById('vin').value;
	var cerv = document.getElementById('cerv').value;
	var resu = document.getElementById('resu').value;
	var carv = document.getElementById('carv').value;
	var temp = document.getElementById('temp').value;

	var Qtd = document.getElementById('Qtd');

	var resultado = (ling1 + cost + pic + frang + oc1 + oc2 + oc3 + oc4 + vin + cerv + resu + carv + tempe) / Qtd;
	
	document.getElementById("resultado").innerHTML = resultado;

}
function somat() {
	var ling1 = document.getElementById('ling1').value;
	var cost = document.getElementById('cost').value;
	var pic = document.getElementById('pic').value;
	var frang = document.getElementById('frang').value;
	var oc1 = document.getElementById('oc1').value;
	var oc2 = document.getElementById('oc2').value;
	var oc3 = document.getElementById('oc3').value;
	var oc4 = document.getElementById('oc4').value;
	var vin = document.getElementById('vin').value;
	var cerv = document.getElementById('cerv').value;
	var resu = document.getElementById('resu').value;
	var carv = document.getElementById('carv').value;
	var tempe = document.getElementById('tempe').value;

	var total = (ling1 + cost + pic + frang + oc1 + oc2 + oc3 + oc4 + vin + cerv + resu + carv + tempe);


	document.getElementById("total").innerHTML = total;

}

