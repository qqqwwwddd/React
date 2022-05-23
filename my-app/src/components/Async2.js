import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Async2.module.css";

function Async2() {
    const [photos, setPhotos] = useState([]);

    const getData = () => {
        let url = "https://jsonplaceholder.typicode.com/photos";
        axios
            .get(url)
            .then((response) => {
                console.log(response.data);
                console.log("정상응답");
                // 10개만 출력
                // let data = response.data.slice(0, 10);
                // console.log(data);
                // setPhotos(data)
                setPhotos(response.data);
            })
            .catch((error) => {
                console.log("비정상 응답", error);
            });
    };

    return (
        <div>
            <button onClick={getData}>Data Loading</button>

            {photos.map((photo) => {
                return (
                    <div key={photo.id}>
                        <br />
                        {photo.id}
                        <br />
                        {photo.title}
                        <br></br>
                        <img
                            className={style.image}
                            src={photo.thumbnailUrl}
                        ></img>
                    </div>
                );
            })}
        </div>
    );
}

export default Async2;
