import request from "./requests"
import URL from '../asset/URL' // 빼서 사용가능 


const getImages = async() => {
    const data = await request(
        'https://pixabay.com/api/?key=27684586-5df4bb0f76c4dd61a232648a1&q=sky'
    );
    return data;
};

export default getImages;