import React, { useEffect, useState } from "react";



function Storage() {
    const [name, setName] = useState("");
    const [check, setCheck] = useState(false);
    const [data, setData] = useState([]);

    const onChange = (e) => {
        // console.log(e.target.value);
        setName(e.target.value);
    };

    const saveName = () => {
        const user = { name : name };
        // window.localStorage.setItem("key1", name);
        // window.localStorage.setItem("key2", user);
        // window.localStorage.setItem(`key${window.localStorage.length}`, JSON.stringify(user));
        // console.log(JSON.parse(window.localStorage.getItem("key3"))); // 객체
        // console.log(window.localStorage.getItem("key3")); // json문자열 
        window.localStorage.setItem("name3", JSON.stringify(user));
        
    }

    const loadName = () => {
        // setCheck(true);
        // 키를 어떻게 찾아올 수 있을까 
        // let showData = "";
        let showData = [];
        for(let i = 0; i < window.localStorage.length; i++) {
            // console.log(window.localStorage.key(i));
            let key = window.localStorage.key(i);
            let value = window.localStorage.getItem(key)
            // console.log(window.localStorage.getItem(key));
            
            // console.log(JSON.parse(value).name);
            if(JSON.parse(value).name === name) {
                // showData = JSON.parse(value).name; 
                showData.push({key, name})
            }else {
                // showData = showData;
            }

        }
        setData(showData);
        setCheck(showData.length === 0? false : true)

    }
    // 이름 변경 될때마다 값 트래킹
    useEffect(() => {
        loadName();
    }, [name]);

    return(
        <div>
            <input 
               name= "name"
               value={name}
               placeholder="이름을 입력하시오"
                onChange={onChange}/>

            <button
                onClick={saveName}>저장</button>   
            <button
                onClick={loadName}>요청</button>  

            {check? data.map((obj) => {
                return <p key={obj.key}>{obj.name}</p>
            }
            ) : ( 
            <></>
            )}   
        </div>
    )
}

export default Storage;