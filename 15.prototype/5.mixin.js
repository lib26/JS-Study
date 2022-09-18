// 오브젝트는 단 하나의 prototype을 가리킬 수 있다 (부모는 단 하나!)
// 하지만! 여러개의 함수들을 상속하고 싶다!
// 그럴때 쓰는 개념. Mixin!

// play라는 객체 안에 play라는 함수가 있다.
const play = {
  play: function () {
    console.log(`${this.name} 놀아요!`);
  },
};

// sleep이라는 객체 안에 sleep이라는 함수가 있다.
const sleep = {
  sleep: function () {
    console.log(`${this.name} 자요!`);
  },
};

// 생성자 함수
function Dog(name) {
  this.name = name;
}

Object.assign(Dog.prototype, play, sleep);
const dog = new Dog('멍멍');
console.log(dog);
dog.play();
dog.sleep();

//class를 사용했지만 js는 프로토타입 베이스임.
class Animal {}
class Tiger extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}

Object.assign(Tiger.prototype, play, sleep);
const tiger = new Tiger('어흥!');
tiger.play();
tiger.sleep();
