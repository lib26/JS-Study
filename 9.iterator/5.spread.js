// Spread 연산자, 전개구문, 정말 많이 쓰인다네
// 모든 Iterable은 Spread 될 수 있다
// 순회가 가능한 모든 것들은 촤르르르륵 펼쳐 질 수 있다
// func(...iterable)
// [...iterable]
// { ...obj }
// EcmaScript 2018

function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums));

// Rest parameters
// first에는 1, second에는 2, num에는 [0,1,2,4] 배열이 들어간다
function sum(first, second, ...nums) {
  console.log(nums);
}
sum(1, 2, 0, 1, 2, 4);

// Array Concat
const fruits1 = ['🍏', '🥝'];
const fruits2 = ['🍓', '🍌'];

let arr = fruits1.concat(fruits2);
console.log(arr);

// [ '🍏', '🥝', '🍓', '🍓', '🍌' ]
arr = [...fruits1, '🍓', ...fruits2];
console.log(arr);

// Object
const ellie = { name: 'Ellie', age: 20, home: { address: 'home' } };
const updated = {
  ...ellie,
  job: 's/w engineer',
};
console.log(ellie);
console.log(updated);
