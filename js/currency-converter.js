var usdElement = document.getElementById('usd');
var gbpElement = document.getElementById('gbp');
var cadElement = document.getElementById('cad');
var eurElement = document.getElementById('eur');
var audElement = document.getElementById('aud');

var usd = {
    usd: 1,
    gbp: 2.03032,
    cad: 1.01941,
    eur: 1.41544,
    aud: 0.88297
}

var gbp = {
    gbp: 1,
    usd: 0.49246,
    cad: 0.50221,
    eur: 0.69714,
    aud: 0.43497
}

var cad = {
    cad: 1,
    usd: 0.98054,
    gbp: 1.99169,
    eur: 1.38814,
    aud: 0.86613
}

var eur = {
    eur: 1,
    usd: 0.70641,
    gbp: 1.43448,
    cad: 0.72037,
    aud: 0.62382
}

var aud = {
    aud: 1,
    usd: 1.13262,
    gbp: 2.29964,
    cad: 1.15498,
    eur: 1.60329
}


for (var i = 0; i < document.getElementsByTagName('input').length; i++) {
        document.getElementsByTagName('input')[i].addEventListener('keyup', function() {
        convert(this);
    }, false);
        document.getElementsByTagName('input')[i].addEventListener('change', function() {
        convert(this);
    }, false);
}


var convert = function(theElement) {
    var el = theElement;
    var currency = window[el.id];

    usdElement.value = el.value * currency.usd;
    gbpElement.value = el.value * currency.gbp;
    cadElement.value = el.value * currency.cad;
    eurElement.value = el.value * currency.eur;
    audElement.value = el.value * currency.aud;
}