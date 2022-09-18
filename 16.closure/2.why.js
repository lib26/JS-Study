// 내부 정보를 은닉하고, 공개 함수(public, 외부)를 통한 데이터 조작을 위해
// 캡슐화와 정보은닉
// 클래스 private 필드 또는 메소드를 사용하는 효과와 동일!
// 앞서 말했듯이 이제는 closure 대신에 class 사용하면 된다.

function makeCounter() {
  let count = 0; // 은닉하고자하는 데이터를 감추고
  function increase() { //오직 퍼블릭 함수를 통해서 내부 데이터 조작하도록 한다.
    count++;
    console.log(count);
  }
  return increase;
}

const increase = makeCounter();
increase();
increase();
increase();

class Counter {
  #count = 0; // private한 필드
  increase() {
    this.#count++;
    console.log(this.#count);
  }
}
const counter = new Counter();
counter.increase();
