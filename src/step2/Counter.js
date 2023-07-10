import React, {Component} from "react";

// [state]
/*state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미함
* props는 부모 컴포넌트가 값을 정해주면 자식컴포넌트는 해당 값을 읽기 전용으로만 사용해야 하지만
* state는 내부에서 변경 가능함*/

/* state는 두가지 종류가 있음
* 하나는 클래스형 컴포넌트가 지니는 state
* 다른 하나는 함수컴포넌트에서 useState라는 함수를 통해 사용하는 state*/


class Counter1 extends Component {
    // 컴포넌트의 생성자 메서드
    // 클래스형 컴포넌트에서 constructor를 작성할 때는 반드시 super(props)를 호출해 주어야 함 이 함수가 호출되면 현재 클래스형
    // 컴포넌트가 상속받고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출해 줌
    constructor(props) {
        super(props);
        // state의 초기값 설정하기
        this.state = {number: 0, noChangeNumber: 0} // 컴포넌트의 state는 객체 형식이여야 함
    }

    render() {
        const {number, noChangeNumber} = this.state; // 생성자로 생성된 state는 this.state로 조회함
        return (
            <div>
                <br/>
                <h1>8. 카운터 만들기</h1>
                <h3>{number}</h3>
                <h3>바뀌지 않는 값{noChangeNumber}</h3>
                <button onClick={() => {
                    this.setState({number: number + 1})
                }}>+1
                </button>
            </div>)
        // 리액트에서 노드에 이벤트 바인딩 시 arrow 문법을 사용해야 함
    }
}


class Counter2 extends Component {
    // state의 초기값을 지정하는 다른 방식
    state = {number: 0, noChangeNumber: 0}

    render() {
        const {number, noChangeNumber} = this.state; // 생성자로 생성된 state는 this.state로 조회함
        return (
            <div><br/>
                <h1>9. 카운터 만들기2</h1>
                <h3>{number}</h3>
                <h3>바뀌지 않는 값{noChangeNumber}</h3>
                <button onClick={() => {
                    this.setState(prevState => {return {number : prevState.number + 1}})

                    // 함수에서 값을 바로 반환하는 방법은 코드블록을 생략하면 됨
                    this.setState(prevState => ({number: prevState.number + 1}))

                    // setState가 끝난뒤 작업을 실행하는 방법
                    this.setState({number: number + 1}, () => {console.log("방금 setState 실행됨.")})
                }}>+1
                </button>
            </div>)
        // 리액트에서 노드에 이벤트 바인딩 시 arrow 문법을 사용해야 함
        // this.setState를 사용하여 state값을 업데이트할 때는 상태가 비동기적으로 업데이트 됨.
    }
}

// export default Counter1; // 한개 내보내기
export {Counter1, Counter2} // 여러개 내보내기