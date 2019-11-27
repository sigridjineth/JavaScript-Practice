const uuidv1 = require('uuid/v1');

//랜덤함수를 활용한 새로운 ID만들기
var exports = {}
exports.createID = function() {
    var newID = uuidv1().slice(-4, -1);
    return newID;
};
//delay 함수 만들기
exports.time = function() {
    var delay = function(time) {
        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve();
            }, 2000);
        })
    };
};
//node.js 모듈로 내보내기
module.exports = exports;