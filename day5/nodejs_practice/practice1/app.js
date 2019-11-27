// app.js
const myModule = require('./module');

// module/calc.js의 기능
const result = myModule.calc.add(1, 2);

console.log(result);

// module/print.js의 기능
myModule.print.sayHello();

//const circle = require('./circle.js');
//const myCircle = circle(4);

//console.log(`지름이 4인 원의 면적: ${myCircle.area()}`);
//console.log(`지름이 4인 원의 둘레: ${myCircle.circumference()}`);

//const calc = require('./primitive.js');
//const result1 = calc.add(1, 2);
//console.log(result1);

//const result2 = calc.minus(1, 2);
//console.log(result2);

//이때 circle 모듈은 객체로 반환된다. 
//따라서 circle.area, circle.circumference와 같은 형식으로 공개된 circle 모듈을 참조한다.

//require 함수를 통해 circle 모듈을 임포트하여 circle 변수에 할당하였다. 
//이때 circle 변수는 circle 모듈에서 module.exports에 할당한 값 자체 즉 객체를 반환하는 함수이다.