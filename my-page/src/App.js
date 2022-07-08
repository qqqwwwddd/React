import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Posts from "./Posts";
import Pagination from "./Pagination";

function App() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10); // posts 페이지에 몇개 들어가는지

    useEffect(() => {
        const data = async () => {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            setPosts(response.data);
        };
        data();
    }, []);

    // 현재 페이지
    // size
    // 총 데이터의 개수
    // 끝 페이지
    const lastPage = currentPage * postsPerPage;
    const firstPage = lastPage - postsPerPage;
    const currentPosts = (posts) => {
        return posts.slice(firstPage, lastPage);
    };

    return (
        <div className="App">
            <h1>Pagination Test</h1>
            <Posts posts={currentPosts(posts)} />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

export default App;
