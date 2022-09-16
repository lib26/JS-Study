// 이름을 바꾸고 싶으면 as 사용
// import { increase as increase1 } from './counter.js';
// import { increase, getCount } from './counter.js';

// 현재파일의 counter.js 파일로부터 모든 변수와 메소드를 가져오온다.
// 그리고 접근은 counter.메소드 식으로 사용을 허가한다.
import * as counter from './counter.js';

counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());
