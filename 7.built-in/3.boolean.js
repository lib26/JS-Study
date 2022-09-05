// Boolean도 여기에 해당하는 wrapper 객체가 있다. 바로 Boolean 오브젝트이다.
// 즉 boolean 원시타입에도 해당하는 객체가 있다.
const isTrue = new Boolean(true); // 근데 객체타입은 메모리를 많이 차지하니 굳이..
console.log(isTrue.valueOf());

/**
 * Falshy
 * 0
 * -0
 * null
 * NaN
 * undefined
 * ''
 */

/**
 * Truthy
 * 1
 * -1
 * '0'
 * 'false'
 * [] 배열임 나중에 배움
 * {} 텅텅빈 오브젝트도 true임
 */
