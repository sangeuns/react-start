// react의 useState 라이브러리를 불러온다
import React, { useState } from "react";

function App() {
  // usestate의 기본 변수 2가지 : [ num, setnum ]
  // num은 usestate(num);의 초기값 -> 현재 num값은 '0'이다, setNum은 어떻게 증가 시킬것 인지를 선언하는 변수
  // 일반적으로 제일 위에 변수들을 올려놓는다
  const [num, setNum] = useState(0);

  // onBtnIncreaseClick 함수를 만든다
  const onBtnIncreaseClick = () => {
    // setNum : num을 어떻게 활용할 것인지에 대한 상태값
    setNum(num + 1); // -> 버튼을 누를때 마다 onBtnIncreaseClick함수 안에 있는 setNum이 실행된다
  };

  const onBtnDecreaseClick = () => {
    // setNum : num을 어떻게 활용할 것인지에 대한 상태값
    setNum(num - 1); // -> 버튼을 누를때 마다 onBtnIncreaseClick함수 안에 있는 setNum이 실행된다
  };

  // return 값으로 html 태그를 활용해 버튼 클릭시 onBtnIncreaseClick 함수가 실행되게 한다
  // {} : return 값 안에서 js코드, 주석 입력
  // <>, </> : html 태그를 사용하려면 해당 컨테인을 만들고 그 안에 코드 입력

  return (
    <>
      num:{num}
      {/* {버튼을 누르면 onBtnIncreaseClick 함수가 실행한다} */}
      <button onClick={onBtnIncreaseClick}> 증가 </button>
      <button onClick={onBtnDecreaseClick}> 감소 </button>
    </>
  );
}

export default App;
