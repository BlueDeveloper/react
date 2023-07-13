import React, {useState} from "react";


const DynamicIteration = () => {
    const [names, setNames] = useState([
        {id: 1, text: '눈사람'},
        {id: 2, text: '얼음'},
        {id: 3, text: '눈'},
        {id: 4, text: '바람'},
    ])

    const [inputText, setInputText] = useState('')
    const [nextId, setNextId] = useState(5)


    const onClickLiH = (id) => {
        const removeNames = names.filter(name=> name.id !== id)
        console.log(removeNames)
        setNames(removeNames)
    }

    const onChangeInputH = (e) => setInputText(e.target.value);
    const onClickButtonH = (e) => {
        const nextNames = names.concat({id : nextId, text:inputText}) // 기존 배열에 새로운 배열을 합쳐서 반환 --> push는 합쳐진 배열의 길이를 반환하기에 적절하지 않은듯 하다 실행하면 에러남 ㅠ
        setNextId(nextId +1)
        setNames(nextNames)
        setInputText('')
    }

    const nameList = names.map((name, idx) => {
        return <li  key={name.id} onClick={() => onClickLiH(name.id)}>{name.text}</li>
    })

    return (<>
            <ul>{nameList}</ul>
            <input type="text" value={inputText} onChange={onChangeInputH}/>
            <button onClick={onClickButtonH}>추가</button>
        </>
    )

}

export default DynamicIteration;