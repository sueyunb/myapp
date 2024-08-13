import styled from "@emotion/styled";
import { useEffect, useCallback, useState } from "react";



function Javascript() {
    const myFunc = useCallback(() => {
        // const name = '배수연'; (문자/string)
        // let age = 14; (숫자/number)
        // age = 29;
        // console.log("함수 실행됨", age, name)

        // Object
        //     const user = {
        //         name: '배수연', 
        //         age: 14,
        //     };
        //     console.log("함수 실행됨", user.name)

        // 배열
        //     const userArr = [
        //         {
        //             name: '배수연',
        //             age: 14,
        //             isStudent: true,
        //             isHandsome: false,
        //         },
        //         {
        //             name: '이주헌',
        //             age: 14,
        //             isStudent: true,
        //             isHandsome: false,
        //         },
        //         {
        //             name: '박민정',
        //             age: 50,
        //             isStudent: true,
        //             isHandsome: false,
        //         },
        //         {
        //             name: '전우진',
        //             age: 1000,
        //             isStudent: true,
        //             isHandsome: false,
        //         },
        //     ]
        //     console.log("함수 실행됨", userArr)

        // Null
        // = 초기값 없음 (데이터 들어오기 전)

        // undefined
        // = 정의 자체가 됮 않음

        // number -> string
        //     = console.log (age.toString(바꾸는거))

        // string -> number
        //     = console.log (Number(age))

        // Boolean(true/false - 보라색)으로 바꾸기
        //     = console.log (Boolean(바꾸는거))

        // 연산
        //  + = 덧셈
        //  - = 뺄셈
        //  * = 곱셈
        // ** = 거듭제곱 (ex. 2 ** 3 = 2의 3승)
        //  / = 나눗셈
        //  % = 나머지 (나눗셈)
        
        // 1===1 = 타입까지 같다
        // 1==1 = 생긴게 같다
        // 1!==1 = 타입은 안 같다

        // >, <, >=, <=

        // --> 쓰는 법
        // if (name === '배수연'){
        //  ----
        // }

        // if (name === '배수연'){
        //   ---
        // } else{
        //   ---
        // }



    }, [])

    useEffect (() => {
        //alert("나는 배수연이다.")
        myFunc();
    }, []);
    return <Container onClick={myFunc}>자바스크립트의 기본</Container>
}



const Container = styled.div`
    width: 100px;
    height: 100px;
    background-color: red;
    margin-top: 100px;
    padding: 100px;
`;

export default Javascript;
