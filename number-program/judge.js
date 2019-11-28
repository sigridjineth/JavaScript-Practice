import app from './app.js';
import input from './input.js';

var judgeGame = {
    strike : 0,
    ball: 0,
    cs = game.currentPlay,
};

judgeGame.checkresult = function(){
    for (var i = 0; i < game.computerNumber[cs].length; i++){
        if (userInput[i] === game.computerNumber[cs][i]){
            strike++;
        } else if (userInput.includes(game.computerNumber[cs][i])){
            ball++;
        }
    }
    return this.isFinish();
};

judgeGame.isFinish = function(){
    if (strike === 3){
        return finishGame();
    } else {
        return continueGame();
    }
};

var finishGame = function(){
    console.log('3개의 숫자를 모두 맞추셨습니다!');
    return false;
};

var continueGame = function(){
    console.log(`${judgeGame.strike} 스트라이크, ${judgeGame.ball} 볼`);
};