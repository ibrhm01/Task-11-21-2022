import React from 'react'
import Users from '../Users';
// import Inputs from "../Inputs/inputs"
// import InputValues from "../InputValues/InputValues"
function Home() {
  // const [inputsValue, setInputsValue] = React.useState({
  //   email: "",
  //   fullname: "",
  // });
  // const [isShowResult, setIsShowResult] = React.useState(true);

  return (
    <>
      {/* {isShowResult ? (
        <Inputs
          inputsValue={inputsValue}
          setInputsValue={setInputsValue}
          setIsShowResult={setIsShowResult}
        />
      ) : (
        <InputValues
          fullname={inputsValue.fullname}
          email={inputsValue.email}
          setIsShowResult={setIsShowResult}
        />
      )} */}
      <Users />
    </>
  );
}

export default Home;