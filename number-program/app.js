const input = require('./input.js');
const judge = require('./judge.js');

//숫자 야구게임
var game = {
    'currentPlay': 0,
    'goalPlay': 3,
    'computerNumber': ""
};

module.exports = { game }

var main = function() {
    input.computerChoose();
    judgeGame.checkresult(input.userInput());
}
main();