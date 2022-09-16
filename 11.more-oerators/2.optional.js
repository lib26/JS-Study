// 옵셔널 체이닝 연산자 Optional Chaining Operator
// ES11 (ECMAScript 2020)
// ?.
// null 또는 undefined을 확인할때
let item = { price: 1 };
const price = item?.price; // 아이템이 truthy 하면 할당해.
//item && item.price 를 위에처럼 간단하게 줄여쓴거지
console.log(price);

let obj = { name: '🐶', owner: { name: '엘리' } };
function printName(obj) {
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}
printName(obj);
