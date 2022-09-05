// 접근자 프로퍼티 (Accessor Property) = getter setter
// 즉 프로퍼티에 접근할 수 있다! 라는 뜻

/** 그럼 private은 어떻게 외부에서 접근 할 수 있지...?
 * 
 * <엘리 답변>
 * 게터와 세터를 통해서 값을 설정하면, 설정하기전, 
 * 체크용 코드 또는 보호용 코드를 추가 할 수 있어서 더 안전하게 값을 설정할 수 있겠죠? :)

set value(setValue) {
  this.#value = setValue < 0 ? 0 : setValue;
}
 */

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // get이라는 접근자 프로퍼티를 써서
  // 외부에서 student.fullName() 대신 student.fullName 처럼 쓸 수 있게 해줌
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  // 할당을 위해 set을 썼다.
  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('수지', '김');
student.firstName = '안나';
console.log(student.firstName);

// . 을 이용해서 함수를 읽게 되면 get 이 호출이 된다.
console.log(student.fullName);

// . 을 이용해서 값을 할당하면 set이 호출되면서
// 할당하고자 하는 value가 set 함수의 인자로 전달이 된다.
student.fullName = '김철수';
