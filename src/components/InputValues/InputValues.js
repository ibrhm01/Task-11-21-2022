import React from 'react'

function InputValues({ fullname, email,setIsShowResult}) {
    const handleGoBack=()=>setIsShowResult(true);
    return (
        <>
            <button onClick={handleGoBack}>Go back</button>
            <h1>{fullname}</h1>
            <h1>{email}</h1>
        </>)
}

export default InputValues