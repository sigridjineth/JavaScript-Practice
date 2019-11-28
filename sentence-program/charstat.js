//문장 통계 프로그램

var input = prompt('문장을 입력하세요.');

var work = function(sentence) {
    let initialvalue = "";
    let newText = sentence.split(" ");
    var reducer = function(acc, cur) {
        acc += " " + cur;
        return acc;
    };
    var reversedStr = newText.reduceRight(reducer, initialvalue);
    return reversedStr;
};

var calculate = function(sentence) {
    var redex = /\s/ig;
    var noSpace = sentence.replace(redex, "").length;
    console.log(`전체 수:${noSpace}`);
    return noSpace;
};

var order = function(sentence) {
    let orderlist = [];
    let charlist = [];
    for (main of sentence) {
        var count = 0;
        for (sub of sentence) {
            if (main === sub) {
                count += 1;
            };
        };
        var object = { "char": main, "count": count };
        if (!charlist.includes(object["char"])) {
            charlist.push(object["char"]);
            orderlist.push(object);
        };
    };
    return orderlist;
};

var descending = function(orderlist) {
    orderlist.sort(function(a, b) {
        return a.count < b.count ? 1 : -1;
    });
    console.log(orderlist);
    return orderlist;
};

var main = function(input) {
    console.log(work(input));
    calculate(work(input));
    console.log(order(calculate(work(input))));
    console.log(descending(order(calculate(work(input)))));
};
main(input);