// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }
// 함수도 객체이기때문에 이렇게 할당이 가능. 즉 add에는 함수의 주소값이 들어감.

// 화살표 함수 const name = () => { }
// function 쓰기 귀찮을 때 이렇게 하나봄
add = (a, b) => a + b;

console.log(add(1, 2));

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

// IIFE (Immediately-Invoked Function Expressions)
// 함수를 정의하자마자 함수 주소를 호출하는 방식.
// 많이 사용하는 표현식은 아님
(function run() {
  console.log('😍');
})();
