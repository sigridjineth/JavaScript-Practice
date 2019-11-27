# 학점계산기

## 1. 평점과 이수학점

### 요구사항

과목명, 점수, 학점 세가지 데이터를 설정한다. 그 이후에 총 평점을 계산한다.

```
// [ ['데이터베이스', 'A', 3], ['교양영어', 'B+', 1], ['철학', 'A', 2]] 으로 데이터가 설정된 경우 (데이터설정은 코드에 하드코딩 해도 된다)
> 총평점 3.92 , 이수학점 6
```

### 코드 설계

1. 미리 입력된 과목들의 등급(A+, A, .., F)을 숫자로 변환하는 함수 getScore()을 생성
2. 변환된 점수(A -> 4)를 학점과 곱한 후 총학점 변수(grade_sum)에 저장, 이수학점을 변수(grade_done)에 저장
   -> 입력된 과목의 수(grade.length)만큼 반복실행
3. 총평점의 결과를 소수점이하 2자리까지, 이수학점을 출력

### 구현

```
function getScore(grade){
    switch(grade){
        case 'A+': return 4.5;
        break;
        case 'A' : return 4.0;
        break;
        case 'B+' : return 3.5;
        break;
        case 'B' : return 3.0;
        break;
        case 'C+' : return 2.5;
        break;
        case 'C' : return 2.0;
        break;
        case 'D+' : return 1.5;
        break;
        case 'D' : return 1.0;
        break;
        default : return 0;
    }
}
var grade = [ ['데이터베이스', 'A', 3], ['교양영어', 'B+', 1], ['철학', 'A', 2] ];
var grade_sum = 0;
var grade_done = 0;

for(var i=0;i<grade.length;i++){
    grade_done += grade[i][2];
    grade_sum += getScore(grade[i][1])*grade[i][2];
}
console.log("총 평점 " + (grade_sum/grade_done).toFixed(2) +" , 이수학점 " + grade_done);
```

### 추가사항

switch 문을 다 없애고 패턴을 찾아보기

------

## 2. 객체(딕셔너리)로 성적바꾸기

### 요구사항

객체 형태로 데이터를 변환해서 다시 구현.
데이터 형태는 아래와 같다.

```
var data =  [ 
                {
                    'name' : '데이터베이스', 
                    'grade' : 'A', 
                    'credit' : 3
                },
                {
                    'name' : '교양영어', 
                    'grade' : 'B+', 
                    'credit' : 2
                },
                {
                    'name' : '철학', 
                    'grade' : 'B+', 
                    'credit' : 1
                }
]
```

### 구현

var grade 대신 위의 데이터형식을 그대로 입력

for 을 forEach 로 수정

```
data.forEach(
   function(task){
       grade_done +=  task.credit;
       grade_sum += getScore(task.grade)*task.credit;
   }
);
```

------

## 3. 전공항목추가와 새로운함수만들기

### 요구사항 1

데이터 구조에 전공항목을 추가해서 넣고 아래와 같이 결과가 나오도록 한다.

```
// 전공이수학점이 얼마인지, 전공평점이 얼마인지 
> 총평점 : 3.92, 전공평점:3.5, 이수학점:12, 전공이수학점:6.
```

### 구현

```
function getScore(grade){
    switch(grade){
        case 'A+': return 4.5;
        break;
        case 'A' : return 4.0;
        break;
        case 'B+' : return 3.5;
        break;
        case 'B' : return 3.0;
        break;
        case 'C+' : return 2.5;
        break;
        case 'C' : return 2.0;
        break;
        case 'D+' : return 1.5;
        break;
        case 'D' : return 1.0;
        break;
        default : return 0;
    }
}

let data =  [ 
    {
        'name' : '데이터베이스', 
        'grade' : 'A', 
        'credit' : 3,
        'bMajor' : true
    },
    {
        'name' : '교양영어', 
        'grade' : 'B+', 
        'credit' : 1,
        'bMajor' : false
    },
    {
        'name' : '철학', 
        'grade' : 'A', 
        'credit' : 2,
        'bMajor' : false
    }
]
let grade_sum = 0, grade_done = 0, major_sum = 0, major_done = 0;

data.forEach(
    function(task){
        grade_done +=  task.credit;
        grade_sum += getScore(task.grade)*task.credit;
        if(task.bMajor) {
            major_sum += getScore(task.grade)*task.credit;
            major_done += task.credit;
        }
    }
);
console.log("총평점 : " + (grade_sum/grade_done).toFixed(2) 
+ ", 전공 평점 : "+ (major_sum/major_done).toFixed(2) 
+ ", 이수학점 : " + grade_done
+ ", 전공이수학점 : " + major_done);

//요구사항2 4.5가 아니고 4.0 만점의 경우 총평점
console.log("4.0학점으로 변환하는 경우 총평점은 " + ((grade_sum/grade_done)*4/4.5).toFixed(2) + "입니다.")
```

### 요구사항 2

단위의 범위가 변경되었을 경우 이를 처리할 수 있는 함수를 만들어보자.
함수가 범용적으로 쓸수 있도록 하자, 4.5가 아니고 만점이 4.0인 경우에도 동작할 수 있도록 한다.

```
> 총평점 : 3.92, 전공평점:3.5, 이수학점:12, 전공이수학점:6.
> 4.0학점으로 변환하는 경우 총평점은 x.xx은 입니다.
```

### 구현

