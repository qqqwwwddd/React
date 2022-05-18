import React, { useContext, useRef } from "react";
import { UseContext1 } from "./UseContext1";




const Header = () => {
    // const data = useContext(UseContext1);
    // console.log(data);
    const { company, setCompany } = useContext(UseContext1);
    // const setEnglish 


    return (
        <header
            className="header-dark"
            >
            <h1> {company} New Devs</h1>
            {/* <button onClick={setEnglish}>English/Korean</button> */}
            <button onClick={() => {company=="DOUZONE"? setCompany("더존") : setCompany("DOUZONE") }}>English / 한국어 </button>
            <button onClick={() => {}}> DarkMode </button>
        </header>
    );
}

export default Header;  