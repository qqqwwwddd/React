import React, { useState } from "react";
import axios from "axios";
import { EmpResult } from "./EmpResult";

const updateEmp = (
    empno,
    ename,
    job,
    mgr,
    hiredate,
    sal,
    comm,
    dept,
    setData
) => {
    const url = "http://localhost:8080/emp/" + empno;
    const data = {
        empno: empno,
        ename: ename,
        job: job,
        mgr: mgr,
        hiredate: hiredate,
        sal: sal,
        comm: comm,
        dept: { deptno: dept },
    };
    console.log(data);
    axios.put(url, data).then((response) => {
        setData(response.data);
    });
};
function EmpUpdate() {
    const [data, setData] = useState();

    return (
        <div>
            <h2>Emp 수정</h2>
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
                        <td>부서정보</td>
                        <td>
                            <input
                                type="text"
                                id="dept"
                                placeholder="부서정보를 입력하세요"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
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
                        updateEmp(
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
                    수정
                </button>
            </div>
            {data && <EmpResult data={data} />}
        </div>
    );
}

export default EmpUpdate;
