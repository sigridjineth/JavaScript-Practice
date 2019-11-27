# 학점계산기

### 1. 목표

#### 1.1. 20180412

- 학점 정보가 담긴 배열 데이터에서 총 평점과 이수학점 구하기

```
var data = [['데이터베이스', 'A', 3], ['교양영어', 'B+', 1], ['철학', 'A', 2]];
showGrade(data);
// "총평점 3.92, 이수학점 6"
```

#### 1.2. 20180416

- 학점 정보 데이터 형식 변경

```
var data = [
  {
    'name': '데이터베이스',
    'grade': 'A',
    'credit': 3
  },
  {
    'name': '교양영어',
    'grade': 'B+',
    'credit': 2
  },
  {
    'name': '철학',
    'grade': 'B+',
    'credit': 1
  }
];
showGrade(data);
// "총평점 3.75, 이수학점 6"
```

#### 1.3. 20180417

- 학점 정보 추가(major)

```
var data = [
  {
    'name': '데이터베이스',
    'grade': 'A',
    'credit': 3,
    'major': true // 전공 부분 추가
  },
  ...
];
showGrade(data);
// 총 평점 3.67, 전공평점 4.00, 이수학점 12, 전공이수학점 9
```

#### 1.4. 20180418

- 4.0 만점 기준으로 변환된 총 평점도 함께 출력하기

```
showGrade(data);
// 총 평점 3.67, 전공평점 4.00, 이수학점 12, 전공이수학점 9
// 4.0 만점 기준 총 평점 3.26
```

#### 1.5. 20180424

- 과목 추가 기능 만들기

```
addLecture(data, { 'name': '자료구조', 'grade': 'B', 'credit': 3, 'major': true });
showGrade(data);
// 총 평점 3.53, 전공평점 3.75, 이수학점 15, 전공이수학점 12
// 4.0 만점 기준 총 평점 3.14
```

#### 1.6. 20180424

- 최종 출력 결과가 2초 뒤에 나타나도록 만들기

```
showGrade(data);
// 아래 내용이 2초 뒤 출력
// 총 평점 3.53, 전공평점 3.75, 이수학점 15, 전공이수학점 12
// 4.0 만점 기준 총 평점 3.14
```

------

### 2. 생각

#### 2.1. 해야 할 것

- 생각 및 설계 : grade.md
- 구현 : index.js

#### 2.2. 구해야 하는 것

- 총 평점 : 모든 과목의 (점수 * 학점)의 합 / 총 학점
- 이수 학점 : 모든 학점의 합
- 4.0 만점 변환 총 평점 : 총 평점 * 새로운 기준 만점 / 원래 기준 만점

#### 2.3. 데이터

- ~~배열-배열 구조 : 과목명, 점수, 학점~~
- 배열-객체 구조

#### 2.4. 고려 사항

- 평점 : 소수점 셋째자리에서 반올림 -> `toFixed(2)`
- 알파벳 점수 : ~~분기문 사용하여 매핑~~ -> 객체 사용

#### 2.5. 예상 함수

- ~~알파벳 점수를 숫자 점수로 바꿔주는 함수 : `getScoreFromGrade()`~~
- 평점 계산 함수 : `getGPA()`
- 총 이수학점 계산 함수 : `getTotalCredit()`
- 최종 결과 출력 함수 : `showGrade()`
- 전공만 뽑아 데이터를 만드는 함수 : `getMajorDataList()`
- 4.5 만점 기준 평점을 다른 만점 기준 평점으로 변환하는 함수 : `convertGPA()`
- 과목을 추가하는 함수 : `addLecture()`
- 결과를 2초 뒤에 출력하는 함수 : `delayPrint()`

------

### 3. 코드 설계

#### 3.1. 최종 결과 출력 함수

```
function showGrade(data) {
  const totalCredit = getTotalCredit(data);
  // 총 이수학점 구하기
  const GPA = getGPA(data, totalCredit);
  // 평점 구하기

  const majorDataList = getMajorDataList(data);
  // 전공 데이터만 추출
  const majorTotalCredit = getTotalCredit(majorDataList);
  // 전공 이수학점 구하기
  const majorGPA = getGPA(majorDataList, majorTotalCredit);
  // 전공 평점 구하기


  const GPAFor40 = convertGPA(GPA, {stdScore: 4.0});
  // 변환 평점 구하기

  const resultMsg = '결과 메세지';
  // 구한 값으로 출력할 메세지 만들기
  delayPrint(resultMsg, {delayTime: 2000});
  // 2초 뒤 결과 메세지 출력하기
}
```

#### 3.2. ~~알파벳 점수를 숫자 점수로 바꿔주는 함수~~

- 함수에서 객체 데이터로 구조 변경 (20180416)

```
const gradePointMap = {
  'A+': 4.5,
  'A': 4.0,
  'B+': 3.5,
  'B': 3.0,
  'C+': 2.5,
  'C': 2.0,
  'D+': 1.5,
  'D': 1.0,
  'F': 0
};
```

#### 3.3. 평점 계산 함수

```
function getGPA(data, totalCredit) {
  let sumOfGrade = 0;
  for (i < data.length) {
    // 반복문 사용하여 연산
    const score = getScoreFromGrade(데이터 점수 부분);
    const credit = 데이터 학점 부분;
    sumOfGrade += (score * credit);
  }
  const gpa = (sumOfGrade / totalCredit).toFixed(2);
  return gpa;
}
```

#### 3.4. 총 이수학점 계산 함수

```
function getTotalCredit(data) {
  let totalCredit = 0;
  for (i < data.length) {
    // 반복문 사용하여 연산
    totalCredit += 데이터 학점 부분;
  }
  return totalCredit;
}
```

#### 3.5. 전공만 뽑아 데이터를 만드는 함수

```
function getMajorDataList(data) {
  // major가 true임을 검사해서
  // 새로운 배열 - 객체로 이루어진 데이터를 만든다
  return majorDataList;
}
```

#### 3.6. 4.5 만점 기준 평점을 다른 만점 기준 평점으로 변환하는 함수

```
function convertGPA(GPA, {stdScore: 기준점수}) {
  // 변환 평점 = GPA * 새로운 기준 만점 / 원래 기준 만점
  // 계산된 변환 평점 소수 셋째 자리에서 반올림
  return convertedGPA;
}
```

#### 3.7. 과목을 추가하는 함수

```
function addLecture(data, 객체 형태의 입력 값) {
  // 기존 데이터 data에 입력받은 객체 형태의 값을 추가
  // 리턴값 없음
}
```

#### 3.8. 결과 메세지를 일정 시간 뒤에 출력하는 함수

```
function delayPrint(message, {delayTime: 지연시간}) {
  // setTimeout 이용해서 2초 뒤 출력
}
```