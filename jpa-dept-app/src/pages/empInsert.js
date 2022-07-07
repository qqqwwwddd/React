import React, { useState } from "react";
import axios from "axios";
import "./DeptEmp.css";
import { EmpResult } from "./EmpResult";
const addEmp = (empno, ename, job, mgr, hiredate, sal, comm, dept, setData) => {
    let param = new URLSearchParams();
    param.append("empno", empno);
    param.append("ename", ename);
    param.append("job", job);
    param.append("mgr", mgr);
    param.append("hiredate", hiredate);
    param.append("sal", sal);
    param.append("comm", comm);
    param.append("dept", dept);
    const url = "http://localhost:8080/emp";
    axios.post(url, param).then((response) => {
        setData(response.data);
    });
};

function EmpInsert() {
    const [data, setData] = useState();
    console.log(data);

    return (
        <>
            <div>
                <h2>Emp 등록</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>사원 번호</td>
                            <td>
                                <input
                                    type="text"
                                    id="empno"
                                    placeholder="사원번호를 입력하세요"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>사원 이름</td>
                            <td>
                                <input
                                    type="text"
                                    id="ename"
                                    placeholder="사원이름을 입력하세요"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>직무</td>
                            <td>
                                <input
                                    type="text"
                                    id="job"
                                    placeholder="직무를 입력하세요"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td> 매니저 번호</td>
                            <td>
                                <input
                                    type="text"
                                    id="mgr"
                                    placeholder="매니저번호를 입력하세요"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>입사일</td>
                            <td>
                                <input
                                    type="text"
                                    id="hiredate"
                                    placeholder="입사일을 입력하세요"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>연봉</td>
                            <td>
                                <input
                                    type="text"
                                    id="sal"
                                    placeholder="연봉을 입력하세요"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>커미션</td>
                            <td>
                                <input
                                    type="text"
                                    id="comm"
                                    placeholder="커미션을 입력하세요"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>부서번호</td>
                            <td>
                                <input
                                    type="text"
                                    id="dept"
                                    placeholder="부서번호를 입력하세요"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button
                    onClick={() => {
                        const empno = document.getElementById("empno").value;
                        const ename = document.getElementById("ename").value;
                        const job = document.getElementById("job").value;
                        const mgr = document.getElementById("mgr").value;
                        const hiredate =
                            document.getElementById("hiredate").value;
                        const sal = document.getElementById("sal").value;
                        const comm = document.getElementById("comm").value;
                        const dept = document.getElementById("dept").value;
                        console.log(dept);
                        addEmp(
                            empno,
                            ename,
                            job,
                            mgr,
                            hiredate,
                            sal,
                            comm,
                            dept,
                            setData
                        );
                    }}
                >
                    등록하기
                </button>
            </div>
            {data && <EmpResult data={data} />}
        </>
    );
}

export default EmpInsert;
