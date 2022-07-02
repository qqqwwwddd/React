import React, { useState } from "react";
import axios from "axios";

function Dept() {
    const [data, setData] = useState();
    const onNoProxyHandler = () => {
        axios.get("/api/no-proxy").then((response) => console.log(response));
    };
    const onProxyHandler = () => {
        axios.get("/api/proxy").then((response) => {
            setData(response.data);
            console.log(response);
        });
    };
    const onNoCorsHandler = () => {
        axios
            .get("http://localhost:8080/jdbc/api/no-cors")
            .then((response) => console.log(response));
    };
    const onCorsHandler = () => {
        axios.get("http://localhost:8080/jdbc/api/cors").then((response) => {
            setData(response.data);
            console.log(response);
        });
    };

    return (
        <div>
            <div>
                <button onClick={onNoProxyHandler}>no-proxy</button>
                <button onClick={onProxyHandler}>proxy</button>
                <button onClick={onNoCorsHandler}>no-cors</button>
                <button onClick={onCorsHandler}>cors</button>
            </div>

            <div>{data}</div>
        </div>
    );
}

export default Dept;
