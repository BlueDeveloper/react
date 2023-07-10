import React, {Component} from "react";

class ScrollBox extends Component{

    scrollToBottom = (e) => {
        // 비구조화 할당 문법
        const { scrollHeight, clientHeight} = this.box
        this.box.scrollTop = scrollHeight - clientHeight
    }

    render() {
        const h1Style= {textAlign : 'center',}
        const style = { border : '1px solid black', height : '300px', width : '300px', overflow : 'auto', position : 'relative', margin : '0 auto' }
        const innerStyle = { width : '100%', height : '650px', background : 'linear-gradient(white, black)'}

        return(
            <div>
                <br/>
                <h1 style={h1Style}>26. 스크롤박스</h1>
                <div style={style} ref={(ref) => this.box = ref}>
                    <div style={innerStyle}></div>
                </div>
            </div>
        )
    }
}

export default ScrollBox