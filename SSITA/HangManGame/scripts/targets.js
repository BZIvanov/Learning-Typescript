; let targets = (() => {
    let [targetWord, category, hint] = gameWord.split("->");
    let maskedWord = maskWord(targetWord);

    /**
    * This function will execute only once initially in the game and will return array of strings for each letter in the original word.
    * The first letter, the last letter and spaces will be revealed to the user and all other letters will be replaced with '-' 
    * @param {string} word The original word which will be used in the game
    * @return {string[]} The function will return array of strings
    */
    function maskWord(word) {
        let result = [];
        for (let i = 0; i < word.length; i++) {
            if (i === 0 || i === word.length - 1) {
                result[i] = word[i];
            } else {
                if (word[i] === ' ') {
                    result[i] = "_";
                } else {
                    result[i] = "-";
                }
            }
        }
    
        return result;
    }

    /**
    * This function will execute multiple times after every guess taken by the user. If the user has already used all 10 attempts it will do nothing.
    * Otherwise it will create input element in the DOM for each letter in the masked word. Letters which were already guessed by the user will show the actual content and get disabled.
    * Inputs corresponding to letters which were not yet guessed by the user will be inputs with keyup event attached to them so the user can take another guess.
    * @param {string[]} word Array of strings
    * @return {string[]} Array of strings where letter which is guessed correctly is now showing that actual letter instead of '-'
    */
    function drawWord(word) {
        if (lettersList.getAttempts() >= 10) {
            return;
        }
        let allInputs = $("#maskedWord");
        allInputs.empty();
        
        for (let i = 0; i < word.length; i++) {
            let input = $("<input>");
            input.attr("type", "text");
            if (word[i] !== "-") {
                input.attr("disabled", true);
                input.attr("value", word[i]);
            } else {
                input.on("keyup", lettersList.checkLetter);
            }
            allInputs.append(input);
        }
    }

    function getHint() {
        return hint;
    }

    function showCategory() {
        $("#category").text(`The chosen category is: ${category}`);
    }

    return {
        targetWord,
        getHint,
        maskedWord,
        drawWord,
        showCategory
    }
})();
