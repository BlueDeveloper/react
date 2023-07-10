import React, {Component} from "react";
import './refCss.css'

class NotUseRef extends Component {
    state = {className: "", passwordVal: "", tag: ""}

    setPassword = (e) => {
        if (e.target.value === "") {
            this.state.tag.className = "white"
        }
        this.setState({
            passwordVal: e.target.value,
            tag: e.target
        })
    }
    setClass = (e) => {
        if (this.state.passwordVal === "0000") {
            this.state.tag.className = "green"
        } else {
            this.state.tag.className = "red"
        }
    }

    render() {
        return (
            <div>
                <br/>
                <h1>22. ref안씀</h1>
                <input type="password" className={this.state.className} value={this.state.passwordVal}
                       onChange={this.setPassword}/>
                <button onClick={this.setClass}>확인</button>
            </div>
        )
    }
}

class UseRef extends Component {

    state = {pwdVal: ""}
    handleFocus = () => {

    }
    setClass = (e) => {
        console.log(this.pwdInp) // 직접적인 태그 자체가 콘솔에 출력
        this.pwdInp.focus();
    }

    render() {
        return (
            <div>
                <br/>
                <h1>23. ref 사용 1 - CallbackFn방식, 태그에 ref사용하여 선언</h1>
                <input type="password" ref={(ref) => this.pwdInp = ref} defaultValue={this.state.pwdVal}/>
                <button onClick={this.setClass}>확인</button>
            </div>
        )
    }
}

class UseRef2 extends Component {
    pwdInp2 = React.createRef();

    handleFocus = () => {
        console.log(this.pwdInp2) // current라는 객체가 콘솔에 출력
        this.pwdInp2.current.focus();
    }

    render() {
        return (
            <div>
                <br/>
                <h1>24. ref 사용 2 - createRef방식, 리액트 내장함수 사용</h1>
                <h3></h3>
                <input type="password" ref={this.pwdInp2}/>
                <button onClick={this.handleFocus}>확인</button>
            </div>
        )
    }
}

class UseRef3 extends Component {
    handleClick = () => {
        alert("부모 클래스형 컴포넌트 ref 작동")
    }

    render() {
        return (
            <div>
                <br/>
                <h1>25. 부모 컴포넌트에 ref사용</h1>
            </div>
        )
    }
}

export {NotUseRef, UseRef, UseRef2, UseRef3}