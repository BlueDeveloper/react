- 클래스형 컴포넌트
    - 함수형, 클래스형 컴포넌트
        - 함수형 컴포넌트
            - 클래스형보다 선언하기가 쉽고 메모리도 덜 사용함(크게 차이는 없음)
            - state와 라이프사이클 API의 사용이 불가능했으나 리액트 16.8업데이트 이후 Hooks기능으로 인해 해결됨.(비슷하게 동작)
        - 클래스 컴포넌트
            - state 기능 및 라이프사이클 기능을 사용할 수 있다는것과 임의 메서드를 정의할 수 있다.
            - 내부에 render 함수가 꼭 있어야하고 그안에서 보여주려는 jsx를 반환해야함
    - arrow function 의 활용도
        - 화살표함수(arrow function)는 주로 함수를 파라미터로 전달할 떄 유용함
        - 일반함수(function (){})의 this는 자신이 종속된 객체를 this로 가리키고
        - 화살표 함수는 자신이 종속된 인스턴스를 가리킵니다.
        - ```
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
          ```
        - ```
          function WhiteDog() {
               this.name = "흰둥이";
                 return {
                   name: "검둥이",
                   bark: function () {
                      console.log(`${this.name} 멍멍`); //자신이 종속된 인스턴스(WhiteDog())의 name을 가리킴
                }
             }
          }
          new WhiteDog().bark();
          ```
    - 모듈 내보내기
        - 한개 내보내기
            - export default MyFnComponent;
        - 여러개 내보내기
            - export {MyFnComponent,MyFnComponent2, ...}
    - 모듈 불러오기
        - 항상 모듈명은 대문자로 시작해야함
        - 한개 불러오기
            - import MyFnComponent from "./MyFnComponent";
        - 여러개 불러오기
            - import {MyFnComponent, MyFnComponent2, ...} from "./MyComponent";

- props
    - 컴포넌트 함수의 파라미터로 값을 받아와서 사용하는 방식
    - 컴포넌트 사용시 props값 지정
    - 기본값 설정: defaultProps
    - 태그 사이의 내용 보여주기: children
    - 비구조화할당문법
        - 파라미터로 전달하기
    - propsType를 통한 props검증
        - isRequired를 통한 필수 propsTypes 설정
        - PropTypes 종류
            - array : 배열, func : 함수, number : 숫자, object : 객체, string : 문자열, symbol : ES6의 symbol
            - arrayOf(다른 PropType) : 특정 PropType으로 이루어진 배열을 의미 예를들어 arrayOf(PropTypes.number)는 숫자로 이루어진 배열
            - node : 렌더링 할 수 있는 모든 것(숫자, 문자열 혹은 JSX코드, children도 node PropType임)
            - instanceOf(클래스) : 특정 클래스의 인스턴스(예: instanceOf(MyClass))
            - oneOf(['dog','cat']) : 주어진 배열 요소중 하나
            - oneOfType([React.PropTypes.string, PropTypes.number]) : 주어진 배열 안의 종류 중 하나
            - objectOf(React.PropTypes.number) : 객제의 모든 키 값이 인자로 주어진 propType인 객체
            - shape({name: PropTypes.string, num: PropTypes.number}) : 주어진 스키마를 가진 객체
            - any : 아무종류

    - 클래스형 컴포넌트에서 props 사용하기
        - 클래스형 컴포넌트 내부에서 PropsType와 defaultProps 사용하기
- state
    - 부모가 지정해주면 값을 바꾸는게 번거로운 props와 다르게 컴포넌트 내부에서 값을 자유롭게 업데이트 가능한 요소
        - class 컴포넌트에서는 constructor함수를 활용해서 this.state에 **객체값**을 주어 초기화 시키고 노드에 이벤트를 바인딩하면서 핸들링한다.
            - html노드에 이벤트 바인딩 시에는 꼭 arrow를 사용한다.
            - constructor를 작성할 때는 반드시 super(props)를 호출해서 현재 클래스형 컴포넌트가 상속받고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출해 줌
    - fn 컴포넌트에서는 useState함수를 활용하여 state에 초기값과 세터함수를 지정해준다.
        - useState를 호출하면 배열이 반환되는데 배열의 첫번째 원소는 현재 상태이고
        - 두번째 원소는 상태를 바꾸어 주는 함수이다 이 함수를 세터 함수라고 부르며 이름은 자유롭게 지정할 수 있다.
        - 배열 비구조화는 객체 비구조화와 비슷한 개념이다. 아래코드를 보면 이해가 간다.
            - ```
              const array = [1,2];
              const one = array[0];
              const two = array[1];
                ```
              위와같은 코드를
            - ```
              const array = [1,2];
              const [one, two] = array;
              ```
              이렇게 간결하게 만들어주는 효자 기능이다.
  