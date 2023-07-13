import React, {Component} from "react";
import {Ex1, Ex2, Ex3, Ex4, Ex5, Ex6, Ex7} from "./step1/Explanation";
import {Counter1, Counter2} from "./step2/Counter";
import {MyFnComponent,MyFnComponent2,MyFnComponent3,MyFnComponent4,MyFnComponent5,MyFnComponent6,MyClassComponent7,MyClassComponent8} from "./step2/MyComponent";
import EventPracticeClassComponent1 from "./step3/EventPracticeClassComponent1"
import EventPracticeClassComponent2 from "./step3/EventPracticeClassComponent2";
import EventPracticeFnComponent1 from "./step3/EventPracticeFnComponent1";
import EventPracticeFnComponent2 from "./step3/EventPracticeFnComponent2";
import {NotUseRef, UseRef, UseRef2, UseRef3} from "./step4/ref"
import ScrollBox from "./step4/ScrollBox.js"
import IterationSample from "./step5/IterationSample";
import DynamicIteration from "./step5/DynamicIteration";

/*function AppFunction() {
    return (
        <div>
            <Ex1/><Ex2/><Ex3/><Ex4/><Ex5/><Ex6/><Ex7/>
            <Counter1/><Counter2/>
            <MyFnComponent name={"컴포넌트 prop활용"} age={"10"}/>
            <MyFnComponent2 name={"컴포넌트 children 활용법"}>컴포넌트2</MyFnComponent2>
            <MyFnComponent3 name={"비구조화 할당 사용하기"}>컴포넌트3</MyFnComponent3>
            <MyFnComponent4 name={"비구조화 할당 파라미터 사용하기"}>컴포넌트4</MyFnComponent4>
            <MyFnComponent5 name={"propTypes를 통한 props검증하기"}>컴포넌트5</MyFnComponent5>
            <MyFnComponent6 name={"isRequired를 사용하여 필수 props지정"}>컴포넌트6</MyFnComponent6>
            <MyClassComponent7 name={"클래스형 컴포넌트에서 props 사용하기"}>컴포넌트7</MyClassComponent7>
            <MyClassComponent8>컴포넌트8</MyClassComponent8>
            <EventPracticeClassComponent1/><EventPracticeClassComponent2/>
            <EventPracticeFnComponent1/><EventPracticeFnComponent2/>
            <NotUseRef/><UseRef/><UseRef2/><UseRef3 ref={(ref) => {
            this.useRef3 = ref
        }}/>
        </div>
    )
}*/

class AppClass extends Component {
    componentRef = (e) => {
        this.useRef3.handleClick()
    }

    render() {
        const btnStyle = {
            margin: '0 auto',
            textAlign: 'center'
        }
        return (
            <div>
                {/*<Ex1/><Ex2/><Ex3/><Ex4/><Ex5/><Ex6/><Ex7/>
                <Counter1/><Counter2/>
                <MyFnComponent name={"컴포넌트 prop활용"} age={"10"}/>
                <MyFnComponent2 name={"컴포넌트 children 활용법"}>컴포넌트2</MyFnComponent2>
                <MyFnComponent3 name={"비구조화 할당 사용하기"}>컴포넌트3</MyFnComponent3>
                <MyFnComponent4 name={"비구조화 할당 파라미터 사용하기"}>컴포넌트4</MyFnComponent4>
                <MyFnComponent5 name={"propTypes를 통한 props검증하기"}>컴포넌트5</MyFnComponent5>
                <MyFnComponent6 name={"isRequired를 사용하여 필수 props지정"}>컴포넌트6</MyFnComponent6>
                <MyClassComponent7 name={"클래스형 컴포넌트에서 props 사용하기"}>컴포넌트7</MyClassComponent7>
                <MyClassComponent8>컴포넌트8</MyClassComponent8>
                <EventPracticeClassComponent1/><EventPracticeClassComponent2/>
                <EventPracticeFnComponent1/><EventPracticeFnComponent2/>
                <NotUseRef/>
                <UseRef/>
                <UseRef2/>
                <UseRef3 ref={(ref) => {this.useRef3 = ref}}/>
                <button onClick={this.componentRef}>확인</button>
                <ScrollBox ref={(ref) => this.scrollBox = ref}/>*/}
                {/*<div style={btnStyle}>
                    <button onClick={() => this.scrollBox.scrollToBottom()}>스크롤 하단으로</button>*/}
                    {/* onClick 함수에 화살표 함수로 시작하지 않으면 초기 렌더링 시 scrollToBottom 함수는 undefined 이기 때문에 에러남~~ */}
                {/*</div>*/}
                {/*<IterationSample/>*/}
                <DynamicIteration/>
            </div>
        )
    }
}

export default AppClass;
