function total()
{
	var t1=parseInt(document.getElementById("input1").value);
	var t2=parseInt(document.getElementById("input2").value);
	var t3=parseInt(document.getElementById("input3").value);
	var result=(t1*t2*t3)/100+t3;
	document.getElementById("diiv").innerHTML=+result;
}
document.getElementById("btn").addEventListener("click",total);
	
	