const guessEl = document.getElementById('guess');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    guess = e.results[0][0].transcript;
    console.log(e.target.lang);
    showGuessOnScreen(guess);
}

function showGuessOnScreen(guess) {
    guessEl.innerHTML = `
        <div>Você disse</div>
        <span class="box">${guess}</span>
    `;
}