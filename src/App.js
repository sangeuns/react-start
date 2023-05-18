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
      {/* 비제어 입력요소 : 직접 값을 넣어주는 것이 아닌 함수나 변수를 불러와 사용하는 방식
      - value : const의 name을 불러와 사용
      - onchange : 입력되는 값을 실시간으로 감지 및 업데이트 하는 상태를 말한다*/}
      <input
        type="text"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={() => {
          console.log("변경 상태 감지");
        }}
      />
    </>
  );
}

export default App;
