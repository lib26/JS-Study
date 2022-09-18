// prototype = 원형, 오리지널 버전, 어떠한 그룹에서의 공통된 특징을 나타냄, 초기 프로그램의 예제이다
// js란 prototype을 베이스로한 객체지향 프로그래밍 언어이다.
// 근데 최근에 class 라는 개념이 도입된거임. 이젠 굳이..

// 다 외우자는 것은 아니다.
// jas에서 모든 객체들은 Object라는 내부에 숨겨진 프로토타입을 가지고 있다. 즉 상속 받고있다.
// 객체간 상속의 연결 고리는 프로토타입 체인으로 연결되어있다.
// 모든 어레이들도 Array라는 프로토타입을 가지고 있음. Object도 상속하고있음

// JS 객체에는 단지 key와 value만 있는 게 아니다.
// 특정한 키의 value가 수정되면 안되거나
// 열거되면 안되거나
// 키 자체가 수정되거나 삭제되면 안되게 하는 것을 세밀하게 만들 수 있다.

const dog = { name: '와우', emoji: '🐶' };

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log('name' in dog);
console.log(dog.hasOwnProperty('name'));

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log('descriptor', descriptors);

const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(desc);

Object.defineProperty(dog, 'name', {
  value: '멍멍',
  writable: false, // value 업데이트 불가
  enumerable: false, // keys나 values 같은 열거함수에서 열거 못하게
  configurable: false, // key 삭제, 수정 등과 같은 거 못하게
});

console.log('dog.name', dog.name);
console.log(Object.keys(dog)); // enumerable: false 해줘서 열거 안된다. 즉 출력 안됨
delete dog.name; // configurable: false 해줘서 삭제 불가능
console.log(dog.name);

// 객체 안에 있는 모든 property를 정의할 수 있다,
const student = {};
Object.defineProperties(student, {
  firstName: {
    value: '영희',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: '김',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${this.lastName} ${this.firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(' ');
    },
    configurable: true,
  },
});
console.log(student);
