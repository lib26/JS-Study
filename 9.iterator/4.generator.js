// const multiple = {
//   [Symbol.iterator]: () => {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return { value: num++ * 2, done: num > max };
//       },
//     };
//   },
// };

//근데 generator 는 우리가 만들일이 거의.. 없다..
//generator 만들 때는 function* 를 붙여줘야한다
function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      //사용자가 원하는 때를 기다렸다가 그다음줘 그다음줘 라고 달라고 할 때 하나하나씩 리턴해줌
      yield i ** 2;
    }
  } catch (error) {
    console.log(error);
  }
}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

// 리턴은 iterator를 바로 끝내버림
// multiple.return();
multiple.throw('Error!');

next = multiple.next();
console.log(next.value, next.done);
