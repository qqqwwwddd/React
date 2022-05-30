import axios from "axios";

export const getPosts = async () => {
    let url = "https://jsonplaceholder.typicode.com/posts";

    const response = await axios.get(url);

    return response;
};
