//node.js 기반 todo.js 구현
//각 todo 별로 아이디가 유니크하게 생성되며, 뒤의 내용에 따라 todo/doing 바꿀 수 있다.

//명령어$$파라미터1$$[,파라미터2]형태로 입력을 받는다.
//add: add$$할일이름$$["태그명1","태그명2"...]
//show: show$$current or show$$todo or show$$doing or show$$done
//update: update$$할일ID$$[todo,doing,done]
//delete: delete$$할일ID

data.js를 마치 데이터베이스처럼 이용하자
- ES6의 자바스크립트 클래스 개념을 활용해보자.

메소드 1-1) 보여주는(show)의 부분 처리
- showCurrent()
메소드 1-2) 작성하는(write)의 부분 처리