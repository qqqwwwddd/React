import React, { useState } from "react";

function Usestate1() {
    const [time, setTime] = useState(1);
    console.log("--렌더링--");
    console.log("--외부--",time);

    const updateTime = () => {
        // setTime(time + 1);
        setTime(time == 24? 1 : time+1);
        console.log("--내부--", time);
        
        // 1. state 변수에는 직접 값을 할당할 수 없다  
        // time = time + 1;
        
        // -> setTime
        setTime(time + 1);
        console.log("--내부--", time);
        
        // 24시간 까지만 표기할 수 있도록 
        // 24시 이후에 time이 다시 1이 되도록
        // if (time == 24) {
        //     setTime(1)
        // }

    };

    return(
        <div>
            <span>Now : {time}</span>
            <button onClick={updateTime}>Click!</button>

        </div>
    )
} 


export default Usestate1;