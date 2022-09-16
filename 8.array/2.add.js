// 보통 이렇게 만듬
const fruits = ['🍌', '🍎', '🍇', '🍑'];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// const fruits = ['🍌', '🍎', '🍇', '🍑'];
// 추가, 삭제 - 좋지 않은 방식 💩
fruits[6] = '🍓';  // 인덱스로 바로 접근은 ㄴㄴ. 대신 fruits.lentgh 사용하셈
console.log(fruits);

delete fruits[1]; // 이렇게하면 1번째 자리에 빈 공간이 생겨버림
console.log(fruits);
