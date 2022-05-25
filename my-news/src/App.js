import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import NewsItem from "./components/NewsItem";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";
import { useCallback, useState } from "react";

function App() {
    const [category, setCategory] = useState("");
    const selectCategory = useCallback((category) => {
        setCategory(category);
    }, []);

    // const getData = async () => {
    //     try {
    //         const response = await axios.get(
    //             "https://newsapi.org/v2/top-headlines?country=kr&apiKey=f2d43a1e4c3c46bd8f95574937bbb881&category=business"
    //         );
    //         console.log(response.data.articles);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    // return (
    // <div>
    //     <button onClick={getData}>요청</button>
    // </div>

    return (
        <>
            <Categories
                category={category}
                setCategory={setCategory}
                onClick={selectCategory}
            ></Categories>
            <NewsList category={category}></NewsList>
        </>
    );
}

export default App;
