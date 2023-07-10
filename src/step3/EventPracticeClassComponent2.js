import React, {Component} from "react";

// 임의메서드 1개로 input 여러개 다루기
class EventPracticeClassComponent2 extends Component {
    state = {
        message: '',
        userName: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value // 이벤트가 발생한 node의 name값을 key로 만들고 node에 입력된 값을 value로 만들어 key : value 객체 생성
        })
    }

    handleClick = (e) => {
        alert(`${this.state.userName}: ${this.state.message}`)
        this.setState({
            userName: '',
            message: ''
        })
    }

    // 엔터키로 확인버튼 누르기
    handleKeyPress = (e) => {
        if(e.key === "Enter"){
            this.handleClick()
        }
    }

    render() {
        return <div>
            <br/>
            <h1>19. 이벤트 핸들 연습2(클래스컴포넌트)</h1>
            <input type="text" name="userName" placeholder='사용자명' value={this.state.userName}
                   onChange={this.handleChange}/><br/>
            <input type="text" name="message" placeholder='아무거나 입력' value={this.state.message}
                   onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
            <button onClick={this.handleClick}>확인</button>
        </div>
    }
}

export default EventPracticeClassComponent2