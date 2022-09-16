// iterable 프로토콜을 따르기 위해서는 아래의 심볼이 객체 안에 있어야한다.
// [Symbol.iterator](): Iterator{ next(): {value, done}};
// iterator 객체는 next라는 함수가 꼭 있어야한다.
// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!

// 결국 multiple이라는 객체는 프로토콜을 따르기에
// iterator를 반환을 하고 for of연산자 사용가능
// 이 iterator는 오브젝트를 반환한다.
// 이 오브젝트 안에는 next라는 함수가 있다.
// 그래서 next를 호출할 때마다 여기서도 오브젝트를 리턴하는데
// 여기에는 value 와 done이 있는거지

// done은 순회를 끝낼지 말지 정하는 건가봄

const multiple = {
  [Symbol.iterator]() {
    const max = 10;
    let num = 0;
    return {
      next() {
        // num이 2배 된 뒤에 ++을 해준다
        return { value: num++ * 2, done: num > max };
      },
    };
  },
};

for (const num of multiple) {
  console.log(num);
}
