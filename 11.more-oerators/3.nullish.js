// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)
// ?? null, undefined 인 경우에만 뒤에 문장이 실행
// || falshy한 경우 설정(할당) 0, -0, '', null, undefined 모두 해당
let num = 0;
console.log(num || '-1'); // num의 0을 falshy 해서 -1
console.log(num ?? '-1'); // 0, -0, '' 를 trushy라고 판단함
