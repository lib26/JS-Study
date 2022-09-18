// 최신 TS,JS는 이 방식보단 class 사용.
// 프로토타입을 베이스로한 객체지향 프로그래밍
function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

//class 에서는 이과정을 class 내부에 쓰주면 끝
Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
  // super(name, emoji) 호출과 동일한 call을 사용할 것이다.
  Animal.call(this, name, emoji);
  this.owner = owner;
}

// 프로토타입식 상속인듯. class에서는 이 문장이 extends로 끝남
// Dog.prototype = Object.create(Object.prototype);
// Dog의 프로토타입은 원래 Object였지만 Animal로 바꿔주겠다.
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.play = function () {
  console.log('같이 놀자옹!');
};

const dog1 = new Dog('멍멍', '🐶', '엘리');
dog1.play();
dog1.printName();

//

function Tiger(name, emoji) {
  Animal.call(this, name, emoji);
}

Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
  console.log('사냥하자! ..🐇..');
};

const tiger1 = new Tiger('어흥', '🐯');
tiger1.printName();
tiger1.hunt();

//이 객체가 어떤 생성자 함수를 스는지 알수있음
console.log(dog1 instanceof Dog); //true
console.log(dog1 instanceof Animal); //에니몰도 상속했으니 true
console.log(dog1 instanceof Tiger); // false
console.log(tiger1 instanceof Dog); // f
console.log(tiger1 instanceof Animal); // t
console.log(tiger1 instanceof Tiger); // t
