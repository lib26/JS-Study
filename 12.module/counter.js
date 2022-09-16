// 프로젝트를 할 때 하나의 js 파일만 쓰진 않는다.
// 각각의 js 파일을 모듈화(캡슐화)하여 외부 노출을 하는 법

// HTML 파일에서 script type을 module로 지정함으로써
// 각 js 파일을 캡슐화 할 수 있다.
// 즉, 각 js파일에서 다른 js 파일로의 접근을 불가한다.
// js 파일끼리 접근을 허용하기 위해서 export와 import 개념을 사용한다.

//export let count = 0; 웬만하면 변수는 export 하지말자
let count = 0;

// 하나의 함수만 외부 접근을 허용하고 싶다면 export default
export function increase() {
  count++;
  console.log(count);
}
export function getCount() {
  return count;
}
