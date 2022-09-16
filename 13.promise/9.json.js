// JSON: JavaScript Object Notation
// 자바스크립트에서 사용하는 오브젝트를 서버와 주고받기 편한 문자열로 변환한 버전

// 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한
// 오브젝트 형태의 텍스트 포맷. 그래서 object를 json으로 변환 가능. 반대도 가능.

// stringify(object): JSON -> obj을 json으로 변환해주는 함수.
// ㄴ obj을 서버로 보낼 때 씀
// parse(JSON): object 이건 반대의 경우ㅇㅇ

const ellie = {
  name: 'ellie',
  age: 20,
  eat: () => {
    //obj 안에 있는 함수
    console.log('eat');
  },
};

// 직렬화 Serializing: 객체를 문자열로 변환
const json = JSON.stringify(ellie);
console.log(ellie);
console.log(json); // 함수는 포함되지 않는다. 즉 obj의 property들만 변환됨

// 역직렬화 Deserializing: 문자열 데이터를 자바스크립트 객체로 변환
const obj = JSON.parse(json);
console.log(obj);
