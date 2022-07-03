import React, { useState } from "react";
import axios from "axios";

const addDept = (deptno, dname, loc, setData) => {
    let param = new URLSearchParams();
    param.append("deptno", deptno);
    param.append("dname", dname);
    param.append("loc", loc);
    const url = "http://localhost:8080/jdbc/api/dept";
    axios.post(url, param).then((response) => {
        setData(response.data);
    });
};

function Insert() {
    const [deptno, setDeptno] = useState();
    const [dname, setDname] = useState();
    const [loc, setLoc] = useState();
    const [data, setData] = useState();
    return (
        <div>
            <h2>add</h2>
            <input
                type="text"
                id="deptno"
                placeholder="부서번호를 입력하세요"
                onChange={(e) => {
                    setDeptno(e.target.value);
                }}
            />
            <input
                type="text"
                id="dname"
                placeholder="부서이름을 입력하세요"
                onChange={(e) => {
                    setDname(e.target.value);
                }}
            />
            <input
                type="text"
                id="loc"
                placeholder="근무지를 입력하세요"
                onChange={(e) => {
                    setLoc(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    addDept(deptno, dname, loc, setData);
                }}
            >
                등록
            </button>
        </div>
    );
}

export default Insert;
