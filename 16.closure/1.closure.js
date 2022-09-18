// closere란 내부 함수에서 외부 함수로의 렉시컬 환경에 접근이 가능하다
// 근데 이제는 closure 작성할 필요 없이 class 사용하면 된다.

const text = 'hello';
function func() {
  console.log(text);
}
func();

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  return inner;
}
const func1 = outer();
func1();
