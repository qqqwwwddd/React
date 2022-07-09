import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/file-list").then((response) => {
            setFiles(response.data);
        });
    }, []);
    console.log(files);

    return (
        <div className="App">
            <form
                method="post"
                action="http://localhost:8080/file-save"
                encType="multipart/form-data"
            >
                <input type="file" name="file" />
                <br />
                <input type="submit" value="전송" />
            </form>
            <div>
                {files.length !== 0 &&
                    files.map((file) => (
                        <li>
                            <a
                                href={`http://localhost:8080/file-download/${file.id}`}
                            >
                                {file.originalFilename}
                            </a>
                        </li>
                    ))}
            </div>
        </div>
    );
}

export default App;
