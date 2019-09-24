; let gameWord = (() => {
    let wordsList = [ "bulgaria->Geography->Country name",
    "spiderman->Entertainment->Movie name", 
    "vitosha->Geography->Mountain name", 
    "angular->Programming->JS Framework", 
    "transperant->Design->State of color",
    "iron man->Entertainment->Movie name",
    "snow white->Entertainment->Movie name",
];

    let randomIndex = Math.floor(Math.random() * wordsList.length);

    return wordsList[randomIndex];
})();
