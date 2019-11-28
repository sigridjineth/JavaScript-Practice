import data from './app.js'

//컴퓨터 단을 구현
var computerChoose = function() {
    const uuidv1 = require('uuid/v1');
    //choose the number in three times
    for (i = 0; i < game.goalPlay; i++) {
        number = uuidv1().slice(-1, -6).replace(/[^0-9]/g, '');
        number.push(game.computerNumber);
    }
};

//사용자 입력을 구현
var userInput = function() {
    const readline = require('readline');
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.setPrompt('숫자를 입력해주세요');
    r1.prompt();
    r1.on('line', function(input) {
        if (input.length == 3 || Number.isInteger(input)) {
            gamePlay(input);
        } else {
            console.log('잘못된 숫자를 입력하셨습니다.');
            rl.prompt();
        }
    })
};

export { computerChoose, userInput }