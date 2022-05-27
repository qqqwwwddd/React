import React, { useEffect, useState } from "react";
import axios from "axios";
import { getUsers } from "../api/users";

function Async() {
    // photos : state
    const [photos, setPhotos] = useState([]);

    // const usersData = getUsers();
    // usersData.then((response) => {
    //     console.log(response);
    //     console.log("---------");
    // });

    const getData = () => {
        let url = "https://jsonplaceholder.typicode.com/photos";
        axios
            .get(url)
            .then((response) => {
                console.log(response.data);
                console.log("정상응답");
                // setphotos 추가
                setPhotos(response.data);
            })
            .catch((error) => {
                console.log("비정상 응답", error);
            });
    };

    // Async 함수 () => {return promise} 결과 프로미스 객체 반환
    // await 통해서 동기적으로 구조화 가능
    // const getData2 = async () => {
    //     let url = "https://jsonplaceholder.typicode.com/users";

    //     try {
    //         const response = await axios.get(url);
    //         // response.then();
    //         console.log("정상응답");
    //     } catch (error) {
    //         console.log("비정상응답", error);
    //     }
    // };

    // useEffect(() => {
    //     const getData3 = async () => {
    //         let url = "https://jsonplaceholder.typicode.com/users";

    //         try {
    //             const response = await axios.get(url);
    //             console.log("정상응답");
    //         } catch (error) {
    //             console.log("비정상응답", error);
    //         }
    //     };
    // }, []);

    return (
        <div>
            <button onClick={getData}>Data Loading</button>
            {photos.map((photo) => {
                return <div>photo- id : {photo.id}</div>;
            })}
            {/* <button onClick={getData2}>Data2 Loading</button>
            <button>Data3 Loading</button> */}
        </div>
    );
}

export default Async;
