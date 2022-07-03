import logo from "./logo.svg";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
    return (
        <div>
            <h1>DEPT</h1>
            <div>
                <Link to="/search">
                    <button> 부서 검색</button>
                </Link>
                <Link to="/add">
                    <button>부서 등록</button>
                </Link>
                <Link to="up">
                    <button>부서 수정</button>
                </Link>
                <Link to="del">
                    <button>부서 삭제</button>
                </Link>
            </div>
            <Outlet></Outlet>
        </div>
    );
}

export default App;
