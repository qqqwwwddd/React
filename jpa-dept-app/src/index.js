import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Search from "./pages/deptSearch";
import Insert from "./pages/deptInsert";
import Update from "./pages/deptUpdate";
import Delete from "./pages/deptDelete";
import EmpSearch from "./pages/empSearch";
import EmpInsert from "./pages/empInsert";
import EmpUpdate from "./pages/empUpdate";
import EmpDelete from "./pages/empDelete";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/d_find" element={<Search />} />
                <Route path="/d_add" element={<Insert />} />
                <Route path="/d_up" element={<Update />} />
                <Route path="/d_del" element={<Delete />} />

                <Route path="/e_find" element={<EmpSearch />} />
                <Route path="/e_add" element={<EmpInsert />} />
                <Route path="/e_up" element={<EmpUpdate />} />
                <Route path="/e_del" element={<EmpDelete />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
