
let benzVаlue=document.getElementById('benz');
console.log(benzVаlue.value);
let outBenz=document.querySelector('.outBenz');
let outOil=document.querySelector('.outOil');
console.log(outOil);
const oilProstoeEzda=40;


benzVаlue.oninput = function() {

    outBenz.innerHTML = benzVаlue.value;
    
outOil.innerHTML=+benzVаlue.value*oilProstoeEzda;

  };