import React, { useState } from "react";

function App() {
  // 실행할 함수를 적는다
  let AppCallCount = 0;
  AppCallCount++;
  console.log(`app이 ${AppCallCount}번 실행됨`);

  //useState 형식으로 바꾸고 다른 변수 추가하기
  // const [변수, 변수세팅] = useState(변수의 값);
  const [name, setName] = useState("park");
  const [age, setAge] = useState(30);
  const [adress, setAdress] = useState("충남 공주시");

  // return 값 안에 jsx 형식으로 제어요소를 입력한다
  return (
    <>
      {/* 위에 추가한 useState의 변수와 변수 세팅을 input에 적용
      - type, value 값 수정
      - &nbsp; : 띄어쓰기
      - <hr />로 구분선 추가 */}
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
