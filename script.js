const button = document.getElementById('myButton');
const title = document.getElementById('mainTitle');
const inputTxt = document.getElementById('inputTxt');
const outputTxt = document.getElementById('outpuTxt');
const setBtn = document.getElementById('setBtn');

click = true
button.addEventListener('click', () => {
    if (click) {
        title.innerText = 'Kattintottál a gombra!';
    }
    else {
        title.innerText = 'Kattints rá újra!';
    }
    click = !click;
})

setBtn.addEventListener('click', () => {
    const inputValue = inputTxt.value;
    if (inputValue === '') {
        outputTxt.innerText = "ir valamit az input mezőbe!";

    }
    else if (inputValue === 'dani' || inputValue === 'Dani') {
        outputTxt.innerText = "hello Dani! igen, ez az én weboldalam, sherlock g holmesé!";
        inputTxt.value = '';
    }
    else {
        outputTxt.innerText = inputValue;
        inputTxt.value = '';

    }

})