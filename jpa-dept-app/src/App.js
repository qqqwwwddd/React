import logo from "./logo.svg";
import "./App.css";
import { Link, NavLink, Outlet } from "react-router-dom";

const navLink = {
    backgroud: "white",
    color: "salmon",
    fontSize: 30,
    fontWeight: "bold",
};
function App() {
    return (
        <div>
            <div className="header">
                <div className="deptHeader">
                    <NavLink to="/d_all" style={navLink} active>
                        <div> DEPT</div>
                    </NavLink>
                    <Link to="/d_find">
                        <button> 부서 검색</button>
                    </Link>
                    <Link to="/d_add">
                        <button>부서 등록</button>
                    </Link>
                    <Link to="d_up">
                        <button>부서 수정</button>
                    </Link>
                    <Link to="d_del">
                        <button>부서 삭제</button>
                    </Link>
                </div>
                <div className="empHeader">
                    <NavLink to="/e_all" style={navLink}>
                        <div> EMP</div>
                    </NavLink>
                    <Link to="/e_find">
                        <button> 사원 검색 </button>
                    </Link>
                    <Link to="/e_add">
                        <button> 사원 등록 </button>
                    </Link>
                    <Link to="/e_up">
                        <button> 사원 수정 </button>
                    </Link>
                    <Link to="/e_del">
                        <button> 사원 삭제 </button>
                    </Link>
                    <div></div>
                </div>
            </div>

            <br />
            <hr />
            <hr />
            <Outlet></Outlet>
        </div>
    );
}

export default App;
