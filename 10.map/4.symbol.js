// Symbol 심벌
// 유일한 키를 생성할 수 있음 🔑
// 심벌은 map을 사용할 때 주로 사용된다.
// 왜? 바로 밑에 예시처럼 map의 key 값이 문자열일 때 중복되면 곤란하니까
const map = new Map();
// const key1 = 'key';
// const key2 = 'key';

// 이런식으로 key라는 값은 같지만 key1 과 key2는 다르게 만드는 것이 symbol이다.
const key1 = Symbol('key');
const key2 = Symbol('key');

map.set(key1, 'Hello');
console.log(map.get(key2)); //undefined
console.log(key1 === key2); //false

// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 심벌 레지스트리에 저장된다. (Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2); // true

//해당 심볼에 무슨 문자열이 담겨있는지 알려고할 땐 keyFor 사용
//하지만 keyFor는 전역 심벌 레지스트리에 저장된 심벌에 한해서만 사용가능
console.log(Symbol.keyFor(k1)); //key
console.log(Symbol.keyFor(key1)); //undefined
//그래서 key1 같은 일반 심벌은 문자열에 대한 정보가 숨겨져있다.

const obj = { [k1]: 'Hello', [Symbol('key')]: 1 };
console.log(obj);
console.log(obj[k1]); //Hello
console.log(obj[Symbol('key')]); //undefined 왜? 29줄 심벌과 32줄 심벌은 전혀 다른거임
