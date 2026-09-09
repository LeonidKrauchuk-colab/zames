
const benzVаlue = document.getElementById('benzin');
const outBenz = document.querySelector('.outBenz');
const outOil = document.querySelector('.outOil');
let oil = 40;
const selectedRadioEzda = document.querySelectorAll('input[name="ezda"]');
const selectedRadioTip = document.querySelectorAll('input[name="variantOil"]');
const selectedRadio = document.querySelectorAll('input[type="radio"]');
const consumption = {
    highway: 5,
    sidecar: 7.5
};
const outH3 = document.querySelector(".h3_info");
const selectedSpanBenz = document.querySelector('.out_km');
const selectedSpanNoColiascaKm = document.querySelector('.no_coliasca_km');
const selectedSpanColiascaKm = document.querySelector('.coliasca_km');
const fuel = +benzVаlue.value;
const fun = document.querySelector('.fun');

outOil.innerHTML = zames(benzVаlue.value, oil);
selectedSpanBenz.innerHTML = benzVаlue.value;
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
        case fuel === 0:
            outH3.innerHTML = "Надо заправиться! 😢⛽";
            fun.innerHTML = "Режим эндуро: ищем заправку пешком.";
            break;

        case fuel > 0 && fuel < 2:
            outH3.innerHTML = "Далеко не уедешь! 😢";
            fun.innerHTML = "Бензина мало, зато уверенности полный бак.";
            break;

        case fuel >= 2 && fuel < 6:
            outH3.innerHTML = "Запас хода: 🏍️💨";
            fun.innerHTML = "Если не знаешь, куда ехать — езжай, пока не узнаешь.";
            break;

        case fuel >= 6 && fuel < 12:
            outH3.innerHTML = "Егор, покатай! &#128516 🏍️💨";
            fun.innerHTML = "Километры сами себя не накатают.";
            break;

        case fuel >= 12 && fuel <= 17:
            outH3.innerHTML = "Откуда столько бензина? 🪖🏍️💨";
            fun.innerHTML = "Бензин залит. Теперь осталось выбрать, куда я опять уеду.";
            break;

        case fuel > 17:
            outH3.innerHTML = "Офигеть, полный бак! ⛽🔥";
            fun.innerHTML = "Полный бак, пустая голова — идеальное состояние для поездки.";
            break;
    }
    selectedSpanBenz.innerHTML = benzVаlue.value;
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
