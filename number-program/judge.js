const app = require('./app.js');
const input = require('./input.js');

var judgeGame = {
    strike: 0,
    ball: 0
};

judgeGame.checkresult = function() {
    for (var i = 0; i < app.game.computerNumber.length; i++) {
        if (input.userInput[i] === app.game.computerNumber[i]) {
            strike++;
        } else if (input.userInput.includes(app.game.computerNumber[i])) {
            ball++;
        }
    }
    return this.isFinish();
};

judgeGame.isFinish = function() {
    if (this.strike === 3) {
        return finishGame();
    } else {
        return continueGame();
    }
};

var finishGame = function() {
    console.log('3개의 숫자를 모두 맞추셨습니다!');
    console.log('게임 종료!');
    return false;
};

var continueGame = function() {
    console.log(`${judgeGame.strike} 스트라이크, ${judgeGame.ball} 볼`);
    console.log(`${app.game.currentPlay} 번 째 시도입니다.`)
    input.userInput();
};

module.exports = { judgeGame, finishGame, continueGame };