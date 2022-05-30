import React from "react";
import { getPosts } from "../api/posts";

function Test() {
    const postData = getPosts();
    postData.then(response);
    console.log(response);

    return <button onClick={getData}>데이터가져오기</button>;
}

export default Test;
