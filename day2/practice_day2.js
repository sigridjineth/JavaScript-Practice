//다각형의 넓이
//모든 넓이의 값을 얻을 수 있는 getArea함수와 getAreaAvg함수를 만든다.

var getArea = function(type, ...values) {
    if (type === "circle") {
        pushCallStack(type);
        result = circle(...values);
        return result;

    } else if (type === "parallelogram") {
        pushCallStack(type);
        result = parallelogram(...values);
        return result;

    } else if (type === "trapezoid") {
        pushCallStack(type);
        result = trapezoid(...values);
        return result;

    } else {
        return ERR_MSG;
    }
};

const ERR_MSG = "에러에요!";

var checkType = function(expected, length) {
    return (expected > length);
};

var circle = function(...values) {
    if (checkType(1, values.length)) {
        return ERR_MSG;
    }
    return Math.pow(values, 2) * Math.PI;
};

var parallelogram = function(...values) {
    if (checkType(2, values.length)) {
        return ERR_MSG;
    }
    return values[0] * values[1];
};

var trapezoid = function(...values) {
    if (checkType(3, values.length)) {
        return ERR_MSG;
    }
    return (values[0] + values[1]) * values[2] / 2;
};

var getAreaAvg = function(type, ...values) {
    var result = 0;
    if (type !== "circle") {
        return ERR_MSG;
    };

    if (checkType(2, values.length)) {
        return ERR_MSG;
    };

    let start = values[0];
    let end = values[1];

    for (let i = start; i <= end; i++) {
        result += circle(i);
    };

    result = (result / values.length);
    return result;
};

let callstack = [];

var pushCallStack = function(type) {
    callstack.push(type);
};

var printExecutionSequence = function() {
    let result = "계산 실행 순서:";
    result += callstack.join(">");
    console.log(result);

    callstack = [];
};

getArea('circle', 10);
getArea('parallelogram', 10, 15);
getArea('trapezoid', 10, 15, 12);
getArea('trapezoid', 10);
getAreaAvg('circle', 5, 11);
printExecutionSequence();

//셀프 기능구현 체크리스트
//1. [통과] getArea함수에서 circle 계산
//2. [통과] getArea함수에서 parallelogram 계산
//3. [통과] getArea함수에서 trapezoid 계산
//4. [통과] getArea함수에서 trapezoid 인자를 하나면 넣어서 호출해서 에러메시지 출력
//5. [통과] getAreaAvg함수에 circle 범위 지정후 계산
//6. [통과] 가로스크롤이 생기지 않게 코드 한줄이 긴 부분이 없음
//7. [통과] ES2015문법을 충분히 사용했는지(const,let, rest parameter 등)
//8. [통과] 각 도형의 넓이를 계산하는 함수가 각각 구현되어 있는지
//9. [통과] 구현한 모든 함수의 각각의 길이가 20 line을 넘지 않는지
//10. [통과] 잘못된 타입이 입력됐을 때 에러메시지 출력
//11. [통과] printExecutionSequence 실행