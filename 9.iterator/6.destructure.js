// 구조 분해 할당 Desturcturing Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들수 있다
const fruits = ['🍏', '🥝', '🍓', '🍌'];
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2];
const [y, x, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
  return ['apple', '🍎'];
}
const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const ellie = { name: 'Ellie', age: 20, job: 's/w engineer' };
function display({ name, age, job }) {
  // 이름과 나이와 직업을 구조분해해서 받아올 것이야!
  console.log('이름', name);
  console.log('나이', age);
  console.log('직업', job);
}
display(ellie);

console.clear();

// job을 occupation으로 바꿔서 사용하겠다. 라는 뜻
const { name, age, job: occupation, pet = '강아지' } = ellie;
console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);

// Quiz
const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

// 구조분해를 2번해줄 수 있다.
function changeColor({ styles: { color } }) {
  console.log(color);
}
changeColor(prop);
