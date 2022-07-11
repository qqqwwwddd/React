import React, { useState } from "react";
import axios from "axios";
import { DeptResult } from "./DeptResult";

const updateDept = (deptno, dname, loc, setData) => {
    let param = new URLSearchParams();
    param.append("deptno", deptno);
    param.append("dname", dname);
    param.append("loc", loc);
    const url = "http://localhost:8080/dept/" + deptno;
    const data = { deptno: deptno, dname: dname, loc: loc };
    axios.put(url, data).then((response) => {
        setData(response.data);
    });
};
function Update() {
    const [data, setData] = useState();

    return (
        <div>
            <div className="input">
                <h2>Dept 수정</h2>
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
                                    placeholder="변경할 부서명"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>근무지</td>
                            <td>
                                <input
                                    type="text"
                                    id="loc"
                                    placeholder="변경할 근무지"
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
                        updateDept(deptno, dname, loc, setData);
                    }}
                >
                    수정하기
                </button>
                <br />
            </div>
        </div>
    );
}

export default Update;
