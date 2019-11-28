//문장 통계 프로그램

var input = prompt('문장을 입력하세요.');

var work = function(sentence){
    var newText = sentence.split(" ");
    var reversedStr = newText.reduceRight(function(acc, cur){
        acc.concat(cur);
    }, []);
    return reversedStr;
};

var calculate = function(sentence){
    var newSen = sentence.join(" ");
    var redex = /\s/ig;
    var noSpace = newSen.replace(redex, "").length;
    console.log(`전체 수:${noSpace.length}`);
    return noSpace;
};

var order = function(newSen){
    var orderlist = [];
    newSen.forEach = function(main){
        var count = 0;
        var char = main;
        newSen.forEach = function(sub){
            if (main === sub) {
                count++;
            } else {
                continue;
            }
        }
        var object = { "char": char, "count": count };
        orderlist.push(object);
    }
    return orderlist;
};

var descending = function(orderlist){
    orderlist.sort(function(a, b){
        return a.count < b.count ? -1 : 1;
    });
    console.log(orderlist);
    return orderlist;
};

var main = function(input){
    console.log(work(input));
    var result1 = calculate(work(input));
    console.log(order(result1));
    console.log(descending(order(result1)));
};
main();