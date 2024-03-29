// 배열 생성 방법
let array = new Array(3);
console.log(array);

//생성자 함수를 이용해서 new 이렇게 만들 수도 있다.
array = new Array(1, 2, 3);
console.log(array);

// static 함수를 이용해서 배열을 만들 수도 있다.
array = Array.of(1, 2, 3, 4, 5);
console.log(array);

// 배열 리터럴을 이용해서 만들 수도 있다.
const anotherArray = [1, 2, 3, 4];
console.log(anotherArray);

//기존 배열로부터 새로운 배열을 만들 수도 있다.
array = Array.from(anotherArray);
console.log(array);

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어함
// 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있고
// 오브젝트와 유사함!
// 자바스크립트의 배열은 일반적인(=다른 프로그래밍 언어) 배열의 동작을 흉내낸 특수한 객체다!
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음 (Typed Collections)

// object를 사용하여 이런식으로도 만들 수 있다. 길이가 2인 [안, 녕] 이라는 배열이 만들어짐
array = Array.from({
  0: '안',
  1: '녕',
  length: 2,
});
console.log(array);
