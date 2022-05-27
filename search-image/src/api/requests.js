// https://pixabay.com/api/?key=27684586-5df4bb0f76c4dd61a232648a1&q=sky
const request = async(url) => {
    try{
        const response = await fetch(url);
            const data = await response.json();
            return data;
    }catch(error){
        console.log(error);
    }
}
export default request;