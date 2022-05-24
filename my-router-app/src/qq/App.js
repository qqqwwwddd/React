import "./App.css";
import Home from "./Home";
import { Link, Outlet, NavLink } from "react-router-dom";

// function App({ children }) {
function App() {
    function activeStyle({ isActive }) {
        return {
            TextDecoration: isActive ? "underline" : undefined,
            fontSize: isActive ? "24px" : undefined,
        };
    }

    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    {/* NavLink 안에서는 함수!! */}
                    <NavLink to='/' style={activeStyle}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
            </ul>
            <hr />
            {/* <div>{children}</div> */}
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default App;
