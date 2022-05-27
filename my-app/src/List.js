
import React from "react";

const List = ( {id, name, dispatch, confirmed}) => {
    return(
        <div>
            <span style = {{
                color: confirmed? "black" : "red",
                textDecoration: confirmed? "none" : "line-through"}}
            onClick={ () => 
                dispatch({type: "confirmed-list", id:{id}})}>{name}</span>
            <button onClick={ () => 
                dispatch({type: "delete-list", id: {id} })
            }>삭제</button>
        </div>
    )
}

export default List;
