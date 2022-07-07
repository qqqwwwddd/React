import React, { useState } from "react";
import axios from "axios";
import { DeptResult } from "./DeptResult";

const deleteDept = (deptno, setData) => {
    const url = "http://localhost:8080/dept/" + deptno;
    axios.delete(url).then((response) => {
        // console.log(response.data);
        setData(response.data);
    });
};

function Delete() {
    const [data, setData] = useState();

    return (
        <div>
            <div className="input">
                <h2>Dept 삭제</h2>
                <input
                    type="text"
                    id="deptno"
                    name="deptno"
                    placeholder="부서번호를 입력하세요"
                />
                <button
                    onClick={() => {
                        const deptno = document.getElementById("deptno").value;
                        deleteDept(deptno, setData);
                    }}
                >
                    삭제
                </button>
                <br />
            </div>
            {data && <DeptResult data={data} />}
        </div>
    );
}

export default Delete;
