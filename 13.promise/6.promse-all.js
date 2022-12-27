// promise의 나머지 static 함수에 대해 알아보자

function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000); //1초 뒤에 바나나를 반환한다.
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
// 4초가 걸린다.
// 결국 바나나와 사과가 들어간 배열을 리턴한다.
getBanana()
  .then((banana) =>
    getApple() //바나나를 가져오면 getApple()을 리턴한다. 즉, 앞에 return을 생략함
      .then((apple) => [banana, apple])
  ) // 결국 바나나와 사과 배열을 리턴하는 promise를 리턴
  .then(console.log); // 배열을 리턴

// 위에처럼하면 4초가 걸리지만 이걸 병렬적으로 할 수 있음
// Promise.all 병렬적으로 한번에 모든 Promise들을 실행!
Promise.all([getBanana(), getApple()]).then(
  (fruits) => console.log('all', fruits) // 두개의 promise 다 성공(resolve)된다면 그 결과들을 배열로 전달. fruits는 배열
); // 결국 동시에 실행되서 3초가 걸림

// Promise.race 주어진 Promise중에 제일 빨리 수행된것이 이김!
Promise.race([getBanana(), getApple()]).then((fruit) =>
  console.log('race', fruit)
); // 1초가 걸리고 바나나만 리턴

Promise.all([getBanana(), getApple(), getOrange()]) // 이 세가지가 모두 성공해야 then으로 넘어가는데
  .then((fruits) => console.log('all-error', fruits)) // 오렌지가 resolve가 아닌 reject라서 then 실행 안되나봄
  .catch(console.log); // 결국 출력되는 건 없음

// 성공된 결과와 실패한 결과가 배열로 출력이 된다.
// 즉, 바나나, 사과, reject 까지 배열로 나타남
Promise.allSettled([getBanana(), getApple(), getOrange()])
  .then((fruits) => console.log('all-settle', fruits))
  .catch(console.log);
