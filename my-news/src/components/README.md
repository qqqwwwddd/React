my-image

1. useRef
2. setState 사용법
3. 컴포넌트( Image )

my-news

1. 설계
   -> 작은 component 어떻게 만들것인가
   -> 데이터 : 1) 어떤 데이터 사용할 것인가 - newsList article 2) 어디서 사용할 것인가 (리액트 : 단방향데이터흐름 -> 설정을 잘 해줘야함, 위에서부터 값을 가져올수있는방법 생각해보기 context 이용가능) - category

2. API
   API 분리
   고정된 값 -> 환경변수로 사용, 파일로 만들어서 불러와서 사용

    1. Categories 내부 자바스크립트 객체 -> JSON 문자열로 바꾸기
       (JSON Strigify , ... ) https://jsonformatter.curiousconcept.com
       categoryData.json

    2. 결과(/categoryData.json)를 비동기로 호출해서 결과를 변수에 담아서 사용  
       getCategoryData()

    3. 비동기로 만들어 준거 객체로
       axios 에서는! 값 요청 후 promise(response.data) 받음 -> JSON 형태로 자동바뀜 -> 객체로 바꿔서 사용

        fetch -> 자동으로 값을 바꿔주지 않아 JSON으로 다시 바꿔 가져와야함
        response.json() -> 값은 Promise로 나옴

    4. categories로 값 넘겨주기
       상태 유지 useState() 응답을 state에 저장
       값을 가져올때는 async await로
       => 그냥 결과값이 아니라 promise(결과값 : 결과 축적) 로 넘어오니깐 축적될때 까지 기다려야 함

    5. 값을 잘 못받아 올 수도 있으니깐 try catch 해주기
       /categoryData.json , /newsData.json ... 똑같은 코드 반복되니깐
       try catch를 함수로 만들기

https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={API key}
5007474d6a769f3b5693ca77584e9b77

3. SPA
