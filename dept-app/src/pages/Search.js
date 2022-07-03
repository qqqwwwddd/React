import React, { useState } from "react";
import axios from "axios";

const searchDept = (deptno, setData) => {
    const url = "http://localhost:8080/jdbc/api/dept/" + deptno;
    axios.get(url).then((response) => {
        setData(response.data);
    });
};

function Search() {
    const [deptno, setDeptno] = useState();
    const [data, setData] = useState();
    // if (!!data) {
    //     console.log(data.deptno);
    // }
    return (
        <div>
            <h2>search</h2>
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
            <div>{JSON.stringify(data)}</div>
        </div>
    );
}

export default Search;
