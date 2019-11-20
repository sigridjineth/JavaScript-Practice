//customReduce 함수 구현
Array.prototype.customReduce = function(callback, initValue) {
    let accumulator = '';
    if (initValue !== undefined) {
        accumulator = initValue;
    }
    for (i = 0; i < this.length; i++) {
        accumulator = callback.call(Array, accumulator, this[i], i, this);
        console.log(accumulator);
    } //undefined로 설정하면 전역객체라는 뜻. Array로 설정하면, Array라는 객체에 적용된다는 뜻.
    return accumulator;
};

//test function
const strArr = ['I', 'like', 'eating'];

let custStr = strArr.customReduce(function(a, b, c, d) {
    return b + " " + a;
});

console.log(custStr);