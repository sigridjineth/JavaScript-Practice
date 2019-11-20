//customReduce 함수 구현
Array.prototype.customReduce = function(callback, initValue){
    let accumulator = '';
    if (initValue !== undefined){
        accumulator = initValue;
    }
    for (i = 0; i < this.length; i++){
        accumulator = callback.call(this, accumulator);
    }
};

//test function
var add = function(a, b){
    return a + b;
};

//https://github.com/kaleongtong/CustomReduce/blob/master/cusReduce.js