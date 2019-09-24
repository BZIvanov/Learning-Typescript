; let lettersList = (() => {
    let letters = [
        {letter: 'a', isPresent: true}, {letter: 'b', isPresent: true}, {letter: 'c', isPresent: true},
        {letter: 'd', isPresent: true}, {letter: 'e', isPresent: true}, {letter: 'f', isPresent: true},
        {letter: 'g', isPresent: true}, {letter: 'h', isPresent: true}, {letter: 'i', isPresent: true},
        {letter: 'j', isPresent: true}, {letter: 'k', isPresent: true}, {letter: 'l', isPresent: true},
        {letter: 'm', isPresent: true}, {letter: 'n', isPresent: true}, {letter: 'o', isPresent: true},
        {letter: 'p', isPresent: true}, {letter: 'q', isPresent: true}, {letter: 'r', isPresent: true},
        {letter: 's', isPresent: true}, {letter: 't', isPresent: true}, {letter: 'u', isPresent: true},
        {letter: 'v', isPresent: true}, {letter: 'w', isPresent: true}, {letter: 'x', isPresent: true},
        {letter: 'y', isPresent: true}, {letter: 'z', isPresent: true}
    ];

    let attempts = 0;

    function getAttempts() {
        return attempts;
    }

    function getAllLetters() {
        return letters;
    }

    /**
    * This function will set the letter guessed by the user to false and depending on if the letter is part of the real word will increase the wrong attempts by 1
    * @param {string} l The letter which the user provided in the input
    * @param {boolean} isPart Boolean which will let us know if the letter provided by the user is part of the real word
    * @return {void} The function will not return value only increase wrong attempts and set letter to false
    */
    function updateLetter(l, isPart) {
        if (getAttempts() >= 10) {
            return;
        }
        for (let obj of letters) {
            if (!obj.isPresent || obj.letter !== l) {
                continue;
            }
            if (obj.letter === l) {
                obj.isPresent = false;
            }
            if (!isPart) {
                attempts++; 
            }
        }
    }

    /**
    * This function will create span element for each letter object. And depending on if the letter was a previous guess by the user it will add class to the span to make it visible
    * which letters are out of use
    * @param {object} list DOM element to which each span will appand to.
    * @return {void} Manipulating the DOM
    */
    function drawLetters(list) {
        if (getAttempts() >= 10) {
            return;
        }
        list.empty();
        let allLetters = getAllLetters();
        for (let l of allLetters) {
            let span = $(`<span>${l.letter}</span>`);
            if (l.isPresent) {
                span.addClass("isOpen")
            }
            span.appendTo(list);
        }
    }

    /**
    * This function will handle the event from the input element. It will take the provided letter in the input and will check if the letter is part of the real word
    * Then all inputs will be rerendered with updated values
    * @param {object} event The keyup event from the input on letter added by the user
    * @return {void} Manipulating the DOM
    */
    function checkLetter(event) {
        if (getAttempts() >= 10) {
            return;
        }
        let list = $("#lettersList");
        let currentLetter = event.target.value;
        event.target.value = "";
    
        let isLetterInTarget = targets.targetWord.includes(currentLetter);
        updateLetter(currentLetter, isLetterInTarget);
        drawLetters(list);
        
        for (let i = 0; i < targets.maskedWord.length; i++) {
            if (targets.targetWord[i] === currentLetter) {
                targets.maskedWord[i] = currentLetter;
            }
        }
        targets.drawWord(targets.maskedWord);
        showLivesCount();
        draw(getAttempts());
    }

    function showLivesCount() {
        let lives = getAttempts();
        if (lives === 9) {
            $("#lives").text(`You have ${10 - lives} try left.\nBe smart and brave`);
        } else if (lives >= 10) {
            $("#lives").text("Ouch. Try again!");
        } else {
            $("#lives").text(`You have ${10 - lives} lives left.`);
        }
    }

    return {
        getAllLetters,
        updateLetter,
        getAttempts,
        drawLetters,
        checkLetter,
        showLivesCount
    }
})();
