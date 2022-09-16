// js는 기본적으로 하나의 한가지만 일하는 동기적 실행이 일어남 = 싱글 쓰레드
// 자바스크립트 엔진 안에는 힙과 스텍이 있나봄.
// js 엔진은 하나의 하나의 일만 처리할 수 있는 싱글 context 스택이 있다. call Stack임.
// 우리가 동적으로 객체를 만들면 Memory Heap에 담기고
// call stack 이라는 곳은 함수의 실행 순서를 기억한다. 즉 함수가 위로 차곡차곡 쌓임

function a() {
  for (let i = 0; i < 1000000000000000; i++);
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

console.log('시작했다!');
const result = c();
console.log(result);
