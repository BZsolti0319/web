function osszead(a, b) {
    return a + b;
}

function kivonas(a, b) {
    return a - b;
}

function szorzas(a, b) {
    return a * b;
}

function osztas(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        console.error('Null�val val� oszt�s!');
        return NaN;
    }
}
function szamol(alapmuvelet, szam1, szam2) {
    return alapmuvelet(szam1, szam2);
}

let result = szamol(osszead, 5, 3);
console.log('Az �sszead�s eredm�nye: 8, a sz�molt �rt�k: ' + result);

result = szamol(kivonas, 8, 2);
console.log('A kivon�s eredm�nye: 6, a sz�molt �rt�k: ' + result);

result = szamol(szorzas, 4, 6);
console.log('A szorz�s eredm�nye: 24, a sz�molt �rt�k: ' + result);

result = szamol(osztas, 9, 3);
console.log('Az oszt�s eredm�nye: 3, a sz�molt �rt�k: ' + result);
