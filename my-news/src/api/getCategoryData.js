// 함수만 따로 관리하는 거라 react import 필요업슴

// fetch 비동기
// const getCategoryData = () =>
//     fetch("/categoryData.json").then((response) =>
//         console.log(response.json())
//     );

// 2
// const getCategoryData = async () => {
//     try {
//         const response = await fetch("/categoryData.json");
//         const data = response.json();
//         return data;
//     } catch (error) {}
// };

// 반복되는 try catch를 함수로 빼기
const request = async (url) => {
    try {
        const response = await fetch(url);
        const data = response.json();
        return data;
    } catch (error) {}
};

const getCategoryData = async () => {
    const data = await request("/categoryData.json");
    return data;
};

const getNewsData = async () => {
    const data = await request("/newsData.json");
    return data;
};

export default getCategoryData;
