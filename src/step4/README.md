- ref
  - 기존 html에서 dom요소에 이름을 다는 것을 react에서는 ref라는 것을 사용하여 같은 효과를 적용함
  - ref를 사용하지 않고 jsx안에서 id를 달고 렌더링 가능하지만 중복될 여지가 있기 때문에 추천하지 않음
  - ref는 전역으로 작동하지 않고 컴포넌트 내부에서만 작동함
  - ref는 DOM을 꼭 직접적으로 건드려야 할 때 사용함(포커스, 스크롤박스 조작, Canvas 요소에 그림 그리기)
  - ref는 컴포넌트끼리 교류에 사용할 수 있다 하지만 이는 리액트 사상에 어긋난것이며 앱 규모가 커지면 컴포넌트 유지보수가 불가능하다
  - 추루 리덕스를 이용한 효율적인 교류를 할 수 있으니 ref사용은 최소화할것을 고려한다.