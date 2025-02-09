Word Scrabble Game

Overview
The Word Scrabble Game is a simple interactive game built using HTML, CSS, and JavaScript. It randomly selects a word, scrabbles it, and prompts the player to guess the original word. The game includes a hint system and score tracking.

Features
Random Word Selection – Picks a word from a predefined list.
scrabbled Words – Uses the Fisher-Yates algorithm for shuffling.
Hint System – Provides a hint about the word.
Answer Validation – Checks if the player's guess is correct.
Score Tracking – Keeps track of correct guesses.

How to Play
A scrabbled word will appear on the screen.
Type your guess into the input field.
Click the Submit button to check your answer.
If correct, a new scrabbled word appears, and your score increases.
If incorrect, try again!
Click the Hint button if you need a clue.


File Structure
/word-scrabble-game
│── index.html   # Main HTML file
│── script.js    # JavaScript logic (embedded in HTML for simplicity)
│── style.css    # (Optional) Add styling for a better UI

Technologies Used
HTML – Structure of the game
CSS (optional) – Styling for a better appearance
JavaScript – Core game logic

Future Improvements
Timer System – Limit time for each word
Difficulty Levels – Easy, Medium, Hard mode
Word Bank Expansion – Add more words