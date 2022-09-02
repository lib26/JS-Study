//key와 value의 이름이 같으면 value를 생략할 수 있다.
const x = 11;
const y = 0;
const coordinate = { x, y }; //{ x: x, y: y };
console.log(coordinate);

function makeObj(name, age) {
  return {
    name: age, //name : name
    age, //age : age
  };
}
console.log(makeObj(x, y));
