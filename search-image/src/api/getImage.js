import request from "./requests";
import URL from "../asset/URL"; // 빼서 사용가능

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "27684586-5df4bb0f76c4dd61a232648a1";
const defaultParam = {
    key: API_KEY,
};

// const test = {
//     q: "summer",
// };

const getImages = async (paramObj) => {
    const params = new URLSearchParams({
        ...defaultParam,
        ...paramObj,
    }).toString();

    // const data = await request(`${BASE_URL}?key=${API_KEY}&q=sky`);
    const data = await request(`${BASE_URL}?${params}`);
    return data;
};

export default getImages;
