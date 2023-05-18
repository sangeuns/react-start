import React, { useState } from "react";

function App() {
  // 실행할 함수를 적는다
  let AppCallCount = 0;
  AppCallCount++;
  console.log(`app이 ${AppCallCount}번 실행됨`);
  // return 값 안에 jsx 형식으로 제어요소를 입력한다
  return (
    <>
      {/* {제어 요소 입력방식 : <input + 제어요소 + 제어요소... />} 
    - type : number, email, date.. 등 입력 유형을 설정
    - placeholder : 임시 힌트 텍스트
    - defaultvalue : 입력 필드의 초기값*/}
      <input type="text" placeholder="이름을 입력해주세요" defaultValue={0} />
    </>
  );
}

export default App;
