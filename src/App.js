// react의 useState 라이브러리를 불러온다
import React, { useState } from "react";

function App() {
  // onBtnIncreaseClick 함수를 만든다
  const onBtnIncreaseClick=()=>{
    console.log("버튼 클릭됨")
  }

  // return 값으로 html 태그를 활용해 버튼 클릭시 onBtnIncreaseClick 함수가 실행되게 한다
  // {} : return 값 안에서 js코드, 주석 입력
  // <>, </> : html 태그를 사용하려면 해당 컨테인을 만들고 그 안에 코드 입력
  
  return (
    <>
    num:{0}
    {/* {버튼을 누르면 onBtnIncreaseClick 함수가 실행한다} */}
    <button onClick={onBtnIncreaseClick}> 증가 </button>
    </>
  );
}

export default App;
