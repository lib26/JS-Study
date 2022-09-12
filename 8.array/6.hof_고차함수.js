/**
 * 일급 객체, 일급 함수
 * : 일반 객체(data)처럼 모든 연산이 가능한 것
 * 함수의 매개변수로 전달이 가능하고
 * 함수의 반환값으로 반환할 수 있고
 * 어떠한 변수에 객체나 함수를 할당할 수 있고
 * 동일 비교 할 수 있다.
 */

// 고차함수 Higher-order-function
// 인자로 함수를 받거나(callback) 함수를 반환하는 함수를 고차함수라고한다.

// 함수형 프로그래밍 : 순수함수를 엮어서 만드는 것
// 함수 자체를 '순수함수' 로 만드는 것이 중요
// 함수 안에서 '불변성'을 갖는다. 즉 매개변수로 들어온 값이나 외부의 값이 안바뀌게
// 에러 감소, 가독성 굿
// 데이터를 변경X, 변수 사용X, 조건문X, 반복문X

//🔅
// 이 얘기를 배열에서 왜 말하느냐? 배열에서도 함수형프로그래밍 스타일로 코딩을 할 수 있다.
// forEach 같이 배열에서 쓸 수 있는 고차함수가 있다. 즉 forEach 는 함수를 인자로 받는다.

const fruits = ['🍌', '🍓', '🍇', '🍓'];

// 배열을 빙글 빙글 돌면서 원하는것(콜백함수)을 할때
fruits.forEach(function (value) {
  console.log(value);
});
// 보통은 이렇게 에로우 표현을 많이 씀
fruits.forEach((value) => console.log(value));

// 조건에 맞는(콜백함수) 아이템을 찾을때
// find: 제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: '🥛', price: 2 };
const item2 = { name: '🍪', price: 3 };
const item3 = { name: '🍙', price: 1 };
const products = [item1, item2, item3, item2];
let result = products.find((item) => {
  //단순히 리턴만 할 땐 {}, return 생략 가능. 밑에서부턴 그렇게 함
  return item.name === '🍪';
});
console.log(result);

// findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result = products.findIndex((item) => item.name === '🍪');
console.log(result);

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인. 즉 얘는 true를 반환함.
result = products.some((item) => item.name === '🍪');
console.log(result);

// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인. 즉 얘는 false를 반환함.
result = products.every((item) => item.name === '🍪');
console.log(result);

// 조건에 맞는 모든 아이템들을 새로운 배열로!
result = products.filter((item) => item.name === '🍪');
console.log(result);

console.clear();

// Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성!
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result);

result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

// Flatmap: 중첩된 배열을 쫘악 펴서 새로운 배열로!
result = nums.map((item) => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

//
result = ['dream', 'coding'].flatMap((text) => text.split(''));
console.log(result);

// sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

// 이렇게 sort만 하면 숫자를 문자로 취급하게 된다.
const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers);

// < 0 a가 앞으로 정렬, 오름차순
// > 0 b가 앞으로 정렬, 내림차순
numbers.sort((a, b) => a - b);
console.log(numbers);

// reduce 배열의 요소들을 접어서 접어서 값을 하나로!
// 두번째 인자 0은 초기값. 즉, sum 매개변수를 0으로 초기화 한 뒤 시작하겠다
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(result);
