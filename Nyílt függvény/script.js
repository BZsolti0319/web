const forditas = (szoveg) => szoveg.split('').reverse().join('');

    function megfordit() {
        const inputElem = document.getElementById('textInput');
        const outputElem = document.getElementById('output');

        const szoveg = inputElem.value;
        const megforditottSzoveg = forditas(szoveg);

        outputElem.textContent = 'Beírt szöveg: ' + szoveg + ', Fordított szöveg: ' + megforditottSzoveg;
    }