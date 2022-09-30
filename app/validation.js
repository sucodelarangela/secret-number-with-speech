function checkIfGuessIsValid(guess) {
    const number = +guess;

    if (numberIsInvalid(number)) {
        guessEl.innerHTML += '<div>Valor inválido</div>';
        return;
    }

    if (numberIsGreaterOrLowerThanAllowed(number)) {
        guessEl.innerHTML += `<div>Valor inválido. Fale um número entre ${minorValue} e ${majorValue}</div>`;
        return;
    }

    if (number === secretNumber) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${secretNumber}</h3 >
            <button onClick='window.location.reload()'>Jogar novamente</button>
        `;
    } else if (number > secretNumber) {
        guessEl.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `;
    } else {
        guessEl.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `;
    }
}

function numberIsInvalid(number) {
    return Number.isNaN(number);
}

function numberIsGreaterOrLowerThanAllowed(number) {
    return number > majorValue || number < minorValue;
};;