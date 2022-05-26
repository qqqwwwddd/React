import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
    const [data, setData] = useState({});
    const getData = async () => {
        try {
            const response = await axios.get(
                "https://api.openweathermap.org/data/2.5/weather?q=Busan&appid=5007474d6a769f3b5693ca77584e9b77"
            );
            console.log(response.data);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getData();
    }, []);
    return Object.keys(data).length !== 0 ? (
        <div className="o_weather">
            <div className="i_weather">
                <h2>{data.name}</h2>
                <div className="weather">
                    <div> 날씨 : {data.weather[0].main}</div>
                    <br />
                    <div> 구름 : {data.weather[0].description}</div>
                    <br />
                    <div> 풍속 : {data.wind.speed}</div>
                    <br />
                    <div> 일몰시간 : {Date(data.sys.sunset)}</div>
                    <br />
                </div>
            </div>
        </div>
    ) : (
        <></>
    );
}

export default App;
