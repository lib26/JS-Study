const map = new Map([
  ['key1', '🍎'],
  ['key2', '🍌'],
]);
console.log(map);

// 사이즈 확인
console.log(map.size);

// 존재하는지 확인
console.log(map.has('key1'));
console.log(map.has('key6'));

// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// 찾기
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key4'));

// 추가
map.set('key3', '🥝');
console.log(map);

// 삭제
map.delete('key3');
console.log(map);

// 전부삭제
// map.clear();
// console.log(map);

// 오브젝트와의 큰 차이점?? 사실 구조상 차이점은 없다.
// 하지만 각자 사용할 수 있는 함수가 다르다.
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는우유' };

const obj = {
  // 음..
  [key]: milk,
};
console.log(obj);

const map2 = new Map([[key, milk]]);
console.log(map2);

// 이처럼 각자 데이터를 가져오는 함수? 접근법? 이 다르다.
console.log(obj[key]); //object 에서는 key를 동적으로 접근이 가능했지만 map은 ㄴㄴ
console.log(map2[key]); // map은 이렇게 접근 불가. undefined
console.log(map2.get(key)); // map은 get함수를 이용해서 value를 가져와야함
