import React, { useState } from "react";



function Storage() {
    const [name, setName] = useState("");
    const [check, setCheck] = useState(false)

    const onChange = (e) => {
        // console.log(e.target.value);
        setName(e.target.value);
    };

    const saveName = () => {
        const user = { name: name };
        // window.localStorage.setItem("key1", name);
        // window.localStorage.setItem("key2", user);
        window.localStorage.setItem(`key${window.localStorage.length}`, JSON.stringify(user));
        // console.log(JSON.parse(window.localStorage.getItem("key3"))); // 객체
        // console.log(window.localStorage.getItem("key3")); // json문자열 
        
        
    }

    const loadName = () => {
        setCheck(true);

    }

    return(
        <div>
            <input 
               name= "name"
               placeholder="이름을 입력하시오"
                onChange={onChange}/>

            <button
                onClick={saveName}>저장</button>   
            <button
                onClick={loadName}>요청</button>  

            {check? <p>{JSON.parse(window.localStorage.getItem("key3")).name}</p> : <></>}
        </div>
    )
}

export default Storage;