function calculo() {
	var ling1 = document.getElementById('ling1');
	var cost = document.getElementById('cost');
	var pic = document.getElementById('pic');
	var frang = document.getElementById('frang');
	var oc1 = document.getElementById('oc1');
	var oc2 = document.getElementById('oc2');
	var oc3 = document.getElementById('oc3');
	var oc4 = document.getElementById('oc4');
	var vin = document.getElementById('vin');
	var cerv = document.getElementById('cerv');
	var resu = document.getElementById('resu');
	var car = document.getElementById('car');
	var temp = document.getElementById('temp');

	var Qtd = document.getElementById('Qtd');

	var resultado = (ling1 + cost + pic + frang + oc1 + oc2 + oc3 + oc4 + vin + cerv + resu + car + temp) / Qtd;
	
	
	return resultado;

}
document.getElementById("calc1").innerHTML = resultado;
function somat() {
	var ling1 = document.getElementById('ling1');
	var cost = document.getElementById('cost');
	var pic = document.getElementById('pic');
	var frang = document.getElementById('frang');
	var oc1 = document.getElementById('oc1');
	var oc2 = document.getElementById('oc2');
	var oc3 = document.getElementById('oc3');
	var oc4 = document.getElementById('oc4');
	var vin = document.getElementById('vin');
	var cerv = document.getElementById('cerv');
	var resu = document.getElementById('resu');
	var car = document.getElementById('car');
	var temp = document.getElementById('temp');

	var total = (ling1 + cost + pic + frang + oc1 + oc2 + oc3 + oc4 + vin + cerv + resu + car + temp);

	return total;
	
}
document.getElementById("calc2").innerHTML = total;

