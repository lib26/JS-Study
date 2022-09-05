// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterate(max, action)
function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

function log(num) {
  console.log(num);
}

iterate(3, log);
iterate(3, (num) => console.log(num * 2));
//num이란 것을 받아서 => 다음에 오는 것을 실행하는 함수를 넘겨준다 는 뜻


// 호스트 api를 사용할 때 콜백함수를 전달할 수 있다.
// 여기서 () => 이것또한 20번째 라인과 같은 표현법. 즉 ()이건 인자값은 없는 것.
setTimeout(() => {
  console.log('3초뒤 이 함수가 실행될거예요');
}, 3000);
