// prototype도 이제는 별로 안쓰이고 class로 대체된다.
// prototype레벨의 함수를 만들 필요 없고
// Object.create은 extends로 대체된다.

// const dog1 = { name: '뭉치', emoji: '🐶' };
// const dog2 = { name: '코코', emoji: '🐩' };

//생성자 함수.. 요즘은 안쓰임
function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  // 인스턴스 레벨의 함수.
  // 즉 모든 인스턴스마다 이 함수를 가지고 있음. 메모리 낭비..
  /* this.printName = () => {
    console.log(`${this.name} ${this.emoji}`);
  }; */
}

// 프로토타입 레벨의 함수를 등록한다. 메모리 절약
// 이렇게 만들면 각각의 인스턴스마다 있지는 않지만 사용 가능.
Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};
const dog1 = new Dog('뭉치', '🐶');
const dog2 = new Dog('코코', '🐩');
console.log(dog1, dog2);
dog1.printName();
dog2.printName();

// 오버라이딩
// 인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의 하면 (오버라이딩 하면)
// 프로토타입 레벨의(부모) 함수의 프로퍼티는 가려진다 (섀도잉 됨)
dog1.printName = function () {
  console.log('안녕!!');
};
dog1.printName();

// 정적 레벨 함수만들기. static function
Dog.hello = () => {
  console.log('Hello!');
};
Dog.hello();
Dog.MAX_AGE = 20;
