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


const DarkMode = {
  color: 'white',
  bgColor: 'black',
  containerColor: 'black'
}

function App() {
  // const [work, setWork] = useState(false);

  const [company, setCompany] = useState("더존");
  return (
    <div className='App'>
    
  
      {/* <View>
     
     <Hello name="props로 가져오기" color="red"></Hello>
     <Hello name="{props}로 가져오기" color="red"></Hello>
     
     
     <Hello color="yellowgreen" important={true}></Hello>
     
     
    </View>  */}

      {/* 부모 - 자식 데이터 전달 */}
      {/* <Parent>
       <Child></Child>
     </Parent> */}

      {/* <Usestate1 /> */}
      {/* <Usestate2 /> */}
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
      
      <UseContext1.Provider value={{company, setCompany}}>
        <News></News>
      </UseContext1.Provider>

    </div>
  );
}
export default App;