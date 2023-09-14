function multiplyBy(){
	num1 = document.getElementById("firstNumber").ariaValueMax;
	num2 = document.getElementById("secondNumber").ariaValueMax;
	document.getElementById("result").innerHTML = num1* num2
}

function divideBy(){ 
	num1 = document.getElementById("firstNumber").ariaValueMax;
	num2 = document.getElementById("secondNumber");
	document.getElementById("result").innerHTML = num1/num2;
}