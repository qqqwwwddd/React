import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import Hello from './Hello';
// import View from './View';
// import Usestate1 from './useState';
// import Usestate2 from './useState2';
// import Parent from './Parent';
// import Child from './Child';
// import UseEffect1 from './UseEffect1';
// import UseEffect2 from './UseEffect2';
import UseRef1 from './UseRef1';
import UseRef2 from './UseRef2';
import UseRef3 from './UseRef3';
import News from './News';
import {UseContext1} from './UseContext1';
import Parent from './Parent';
import UseMemo1 from './UseMemo1';
import UseMemo2 from './UseMemo2';
import UseCallback1 from './UseCallback1';
import UseCallback2 from './UseCallback2';
import Item from './Item';
import UseReducer1 from './UseReducer1';
import UseReducer2 from './UseReducer2';
import UseState1 from './UseState1';
import Storage from './Storage';


function App() {
  // const [work, setWork] = useState(false);
  const [mode, setMode] = useState(true);
  const [company, setCompany] = useState("더존");
  return (
    <div className='App'
      // style= {{
      //   color : mode? "black" : "white",
      //   background : mode? "pink" : "black",  
      //   width: '100vw',
      //   height: '100vh'
      // }}
      >
  
      {/* <View>
     
     <Hello name="props로 가져오기" color="red"></Hello>
     <Hello name="{props}로 가져오기" color="red"></Hello>
     
     
     <Hello color="yellowgreen" important={true}></Hello>
     
     
    </View>  */}

      {/* 부모 - 자식 데이터 전달 */}
      {/* <Parent>
       <Child></Child>
     </Parent> */}

     {/* <Parent></Parent> */}

      {/* <UseState1 /> */}
      {/* <UseState2 /> */}
      {/* <UseEffect1 /> */}
      {/* 조건부 랜더링 */}
      {/* && / || */}
      {/* ver1 */}
      {/* {work? <UseEffect2 />: ""} */}
      {/* = 같음 {work && <UseEffect2/>}    */}
      {/* work 버튼을 클릭 했을 때 
    --> 1) '작업중 - 콘솔보기'가 출력 되면서
        2) 작업이 실행되도록*/}

      {/* work가 false이니깐 !work로 true */}
      {/* <button onClick={() => {
      setWork(!work)
    }}>work</button> */}
      {/* useRef */}
      {/* <UseRef1></UseRef1> */}
      {/* <UseRef2></UseRef2> */}
      {/* <UseRef3></UseRef3>*/}

      {/* useContext */}
      {/* <News 
        company={company} 
        setCompany={setCompany}>
      
      </News> */}
      
      {/* <UseContext1.Provider value={{company, setCompany, mode, setMode}}>
        <News></News>
      </UseContext1.Provider> */}

      {/* UseMemo */}
      {/* <UseMemo1></UseMemo1> */}
      {/* <UseMemo2></UseMemo2> */}

      {/* <UseCallback1></UseCallback1> */}

    {/* < UseCallback2></UseCallback2> */}
      

      {/* <Item></Item> */}

      {/* <UseReducer1></UseReducer1> */}

      <UseReducer2></UseReducer2>

      {/* <Storage></Storage>  */}

    </div>
  );
}
export default App;