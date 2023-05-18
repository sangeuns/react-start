import React, { useState } from "react";

function App() {
  let AppCallCount = 0;
  AppCallCount++;
  console.log(`app이 ${AppCallCount}번 실행됨`);

  const [name, setName] = useState("park");
  const [age, setAge] = useState(30);
  const [adress, setAdress] = useState("충남 공주시");

  return (
    <>
      <input
        type="text"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => {
          console.log(`변경된 이름 log : ${e.target.value}`);
          setName(e.target.value);
        }}
      />
      &nbsp; / &nbsp; 이름 : {name}
      <hr />
      <input
        type="number"
        placeholder="나이를 입력해주세요"
        value={age}
        onChange={(e) => {
          console.log(`변경된 나이 log : ${e.target.value}`);
          setAge(e.target.value);
        }}
      />
      &nbsp; / &nbsp; 나이 : {age}
      <hr />
      <input
        type="text"
        placeholder="주소를 입력해주세요"
        value={adress}
        onChange={(e) => {
          console.log(`변경된 주소 log" : ${e.target.value}`);
          setAdress(e.target.value);
        }}
      />
      &nbsp; / &nbsp; 주소 : {adress}
      <hr />
    </>
  );
}

export default App;
