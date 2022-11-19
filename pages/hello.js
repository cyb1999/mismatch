// jsx代码
import React, { Component } from "react";
import { CSSTransition } from 'react-transition-group'

export default class CSSTransitionDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
    }

    render() {
        const { isShow } = this.state;
        return (
            <div className="simpleTransition">
                <button onClick={() => this.setState({ isShow: !isShow })}>
                    当前状态：{isShow ? '显示' : '隐藏'}</button>
                <CSSTransition
                    classNames="box"
                    timeout={{
                        appear: 500,
                        enter: 300,
                        exit: 500,
                    }}
                    unmountOnExit={true}>
                    <div className="helloBox">
                        hello
                    </div>
                </CSSTransition>
                <style jsx>
                    {`
            // css代码
.box-enter {
  opacity: 0;
  transform: translateX(100px);
}

.box-enter-active {
  opacity: 1;
  transform: scale(1);
  transition: all 1000ms;
}

.box-exit {
  opacity: 1;
  transform: scale(1);
}

.box-exit-active {
  opacity: 0;
  transform: translateX(100px);
  transition: all 1000ms
}`}
                </style>
            </div>)
    }
}

