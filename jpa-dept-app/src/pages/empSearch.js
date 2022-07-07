import React, { useState } from "react";
import axios from "axios";

const searchEmp = (empno, setData) => {
    const url = "http://localhost:8080/emp/" + empno;
    axios.get(url).then((response) => {
        setData(response.data);
    });
};

function EmpSearch() {
    const [empno, setEmpno] = useState();
    const [data, setData] = useState();

    return (
        <div>
            <h2>Emp 조회</h2>
            <input
                type="text"
                placeholder="사원번호를 입력하세요"
                id="empno"
                name="empno"
                onChange={(e) => {
                    setEmpno(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    searchEmp(empno, setData);
                }}
            >
                검색
            </button>
            <br />
            <div>
                {data && (
                    <div>
                        empno : {data.empno} <br />
                        ename : {data.ename} <br />
                        job :{data.job} <br />
                        mgr : {data.mgr} <br />
                        hiredate : {data.hiredate} <br />
                        sal : {data.sal} <br />
                        comm : {data.comm} <br />
                        {`<DEPT 정보>`}
                        <br />
                        deptno : {data.dept && data.dept.deptno}
                        <br />
                        dname : {data.dept && data.dept.dname}
                        <br />
                        loc : {data.dept && data.dept.loc}
                    </div>
                )}
            </div>
        </div>
    );
}

export default EmpSearch;
