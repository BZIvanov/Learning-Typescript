; let buttons = (() => {
    function showHint() {
        let text = targets.getHint();
        let hintElement = $("#hint");
        hintElement.text(`The hint is: ${text}`);
    }

    function playAgain() {
        location.reload();
    }

    function godMode() {
        let inputs = $("#maskedWord input");
        let realWord = targets.targetWord;
        for (let i = 1; i < realWord.length; i++) {
            if (inputs[i].value === "") {
                inputs[i].value = realWord[i];
            }
        }
    }

    return {
        showHint,
        playAgain,
        godMode
    }
})();
