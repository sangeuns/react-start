import React, { useState } from "react";

// 해당 컴포넌트를 내보낸다는 코드 : export default function 함수이름(){ }
export default function SetTimeOut() {
  // useState 기본 입력 방식 :
  const [num, setNum] = useState(0);

  // setTimeout 함수를 timeoutId에 값으로 넣어준다
  const timeoutId = setTimeout(() => {
    setNum(num + 1);
  }, 1000);

  // pause했을 때 clearTimeout 실행하여 timeoutId를 멈추는 함수를 만든다
  const pause = () => {
    clearTimeout(timeoutId);
  };

  return (
    <>
      숫자 : {num}
      {/* 버튼을 만들어 클릭시 pause가 실행되게 한다 */}
      <button onClick={pause}> 일시정지</button>
    </>
  );
}
