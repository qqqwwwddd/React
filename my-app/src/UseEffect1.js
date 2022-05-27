import React, { useEffect, useState } from "react";

function UseEffect1() {
    const [number, setNumber] = useState(0);

    const updateNumber = () => {
        setNumber(number +1);
    };
    const [text, setText] = useState("");

    const inputValueChange = (event) => {
        setText(event.target.value)
        console.log(text);
    }

    // useEffect 수행 코드 : console.log("--useEffect 실행--")
    useEffect(() => {
        console.log("--useEffect 실행--");
    }, []);
    
    // number가 변할 때만 useEffect 실행
    
    useEffect(() => {
        console.log("--useEffect : number--")
    }, [number]);
    
    // text가 변할 때만 useEffect 실행
    
    useEffect(() => {
        console.log("--useEffect : text--")
    }, [text]);
    
    // number 와 text useEffect 실행
    
    useEffect(() => {
        console.log("--useEffect : number - text--")
    }, [number, text]);



    return (
        <div>
            <div>
                <button onClick={updateNumber}>+1</button>
                <span>Current Number {number}</span>
            </div>
            <div>
                <input type="text" onChange={inputValueChange}/>
            </div>
            <div>
                <span>{text} 입력됨</span>
            </div>
        </div>
    );
};

export default UseEffect1;