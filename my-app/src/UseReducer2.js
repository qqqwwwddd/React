import React, {
    useCallback,
    useEffect,
    useReducer,
    useRef,
    useState,
} from "react";
import List from "../List";

const reducer = (state, action) => {
    // console.log("--reducer 동작 확인");
    // console.log("--state,action확인--", state, action);
    // console.log(action.id.currentId);
    switch (action.type) {
        case "add-list":
            // console.log(state);
            // console.log(action.id.currentId.current)
            console.log(action);

            const name = action.name.list;
            const newList = {
                id: (action.id.currentId.current += 1), // +1 해야 키중복 안됨
                name: name,
                confirmed: true,
            };
            return {
                count: state.count + 1,
                lists: [...state.lists, newList],
            };
        case "delete-list":
            console.log(state);
            return {
                count: state.count - 1,
                lists: state.lists.filter((list) => list.id !== action.id.id),
            };
        case "confirmed-list":
            return {
                count: state.count,
                lists: state.lists.map((list) => {
                    if (list.id === action.id.id) {
                        return { ...list, confirmed: !list.confirmed };
                    }
                    return list;
                }),
            };
        default:
            return state; // default -> 값이 변화가 없으면 마지막 상태 유지
    }
};

const initialList = {
    count: 1,
    lists: [
        {
            id: 1,
            name: "ramen",
            confirmed: true,
        },
    ],
};

function UseReducer2() {
    const [list, setList] = useState("");

    const currentId = useRef(1);

    const [finalList, dispatch] = useReducer(reducer, initialList);

    // console.log(finalList);
    // console.log(list);
    return (
        <div>
            <h2>물품 리스트</h2>
            <p>총 물품수 : {finalList.count}개</p>

            <input
                type="text"
                placeholder="물품을 입력하세요"
                onChange={(e) => setList(e.target.value)}
            ></input>

            <button
                onClick={() => {
                    // dispatch 작동하면 reducer한테 값 넘겨줌
                    dispatch({
                        type: "add-list",
                        id: { currentId },
                        name: { list },
                    });
                }}
            >
                추가
            </button>

            {finalList.lists.map((list) => {
                // console.log(list.id); // Object

                // return <p key={list.id}>{list.name}<button>삭제</button></p>;
                return (
                    <List
                        key={list.id}
                        name={list.name}
                        dispatch={dispatch}
                        id={list.id}
                        confirmed={list.confirmed}
                    ></List>
                );
            })}
        </div>
    );
}

export default UseReducer2;
