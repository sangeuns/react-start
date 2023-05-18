import React, { useState } from "react";

function App() {
  // 실행할 함수를 적는다
  let AppCallCount = 0;
  AppCallCount++;
  console.log(`app이 ${AppCallCount}번 실행됨`);
  const name = "park";

  // return 값 안에 jsx 형식으로 제어요소를 입력한다
  return (
    <>
      {/* e란? 
      - 발생하는 모든 이벤트, 사건을 말한다 -> 어디에 클릭했는지, 어떤 문자를 입력했는지 등등...
      - e.target.value : 'e'를 받은 '당사자'(target -> input)의 일어났던 모든 값(value)을 뜻한다*/}
      <input
        type="text"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </>
  );
}

export default App;
