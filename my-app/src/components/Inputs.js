import React, { useState } from "react"

function Inputs() {
    // const [name, setName] = useState("");
    // const [nickName, setNickName] = useState("");

    // const changeName = (event) => {
    //     console.log(event.target.value);
    //     setName(event.target.value);
    // }
    // const changeNickName = (event) => {
    //     console.log(event.target.value);
    //     setNickName(event.target.value);
    // }

    // const resetInputs = () => {
    //     setName("");
    //     setNickName("");
    // }

    // version 2 객체로 관리
    const [inputs, setInputs] = useState({
        name: "",
        nickName: "",
    })

    const { name, nickName } = inputs

    const changeInputs = (event) => {
        // console.log(event.target.name);
        // setName(event.target.name === "name"? event.target.value : "");
        // setNickName(event.target.nickName === "nickName"? event.target.value : "");
        // setName(event.target === "name"? event.target.value : "");

        // version 3
        // console.log(event.target);
        const { name, value } = event.target
        setInputs({
            ...Inputs, // 이전의 값 먼저 나와야함
            // [] 입력해준(업데이트) 값 속성명
            [name]: value,
        })
    }

    const resetInputs = () => {
        setInputs({
            name: "",
            nickName: "",
        })
    }

    return (
        <div>
            {/* <h1>이름: {name}</h1>
			<h1>닉네임: {nickName}</h1>
            
			<input type="text" value={name} placeholder="이름" onChange={changeName} />
			<input type="text" value={nickName} placeholder="닉네임" onChange={changeNickName} /> */}
            {/* <button onClick={resetInputs}>Reset</button> */}

            {/* version 2 객체로 관리 */}
            <h1>
                이름:
                {name}{" "}
            </h1>
            <h1>
                닉네임:
                {nickName}{" "}
            </h1>

            <input
                type='text'
                name='name'
                value={name}
                placeholder='이름'
                onChange={changeInputs}
            />
            <input
                type='text'
                name='nickName'
                value={nickName}
                placeholder='닉네임'
                onChange={changeInputs}
            />

            <button onClick={resetInputs}>Reset</button>
        </div>
    )
}

export default Inputs
