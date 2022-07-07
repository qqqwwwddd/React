import React, { useState } from "react";
import axios from "axios";

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
    let param = new URLSearchParams();
    param.append("empno", empno);
    param.append("ename", ename);
    param.append("job", job);
    param.append("mgr", mgr);
    param.append("hiredate", hiredate);
    param.append("sal", sal);
    param.append("comm", comm);
    param.append("hiredate", hiredate);
    param.append("dept", dept);

    const url = "http://localhost:8080/emp/" + empno;
    const data = {
        empno: empno,
        ename: ename,
        job: job,
        mgr: mgr,
        hiredate: hiredate,
        sal: sal,
        comm: comm,
        dept: dept,
    };
    axios.put(url, data).then((response) => {
        setData(response.data);
    });
};
function EmpUpdate() {
    const [empno, setEmpno] = useState();
    const [ename, setEname] = useState();
    const [job, setJob] = useState();
    const [mgr, setMgr] = useState();
    const [hiredate, setHiredate] = useState();
    const [sal, setSal] = useState();
    const [comm, setComm] = useState();
    const [dept, setDept] = useState();
    const [data, setData] = useState();

    return (
        <div>
            <h2>Emp 수정</h2>
            <table>
                <tr>
                    <td>사원 번호</td>
                    <td>
                        <input
                            type="text"
                            id="empno"
                            placeholder="사원번호를 입력하세요"
                            onChange={(e) => {
                                setEmpno(e.target.value);
                            }}
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
                            onChange={(e) => {
                                setEname(e.target.value);
                            }}
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
                            onChange={(e) => {
                                setJob(e.target.value);
                            }}
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
                            onChange={(e) => {
                                setMgr(e.target.value);
                            }}
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
                            onChange={(e) => {
                                setHiredate(e.target.value);
                            }}
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
                            onChange={(e) => {
                                setSal(e.target.value);
                            }}
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
                            onChange={(e) => {
                                setComm(e.target.value);
                            }}
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
                            onChange={(e) => {
                                setDept(e.target.value);
                            }}
                        />
                    </td>
                </tr>
                <br />
                <div>
                    <button
                        onClick={() => {
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
            </table>
            <div> {data ? JSON.stringify(data) : null}</div>
        </div>
    );
}

export default EmpUpdate;
