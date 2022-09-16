// 비동기적인 코드를 동기적인 형태로 절차적으로 사용할 수 있는 방법이 있다.
// async : 동기적인 코드처럼 보이지만 비동기적인 코드를 작성할 수 있다.

function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// 바나나과 사과를 같이 가지고 오기
// 함수 앞에 async를 써서 "이 함수는 비동기 함수야!" 라고 알려줌
async function fetchFruits() {
  // await를 쓰지 않으면 promise 객체가 그대로 할당된다.
  // await를 써서 banana와 apple에는 바나나와 사과 값이 할당된다.
  // 그럼 왜 이렇게 하는거냐? then then 처럼 chaining이 보기 복잡하기 때문임
  // 그래서 이렇게 async를 써서 비동기적인 코드를 절차적으로 즉, 동기적으로 쓸 수 있음

  /**
   * 즉 이렇게 쓰기 싫은거지
   getBanana()
    .then((banana) =>
      getApple()
        .then((apple) => [banana, apple])
  )
  .then(console.log); // 4초 있다가 배열이 출력된다.
   */

  const banana = await getBanana();
  const apple = await getApple();
  return [banana, apple]; // 이 베열을 하는 promise를 반환한다.
}

fetchFruits() //
  .then((fruits) => console.log(fruits)); //4초 걸리고  [ '🍌', '🍎' ]
