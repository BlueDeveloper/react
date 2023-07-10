import PropTypes from "prop-types"; //props 타입 지정
import React, {Component} from "react";

// 함수 컴포넌트
// [컴포넌트 사용시 props값 지정]
const MyFnComponent = (props) => {
    return <div>
            <br/>
            <h1>10. 컴포넌트 사용시 props 값 지정</h1>
            <h3>안녕하세요, 저는 {props.name}입니다. 나이는 {props.age}살 입니다.</h3>
    </div>;
}
// [기본값 설정]
MyFnComponent.defaultProps = {
    name: "컴포넌트1",
    age: "10"
}

const MyFnComponent2 = (props) => {
    return <div>
        <br/>
        <h1>11. 태그 사이의 내용 보여주기: children</h1>
        <h3>안녕하세요 저는 {props.name}입니다. children 값(호출하는 부모컴포넌트의 태그사이의 문자열)은 {props.children}입니다.</h3></div>;
}

const MyFnComponent3 = (props) => {
    const {name, children} = props; // 비구조화 할당 방법, 구조분해문법이라고도 불림, 함수의 파라미터 부분에서도 사용가능, 만약 함수의 파라미터가 객체라면 그 값을 바로 구조화해서 사용
    return <div>
        <br/>
        <h1>12. 객체 비구조화할당문법</h1>
        <h3>안녕하세요 저는 {name} 입니다. children값은 {children}입니다.</h3></div>
}

const MyFnComponent4 = ({name, children}) => {
    return <div>
        <br/>
        <h1>13. 객체 비구조화할당 파라미터로 전달하기</h1>
        <h3>안녕하세요 저는 {name} 입니다. children값은 {children}입니다.</h3>
    </div>
}

const MyFnComponent5 = ({name, children}) => {
    return <div>
        <br/>
        <h1>14. propsType를 통한 props검증</h1>
        <h3>안녕하세요 저는 {name} 입니다. children값은 {children}입니다.</h3></div>
}

MyFnComponent5.propsTypes = {
    // 이렇게 설정하면 MyFnComponent5에 prop을 전달할 때, name과 children은 문자열이여야함
    name: PropTypes.string,
    children: PropTypes.string
}

const MyFnComponent6 = ({name, children}) => {
    return <div>
        <br/>
        <h1>15. isRequired를 사용하여 필수 props지정</h1>
        <h3>안녕하세요 저는 {name} 입니다. children값은 {children}입니다.</h3></div>
}
MyFnComponent6.propsTypes = {
    // name값이 없을 시 console창에 에러가 남
    name: PropTypes.string.isRequired
}

class MyClassComponent7 extends Component {
    render() {
        const {name, children} = this.props;
        return <div>
            <br/>
            <h1>16. 클래스형 컴포넌트에서 props 사용하기</h1>
            <h3>안녕하세요 저는 {name} 입니다. children값은 {children}입니다.</h3>
        </div>
    }
}




// []
class MyClassComponent8 extends Component {
    static defaultProps = {name: '클래스형 컴포넌트 내부에서 defaultProps와 propsTypes를 설정하는 방법'}
    static propsTypes = {name: PropTypes.string, children: PropTypes.string}

    render() {
        const {name, children} = this.props;
        return <div>
            <br/>
            <h1>17. 클래스형 컴포넌트 내부에서 PropsType와 defaultProps 사용하기</h1>
            <h3>안녕하세요 저는 {name} 입니다. children값은 {children}입니다.</h3></div>
    }
}


// export default MyFnComponent; // 한개 내보내기
export {
    MyFnComponent,
    MyFnComponent2,
    MyFnComponent3,
    MyFnComponent4,
    MyFnComponent5,
    MyFnComponent6,
    MyClassComponent7,
    MyClassComponent8
} // 여러개 내보내기

// [arrow function 의 활용도]
// 화살표함수(arrow function)는 주로 함수를 파라미터로 전달할 떄 유용함
// 또한 일반함수(function (){})의 this는 자신이 종속된 객체를 this로 가리키고
// 화살표 함수는 자신이 종속된 인스턴스를 가리킵니다.
function BlackDog() {
    this.name = "흰둥이";
    return {
        name: "검둥이",
        bark: function () {
            console.log(`${this.name} 멍멍`); // 자신이 종속된 객체(bark)의 name을 가리킴
        }
    }
}

new BlackDog().bark();

function WhiteDog() {
    this.name = "흰둥이";
    return {
        name: "검둥이",
        bark: () => {
            console.log(`${this.name} 멍멍`); // 자신이 종속된 인스턴스(WhiteDog())의 name을 가리킴
        }
    }
}

new WhiteDog().bark();