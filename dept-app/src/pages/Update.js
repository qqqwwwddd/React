import React, { useState } from "react";
import axios from "axios";

const updateDept = (deptno, dname, loc, setData) => {
    let param = new URLSearchParams();
    param.append("deptno", deptno);
    param.append("dname", dname);
    param.append("loc", loc);
    const url = "http://localhost:8080/jdbc/api/dept/" + deptno;
    const data = { deptno: deptno, dname: dname, loc: loc };
    axios.put(url, data).then((response) => {
        setData(response.data);
    });
};
function Update() {
    const [deptno, setDeptno] = useState();
    const [dname, setDname] = useState();
    const [loc, setLoc] = useState();
    const [data, setData] = useState();

    return (
        <div>
            <h2>Update</h2>
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
                placeholder="변경 할 부서 이름"
                onChange={(e) => {
                    setDname(e.target.value);
                }}
            />
            <input
                type="text"
                id="loc"
                placeholder="변경 할 근무지"
                onChange={(e) => {
                    setLoc(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    updateDept(deptno, dname, loc, setData);
                }}
            >
                수정
            </button>
            <br />
            <div> {data != null ? JSON.stringify(data) : null}</div>
        </div>
    );
}

export default Update;
