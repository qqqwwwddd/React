// user 와 관련된 api들을 모아 놓은 곳
import axios from "axios";

export const getUsers = async () => {
    let url = "https://jsonplaceholder.typicode.com/users";

    const response = await axios.get(url);

    return response;
};
