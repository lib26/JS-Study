// 접근제어자 - 캡슐화
// private(#), public(기본), protected(상속된 자식 클래스에서만 접근 가능)
// 근데 이런 키워드는 JS에는 없어

class Fruit {
  #name;
  #emoji;
  #type = '과일';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  #display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
//apple.#name = '오렌지'; // #field는 외부에서 접근이 불가능함
console.log(apple);
