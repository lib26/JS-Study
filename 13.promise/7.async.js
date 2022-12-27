// 비동기적인 코드를 동기적인 형태로 절차적으로 사용할 수 있는 방법이 있다.
// async : 비동기적으로 실행되는 함수 안에서 await를 활용하여 동기적으로 코드를 진행할 수 있다.
// 결국 비동기긴한데 비동기 안에서는 동기적으로 흘러가는 절차? 그런의미인듯

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
// 함수 앞에 async를 써서 "이 함수는 비동기 함수야" 라고 알려줌
async function fetchFruits() {
  // await를 쓰지 않으면 promise 객체가 그대로 할당된다.
  // await를 써서 banana와 apple에는 바나나와 사과 값이 할당된다.
  // 그럼 왜 이렇게 하는거냐? then then 처럼 chaining이 보기 복잡하기 때문임
  // 그래서 이렇게 async를 써서 비동기적인 코드를 절차적으로 동기적으로 쓸 수 있음

  /**
   * 즉, 이렇게 쓰기 싫은거지
   getBanana()
    .then((banana) =>
      getApple()
        .then((apple) => [banana, apple])
  )
  .then(console.log); // 4초 있다가 배열이 출력된다.
   */

  const banana = await getBanana(); // await를 앞에 안써주면 banana에는 promise 객체가 할당됨
  const apple = await getApple(); // getApple()로 받아와진 apple 값을 할당할 때까지 기다린다는 의미로 그래서 동기적인 표현인거임

  return [banana, apple]; // ⭐️⭐️ [banana, apple] 베열을 resolve 하는 promise를 반환한다. ⭐️⭐️
}

fetchFruits() // 결국 fetchFruits()는 위의 과일 배열을 resolve하는 prmoise객체이다. 그래서 then절이 다음에 올 수 있음
  .then((fruits) => console.log(fruits)); //4초 걸리고  [ '🍌', '🍎' ]
