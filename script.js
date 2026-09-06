
let benzVаlue=document.getElementById('benzin');
let outBenz=document.querySelector('.outBenz');
let outOil=document.querySelector('.outOil');
let oil=40;
const selectedRadioEzda = document.querySelectorAll('input[name="ezda"]');
const selectedRadioTip = document.querySelectorAll('input[name="variantOil"]');
const selectedRadio=document.querySelectorAll('input[type="radio"]');

outOil.innerHTML=zames(benzVаlue.value,oil);

function zames(a,b){
    if (selectedRadioTip[0].checked & selectedRadioEzda[0].checked) {
        oil=25;
        b=oil
    }
    if (selectedRadioTip[0].checked & selectedRadioEzda[1].checked) {
        oil=20;
        b=oil
    }
    if (selectedRadioTip[1].checked & selectedRadioEzda[1].checked) {
        oil=25;
        b=oil
    }
    if (selectedRadioTip[1].checked & selectedRadioEzda[0].checked) {
        oil=33;
        b=oil
    }
return Math.round((a/b)*1000);
} 

for (let index = 0; index < selectedRadio.length; index++) {
    selectedRadio[index].onclick=function () {
    outBenz.innerHTML = benzVаlue.value;
    outOil.innerHTML=zames(benzVаlue.value,oil);   
    }   
}

benzVаlue.oninput = function(){
    outBenz.innerHTML = benzVаlue.value;
    outOil.innerHTML=zames(benzVаlue.value,oil);

}


