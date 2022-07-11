import React, { useEffect, useState } from "react";
import axios from "axios";
import { DeptResult } from "./DeptResult";
import styled from "styled-components";

function AllDept() {
    const [data, setData] = useState();
    const [page, setPage] = useState(1);
    console.log(data);

    useEffect(() => {
        const allDept = (setData) => {
            const url = `http://localhost:8080/depts?page=${page}`;
            axios.get(url).then((response) => {
                setData(response.data);
            });
        };
        allDept(setData);
    }, [page]);
    return (
        <div>
            {data && <DeptResult data={data} page={page} setPage={setPage} />}
        </div>
    );
}

export default AllDept;
