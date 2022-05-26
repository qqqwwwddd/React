import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";

const NewsItemBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

// const sample = {
//     title: "제목",
//     description: "내용",
//     url: "https://google.com",
//     urlToImage: "https://via.placeholder.com/160",
// };

function NewsList({ category, categoryValue }) {
    console.log(category);
    const [articles, setArticles] = useState([]);
    // useEffect 는 한번만 실행됨 렌더링 안됨 Effect에 category?
    useEffect(() => {
        const getData = async () => {
            try {
                const queryString =
                    categoryValue === "" ? "" : `&category=${categoryValue}`;
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr&apiKey=9e3d36b809b04596b6beb919ba85d2f3${queryString}`
                );
                console.log(response.data);
                setArticles(response.data.articles);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [category]);
    return (
        <NewsItemBlock>
            {/* <NewsItem article={sample}></NewsItem>
            <NewsItem article={sample}></NewsItem>
            <NewsItem article={sample}></NewsItem> */}
            {articles.map((article) => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsItemBlock>
    );
}

export default NewsList;
