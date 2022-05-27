import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";

function App() {
    // input 제어를 위한 useRef -> dom 요소 접근
    const imgRef = useRef(null);
    const [imgList, setImgList] = useState([]);
    console.log(imgList);
    return (
        <div className="container">
            <div className="main">
                <div
                    className="add-button"
                    onClick={() => {
                        imgRef.current.click();
                    }}
                >
                    +
                </div>
                <input
                    className="file-upload-input"
                    type="file"
                    ref={imgRef}
                    onChange={(event) => {
                        // console.log(event.target.value);

                        // console.log(event.currentTarget.value);
                        // setImgList([...imgList, event.currentTarget.value]);
                        // 문제발생 : fakepath
                        const value = event.currentTarget.value;

                        // setImgList((prev) => {
                        //     return [...prev, value];
                        //     // console.log(imgList);
                        // });
                        // console.log(event.currentTarget.files[0]);
                        // FileReader -> 가져온 file 정보 넣음
                        const fileReader = new FileReader();

                        const file = event.currentTarget.files[0];
                        fileReader.readAsDataURL(file);
                        fileReader.onloadend = (e) => {
                            // console.log(e.target.result);
                            setImgList((prev) => {
                                return [...prev, e.target.result];
                            });
                        };
                        event.currentTarget.value = "";
                    }}
                />
                <div className="main-text">Choose Image</div>
                <div className="gallery">
                    {imgList.map((img, idx) => (
                        <div className="img-item" key={img + idx}>
                            <img src={img} alt=""></img>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
