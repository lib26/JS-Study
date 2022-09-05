// static 정적 프로퍼티, 메서드
class Fruit {
  static MAX_FRUITS = 4;
  // 생성자: new 키워드로 객체를 생성할때 호출되는 함수

  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 클래스 레벨의 메서드
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
    return new Fruit('banana', '🍌');
  }

  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

//class 레벨에서의 접근 법. 즉 Fruit 라는 class명을 쓴다.
//static이 앞에 붙은 property 혹은 method는 인스턴스가 접근할 수 없다.
const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
// orange은 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);

apple.display();

// built-in이라는 static 함수가 있는데
// Math라는 오브젝트를 만들지 않아도 함수에 접근하여 쓸 수 있다!
Math.pow();
Number.isFinite(1);
