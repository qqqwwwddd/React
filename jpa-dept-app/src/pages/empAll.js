import React, { useEffect, useState } from "react";
import axios from "axios";
import { EmpResult } from "./EmpResult";

function AllEmp() {
    const [data, setData] = useState();
    useEffect(() => {
        const allEmp = (setData) => {
            const url = "http://localhost:8080/emps";
            axios.get(url).then((response) => {
                setData(response.data);
            });
        };
        allEmp(setData);
    }, []);

    return <div>{data && <EmpResult data={data} />}</div>;
}

export default AllEmp;