```
//요구사항2 4.5가 아니고 4.0 만점의 경우 총평점
console.log("4.0학점으로 변환하는 경우 총평점은 " + ((grade_sum/grade_done)*4/4.5).toFixed(2) + "입니다.")
```

### 추가사항

함수로 만들어 사용
전체적으로 변수를 더 사용해서 가독성과 편리성 높이기
(console.log안에 너무 많은 문장)

### 요구사항 3

새로운 과목을 추가하는 'addLecture' 라는 함수를 만들자. 이 함수가 불려지면 출력이 한번 더 발생한다.

```
> 총평점 : 3.92, 전공평점:3.5, 이수학점:12, 전공이수학점:6.
> 4.0학점으로 변환하는 경우 총평점은 x.xx은 입니다. 

// addLecture({'name' : '알고리즘', 'grade' : 'B', 'credit' : 3, 'bMajor' : true}) 를 호출한 이후 추가출력 내용.
> 총평점 : 3.42, 전공평점:3.3, 이수학점:15, 전공이수학점:9.
> 4.0학점으로 변환하는 경우 총평점은 x.xx은 입니다.
```

### 구현

```
function addLecture (score){
    data.push(score); //data의 뒤에 새로운 과목의 정보를 추가
    printScore(data); //다시한번 출력
}
```

------

## 4.사용자 입력받기

### 요구사항 1

이렇게 동작되는 학점계산기를 만들어보자.

```
> 과목을 JSON형태로 입력하세요<종료는 end입력> : {"name" : "영어교양", "grade" : "A", "credit" : 3, "bMajor" : false}
> 과목을 JSON형태로 입력하세요<종료는 end입력> : {"name" : "c programming", "grade" : "A", "credit" : 2, "bMajor" : true}
> 과목을 JSON형태로 입력하세요<종료는 end입력> : "end"

>  총평점 : 4.0, 전공평점:3.3, 이수학점:5, 전공이수학점:2.
> 4.0학점으로 변환하는 경우 총평점은 x.xx은 입니다.
```

### 구현

```
//nodjs에서 제공하는 모듈(라이브러리)를 불러온다. 
const readline = require('readline');

//불러온 readline을 사용할 수 있게 초기화를 한다. 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var data = []; //과목들의 정보가 들어갈 변수

//등급을 점수로 변환하는 함수 (A -> 4.5)
function getScore(grade){
    switch(grade){
        case 'A+': return 4.5;
        break;
        case 'A' : return 4.0;
        break;
        case 'B+' : return 3.5;
        break;
        case 'B' : return 3.0;
        break;
        case 'C+' : return 2.5;
        break;
        case 'C' : return 2.0;
        break;
        case 'D+' : return 1.5;
        break;
        case 'D' : return 1.0;
        break;
        default : return 0;
    }
}

//입력된 과목들의 정보를 토대로 총평점, 전공 평점, 이수학점, 전공이수학점을 출력하는 함수
function printScore(score){
    let grade_sum = 0, grade_done = 0, major_sum = 0, major_done = 0;
    score.forEach(
        function(task){
            grade_done +=  task.credit;
            grade_sum += getScore(task.grade)*task.credit;
            if(task.bMajor) {
                major_sum += getScore(task.grade)*task.credit;
                major_done += task.credit;
            }
        }
    );
    
    console.log("총평점 : " + (grade_sum/grade_done).toFixed(2) 
    + ", 전공평점 : "+ (major_sum/major_done).toFixed(2) 
    + ", 이수학점 : " + grade_done
    + ", 전공이수학점 : " + major_done);

    //요구사항2 4.5가 아니고 4.0 만점의 경우 총평점
    console.log("4.0학점으로 변환하는 경우 총평점은 " + ((grade_sum/grade_done)*4/4.5).toFixed(2) + "입니다.")
    
}

//사용자로부터 과목정보를 입력받는 함수. end입력이 나올때까지 재귀적으로 수행
function addLecture(){
    rl.question("과목을 JSON형태로 입력하세요<종료는 end입력> : ", function(answer) {
        if(answer == "end") {
            printScore(data);
            return rl.close();
        }
        data.push(JSON.parse(answer));
        addLecture();
     });
}
addLecture();
```

### 요구사항 2

최종 출력 결과가 2초 뒤에 화면에 나타나도록 해보자.

```
> 과목을 JSON형태로 입력하세요<종료는 end입력> : {"name" : "영어교양", "grade" : "A", "credit" : 3, "bMajor" : false}
> 과목을 JSON형태로 입력하세요<종료는 end입력> : {"name" : "c programming", "grade" : "A", "credit" : 2, "bMajor" : true}
> 과목을 JSON형태로 입력하세요<종료는 end입력> : "end"

//(2초후에 아래 내용 출력)
>  총평점 : 4.0, 전공평점:3.3, 이수학점:5, 전공이수학점:2.
> 4.0학점으로 변환하는 경우 총평점은 x.xx은 입니다.
```

### 구현

사용 : setTimeout(함수,ms);

```
//익명함수를 만들어 사용한다
setTimeout(function () {
    printScore(data)
}, 2000);
```

------

## 추가사항

등급 -> 점수로 바꾸는 코드
switch 문 혹은 if문이 긴거 같아서
어떻게 해야 효율적일까 생각해보았음

```
//var score = "FDCBA";
function getScore(grade){
    var sum = "FDCBA".indexOf(grade[0]);
    if(grade[1] == '+') sum += 0.5;
    console.log(sum);
}
getScore("A+");
```