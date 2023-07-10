- 이벤트 핸들링
    - 사용법은 일반 html에서 이벤트를 작성하는것과 비슷하나 주의사항이 있음
        - 주의사항
            - 이벤트 이름은 카멜케이스로 표기해야함(ex => onclick[X] onClick[O], onkeyup[X] onKeyUp[O])
            - 이벤트에 실행할 js코드를 전달하는것이 아니라 함수 형태의 값을 전달함
            - DOM 요소에만 이벤트 설정 가능(div, button, input 등), 자제척으로 만든 컴포넌트에는 설정 불가능 props로 전달받은 이벤트를 설정하는건 가능
                - ```
                    <MyComponent onClick={doSomething}/>  
                        ↓
                    <div onClick={this.props.onClick}/>
                  ```
    - 이벤트 종류
      - Clipboard, Composition, Keyboard. Focus, Form, Mouse, Selection, Touch, UI, Wheel, Media, Image, Animation ,Transition 등등등등
    
    - 리액트와 js 의 이벤트 핸들링은 크게 다르지 않음