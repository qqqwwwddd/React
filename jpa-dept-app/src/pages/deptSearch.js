import React, { useState } from "react";
import axios from "axios";

export const searchDept = (deptno, setData) => {
    const url = "http://localhost:8080/dept/" + deptno;
    axios.get(url).then((response) => {
        setData(response.data);
    });
};

function Search() {
    const [deptno, setDeptno] = useState();
    const [data, setData] = useState();
    console.log(data && data.deptno);
    return (
        <div className="input">
            <h2>Dept 조회</h2>
            <input
                type="text"
                placeholder="부서번호를 입력하세요"
                id="deptno"
                name="deptno"
                onChange={(e) => {
                    setDeptno(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    searchDept(deptno, setData);
                }}
            >
                검색
            </button>
            <br />
            <div>
                {data && (
                    <div>
                        deptno : {data.deptno} dname : {data.dname} loc :
                        {` ${data.loc}`}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search;
