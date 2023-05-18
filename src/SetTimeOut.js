import React, { useState } from "react";

// 해당 컴포넌트를 내보낸다는 코드 : export default function 함수이름(){ }
export default function SetTimeOut() {
  // useState 기본 입력 방식 :
  const [num, setNum] = useState(0);

  // setTimeout 함수 적용 : setTimeout(함수, 지연시간);
  setTimeout(() => {
    setNum(num + 1);
  }, 1000);

  return <>숫자 : {num}</>;
}
