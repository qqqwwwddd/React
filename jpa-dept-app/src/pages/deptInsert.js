import React, { useState } from "react";
import axios from "axios";
import { DeptResult } from "./DeptResult";

const addDept = (deptno, dname, loc, setData) => {
    let param = new URLSearchParams();
    param.append("deptno", deptno);
    param.append("dname", dname);
    param.append("loc", loc);
    const url = "http://localhost:8080/dept";
    axios.post(url, param).then((response) => {
        setData(response.data);
    });
};

function Insert() {
    const [data, setData] = useState();
    return (
        <div>
            <div className="input">
                <h2>Dept 등록</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>부서 번호</td>
                            <td>
                                <input
                                    type="text"
                                    id="deptno"
                                    placeholder="부서번호를 입력하세요"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>부서 이름</td>
                            <td>
                                <input
                                    type="text"
                                    id="dname"
                                    placeholder="부서이름을 입력하세요"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>근무지</td>
                            <td>
                                <input
                                    type="text"
                                    id="loc"
                                    placeholder="근무지를 입력하세요"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button
                    onClick={() => {
                        const deptno = document.getElementById("deptno").value;
                        const dname = document.getElementById("dname").value;
                        const loc = document.getElementById("loc").value;
                        addDept(deptno, dname, loc, setData);
                    }}
                >
                    등록
                </button>
            </div>
            {data && <DeptResult data={data} />}
        </div>
    );
}

export default Insert;
