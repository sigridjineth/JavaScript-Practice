//커스텀 모듈을 모아놓은 자바스크립트 파일입니다.
//배열의 filter, forEach, map 함수를 직접 구현한다.

//customFilter 함수의 구현
Array.prototype.customFilter = function(callback, thisArg) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        //thisArg가 주어지지 않았을 경우
        if (callback(this[i], i, this)) {
            output.push(this[i]);
        }
        //thisArg가 주어졌을 경우
        if (thisArg != undefined) {
            if (callback(thisArg[i], i, thisArg)) {
                output.push(thisArg[i]);
            }
        }
    };
    return output;
};

//test code
var returnedArr = [1, 2, 3, 4, 5, 6].customFilter(function(element, index, arr) {
    return element > 5;
});

console.log(returnedArr);

//customforEach 함수 구현
Array.prototype.customforEach = function(callback, thisArg) {
    //thisArg가 주어지지 않았을 경우
    for (let j = 0; j < this.length; j++) {
        result = callback.call(this, this[j], j, this)
    };
    //thisArg가 주어졌을 경우
    if (thisArg != undefined) {
        for (let k = 0; k < this.length; k++) {
            result = callback.call(thisArg, thisArg[i], i, thisArg)
        }
    };
    return result;
};

//test code
const array1 = ['a', 'b', 'c'];

array1.customforEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

//map 함수의 구현
Array.prototype.customMap = function(callback, thisArg) {
    let result = [];
    //thisArg가 주어지지 않았을 경우
    for (let b = 0; b < this.length; b++) {
        arr = callback.call(this, this[b], b, this);
        result.push(arr);
    }
    //thisArg가 주어졌을 경우
    if (thisArg != undefined) {
        for (let z = 0; z < this.length; z++) {
            arr = callback.call(thisArg, this[b], b, thisArg);
            result.push(arr);
        }
    }
    return result;
};

//test code
var numbers = [1, 4, 9];
var roots = numbers.customMap(Math.sqrt);