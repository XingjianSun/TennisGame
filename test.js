let gameNum = 1;
let setNum = 1;
let p1Points = 5;
let p2Points = 5;
let p1GameScore = 5;
let p2GameScore = 5;
let p1SetScore = 5;
let p2SetScore = 5;
let tieBreak = false;

/*  
    basic raw function in game.js with browser actions removed.
    use to test logic
*/

function addP1Point(p1Points) {
    p1Points++;

    if (tieBreak) {
        if (winTieBreak()) {
            resetSet();
            if (winMatch()) {
                matchEnds();
            }
        }
    }
    else {

        if (winGame()) {
            resetGame();
        }
        if (winSet()) {
            resetSet();
        }
        if (winMatch()) {
            matchEnds();
        }
    }
    return p1Points;
}

function addP2Point(p2Points) {
    p2Points++;

    if (tieBreak) {
        if (winTieBreak()) {
            resetSet();
            if (winMatch()) {
                matchEnds();
            }
        }
    }
    else {
        if (winGame()) {
            resetGame();
        }
        if (winSet()) {
            resetSet();
        }
        if (winMatch()) {
            matchEnds();
        }
    }

    return p2Points;

}

function resetGame() {
    p1Points = 0;
    p2Points = 0;
}

function resetSet() {
    resetGame();
    p1GameScore = 0;
    p2GameScore = 0;
    gameNum = 1;
    tieBreak = false;
}

function winGame(p1Points, p2Points) {
    //p1 win the game
    if (p1Points >= 4 && p1Points - p2Points >= 2) {
        p1GameScore++;
        gameNum++;
        return true;


    }
    //p2 win the game
    else if (p2Points >= 4 && p2Points - p1Points >= 2) {
        p2GameScore++;
        gameNum++;
        return true;
    }
    return false;
}

function winSet(p1GameScore, p2GameScore) {
    if (p1GameScore >= 6 && p1GameScore - p2GameScore >= 2) {
        p1SetScore++;
        setNum++;
        return true;

    }
    else if (p2GameScore >= 6 && p2GameScore - p1GameScore >= 2) {
        p2SetScore++;
        setNum++;
        return true;
    }
    //tie break situation
    else if (p2GameScore == 6 && p1GameScore == 6) {
        tieBreak = true;
        p1Points = 0;
        p2Points = 0;
    }
    return false;

}

function winTieBreak(p1Points, p2Points) {
    if (p1Points >= 7) {
        p1SetScore++;
        return 1;
    }
    else if (p2Points >= 7) {
        p2SetScore++;
        return 2;
    }
    return 0;
}



function winMatch(p1SetScore, p2SetScore) {
    if (p1SetScore >= 3) {
        return 1;
    }
    else if (p2SetScore >= 3) {
        return 2;
    }
    return 0;
}


function resetMatch() {
    resetSet();
    p1SetScore = 0;
    p2SetScore = 0;
    setNum = 1;

}


function matchEnds() {
    resetSet();
    p1SetScore = 0;
    p2SetScore = 0;
    setNum--;
}

/*
    tests of function logics
*/

var assert = require('assert');

describe('addP1Point', function(){
    it('should increment p1Points by 1', function(){
        assert.equal(addP1Point(1), 2);
    })
})

describe('addP2Point', function () {
    it('should increment p2Points by 1', function () {
        assert.equal(addP2Point(1), 2);
    })
})

describe('resetGame', function () {
    it('points should be reset to zero', function () {
        resetGame();
        assert.equal(p2Points, 0);
        assert.equal(p1Points, 0);
    })
})

describe('resetSet', function () {
    it('points should be reset to zero, game scores should be reset to zero', function () {
        resetSet();
        assert.equal(p2Points, 0);
        assert.equal(p1Points, 0);
        assert.equal(p1GameScore, 0);
        assert.equal(p2GameScore, 0);       
    })
})

describe('win game', function () {
    it('when p1 wins a game', function () {
        assert.equal(winGame(4, 2), true);
    });

    it('when p2 wins a game', function () {
        assert.equal(winGame(2, 4), true);
    });

    it('no one wins a game', function () {
        assert.equal(winGame(4, 4), false);
    });

    it('no one wins a when when 6 vs 5', function () {
        assert.equal(winGame(4, 5), false);
        assert.equal(winGame(5, 4), false);
    });
})


describe('win set', function () {
    it('when p1 wins a set', function () {
        assert.equal(winSet(6, 4), true);
    });

    it('when p2 wins a set', function () {
        assert.equal(winSet(4, 6), true);
    });

    it('no one wins a set when 3 vs 3', function () {
        assert.equal(winSet(6, 6), false);
    });

    it('no one wins a set when 6 vs 5', function () {
        assert.equal(winSet(6, 5), false);
        assert.equal(winSet(5, 6), false);
    });

    it('enter tie break when 6 6', function(){
        winSet(6,6);
        assert.equal(tieBreak, true);
    });
})

describe('win match', function () {
    it('when p1 wins the match', function () {
        assert.equal(winMatch(3, 1), 1);
    });

    it('when p2 wins the match', function () {
        assert.equal(winMatch(1, 3), 2);
    });

    it('no one wins a set when 2 vs 1', function () {
        assert.equal(winMatch(2, 1), 0);
        assert.equal(winMatch(1, 2), 0);
    });
})

describe('win tie break', function () {
    it('when p1 wins the tie break', function () {
        assert.equal(winTieBreak(7, 6), 1);
    });

    it('when p2 wins the tie break', function () {
        assert.equal(winTieBreak(6, 7), 2);
    });

    it('no one wins a set when 6 vs 6', function () {
        assert.equal(winTieBreak(6, 6), 0);
    });

    it('no one wins a set when 3 vs 1', function () {
        assert.equal(winTieBreak(3, 1), 0);
        assert.equal(winTieBreak(1, 3), 0);
    });
})

describe('resetMatch', function () {
    it('points should be reset to zero, game scores should be reset to zero', function () {
        resetMatch();
        assert.equal(p2Points, 0);
        assert.equal(p1Points, 0);
        assert.equal(p1GameScore, 0);
        assert.equal(p2GameScore, 0);
    })

    it('set scores should be reset to zero', function () {
        resetMatch();
        assert.equal(p2Points, 0);
        assert.equal(p1Points, 0);
        assert.equal(p1GameScore, 0);
        assert.equal(p2GameScore, 0);
        assert.equal(p1SetScore, 0);
        assert.equal(p2SetScore, 0);
    })

})




















