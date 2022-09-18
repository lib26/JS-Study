// 동결! Object.freeze 추가 ❌, 삭제 ❌, 쓰기 ❌, 속성 재정의 ❌
// (단, 얕은 꽁꽁 얼림!)
const ellie = { name: '엘리' };
const dog = { name: '와우', emoji: '🐶', owner: ellie };
Object.freeze(dog);
dog.name = '멍멍'; // 값 수정 불가
console.log(dog);
dog.age = 4;
console.log(dog);
delete dog.name; // 삭제 불가
console.log(dog);
ellie.name = '엘리얌'; // 하지만 owner는 얕은 복사기에 가능
console.log(dog);

// 밀봉! Object.seal 값의 수정 ✅, 추가 ❌, 삭제 ❌, 속성 재정의 ❌
const cat = { ...dog };
//ㄴ Object.assign(cat, dog); 같음
Object.seal(cat);
console.log(cat);
cat.name = '냐옹';
console.log(cat);
delete cat.emoji;
console.log(cat);

console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));

// 확장 금지 preventExtensions 추가 ❌
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));

tiger.name = '어흐응'; // 값 수정 가능
console.log(tiger);
delete tiger.name; // 삭제 가능

console.log(tiger);
tiger.age = 1; // 추가 안됨
console.log(tiger);
