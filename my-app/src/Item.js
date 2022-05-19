import React, { useEffect, useState } from "react";


// update가 일어나는 경우 
// 1. state 가 바뀔 때 
// 2. (부모에서 전달 받은) props가 바뀔 때 
// 3. (props 상관없이 )부모 component가 리렌더링 될때 
// 4. 강제적인 렌더링이 진행될 때 



function Item({createItemStyle}) {
    
    const [styleValue, setStyleValue] = useState({});

    useEffect(() => {
        console.log("Item Update");
        setStyleValue(createItemStyle)
    },[createItemStyle])

    return(


        <div style={styleValue}></div>
    )
}

export default Item;