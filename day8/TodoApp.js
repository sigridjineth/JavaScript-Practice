const TodoModel = require("./TodoModel.js");
//todolist 상태값을 add/update/delete등을 통해서 실제 변경하는 역할
const TodoController = require("./TodoController.js");
//사용자 입력내용(add/update/delete)을 분석해서 분기하는 역할
const TodoHTMLView = require("./TodoHTMLView.js");
//todoModel에서 현재상태를 출력 할 때마다, log.html파일을 새롭게 생성하는 파일이다. (뒤에 설명)

const todoModel = new TodoModel(todolist);
const controller = new TodoController(todoModel);
controller.runtodo();
new TodoHTMLView(todoModel);