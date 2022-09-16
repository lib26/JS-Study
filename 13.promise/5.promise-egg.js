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
  return Promise.reject(new Error('치킨을 가지고 올 수 없음!'));
  //return Promise.resolve(`🪴 => 🐓`);
}

// getChicken()
//   .then((chicken) => {
//     return fetchEgg(chicken);
//   })
//   .then((egg) => { fryEgg(egg) })
//   .then((friedEgg) => { console.log(friedEgg); });

/*
여러가지 chaining 되어있으면
에러는 버블링 되기에 순서 중요

getChicken()
  .catch((error) => {
    console.log(error.name);
    return '🐔';
  })
  .then((chicken) => {
    return fetchEgg(chicken);
  })
  .then((egg) => {
    fryEgg(egg);
  })
  .then((friedEgg) => {
    console.log(friedEgg);
  });

얘를 간단하게 하면 밑에처럼 된다.
코드에서 바로 return하면 생략 가능하고
전달하는 인자가 같으면 이것도 생략 가능
  */

getChicken()
  .catch(() => '🐔')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
