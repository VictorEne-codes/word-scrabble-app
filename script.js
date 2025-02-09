const words = [
    { word: "javascript", hint: "A programming language for web development" },
    { word: "developer", hint: "A person who writes code" },
    { word: "function", hint: "A reusable block of code" },
    { word: "variable", hint: "A container for storing values" },
    { word: "frontend", hint: "The visible part of a website" }
];

let currentWord = "";
let scrabbledWord = "";
let currentHint = "";
let score = 0;

function scrabbleWord(word) {
    let letters = word.split("");
    for (let i = letters.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters.join("");
}

function loadNewWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex].word;
    currentHint = words[randomIndex].hint;
    scrabbledWord = scrabbleWord(currentWord);

    document.getElementById("scrabbled-word").innerText = `Guess the word: ${scrabbledWord}`;
    document.getElementById("hint").innerText = "";
    document.getElementById("message").innerText = "";
    document.getElementById("guess-input").value = "";
}

function showHint() {
    document.getElementById("hint").innerText = `Hint: ${currentHint}`;
}

function checkGuess() {
    const userGuess = document.getElementById("guess-input").value.toLowerCase();
    if (userGuess === currentWord) {
        score++;
        document.getElementById("score").innerText = score;
        document.getElementById("message").innerText = "Correct! Loading next word...";
        setTimeout(loadNewWord, 1000);
    } else if (userGuess == ""){
        document.getElementById("message").innerText = "You must enter a guess";
    }
    else {
        document.getElementById("message").innerText = "Incorrect, try again!";
    }
}

window.onload = loadNewWord;