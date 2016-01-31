var fortunes = new Array(
    'You will marry your lover.',
    'You will become great if you believe in yourself.',
    'Our deeds determine us, as much as we determine our deeds.',
    'A dream you have will come true.'
);

document.getElementById('fortune-text').innerHTML = fortunes[Math.floor(Math.random() * 4)];