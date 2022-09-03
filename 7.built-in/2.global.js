// 자바스크립트 전역에서 사용할 수 있는, 어떤 오브젝트를 통하지 않고
// 바로 호출할 수 있는 속성과 함수에 대해 알아보자

//전역 속성이다. 이것은 간단한 값을 반환하며 속성이나 메서드를 가지고 있지 않다.
console.log(globalThis);
console.log(this); // 전역이라는 뜻인듯. 브라우저에서 this는 window이다.
console.log(Infinity);
console.log(NaN);
console.log(undefined);

//객체에 붙지 않고 전역으로 호출하는 함수로, 반환 값을 호출자에게 바로 전환한다.
eval('const num = 2; console.log(num)'); //eval은 JS 코드를 읽을 수 있다
console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat('12.43'));
console.log(parseInt('12.43'));
console.log(parseInt('11'));

// URL (URI, Uniform Resource Identifier 하위 개념)
// URI 는 어떤 리소스를 나타낼 수 있는 단 하나의 고유한 주소나 id같은 것을 가리킴
// 웹사이트를 나타낼 수 있는 유일한게 url
// url은 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리 해야 한다
const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL); //이스케이프 처리를 해준다.
console.log(encoded);

const decoded = decodeURI(encoded); //이스케이프 처리를 다시 한글로 바꿔줌
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));
