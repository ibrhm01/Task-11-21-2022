// import React from 'react'

// function Inputs({ inputsValue, setInputsValue, setIsShowResult }) {
//   const handleChangeInputValue = (e) => {
//     const { name, value } = e.target;
//     setInputsValue({ ...inputsValue, [name]: value });
//   };

//   const handleClickedButton = () => {
//     if(inputsValue.fullname.trim().length&&inputsValue.email.trim().length)
//     {
//       setIsShowResult(false);
//     }
//   };

//   return (
//     <>
//       <label htmlFor="fullname">Fullname</label>
//       <input
//         id="fullname"
//         placeholder="Write fullname"
//         defaultValue={inputsValue.fullname}
//         name="fullname"
//         onChange={handleChangeInputValue}
//       />

//       <label htmlFor="email">Email</label>
//       <input
//         id="email"
//         type="email"
//         placeholder="Write email"
//         defaultValue={inputsValue.email}
//         name="email"
//         onChange={handleChangeInputValue}
//       />

//       <button onClick={handleClickedButton}>Add input</button>
//     </>
//   );
// }

// export default Inputs;