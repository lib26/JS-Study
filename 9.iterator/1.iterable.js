// iterator는 거의 사용할 일 없지만... for of array 이런거 많이 사용

// Iterable 하다는건! 순회가 가능하다는 거지!
// 순회가 가능하기 위해선 iteration protocal을 따라야함.
// 프로토콜이란 객채 안에 이것이 정의되어있어야함.
// [Symbol.iterator](): Iterator -> 함수 호출시 next가 가능한 이터레이터를 반환.
// 이렇게 반환된 iterator(반복자)로 순회를 한다.
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는것은
// 순회 가능한 객체이다 라는걸 알 수 있음
// 순회가 가능하면 무엇을 할 수 있나? 빙글빙글 도는 for..of, spread 연산자에서 사용가능
const array = [111, 222, 333];
for (const item of array.entries()) {
  console.log(item);
}

//얘같이 이터레이터 프로토콜을 따르지 않는 일반 객체는 for of 연산자 사용 불가
// 대신 for in 이라는 연산자 가능. 이것은 오브젝트 안에 있는 key를 출력한다.
//왜? 오브젝트 안에는 [Symbol.iterator](): Iterator; 정의가 없기 때문
const obj = { 0: 1, 1: 2 };
for (const item in obj) {
  // key를 출력
  console.log(item);
}

// 이터레이터 자체를 수동적으로 리턴 받아서 직접 사용? 하는 법
const iterator = array.values();
console.log(iterator.next().value); //111
console.log(iterator.next()); // {value : 222, done : false}
console.log(iterator.next().value); //333
console.log(iterator.next().value); //undefined
console.log(iterator.next().done); // true : 야 반복 끝남! false : 반복 아직 안끝남!

// for of의 내부적 구현 방식은 이렇게 되어있음 
const iterator_w = array.values();
while (true) {
  const item = iterator_w.next();
  if (item.done) break;
  console.log(item.value);
}
