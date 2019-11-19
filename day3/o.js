//숫자타입으로만 구성된 요소를 뽑아 배열을 만들어보도록 하세요.
//실행결과 ["width", "height" ... ]

const widget = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": {
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
};

//answer
var getNumberArray = function(data) {
    const result = [];

    var findNumber = function(obj) {
        for (const i in obj) {
            const val = obj[i];
            if (typeof(val) === "number") {
                result.push(i);
            } else if (typeof(val) === "object") {
                findNumber(val);
            }
        };
    };
    findNumber(data);
    return result;
};
console.log(getNumberArray(widget));