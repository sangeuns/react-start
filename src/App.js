import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  const onBtnIncreaseClick = () => {
    setNum(num + 1);
  };
  const onBtnDecreaseClick = () => {
    setNum(num - 1);
  };

  return (
    <>
      num:{num}
      <br />
      <button onClick={onBtnIncreaseClick}> 증가 </button>
      <br />
      <button onClick={onBtnDecreaseClick}> 감소 </button>
    </>
  );
}

export default App;
