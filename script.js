
let benzVаlue = document.getElementById('benzin');
let outBenz = document.querySelector('.outBenz');
let outOil = document.querySelector('.outOil');
let oil = 40;
const selectedRadioEzda = document.querySelectorAll('input[name="ezda"]');
const selectedRadioTip = document.querySelectorAll('input[name="variantOil"]');
const selectedRadio = document.querySelectorAll('input[type="radio"]');
const consumption = {
    highway: 5,
    sidecar: 7.5
};
const outH3 = document.querySelector(".h3_info");
const selectedSpanBenz = document.querySelectorAll('.out_km');
const selectedSpanNoColiascaKm = document.querySelector('.no_coliasca_km');
const selectedSpanColiascaKm = document.querySelector('.coliasca_km');
const fuel = +benzVаlue.value;


outOil.innerHTML = zames(benzVаlue.value, oil);
selectedSpanBenz[0].innerHTML = benzVаlue.value;
selectedSpanBenz[1].innerHTML = benzVаlue.value;
selectedSpanNoColiascaKm.innerHTML = calculateRange(fuel, 'highway');
selectedSpanColiascaKm.innerHTML = calculateRange(fuel, 'sidecar');

function zames(a, b) {
    if (selectedRadioTip[0].checked & selectedRadioEzda[0].checked) {
        oil = 25;
        b = oil
    }
    if (selectedRadioTip[0].checked & selectedRadioEzda[1].checked) {
        oil = 20;
        b = oil
    }
    if (selectedRadioTip[1].checked & selectedRadioEzda[1].checked) {
        oil = 25;
        b = oil
    }
    if (selectedRadioTip[1].checked & selectedRadioEzda[0].checked) {
        oil = 33;
        b = oil
    }
    return Math.round((a / b) * 1000);
}

for (let index = 0; index < selectedRadio.length; index++) {
    selectedRadio[index].onclick = function () {
        outBenz.innerHTML = benzVаlue.value;
        outOil.innerHTML = zames(benzVаlue.value, oil);
    }
}

benzVаlue.oninput = function () {
    const fuel = +benzVаlue.value;


    switch (true) {
        case fuel < 1:
            outH3.innerHTML = "Далеко не уедешь!"
            break;

        case fuel >= 1 && fuel < 6:
            outH3.innerHTML = "Запас хода:";
            break;

        case fuel >= 6 && fuel <= 11:
            outH3.innerHTML = "Егор, покатай!";
            break;

        case fuel > 11:
            outH3.innerHTML = "Откуда столько бензина?"
            break;
    }
    selectedSpanBenz[0].innerHTML = benzVаlue.value;
    selectedSpanBenz[1].innerHTML = benzVаlue.value;
    selectedSpanNoColiascaKm.innerHTML = calculateRange(fuel, 'highway');
    selectedSpanColiascaKm.innerHTML = calculateRange(fuel, 'sidecar');
    outBenz.innerHTML = benzVаlue.value;
    outOil.innerHTML = zames(benzVаlue.value, oil);
}

function calculateRange(fuel, mode) {
    const fuelConsumption = consumption[mode];
    if (!fuelConsumption || fuel <= 0) {
        return 0;
    }
    return Math.round((fuel / fuelConsumption) * 100);
}
