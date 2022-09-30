const minorValue = 1;
const majorValue = 100;
const secretNumber = generateRandomNumber();

function generateRandomNumber() {
    return parseInt(Math.random() * majorValue + 1);
}

const minorValueEl = document.getElementById('minor-value');
const majorValueEl = document.getElementById('major-value');
minorValueEl.textContent = minorValue;
majorValueEl.textContent = majorValue;

console.log(secretNumber);