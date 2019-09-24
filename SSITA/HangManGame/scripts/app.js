; function start() {
    // the DOM element which holds the div where each letter from the alphabet is rendered
    let list = $("#lettersList");
    
    // here we will initially render all the letters from the alphabet
    lettersList.drawLetters(list);
    // here we will initially render all the inputs on which user can provide a letter
    targets.drawWord(targets.maskedWord);
    // here we will show the category to which the game word belongs
    targets.showCategory();
    // here we will show the remaining attempts the user can take
    lettersList.showLivesCount();

    // Below rows click events are attached to the three buttons in the DOM
    let hintButton = $("#getHint");
    hintButton.on("click", buttons.showHint);
    let playAgainButton = $("#playAgain");
    playAgainButton.on("click", buttons.playAgain);
    let godMode = $("#godMode");
    godMode.on("click", buttons.godMode);
}

