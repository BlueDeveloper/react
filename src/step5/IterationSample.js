import React from "react";

const IterationSample = () => {
    const names = ['눈사람', '얼음', '눈', '바람']
    const nameList = names.map((name, idx) => {
        return <li key={idx}>{name}</li>
    })
    return (<ul>{nameList}</ul>)
}

export default IterationSample

// map 함수 사용법
const numbers = [1, 2, 3, 4, 5]
const processed = numbers.map((number) => {
    return number * number;
})
console.log(processed)