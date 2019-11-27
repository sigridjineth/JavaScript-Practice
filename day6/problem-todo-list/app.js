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
R.on('line', async function(input) {
    const newInput = input.split('$$');
    switch (newInput[0]) {
        case "show":
            show(newInput[1]);
            break;
        case "add":
            add(newInput[1]);
            showCurrent();
            break;
        case "update":
            newData = await update(newInput[1], newInput[2]);
            if (jsonData === newData) {
                console.log('잘못된 ID를 입력하셨습니다.')
                showCurrent();
            } else {
                jsonData = newData;
                showCurrent();
            }
            break;
        case "delete":
            jsonData = del(newInput[1]);
            console.log(jsonData)
            showCurrent();
            break;
        case "q":
            console.log("프로그램 종료");
            process.exit();
            break;
        default:
            console.log("잘못된 명령을 입력하셨습니다")
            break;
    };
    R.prompt();
});

//보여주는 부분의 입력을 처리하는 부분
var show = function(status) {
    const avail = ["todo", "doing", "done"];
    if (status === "current") {
        showCurrent(); //showCurrent 모듈로 넘기기
    } else if (avail.includes(status)) {
        let result = jsonData.filter(function(event) {
            return event.status === status;
        });
        let out = result.reduce(function(list, cur) {
            list.id.push(cur.id);
            list.name.push(cur.name);
            return list;
        }, { name: [], id: [] });
        var print = function() {
            var result = [];
            for (i = 0; i < out.name.length; i++) {
                let name = out.name[i];
                let id = out.id[i];
                result.push(name + "," + id + " ");
            };
            console.log(result);
            return console.log(`${status}리스트: 총 ${result.length}건:`, result);
        };
        print();
    } else {
        console.log('input Error!');
    }
};

var showCurrent = function() {
    const state = jsonData.reduce(function(list, cur) {
        list[cur.status].push(cur.id);
        return list;
    }, { todo: [], doing: [], done: [] })
    console.log(`현재상태: todo: [${state.todo}], doing: [${state.doing}], done: [${state.done}]`);
};

//추가를 만드는 함수
var add = function(name, tags) {
    let newObject = function() {
        return {
            name: "",
            tags: [],
            status: "doing",
            id: makeID()
        }
    }; //생성자 함수

    let obj = newObject();
    obj.name = name;
    obj.tags = tags;
    jsonData.push(obj);
    console.log(`${obj.name}이 추가되었습니다. (id: ${obj.id})`);
    return jsonData;
};

//ID를 만드는 함수
var makeID = function() {
    var idarray = [];
    const ids = jsonData.map(function(e) {
        idarray.push(e.id);
    });

    var checkID = function() {
        let ID = Math.floor(Math.random() * 10) + 1;
        const criteria = function(e) {
            return e != ID;
        }
        let check = ids.every(criteria);
        if (check) {
            return ID;
        } else {
            checkID();
        }
    };
    return checkID();
};

//업데이트를 이끄는 함수
var update = function(id, status) {
    //2초 이후에 받는다
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const newStatus = jsonData.map(function(e) {
                if (e.id == id) {
                    e.status = status;
                    console.log(`${e.name} ${status}으로 상태가 변경되었습니다.`);
                }
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