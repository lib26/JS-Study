// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }
// 함수도 객체이기때문에 이렇게 할당이 가능. 즉 add에는 함수의 주소값이 들어감.
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => { }
add = (a, b) => a + b;

console.log(add(1, 2));

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

// IIFE (Immediately-Invoked Function Expressions)
(function run() {
  console.log('😍');
})();
