import React, { useEffect, useState } from "react";
import axios from "axios";
import { EmpResult } from "./EmpResult";

function AllEmp() {
    const [data, setData] = useState();
    const [page, setPage] = useState(1);
    console.log(data);

    useEffect(() => {
        const allEmp = (setData) => {
            const url = `http://localhost:8080/emps?page=${page}`;
            axios.get(url).then((response) => {
                setData(response.data);
            });
        };
        allEmp(setData);
    }, [page]);

    return (
        <div>
            {data && <EmpResult data={data} page={page} setPage={setPage} />}
        </div>
    );
}

export default AllEmp;
