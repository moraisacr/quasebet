function placeBet() {
    let sport = document.getElementById("sport").value;
    let team = document.getElementById("team").value;
    let betAmount = document.getElementById("betAmount").value;
    let resultText = document.getElementById("result");

    if (!betAmount || betAmount < 10) {
        resultText.innerHTML = "O valor mínimo da aposta é R$10.";
        resultText.style.color = "red";
        return;
    }

    let winningOutcome = Math.random();
    let betWon = winningOutcome > 0.5;

    if (betWon) {
        let winnings = (betAmount * 2).toFixed(2);
        resultText.innerHTML = `VOCE QUASE GANHOU. QUASE GANHOU $${winnings}.`;
        resultText.style.color = "#00ffcc";
    } else {
        resultText.innerHTML = `VOCE QUASE GANHOU! Tente novamente!`;
        resultText.style.color = "#ff0000";
    }
}
