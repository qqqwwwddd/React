import React, { useState } from "react";
import styled from "styled-components";
import getCategoryData from "../api/getCategoryData";
import { Link } from "react-router-dom";
// const categories = [
//     {
//         name: "all",
//         text: "전체보기",
//     },
//     {
//         name: "business",
//         text: "비즈니스",
//     },
//     {
//         name: "entertainment",
//         text: "엔터테인먼트",
//     },
//     {
//         name: "health",
//         text: "건강",
//     },
//     {
//         name: "science",
//         text: "과학",
//     },
//     {
//         name: "sports",
//         text: "스포츠",
//     },
//     {
//         name: "technology",
//         text: "기술",
//     },
// ];

// 1
// getCategoryData();

// 2  data = response.json()
getCategoryData().then((data) => console.log(data));

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;

const Category = styled.div`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover {
        color: #495057;
    }

    & + & {
        margin-left: 1rem;
    }
`;

function Categories({ setCategory }) {
    // getCategoryData
    const [categories, setCategories] = useState([]);
    const getCategory = async () => {
        const data = await getCategoryData();
        setCategories(data);
    };
    getCategory();

    // getCategoryData().then((data) => console.log(data));
    return (
        <CategoriesBlock>
            {categories.map((category) => {
                // if (category.name === "all") {
                //     category.name = "";
                // }
                return (
                    <Category
                        key={category.name}
                        onClick={() => setCategory(category.name)}
                    >
                        <Link to={`/${category.name}`}>{category.text}</Link>
                    </Category>
                );
            })}
        </CategoriesBlock>
    );
}

export default Categories;
