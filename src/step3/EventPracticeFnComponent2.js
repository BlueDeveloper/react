import React,{ useState } from "react";


const EventPracticeFnComponent2 = () => {
    const [form, setForm] = useState({
        username : '', message : ''
    })

    const {username, message } = form;

    // 이부분이 좀 헷갈릴수 있음 ... 사용법이 익숙치 않아서
    const onChange = e => {
        const nextForm = {
            ...form, //기존의 form 내용을 이 자리에 복사한 뒤
            [e.target.name] : e.target.value // 원하는 값을 덮어 씌우기
        };
        setForm(nextForm);
    }

    const onClick = () =>{
        alert(`${username} :::: ${message}`)
    }

    const onKeyPress = (e) => {
        if(e.key === 'Enter'){
            onClick()
        }
    }

    return (
        <div>
            <br/>
            <h1>21. 이벤트 핸들 연습2(함수형컴포넌트)</h1>
            <input type="text" name="username" placeholder="사용자명" value={username} onChange={onChange}/><br/>
            <input type="text" name="message" placeholder="메세지" value={message} onChange={onChange} onKeyPress={onKeyPress}/><br/>
            <button onClick={onClick}>확인</button>
        </div>
    )
}

export default EventPracticeFnComponent2