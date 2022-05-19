import React, { useState, useMemo, useEffect } from "react";


function UseMemo2() {
    const [number, setNumber] = useState(1);
    const [onVacation, setOnVacation] = useState(true);

    // const mySchedule = onVacation ? "휴가중" : "업무중";
    // const mySchedule = {
    //     status: onVacation ? "휴가중" : "업무중"

    // }; --> 이때는 useEffect 계속 바뀜 
    const mySchedule = useMemo(() => {
        return {
            status: onVacation ? "휴가중" : "업무중"
        }  // onVacation의 초기값 = true -> 휴가중. 
           // true 기억하는거 아니고 true일때 객체의 주소값 memo가 기억하고 있음 
           // 휴가중으로 인지중 
    },[onVacation]);


    useEffect(() => {
        console.log('--useEffect--')
    }, [mySchedule]);

    return(
        <div>
            <h2>나의 작고 소중한 잔돈</h2>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)} /> 
                {/* setNumber가 렌더링을 일으킴 */}
            <hr />
            <h2>휴가가고싶다</h2>
            <span> 상태 : {mySchedule.status} </span>
            <button onClick={() => setOnVacation(!onVacation)}> 휴가가즈아 </button>
        </div>
    )

}

export default UseMemo2;
