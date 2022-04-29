$(document).ready(function(){

var sayilar = document.querySelectorAll(".sayilar");

var ekran= document.getElementById("ekran");
var hesapla = document.getElementById("hesapla");

var sil= document.getElementById("sil");

if (ekran.value == "") {

ekran.value=0;

}
else{




}


for(var i=0; i< sayilar.length; i++){

sayilar[i].addEventListener("click",yazdir);


}

function yazdir(){




if(ekran.value == "0"){

ekran.value='';


}
else{
document.getElementById("ekran").value+=this.value;
//ekran.value = ekran.value + this.value;







}

}

hesapla.addEventListener("click",hesap);

function hesap(){

  ekran.value = eval(ekran.value);


}


sil.addEventListener("click",silam);

function silam(){

ekran.value= "";


}



$('.sayilar').on("mousedown",function(){

var kactane= $('#ekran').val();
var kac= kactane.length;

if(kactane[0] <= "+"){

alert("başta + işareti olamaz");

ekran.value="";

}
else if (kactane[0] <= "-") {
	alert("başta - işareti olamaz");

ekran.value="";

}

else if (kactane[0] <= "*") {
	alert("başta * işareti olamaz");

ekran.value="";

}

else if(kactane[0] <= "/"){
	alert("başta / işareti olamaz");

ekran.value="";

}




if (kac >=15) {

alert("karakter uzunluğunu aştınız");

}



});




$('button').on("mouseover",function(){


$('button').animate({"background-color":"yellow"},2000);



});

$('button').on("mouseout",function(){


$('button').animate({"background-color":"green"},2000);



});

});