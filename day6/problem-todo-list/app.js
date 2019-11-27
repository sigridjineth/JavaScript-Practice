//Data를 정렬해서 나타내는 부분
let jsonData = require("./data.js");

//입력을 받는 부분
const readline = require("readline");
const R = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
R.setPrompt('명령하세요: ');
R.prompt();
R.on('line', function(input) {
    const newInput = line.split('$$');
    switch (newInput[0]) {
        case "show":
            show(newInput[1]);
            break;
        case "add":
            add(newInput[1]);
            showCurrent();
            break;
        case "update":
            jsonData = update(newInput[1]);
            showCurrent();
            break;
        case "delete":
            jsonData = del(newInput[1]);
            showCurrent();
            break;
        case "q":
            console.log("프로그램 종료");
            break;
        default:
            console.log("잘못된 명령을 입력하셨습니다")
            break;
    };
});

//보여주는 부분의 입력을 처리하는 부분
var show = function(status) {
    const avail = ["todo", "doing", "done"];
    if (status === "current") {
        showCurrent(); //showCurrent 모듈로 넘기기
    } else if (avail.includes(status)) {
        const result = jsonData.filter(function(event) {
            return event.status === status;
        });
        //reduce 함수를 사용하여 todo 재구현이 필요함
        const out = result.reduce(function(acc, cur) {
            acc.push(cur);
            const print = (`${status}리스트: ${out.length}건: '${cur.name}, ${cur.id}`);
            return print;
        }, []);
        console.log(out);
    } else {
        console.log('input Error!');
    }
};

var showCurrent = function() {
    const state = jsonData.reduce(function(list, cur) {
        list[cur.status].push(cur.id);
        return list;
    }, { todo: [], doing: [], done: [] })
    console.log(`현재상태: todo: [${state.todo}], doing: [${state.doing}], done: [${state.todo}]`);
};

//추가를 만드는 함수
var add = function(name, tag) {
    let newObject = function() {
        return {
            name: "",
            tags: [],
            status: "doing",
            id: makeID()
        }
    };
    newObject.name = name;
    newObject.tag = tag;
    jsonData.push(newObject);
    console.log(`${name}이 추가되었습니다.(id: ${id})`);
    return newObject;
};

//ID를 만드는 함수
var makeID = function() {
    var idarray = [];
    const ids = jsonData.map(function(e) {
        idarray.push(e.id);
    });
    let newID = function() {
        let ID = Math.floor(Math.random() * 10) + 1;
        return ID;
    };
    while (idarray.includes(newID())) {
        newID();
        continue;
    };
    return newID;
};

//업데이트를 이끄는 함수
var update = function(id, status) {
    //2초 이후에 받는다
    return new Promise(function(resolve) {
        setTimeout(function() {
            const newStatus = jsonData.map(function(e) {
                if (e.id == id) {
                    e.status = status;
                    console.log(`${e.name} ${e.status}으로 상태가 변경되었습니다.`);
                } else {
                    console.log(`잘못된 ID를 입력하셨습니다.`);
                };
                return e;
            });
            resolve(newStatus);
        }, 2000);
    });
};

//삭제를 이끄는 함수
var del = function(id) {
    const filtered = jsonData.filter(function(e) {
        if (e.id != id) {
            return true; //filter의 경우 return이 true이면 새로운 배열에 값을 추가한다.
        } else {
            console.log(`${e.name}가 ${e.status}목록에서 삭제됐습니다`);
            return false; //filter의 경우 return이 false이면 새로운 배열에 값을 추가하지 않는다.
        }
    });
    return filtered;
};