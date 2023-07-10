import React from "react";

function Ex1() {
    //
    //
    return (<div><br/>
            <h1>1. 컴포넌트에 여러 요소가 있다면 반드시 부모 요소로 감싸줘야 함, 그래야 Virtual DOM에서 컴포넌트의 변화를 효율적으로 감지해낼 수 있기 때문</h1>
            <h3>>>>>>요소1</h3>
            <h3>>>>>>요소2</h3>
        </div>
    )
}

function Ex2() {
    const name = 'test'
    return <div><br/><h1>2. jsx 내부에서 js를 사용시에는 {}로 감싸줌</h1><h3>>>>>> {name}</h3><h3>>>>>> h3</h3></div>
}

function Ex3() {
    const name = '리액트'
    return (
        <div><br/><h1>3. jsx는 if문을 사용하지 못함 따라서 삼항연산자를 사용해야함</h1>{(name === '리액트') ? <h3>>>>> true</h3> :
            <h3>>>>>> false</h3>} </div>
    )
}

function Ex4() {
    const name = '리액트2'
    return (
        <div>
            <br/>
            <h1>4. && 연산자를 통해 삼항연산자를 좀 더 효율적으로 작성 가능 대신 false일때는 null처럼 아무것도 표현하지 않음</h1>
            <h1>대신 0이라는 값처럼 falsy한 값들은 화면에 0이라는 값이 보임</h1>
            {(name === '리액트' && <h1>true</h1>)}
        </div>
    )
}

function Ex5() {
    const name = undefined;
    return <div><br/>
        <h1>5. 리액트 컴포넌트에서는 함수에서 undefined만 반환하여 렌더링하면 안됨 아래 코드는 에러가 남 반면 jsx내부에서 undefined를 렌더링하는것은 괜찮음</h1>
    </div>;
}

function Ex6() {
    // [인라인 스타일링]
    //
    //
    const name = '리액트'
    const style = {
        backgroundColor: 'black', color: 'aqua'
    }

    return <div className="test" style={style}>
        <br/>
        <h1>6. 리액트에서 DOM에 스타일 지정시에는 스타일 이름을 카멜표기법으로 작성해야함, class를 지정해줄 때는 className을 사용</h1>
        {name}
    </div>
}

function Ex7() {
    return (
        <div>
            <h1>7. 리액트에서는 html과 달리 꼭 태그를 닫아야 함, 만약 태그에 아무런 내용이 없다면 self-closing 을 사용</h1>
        </div>
    )
}

export {Ex1, Ex2, Ex3, Ex4, Ex5, Ex6, Ex7}
