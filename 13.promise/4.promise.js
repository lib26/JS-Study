// 앞의 퀴즈문제를 promise로
// promise의 장점은 콜백함수를 사용하지 않고 깔끔하게 코딩 가능

//promise 는 비동기적으로 실행되는 것을 실패든 성공이든 알려주는 object 이다.
// 비동기적으로 무언가를 수행하고 끝났다 ! 라고 알려줌
// 상태는 3가지. 진행중, 성공, 실패
function runInDelay(seconds) {
  // ㄴpromise을 하고싶을 땐 콜백 함수를 받지는 않고, 바로 promise 객체를 리턴한다.

  // promise 객체를 생성하고 resolve와 reject라는 callback 함수를 전달해야함.
  return new Promise((resolve, reject) => {
    //여기 부분이 이제 비동기적으로 처리되는 부분이다.
    // 결국 promise 객체를 리턴하는 것이고, 밑에서 .then을 쓸 수가 있는거임
    // 성공하면 resolve 콜백함수가 호출이 될 것이고
    // 실패하면 reject 콜백함수가 호출이 될 것이다.
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음'));
    }
    setTimeout(resolve, seconds * 1000);
    // 타임아웃이 성공하면 callback 함수인 resolve를 호출한다.
    // setTimeout 첫번재 인자에 ()=>{resolve();} 라는 callback 함수가 들어가야하지만,
    // 간략하게 resolve만 써도 가능하다. 왜? 아무것도 인자로 안주고 안받아서? 인듯
  });
}

// runInDelay(2) 는 promise 객체를 리턴 받는다. 그래서 잇따라 .then 메소드를 쓰는거
runInDelay(2) // runInDelay이 성공적으로 완료되면 then을 호출 / 실패하면 catch 호출
  .then(() => console.log('타이머 완료!')) // 필요한 일을 수행
  .catch(console.error) // 에러를 처리
  .finally(() => console.log('끝났다!')); // 최종적으로
