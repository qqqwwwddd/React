import React, { useState } from "react";

function Usestate1() {
    const [time, setTime] = useState(1);

    const updateTime = () => {
        // setTime(time + 1);
        setTime(time == 24? 1 : time+1);
        
        
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