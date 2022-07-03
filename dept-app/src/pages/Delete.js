import React, { useState } from "react";
import axios from "axios";

const deleteDept = (deptno, setData) => {
    const url = "http://localhost:8080/jdbc/api/dept/" + deptno;
    axios.delete(url).then((response) => {
        // console.log(response.data);
        setData(response.data);
    });
};

function Delete() {
    const [deptno, setDeptno] = useState();
    const [data, setData] = useState();

    return (
        <div>
            <h2>Delete</h2>
            <input
                type="text"
                id="deptno"
                name="deptno"
                placeholder="부서번호를 입력하세요"
                onChange={(e) => {
                    setDeptno(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    deleteDept(deptno, setData);
                }}
            >
                삭제
            </button>
            <br />
            <div>{data != null ? JSON.stringify(data) : null}</div>
        </div>
    );
}

export default Delete;
