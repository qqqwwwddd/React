import React, { useEffect } from "react";

function UseEffect2() {

    useEffect(() => {
        const work = setInterval(() => {
            console.log("---work---");
        }, 1000);

        return () => {
            clearInterval(work);
        }
    }); 

    return(
        <div>
            <span>작업중 - 콘솔보기</span>
        </div>
    )
}

export default UseEffect2;