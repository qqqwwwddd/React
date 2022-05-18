import React from "react"


// function Hello({color,name,impportant}) {
//     console.log(color);
//     console.log(name);
//     // const name = "React";
//     // return<div>Hello, name</div> -> Hello, name 출력
//     return <div style={{color: color}}>Hello, {name} </div> // -> 변수 name 출력

// }

// Hello.defaultProps = {
//     name: "name prop 기본값"
// }

function Hello({name, color, important}) {
    // const {name, color} = props
    // console.log(important);

    // const name = "React";
    console.log(important);
        return (
            <div style={{
                    color
            }}>
                {/*  조건부 렌더링  */}
                {/* {important ? '!!' : null} */}
                {important && '!!'}
                Hello, {name}              
            </div>
        )
}
    // return <div style={{color: props.color}}>Hello,{props.name}</div>


Hello.defaultProps = {
    name: "name prop 기본값"
}



export default Hello;