const a = require("./a.js");
const assert = require("assert");
const msg = require("./c.js");
const data = require("./d.js");



const checker = new a.Checker(msg);

function* run(source, targets) {
    const rightMsg = msg.ok.msg;
    const checkMember = checker.bindMembers(targets);
    result = yield checkMember(source);
    result.then((value) => {
        assert.equal(value, rightMsg);
        console.log("error없이 프로그래밍이 실행됐습니다");
    }).catch((e) => console.log(`이크 에러가 발생했어요. ${e.message}`));
}


a.runner(run, data.ourStudents, ['crong', 'jk']);
a.runner(run, data.ourProfessors, ['Bill', 'Ritchie']);

/* 실행결과
error없이 프로그래밍이 실행됐습니다
이크 에러가 발생했어요 'who are you?' == 'hello our members!'
*/