import React, { useEffect, useState } from "react";
import axios from "axios";
import { DeptResult } from "./DeptResult";

function AllDept() {
    const [data, setData] = useState();
    useEffect(() => {
        const allDept = (setData) => {
            const url = "http://localhost:8080/depts";
            axios.get(url).then((response) => {
                setData(response.data);
            });
        };
        allDept(setData);
    }, []);

    return <div>{data && <DeptResult data={data} />}</div>;
}

export default AllDept;
