import React, { useState } from "react";
import axios from "axios";

function Dept() {
    const [data, setData] = useState();

    const onCorsHandler = () => {
        axios.get("http://localhost:8080/jdbc/api/cors").then((response) => {
            setData(response.data);
            console.log(response);
        });
    };

    return (
        <div>
            <div>
                <button onClick={onCorsHandler}>cors</button>
            </div>

            <div>{data}</div>
        </div>
    );
}

export default Dept;
