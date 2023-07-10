import React, {Component} from "react";
import EventPracticeClassComponent2 from "./EventPracticeClassComponent2"; // 클래스형 컴포넌트


// 임의메서드 만들기(정석, 쉽게)
// 이벤트 등록하기
class EventPracticeClassComponent1 extends Component {
    state = {message : ''}
    /*constructor(props) {
        super(props);
        // 임의메서드가 이벤트에 등록되면 메소드와 this의 관계가 끊어지기때문에 bind()함수를 통해 관계유지
        // 임의메서드 이름은 자유롭게 작성, 그러나 규칙이 있으면 모두가 햅삐
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }*/

    // constructor 를 사용하면 너무 불편하기 때문에 babel 의 transform-class-properties 로 간결하게 작성하겠음
    handleChange = (e) => {
        console.log(e)
        // 전달되는 e 라는 이름의 인자값은 SyntheticEvent 로 웹 브라우저의 네이티브 이벤트를 감싸는 객체임
        // SyntheticEvent 는 이벤트가 끝나고나면 정보참조를 못하게끔 객체 내부의 값이 전부 비워져있음
        // 만약 비동기적으로 e객체를 참조하려면 e.persist() 함수를 호출해줘야함
    }

    handleChange2 = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    handleClick = (e) => {
        alert(this.state.message)
        this.setState({message: ''})
    }


    render() {
        return (<div>
            <br/>
            <h1>18. 이벤트 핸들 연습1(클래스컴포넌트)</h1>
            <input type="text" name="message" placeholder="콘솔에 e 객체 찍기" onChange={this.handleChange}/><br/><br/>
            <input type="text" name="message" placeholder="입력 후 확인버튼 클릭" value={this.state.message}
                   onChange={this.handleChange2}/>
            <button onClick={this.handleClick}>확인</button>
        </div>)
    }
}

export default EventPracticeClassComponent1