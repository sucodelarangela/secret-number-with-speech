const guessEl = document.getElementById('guess');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    guess = e.results[0][0].transcript;
    showGuessOnScreen(guess);
    checkIfGuessIsValid(guess);
}

function showGuessOnScreen(guess) {
    guessEl.innerHTML = `
        <div>Você disse</div>
        <span class="box">${guess}</span>
    `;
}

recognition.addEventListener('end', () => recognition.start());