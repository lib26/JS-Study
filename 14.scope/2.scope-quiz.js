{
  const x = 1;
  {
    const y = 2;
    console.log(x);
  }
  console.log(x);
  // console.log(y);
}

const text = 'global'; // 전역 변수, 전역 스코프 (글로벌 변수, 글로벌 스코프)
{
  const text = 'inside block1'; // 지역 변수(로컬변수), 지역 스코프(로컬스코프)
  {
    const text = 'inside block2';
    console.log(text); // 바로 위에거 출력
  }
}
