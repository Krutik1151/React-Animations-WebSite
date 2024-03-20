import React from 'react'
import { useSpring, animated } from 'react-spring'
import "../../Assets/Style/CounterComponent.css"

const CounterComponent = () => {
    const Number = (n) => {
        const { num } = useSpring({
            from: { num: 0 },
            num: n,
            delay: 200,
            config: { mass: 1, tension: 20, friction: 10 }

        })
        return <animated.div>{num.to((n) => n.toFixed(0))}</animated.div>
    }
    return (
        <>
            <div className="counter-section-color">
                <div className="container">
                    <div className="main-container">
                        <div className="counter-box animate__animated animate__fadeInLeft  animate__slow">
                            <div className="counter">
                                <h1>{Number(99)}</h1>
                            </div>
                            <div className="counter-info ">
                                <h3>Success in getting happy customer</h3>
                            </div>
                        </div>
                        <div className="counter-box animate__animated animate__fadeInLeft  animate__slow">
                            <div className="counter">
                                <h1>{Number(25)}</h1>
                            </div>
                            <div className="counter-info">
                                <h3> Thousands of successful business</h3>
                            </div>
                        </div>
                        <div className="counter-box animate__animated animate__fadeInLeft  animate__slow">
                            <div className="counter">
                                <h1>{Number(120)}</h1>
                            </div>
                            <div className="counter-info">
                                <h3>Total clients who love HighTech</h3>
                            </div>
                        </div>
                        <div className="counter-box animate__animated animate__fadeInLeft  animate__slow">
                            <div className="counter">
                                <h1>{Number(5)}</h1>
                            </div>
                            <div className="counter-info">
                                <h3>Stars reviews given by satisfied clients</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CounterComponent
