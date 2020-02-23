let gameNum = 1;
let setNum = 1;
let p1Points = 0;
let p2Points = 0;
let p1GameScore = 0;
let p2GameScore = 0;
let p1SetScore = 0;
let p2SetScore = 0;
let tieBreak = false;


const p1ScoreButton = document.getElementById('myButton1');
const p2ScoreButton = document.getElementById('myButton2');
const resetButton = document.getElementById('resetBtn');
resetButton.addEventListener('click', resetMatch);
p1ScoreButton.addEventListener('click', addP1Point);
p2ScoreButton.addEventListener('click', addP2Point);


function addP1Point() {
    console.log("p1 scored");

    p1Points++;

    if(tieBreak){
        if(winTieBreak()){
            resetSet();
            if(winMatch()){
                matchEnds();
            }
        }
        document.getElementById("p1Points").innerHTML = p1Points;
    }
    else{
    
        if (winGame()) {
            resetGame();
        }
        if (winSet()) {
            resetSet();
        }
        if (winMatch()) {
            matchEnds();
        }
        if(p1Points == 0) document.getElementById("p1Points").innerHTML = p1Points;
        else if (p1Points == 1) document.getElementById("p1Points").innerHTML = 15;
        else if (p1Points == 2) document.getElementById("p1Points").innerHTML = 30;
        else if (p1Points == 3 && p2Points < 3) document.getElementById("p1Points").innerHTML = 40;
        else{
            if (p1Points > p2Points) document.getElementById("p1Points").innerHTML = "Advantage";
            else {
                document.getElementById("p1Points").innerHTML = "Deuce";
                document.getElementById("p2Points").innerHTML = "Deuce";
            }
        }
    }
}

function addP2Point() {
    console.log("p2 scored");
    p2Points++;

    if (tieBreak) {
        if (winTieBreak()) {
            resetSet();
            if (winMatch()) {
                matchEnds();
            }
        }
        document.getElementById("p2Points").innerHTML = p2Points;
    }
    else{
        if (winGame()) {
            resetGame();
        }
        if (winSet()) {
            resetSet();
        }
        if (winMatch()) {
            matchEnds();
        }
        if (p2Points == 0) document.getElementById("p2Points").innerHTML = p2Points;
        else if (p2Points == 1) document.getElementById("p2Points").innerHTML = 15;
        else if (p2Points == 2) document.getElementById("p2Points").innerHTML = 30;
        else if (p2Points == 3 && p1Points < 3) document.getElementById("p2Points").innerHTML = 40;
        else {
            if (p2Points > p1Points) document.getElementById("p2Points").innerHTML = "Advantage";
            else {
                document.getElementById("p1Points").innerHTML = "Deuce";
                document.getElementById("p2Points").innerHTML = "Deuce";
            }
        }
    }

}

function resetGame(){
    p1Points = 0;
    p2Points = 0;
    document.getElementById("p1Points").innerHTML = p1Points;
    document.getElementById("p2Points").innerHTML = p2Points;
}

function resetSet(){
    resetGame();
    p1GameScore = 0;
    p2GameScore = 0;
    gameNum = 1;
    document.getElementById("gameNum").innerHTML = gameNum;
    document.getElementById("p1GameScore").innerHTML = p1GameScore;
    document.getElementById("p2GameScore").innerHTML = p2GameScore;
    tieBreak = false;
}
function winGame(){
    //p1 win the game
    if(p1Points >= 4 && p1Points - p2Points >= 2){
        p1GameScore++;
        gameNum++;
        document.getElementById("gameNum").innerHTML = gameNum;
        document.getElementById("p1GameScore").innerHTML = p1GameScore;
        document.getElementById("gameWinner").innerHTML = "Player 1";
        return true;


    }
    //p2 win the game
    else if(p2Points >= 4 && p2Points - p1Points >= 2){
        p2GameScore++;
        gameNum++;
        document.getElementById("gameNum").innerHTML = gameNum;
        document.getElementById("p2GameScore").innerHTML = p2GameScore;
        document.getElementById("gameWinner").innerHTML = "Player 2";
        return true;
    }

    return false;

}

function winSet(){
    if(p1GameScore >= 6 && p1GameScore - p2GameScore >= 2){
        p1SetScore++;
        setNum++;
        document.getElementById("setNum").innerHTML = setNum;
        document.getElementById("p1SetScore").innerHTML = p1SetScore;
        return true;

    }
    else if (p2GameScore >= 6 && p2GameScore - p1GameScore >= 2) {
        p2SetScore++;
        setNum++;
        document.getElementById("setNum").innerHTML = setNum;
        document.getElementById("p2SetScore").innerHTML = p2SetScore;
        return true;
    }
    //tie break situation
    else if(p2GameScore == 6 && p1GameScore == 6){
        tieBreak = true;
        p1Points = 0;
        p2Points = 0;
        document.getElementById("gameNum").innerHTML = "Tie Break";
        document.getElementById("p1Points").innerHTML = p1Points;
        document.getElementById("p2Points").innerHTML = p2Points;
    }
    return false;

}

function winTieBreak(){
    if(p1Points >= 7){
        p1SetScore++;
        document.getElementById("p1SetScore").innerHTML = p1SetScore;
        return true;
    }
    else if (p2Points >= 7) {
        p2SetScore++;
        document.getElementById("p2SetScore").innerHTML = p2SetScore;
        return true;
    }
    return false;
}



function winMatch(){
    if(p1SetScore >= 3){
        document.getElementById("finalWinner").innerHTML = "Player 1 !"
        return true;
    }
    else if(p2SetScore >= 3){
        document.getElementById("finalWinner").innerHTML = "Player 2 !"
        return true;
    }
    return false;
}


function resetMatch(){
    resetSet();
    console.log("Reset Match");
    p1SetScore = 0;
    p2SetScore = 0;

    document.getElementById("p1SetScore").innerHTML = p1SetScore;
    document.getElementById("p2SetScore").innerHTML = p2SetScore;

    document.getElementById("gameWinner").innerHTML = "";
    document.getElementById("finalWinner").innerHTML = "";

    setNum = 1;
    document.getElementById("setNum").innerHTML = setNum;
    document.getElementById("myButton1").disabled = false;
    document.getElementById("myButton2").disabled = false;


}


function matchEnds(){
    resetSet();
    console.log("Match ends");
    p1SetScore = 0;
    p2SetScore = 0;

    setNum--;
    document.getElementById("setNum").innerHTML = setNum;

    document.getElementById("p1SetScore").innerHTML = p1SetScore;
    document.getElementById("p2SetScore").innerHTML = p2SetScore;

    document.getElementById("myButton1").disabled = true;
    document.getElementById("myButton2").disabled = true;


}


