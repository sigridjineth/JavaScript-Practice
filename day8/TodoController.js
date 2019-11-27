const readline = require('readline');

class TodoController {
    constructor(todoModel) {
        this.todoModel = todoModel;
    }
    runTodo() {
        const R = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        R.setPrompt = ('명령하세요: ');
        R.prompt();
        R.on('line', async function(input) {
            try {
                if (input === "q") {
                    console.log("프로그램 종료");
                    process.exit();
                }
                const newInput = input.split("$$");
                await this.runAction(newInput);
            } catch (e) {
                console.log("something went wrong...");
                R.prompt();
            }
        })
    }
    async runAction(newInput) {
        switch (newInput[0]) {
            case "show":
                show(newInput[1]);
                showCurrent();
                break;
            case "add":
                show(newInput[1]);
                showCurrent();
                break;
            case "update":
                newData = await update(newInput[1], newInput[2]);
                if (jsonData === newData) {
                    console.log("잘못된 ID를 입력하셨습니다.");
                    showCurrent();
                } else {
                    jsonData = newData;
                    showCurrent();
                }
                break;
            case "delete":
                jsonData = del(newInput(1));
                showCurrent();
                break;
            default:
                console.log("잘못된 명령을 입력하셨습니다.")
                break;
        };
        R.prompt();
    }
}
module.exports = TodoController;