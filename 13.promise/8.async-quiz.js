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

async function makeFriedEgg() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch {
    chicken = '🐔';
  }

  const egg = await fetchEgg(chicken);
  return fryEgg(egg);

  // 위에 두줄 코드 대신에 이렇게 마무리해도 됨.
  // const result = await fryEgg(egg);
  // return result; -> result라는 string을 resolve하는 promise를 반환한다는 의미
}

makeFriedEgg().then(console.log);
