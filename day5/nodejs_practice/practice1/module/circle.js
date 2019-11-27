const { PI } = Math;

exports.area = function(r) { //area 메소드는 외부에 공개됨
    return PI * r * r; //변수 PI는 circle 모듈에서만 유효한 private 변수임
};
exports.circumference = function(r) { //circumference 메소드는 외부에 공개됨
    return 2 * PI * r;
};
//circle 모듈에서 area와 circumfence를 export 개체의 메소드로 정의함

module.exports = function(r) {
    return {
        area() {
            return PI * r * r;
        },
        circumference() {
            return 2 * PI * r;
        }
    }
};
//exports 객체는 프로퍼티 또는 메소드를 여러 개 정의할 수 있었다. 
//하지만 module.exports에는 하나의 값(원시 타입, 함수, 객체)을 할당할 수 있다.