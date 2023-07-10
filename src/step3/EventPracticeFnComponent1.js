import React, {useState} from "react";

const EventPracticeFnComponent1 = () => {
    const [username, setUsername] = useState('')
    const [message, setMessage] = useState('')

    const onChange = (e) => {
        let targetName = e.target.name;
        (targetName === "username") ? setUsername(e.target.value) : setMessage(e.target.value)
    }

    const onClick = (e) => {
        alert(`${username} : ${message}`)
        setUsername('')
        setMessage('')
    }

    return (
        <div>
            <br/>
            <h1>20. 이벤트 핸들 연습1(함수형컴포넌트)</h1>
            <input type="text" name="username" placeholder="사용자명" value={username} onChange={onChange}/><br/>
            <input type="text" name="message" placeholder="메세지" value={message} onChange={onChange}/><br/>
            <button onClick={onClick}>확인</button>
        </div>
    )
}

export default EventPracticeFnComponent1