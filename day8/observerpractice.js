//observer pattern practice
var observer = {
    handlers: {}, //상태변화 이벤트가 일어나면 어떠한 함수를 호출시켜야 하는가?
    //context를 전달받아 적절한 this를 사용할 수 있도록 한다.
    register: function(eventName, handler, context) {
        var handlerArray = this.handler[eventName];
        //만약 이벤트에 할당된 핸들러가 없다면, 즉 신규 이벤트라면,
        if (handlerArray === undefined) {
            //여러 개의 배열을 핸들러로 한 번에 등록하고, 이를 handlerArray라는 변수로 할당한다.
            handlerArray = this.handlers[eventName] = [];
        }
        handlerArray.push({ handler: handler, context: context });
    },
    unregister: function(eventName, handler, context) {
        var handlerArray = this.handler[eventName];
        //함수가 없다면 종료시킨다.
        if (handlerArray === undefined) {
            return;
        }
        for (var idx = 0; idx < handlerArray.length; idx++) {
            var currentHandler = handlerArray[idx];
            if (handler === currentHandler['handler'] && context === currentHandler['context']) {
                handlerArray.splice(idx, 1);
                return;
            }
        }
    },
    notify: function(eventName, data) {
        var handlerArray = this.handler[eventName];
        if (handlerArray === undefined) {
            return;
        }
        //핸들러 배열에 등록되어 있는 핸들러들을 하나씩 꺼내 전달받은 데이터와 함께 호출해본다.
        for (var idx = 0; idx < handlerArray.length; idx++) {
            var currentHandler = handlerArray[idx];
            //전달받은 함수를 바로 호출하지 않고 call을 활용하여 context 객체 내부에서 this로 사용할 수 있도록 한다.
            currentHandler['handler'].call(currentHandler['context'], data);
        }
    }
};

//https://m.blog.naver.com/PostView.nhn?blogId=c_ist82&logNo=220795909036&proxyReferer=https%3A%2F%2Fwww.google.com%2F