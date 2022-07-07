import React, { useState } from "react";
import axios from "axios";
import "./DeptEmp.css";
import { EmpResult } from "./EmpResult";

const deleteEmp = (empno, setData) => {
    const url = "http://localhost:8080/emp/" + empno;
    axios.delete(url).then((response) => {
        // console.log(response.data);
        setData(response.data);
    });
};

function EmpDelete() {
    const [empno, setEmpno] = useState();
    const [data, setData] = useState();

    return (
        <>
            <div className="input">
                <h2>Emp 삭제</h2>
                <input
                    type="text"
                    id="empno"
                    name="empno"
                    placeholder="사원번호를 입력하세요"
                    onChange={(e) => {
                        setEmpno(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        deleteEmp(empno, setData);
                    }}
                >
                    삭제
                </button>
                <br />
            </div>
            {data && <EmpResult data={data} />}
        </>
    );
}

export default EmpDelete;
