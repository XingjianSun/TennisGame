# TennisGame
A simple tennis game simulator using node server

# How to run: 
1. install node.js, npm
2. npm install
3. node server.js
4. open you browser and go to http://localhost:8082/

# How to run test:
1. npm install --save-dev mocha
2. npm test

# How to play:
This is a simple score keeper for a typical tennis game.
Click on the button of the player that scored.
You can reset the game at any time.

# Rules:
1. Scoring the game:
    - At least four points wins the game (0 - 15 - 30 - 40)
    - A player who wins the game must earned points at least two more than the opponent's points
    - If 40 - 40, the score becomes "Deuce"
    - Then if a player wins a points, it becomes "Advantage - Deuce"
    - The person who won the previous game is shown below

2. Scoring the set:
    - At least six games wins the set
    - A player who wins the set must win games at least two more than the opponent's games
    - If 6-6, we have a tie break game 
    - In a tie break game, a player who earns 7 points at first wins the game, and the set

3. Win the match:
    - Three games wins the match(and becomes the final winner)
    - The result will show at "Final Match Winner", and you have to reset the game to start over

4. Reset the game:
    - At anypoint of the game, you can reset the game by click the Reset Game button
    - All score, game score, set score, winner will be resetted.


