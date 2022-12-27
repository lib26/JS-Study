// promise의 chaining에 대하여
// then을 여러번 쓸 수 있다. 순차적으로 내려감.
// promise도 static함수가 있다.

function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  // return Promise.reject(new Error('치킨을 가지고 올 수 없음!'));
  return Promise.resolve(`🪴 => 🐓`);
}

// ⭐️⭐️ 여기 부분 promise가 리턴되고 어떤 data와 같이 resolve되는지 이해하기
// return이 생략될 수 있다는 점 알아두기
getChicken()
  .then((chicken) => {
    return fetchEgg(chicken); // 밑에처럼 return 생략 가능.
  })
  .then((egg) => {
    // 여기서 egg는 위에 fetchEgg에서 받은 promise 객체에서 resolve할 때 보내준 데이터임.
    fryEgg(egg); // return 생략되어있음. 결국 얘도 어떠한 데이터를 resolve해주는 prmoise 객체를 리턴하는거라 밑에서 then으로 chaining이 가능한 것
  })
  .then((friedEgg) => {
    console.log(friedEgg);
  });

// 여러가지 chaining 되어있으면
// 에러는 버블링 되기에 순서 중요
// 근데 왜 마지막은 undefined,,?
getChicken()
  .catch((error) => {
    console.log(error);
    return '🐔';
  })
  .then((chicken) => {
    console.log(chicken);
    return fetchEgg(chicken);
  })
  .then((egg) => {
    console.log(egg);
    fryEgg(egg);
  })
  .then((friedEgg) => {
    console.log(friedEgg);
  });

// 얘를 간단하게 하면 밑에처럼 된다.
// 코드에서 바로 return하면 생략 가능하고
// 전달하는 인자가 같으면 이것도 생략 가능

getChicken()
  .catch(() => '🐔')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
