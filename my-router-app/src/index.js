import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        {/* <App> */}
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<Home />} />
                <Route path='/projects'>
                    <Route index element={<Projects />} />
                    {/* <Route path='1' element={<Project />} /> */}
                    {/* <Route path='2' element={<Project />} /> */}
                    {/* <Route path='3' element={<Project />} /> */}
                    <Route path=':projectNumber' element={<Project />} />
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='/mypage' element={<MyPage />} />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>

        {/* </App> */}
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
