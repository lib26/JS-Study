// 퀴즈!
// 1. 문자열의 모든 캐릭터를 하나씩 출력하라
const text = 'Hello World!';
// H
// e
// l
// l
// ..
// !
for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}

// 2. 사용자들의 id를 잘라내어 각각의 id를 배열로 보관
const ids = 'user1, user2, user3, user4';
// ['user1', 'user2', 'user3', 'user4']
const array = ids.split(', ');
console.log(array);

// 3. 1초에 한번씩 시계를 (날짜포함) 출력해보자
// 첫번째 인자는 콜백 함수이다. 두번째 인자는 이 콜백 함수를 몇초마다 호출할지 결정
setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleString('ko-KR'));
}, 1000);
