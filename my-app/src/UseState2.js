import React, { useState } from "react";

function Usestate2() {
    let students = ["박정인", "서의진"];
    const [names, setNames] = useState(students);
    const inputValueChange = (event) => {
        // console.log('입력값 함수 동작');
        // console.log(event.target.value);
        setInput(event.target.value);
        // console.log(event.target.value);
    }

 
    const [input, setInput] = useState("");

    const inputValueRecord = () => {
        setNames((previousValue) => {
            console.log(previousValue);
            setInput("");
            // return [input, previousValue]; 
            // return previousValue.concat(input); // 방법1
            return [...previousValue, input]; // 방법2
        });
    }

    // const resetText = (event) => {
        // event.target.value = "";
        // console.log(input);
        // setInput("")
        // console.log(input);
    // }

    return(
        <div>
            <input type="text" onChange={inputValueChange} value={input} ></input>
            <button onClick={inputValueRecord}>Record!</button>
            {names.map((name, idx) => {
                return <p key={idx}>{name}</p>;
            })}
        </div>
    )

}

export default Usestate2;