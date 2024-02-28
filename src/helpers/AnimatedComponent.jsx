import React from 'react'
import { CSSTransition } from 'react-transition-group'
import '../../src/index.css'

const AnimatedComponent = ({ children, inProp, onAnimationComplete }) => {

    return (
        <CSSTransition
            in={inProp}
            timeout={500}
            classNames="fade-transition"
            unmountOnExit
            onExited={onAnimationComplete}
        >
            <div>{React.Children.map(children, (child) => (
                <div className={`fade-transition ${!inProp ? 'fade-transition-exit-active' : ''}`}>
                    {child}
                </div>
            ))}</div>
        </CSSTransition>
    )
}


export default AnimatedComponent
